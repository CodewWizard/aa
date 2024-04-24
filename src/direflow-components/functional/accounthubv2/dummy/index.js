import { callAPI } from "../../utilities/helpers/shared";
import { GETACCOUNTHUB, GETACCOUNTHUB2 } from "./query"

/**Method to pull list of applicable policies for account hub
 * @param {boolean} initialLoad - boolean flag to load all the records on initial page load
 * @param {{advanceFilter}} accounthubModel - object to hold advance filter selection
 * @returns {[policies]} - list of applicable policies
 */
export const LoadAccountHub = async (page, sizePerPage, totalSize, continuationToken) => {
    try {
        let input = {
            input: {
                clause: [{ src: "1", def: "1", exp: "=", operator: "" },],
                containerName: "policy",
                page,
                maxItemCount: sizePerPage,
                totalSize,
                client: 'IH',
                continuationToken
            },
        };

        const gqlpayload = JSON.stringify({
            operationName: "GetByPagination",
            query: GETACCOUNTHUB,
            variables: input
        });

        const resp = await callAPI("http://localhost:7071/api/policygraphql", "POST", gqlpayload, {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImloLndpbGxpYW0iLCJVc2VySWQiOiIxMjkwNyIsIkZpcnN0TmFtZSI6IklIIiwiTGFzdE5hbWUiOiJ3aWxsaWFtIiwiZW1haWwiOiJzZGV2YWRpZ2FAY29naXRhdGUudXMiLCJyb2xlIjoiQWdlbnQsY292ZXJob2xkZXIiLCJGZWF0dXJlcyI6IlF1b3RlIiwiU2l0ZUlkIjoiNTYiLCJQcm9kdWN0cyI6IiIsIm5iZiI6MTcwODU5OTU0NCwiZXhwIjoxNzA4NjEwMzQ0LCJpYXQiOjE3MDg1OTk1NDR9.OoJmMPrMhL92DhpR6Oil8ZduDFNaOBT86Q6HFHr0Seg`,
            'Content-Type': 'application/json'
        });

        let data = [];
        if (resp) data = ProcessAccountHubData(resp.data["getByPagination"].policy);
        return { data: data || [], totalCnt: resp.data["getByPagination"].totalSize };
    } catch (error) {
        debugger
        console.log({ error });
    }
};
export const LoadAccountHub2 = async (initialLoad = false, accounthubModel) => {
    try {
        let input = {
            input: {
                clause: [
                    { src: "1", def: "1", exp: "=", operator: "" },
                ],
                containerName: "policy"
            },
        };
        if (!initialLoad) {
            const dbKeys = {
                policystatus: "r.PolicyStatus",
                agentid: "r.Agent.Code",
                agentname: "r.Agent.Name",
                agencyname: "r.Agency.Name",
                underwriterid: "r.UnderWriter.Name",
                fromdate: "r.EffectiveDate",
                todate: "r.EffectiveDate",
                transactiondate: "r.Transaction.Date",
                quoteNumber: "r.QuoteNumber",
                policynumber: "r.PolicyNumber",
                insuredname: "r.InsuredAccount.DisplayName",
                propertyaddress: "r.Risks.Properties.0.Address.UnFormattedAddress",
                state: "r.Attributes.State",
                quoteversion: "r.QuoteVersion",
                lob: "r.Attributes.FormType",
            };
            for (const key in accounthubModel) {

                if (accounthubModel[key]?.length > 0) {
                    let expression = "";
                    if (key == "fromdate") expression = ">=";
                    else if (key == "todate") expression = "<=";
                    else if (["agentid", "underwriterid", "lob", "insuredname", "agencyname", "state", "policynumber", "quoteNumber"].includes(key)) expression = "LIKE";
                    else expression = "=";
                    if (["agentid", "underwriterid", "lob", "state", "policynumber", "quoteNumber"].includes(key)) {
                        input.input.clause.push({
                            src: `UPPER(${dbKeys[key]})`,
                            def: "'%" + accounthubModel[key].toUpperCase() + "%'",
                            exp: expression,
                            operator: "AND",
                        });
                    } else if (["insuredname", "agencyname"].includes(key)) {
                        input.input.clause.push({
                            src: `UPPER(${dbKeys[key]})`,
                            def: "'%" + accounthubModel[key].toUpperCase().replace(/'/g, "\\\'") + "%'",
                            exp: expression,
                            operator: "AND",
                        });
                    } else if (["policystatus"].includes(key)) {
                        if (accounthubModel[key] != "All") {
                            input.input.clause.push({
                                src: dbKeys[key],
                                def: "'" + accounthubModel[key] + "'",
                                exp: expression,
                                operator: "AND",
                            });
                        }
                    } else {
                        input.input.clause.push({
                            src: dbKeys[key],
                            def: "'" + accounthubModel[key] + "'",
                            exp: expression,
                            operator: "AND",
                        });
                    }
                }
            }
        }
        input.input.clause.push({
            src: "r.Attributes.Client",
            def: "'IH' ORDER BY r.Audit.LastUpdatedOn DESC",
            exp: "=",
            operator: "AND",
        });
        const gqlpayload = JSON.stringify({
            operationName: "GetByFilter",
            query: GETACCOUNTHUB2,
            variables: input
        });

        const resp = await callAPI("http://localhost:7071/api/policygraphql", "POST", gqlpayload, {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImloLndpbGxpYW0iLCJVc2VySWQiOiIxMjkwNyIsIkZpcnN0TmFtZSI6IklIIiwiTGFzdE5hbWUiOiJ3aWxsaWFtIiwiZW1haWwiOiJzZGV2YWRpZ2FAY29naXRhdGUudXMiLCJyb2xlIjoiQWdlbnQsY292ZXJob2xkZXIiLCJGZWF0dXJlcyI6IlF1b3RlIiwiU2l0ZUlkIjoiNTYiLCJQcm9kdWN0cyI6IiIsIm5iZiI6MTcwODYxMDQyNywiZXhwIjoxNzA4NjIxMjI3LCJpYXQiOjE3MDg2MTA0Mjd9.qCeU3HV3l48ivYIV_SrTbHLwIQnyshi2ZIce_S-tcVw`,
            'Content-Type': 'application/json'
        });

        let data = [];
        if (resp) data = ProcessAccountHubData(resp.data["getByFilter"]);
        return data != null || data != undefined ? data : null;
    } catch (error) {
        // logAPIErrorData(error, { initialLoad, accounthubModel }, consoleLogs.Utilities.Apollo.Operations.LoadAccountHub);
    }
};

/**Method to transform the list of policies into dashboard specific objects
* @param {[policies]} resp - list of polcies
* @param {boolean} IsRenew - flag to tag whether the process records is for renewals or account hub
* @returns {[transformedPolicies]} - list of transformed policies
*/
export const ProcessAccountHubData = (resp, IsRenew = false) => {
    try {
        if (resp?.length > 0) {
            let data = resp.map((m) => {
                const pga = m?.Risks?.Properties?.find((f) => f.UnitNumber == "1");
                const dispAddress = pga?.Address?.UnFormattedAddress || (pga?.Address?.AddressLine1 + ', ' + pga?.Address?.City + ', ' + pga?.Address?.State + ', ' + pga?.Address?.CountyCode + ', ' + pga?.Address?.Zip);

                return {
                    Agent: m.Agent?.Name,
                    BusinessName: m.InsuredAccount?.BusinessInfo?.BusinessName,
                    InsuredName: m.InsuredAccount?.DisplayName,
                    EffectiveDate: m.EffectiveDate,
                    ExpirationDate: m.ExpirationDate,
                    IsQuoteNumber: m.PolicyNumber.length <= 0,
                    IsRenew: IsRenew,
                    LastUpdatedDate: m.Audit?.LastUpdatedOn == null ? m.Audit?.CreatedOn : m.Audit?.LastUpdatedOn,
                    Location: dispAddress,
                    PolicyNumber: m.PolicyNumber != "" ? m.PolicyNumber : m.QuoteNumber || "",
                    QuoteNumber: m.QuoteNumber != "" ? m.QuoteNumber : "",
                    Status: m.PolicyStatus,
                    TransactionDate: m.Transaction?.Date,
                    Underwriter: m?.UnderWriter?.Name,
                    IsMaster: m.Attributes?.IsMasterPolicy,
                    ExternalRefrences: m.ExternalRefrences,
                    LOB: m.Attributes?.Lob,
                    Premium: m.TotalPremium?.AnnualPremium
                };
            });
            data.sort((a, b) => {
                if (new Date(a.LastUpdatedDate) > new Date(b.LastUpdatedDate)) return -1;
                else return 1;
            });
            return data;
        } else return [];
    } catch (error) {
        console.log(error)
    }
};
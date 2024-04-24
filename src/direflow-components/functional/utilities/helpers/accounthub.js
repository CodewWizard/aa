import { callAPI } from "../../utilities/helpers/shared";

export const LoadNextPage = async (page, maxItemCount, maxSize, totalSize, base, query, ProcessAccountHubData) => {
    try {
        let input = {
            input: {
                containerName: "policy",
                page,
                maxItemCount,
                totalSize,
                maxSize,
                client: base.client
            },
        };

        const gqlpayload = JSON.stringify({
            operationName: "GetByPagination",
            query: typeof query === "string" ? query : query.loc.source.body,
            variables: input
        });

        const resp = await callAPI(base.gqlEP, "POST", gqlpayload, {
            "Authorization": `Bearer ${base.token}`,
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
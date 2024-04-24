import axios from "axios";
import moment from "moment";
import { v4 } from "uuid";

const callAPI = async (type, url, payload, _headers = {}, _responsetype = "") => {
  try {
    const config = {
      headers: _headers,
      responseType: _responsetype,
    };
    switch (type) {
      case "POST": {
        try {
          const response = await axios.post(url, payload, config);
          return response.status === 204 ? true : response.data;
        } catch (error) {
          console.error(
            "consoleLogs.Utilities.Shared.Helpers.AxiosPost",
            error
          );
          throw error;
        }
      }
      case "GET": {
        try {
          const response = await axios.get(url, config);
          return response.data;
        } catch (error) {
          console.error("consoleLogs.Utilities.Shared.Helpers.AxiosGet", error);
          throw error;
        }
      }
    }
  } catch (error) {
    console.error("consoleLogs.Utilities.Shared.Helpers.CallAPI", error);
    throw error;
  }
};

export const getFilesListFromDMS = async (requestInput, apiBaseUrl, dmsAuthApi) => {
  try {
    let apiDynamicURL = "";
    Object.entries(requestInput).forEach((entry, index) => {
      const [key, value] = entry;
      apiDynamicURL = apiDynamicURL + key + "=" + value;
      if (key != "cloudBlobContainer") {
        apiDynamicURL = apiDynamicURL + "&";
      }
    });
    const apiURL = apiBaseUrl + apiDynamicURL;
    const apiResponse = await callAPI("GET", apiURL, null, {Authorization: dmsAuthApi}, "");
    return apiResponse;
  } catch (err) {
    console.error("consoleLogs.Utilities.Pages.Application.GetFilesListFromDMS", err);
    throw err;
  }
};

const TimeFormattingAmPm = (value) => {
  let time;
  if (value == "00:00") time = "12:01 AM";
  else {
    var newTime = value.split(":");
    var hours = newTime[0];
    var minutes = newTime[1];
    var timehours = parseInt(hours) > 12 ? (parseInt(hours) % 12).toString().padStart(2, "0") : parseInt(hours).toString().padStart(2, "0");
    var timeminutes = parseInt(minutes) > 9 ? parseInt(minutes).toString().padStart(2, "0") : parseInt(minutes).toString().padStart(2, "0");
    time = timehours + ":" + timeminutes + (parseInt(hours) < 12 ? " AM" : " PM");
  }
  return time;
};

export const uploadFilesToDMS = async (policy, filesToUpload, userID, apiBaseURL, dmsAuthApi, dmsDefaultCoverHolder, dmsApiName) => {
  try {
    let date = moment().utc(false).format("YYYY-MM-DD");
    date = moment().format("YYYY-MM-DD");

    let dtString = date.split("-");

    let timeString = TimeFormattingAmPm(moment().utc(false).format("HH:mm:ss"));
    let tempFilesArray = [...filesToUpload.UploadedFiles];

    if (tempFilesArray.length > 0) {
      const infoId = policy.PolicyNumber
        ? policy.PolicyNumber
        : policy.QuoteNumber;
      let promises = tempFilesArray.map(async (file) => {
        const metadata = {
          PolicyInfoId: infoId,
          PolicyNumber: policy.PolicyNumber,
          DocumentType: `${filesToUpload.DocumentType}_${v4()}`,
          CarrierCode: policy.Attributes.Carrier,
          CoverholderCode: policy.Attributes.Coverholder,
          Lob: policy.Attributes.Lob,
          State: policy.Attributes.State,
          TransactionCount:
            policy.Transaction.Number && policy.Transaction.Number >= 0
              ? policy.Transaction.Number?.toString()
              : "0",
          TransactionType: policy.Transaction.Type,
          TransactionDate: `${dtString[1].padStart(2, 0)}-${dtString[2].padStart(2, 0)}-${dtString[0]}, ${timeString}`,
          UserName: userID,
          Filename: `${infoId}_${policy.Transaction.Type}_${date}_${timeString}.pdf`,
          Applicationstatus: policy.PolicyStatus,
          CreatedDateTime: `${dtString[1].padStart(2, 0)}-${dtString[2].padStart(2, 0)}-${dtString[0]}, ${timeString}`,
        };

        let formData = new FormData();
        formData.append("file", file);
        formData.append("cloudblobcontainer", dmsApiName);
        formData.append("carriercode", policy.Attributes.Carrier);
        formData.append("coverholdercode", policy.Attributes.Coverholder || dmsDefaultCoverHolder);
        formData.append("lobcode", policy.Attributes.Lob);
        formData.append("statecode", policy.Attributes.State);
        formData.append("referenceNumber", infoId);
        formData.append("metadata", JSON.stringify(metadata));
        formData.append("filename", metadata.Filename);

        const apiURL = apiBaseURL;
        const apiResponse = await callAPI("POST", apiURL, formData, {"Authorization": dmsAuthApi, "content-type": "multipart/form-data"});
        return apiResponse;
      });

      return await Promise.all(promises).then((resp) => {
        return resp;
      });
    }
    return false;
  } catch (error) {
    console.error("consoleLogs.Utilities.Pages.Application.UploadFilesToDMS", error);
    throw error;
  }
};
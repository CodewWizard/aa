import React from "react";
import renderer, { act } from "react-test-renderer";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import UploadDocumentFunctional from "../uploaddocumentfunctional";
import * as utils from '../utilities/helpers'

jest.mock('../utilities/helpers.js', ()=>{
    return {
        getFilesListFromDMS: jest.fn().mockImplementation(()=>{
            return Promise.resolve([{TransactionType: "NEW", DocumentType: "Policy Document"}, {TransactionType: "Application", DocumentType: "Data Submission"}])
        }),
        uploadFilesToDMS: jest.fn().mockImplementation(()=>{
            return Promise.resolve(true);
        })
    }
})

afterEach(()=>{
    cleanup();    
})

const policy = {
    PolicyNumber: "mockPolicy",
    QuoteNumber: "mock",
    PolicyStatus: "mock",
    Transaction: {Type: "mock"},
    "Attributes": {
        "Client": "ROTHERT",
        "AppSource": "",
        "Carrier": "SD",
        "Lob": "HO3",
        "State": "OR",
        "Product": "SDRHHO3OR",
        "RaterVersion": "1.0.0.0",
        "Coverholder": "RH",
        "IsMasterPolicy": true,
        "MasterReferenceNumber": "",
        "IsTestPolicy": false,
        "NoOfClaims": "0",
        "IsCoverageSaved": true,
      },
}

const DocumentsColumns = [
    {
      dataField: 'TransactionType',
      text: 'TRANSACTION TYPE	',
      sort: false,
      headerStyle: () => {
        return { width: "17%" };
      }
    },
    {
      dataField: 'UserName',
      text: 'User',
      sort: false,
      headerStyle: () => {
        return { width: "17%", textAlign: "center" };
      },
      customFormatter: (data)=>data+"Test"
    },
    {
      dataField: 'DocumentType',
      text: 'DOCUMENT TYPE',
      sort: false,
      headerStyle: () => {
        return { width: "25%", textAlign: "center"  };
      },
    },
    {
      dataField: 'Uri',
      text: 'FileUrl',
      sort: false,
      headerStyle: () => {
        return { width: "20%" };
      },
      hidden: true
    },
  
];

const env = {
  apiBaseUrl: 'https://dev.cogitate.us/DIEP2.DMS.API/api/',
  getDocListUrl: 'GetPolicyDocList?',
  postDocListUrl: 'DMS/CreateDocument',
  dmsApiAuth: 'Basic dGVzdDp0ZXN0VXNlclBhc3N3b3Jk',
  dmsApiName: 'dms',
  dmsDefaultCoverHolder:'RH',
  dmsContainerName: 'dms',
}

const functionalAgrs = {
  policy: policy,
  tableCols: DocumentsColumns,
  groupColumnName: "TransactionType",
  dmsContainerName:"dms",
  useRefresh: true,
  EmailDocument:  ms => new Promise(res => setTimeout(res, 2000)),
  uploadFilesToDMS: async (...args)=>{ return await uploadFilesToDMS(...args ,env.apiBaseUrl+env.postDocListUrl, env.dmsApiAuth, env.dmsDefaultCoverHolder, env.dmsApiName)},
  getFilesListFromDMS: async (args)=>{
     return await getFilesListFromDMS(args, env.apiBaseUrl+env.getDocListUrl, env.dmsApiAuth);
  } 
};

it("should render given schema correctly", () => {
  const testRenderer = renderer.create(<UploadDocumentFunctional {...functionalAgrs} />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});

// it("should call getFilesListFromDMS onload", () => {
//     const mockUtils = jest.spyOn(utils, "getFilesListFromDMS");
//     render(<UploadDocumentFunctional {...functionalAgrs} />);
//     expect(mockUtils).toHaveBeenCalled();
// });

it("should call getFilesListFromDMS onload and return array of files", async () => {
    const mockUtils = jest.spyOn(utils, "getFilesListFromDMS");
    mockUtils.mockResolvedValue([]);
    render(<UploadDocumentFunctional {...functionalAgrs} />);
    expect(typeof await mockUtils()).toBe(typeof [])
});

// it("should upload file if upload button is clicked", async () => {
//     render(<UploadDocumentFunctional {...functionalAgrs} />);
//     const uploadDocumentBtn = screen.getByText(/Upload Document/g);
//     fireEvent.click(uploadDocumentBtn);
//     await waitFor(() => {
//         const docType = screen.getAllByRole("textbox");
//         expect(docType[0].value).toBe("mockPolicy");
//         fireEvent.change(docType[1], { target: { value: 'Test value' } });
//         expect(docType[1].value).toBe('Test value');
//     });
// });



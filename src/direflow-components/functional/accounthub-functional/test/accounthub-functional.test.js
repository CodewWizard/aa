/* eslint-disable no-undef */

import React from "react";
import { render, screen , fireEvent } from "@testing-library/react";
import FunctionalAccountHub from "../accounthub-functional";
import '@testing-library/jest-dom'
import * as utils from "@cogitate/ui-utils-core-test";
import { advanceFilterModel, accountHubColummns, selectDropdownModel, accountHubModel ,accountHubExpandCols } from '../utilities/config';

jest.mock("nprogress", () => ({
    start: jest.fn(),
    done: jest.fn(),
}));


jest.mock("@cogitate/ui-utils-core-test", () => ({
    LoadAccountHub: jest.fn().mockImplementation(() => {
        const Test_Result = [
            {
                "Agent": "McKinley & DiMarco Insurance Services",
                "BusinessName": "SIMBA TRANSPORT LLC 1",
                "EffectiveDate": "2023-07-20",
                "ExpirationDate": "2024-07-20",
                "IsQuoteNumber": true,
                "IsRenew": false,
                "LastUpdatedDate": "2023-07-26T12:58:53.852Z",
                "Location": "1118 GRASSY VIEW DRIVE, HOUSTON, TX, 77073",
                "PolicyNumber": "TOGACNMTX230736",
                "QuoteNumber": "TOGACNMTX230736",
                "Status": "Submission",
                "TransactionDate": "2023-07-20",
                "Underwriter": "Iliana Martinez",
                "IsMaster": true,
                "ExternalRefrences": [
                    {
                        "ReferenceNumber": "0043385",
                        "ReferenceTarget": "AIM_QuoteID",
                        "Status": "Active"
                    }
                ],
                "LOB": "M",
                "Premium": 0,
                "Agency": "McKinley & DiMarco Insurance Services"
            },
        ]
        return Promise.resolve(Test_Result);
    }),
}));

const props = {
    LoggedInUser: {
        decodedJWT: {
            role: "Agent"
        }
    },
    PageTitle: "Test Title",
    PageDesc: "Test Description",
    favicon: "test_favicon",
    AdvanceFilterModelSchema: advanceFilterModel, // Add your test data for AdvanceFilterModelSchema
    AccounthubModel: accountHubModel, // Add your test data for AccounthubModel
    SelectDropdownModel: selectDropdownModel, // Add your test data for SelectDropdownModel
    AccountHubColummns: accountHubColummns, // Add your test data for AccountHubColummns
    AccountHubExpandCols: accountHubExpandCols, // Add your test data for AccountHubExpandCols
    ExpandRowFilter: () => { }, // Add your ExpandRowFilter function implementation
    GetQuery: "test_query"
};



describe("FunctionalAccountHub Component", () => {
    // Mock props data here
   
    beforeEach(() => {
        // Reset the mock function's calls before each test        
    });
    beforeAll(()=>{
        
    });

    afterAll(()=>{
        jest.restoreAllMocks();
    });

    it("renders without crashing", () => {  
        render(<FunctionalAccountHub {...props} />);      
        expect(screen.getByText('ACCOUNT HUB')).toBeInTheDocument();
    });  

    it("check LoadAccountHub function has been called", async () => {   
        const mock_fn = jest.spyOn(utils,"LoadAccountHub");
        render(<FunctionalAccountHub {...props} />);                    
        expect(mock_fn).toHaveBeenCalled();
    });

    it("check all given columns should be rendered", () => {      
        render(<FunctionalAccountHub {...props} />);
        expect(screen.getByText('BUSINESS NAME')).toBeInTheDocument();        
        expect(screen.getByText('EFFECTIVE DATE')).toBeInTheDocument(); 
        expect(screen.getByText('CITY, ST')).toBeInTheDocument();         
        expect(screen.getByText('POLICY NO.')).toBeInTheDocument();                         
        expect(screen.getByText('AGENCY')).toBeInTheDocument(); 
        expect(screen.getByText('UNDERWRITER')).toBeInTheDocument(); 
        expect(screen.getByText('LAST UPDATE')).toBeInTheDocument(); 
        expect(screen.getByText('STATUS')).toBeInTheDocument(); 
    }); 
    
    it("check status dropdown has value", async () => {   
        render(<FunctionalAccountHub {...props} />);             
        expect(screen.getByText('All Status')).toBeInTheDocument();            
    });

    it("check serach file shold be on dom", async () => {   
        render(<FunctionalAccountHub {...props} />);             
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();            
    });

    it("check advance filter should be enabled", async () => {   
        render(<FunctionalAccountHub {...props} />);             
        const filterButton = screen.getByTitle('Advance Filter');
        fireEvent.click(filterButton);
        expect(await screen.getByText('Apply')).toBeInTheDocument(); 
        expect(await screen.getByText('Reset')).toBeInTheDocument(); 
        expect(await screen.getByText('Close')).toBeInTheDocument(); 
    });    
   
});




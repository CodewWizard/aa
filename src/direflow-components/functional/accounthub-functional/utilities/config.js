import React from 'react';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";

const PolicyStatusMaster = {
	// Lead: 'Lead',
	// Quote: 'Quote', // for every new policy created
	Application: 'Quick Quote', // when we move from Quote to Application
	FormalQuote: 'Submission',
	FormalQuoteRequested: 'Quote Requested',
	QuoteIndication: 'Quote Indication',
	ReferralAwaitingUWReview: 'Referral - Awaiting UW Review', // When UW rules are hit
	QuoteOffered: 'Formal Quote Offered', // When UW approve and offer Quote submitted to him by agent
	UWQuoteDeclined: 'UW - Quote Declined', // When underwriter declines Quote
	QuoteExpired: 'Quote Expired', // Calcualated in batch Job based on no.OfDays Quote is old
	RetailerQuoteDeclined: 'Retailer - Quote Declined', // When Agent rejects the policy
	UWReferral: 'Underwriter Referral', // Particularly for the case when UW rule is violated
	BindRequestAwaitingUWApproval: 'Bind Request - Awaiting UW Approval', // Agent submitted the application now, waiting for UW approval
	BindRequestUnderReview: 'Bind Request - Under Review',
	BindRequestDeclined: 'Bind Request - Declined',
	BindRequestClosed: 'Bind Request - Closed',
	// BindRequestDeclinedbyUW: 'Bind Request Declined by UW', // UW declined bind request by Agent
	// BindRequestonHold: 'Bind Request on Hold', // UW put policy in application on Hold coz some documents or something
	PolicyInForceBind: 'Policy In Force-Bind', // UW Approves the policy
	SubmissionUnderReview: 'Submission Under Review',
	SubmissionClosed: 'Submission Closed',
	SubmissionDeclined: "Submission Declined",
	LOBNotOfferedByAgent: "LOB Not Offered By Agent",
	LOBNotOfferedByUW: "LOB Not Offered By UW",
	CancellationInitiated: "Cancellation Initiated",
	ReInstatementInitiated: "Reinstate Initiated",
	// PolicyInForceEndorsementRequestAwaitingUWApproval: 'Policy In Force - Endorsement Awaiting UW Approval', // Agent submits for endorsement to be reviewed by UW
	PolicyInForceEndorsed: 'Policy In Force-Endorsed', // UW approves endorsed policy submitted
	// PolicyInForceEndorsementRequestOnHold: 'Policy In Force - Endorsement On Hold', // UW puts endorsement policy submitted on hold 
	// PolicyInForceEndorsementRequestRejected: 'Policy In Force - Endorsement Rejected', // UW rejects endorsement policy submitted 
	PolicyInForceCancellationRequestPendingApproval: 'Policy In Force - Cancellation Request Pending Approval', // Agents cancels a policy but Waiting for UW approval
	PolicyCancelled: 'Policy Cancelled', // Policy is cancelled by UW
	// PolicyInForceCancellationRequestOnHold: 'Policy In Force - Cancellation Request On Hold', // When policy cancellation request is put on hold by UW coz of some conflict
	// PolicyCancelledReinstatementRequestPendingUWApproval: 'Policy Cancelled - Reinstatement Request Pending UW Approval', // Policy is cancelled by UW , fresh reinstatement request by agent is pending for UW approval
	// PolicyCancelledReinstatementRequestOnHold: 'Policy Cancelled - Reinstatement Request On Hold', // Policy is cancelled, reinstated policy is put on hold by UW
	PolicyInForceReInstated: 'Policy In Force-ReInstated', // Policy is Reinstated
	// WaitingForRevisedApproval: 'Waiting For Revised Approval', // Doubt ??
	BindSignaturePending: 'Bind Signature Pending', // When waiting for Insured to verify its signature when policy in application -> when he is basically entering OTP stuff to verify himself
	BindSignatureCompleted: 'Bind Signature Completed', // When Insured sign is verified    
	PolicyInForceCancellationSignaturePending: 'Policy In Force - Cancellation Signature Pending', // same as 24

	EndorsementInitiated: 'Endorsement Initiated',
	// RenewalInitiated : 'Renewal Initiated'
}

const effectiveDateFormatter = (cell, row) => {
	return `${moment(row.EffectiveDate).format('L')}`
}

const lastUpdateDateFormatter = (cell, row) => {
	return `${moment(row.LastUpdatedDate).format('L')} ${moment(row.LastUpdatedDate).format('h:mm:ss A')}`;
}

const DashboardAccountHubActions = (cell, row, rowIndex, formatExtraData) => {
	return (
		<>
			{
				(true || (row.Status == PolicyStatusMaster.Quote || row.status == PolicyStatusMaster.BindRequestAwaitingUWApproval || row.Status == PolicyStatusMaster.BindSignaturePending || row.Status == PolicyStatusMaster.BindSignatureCompleted || row.Status == PolicyStatusMaster.BindRequestAwaitingUWApproval || row.Status == PolicyStatusMaster.RetailerQuoteDeclined ||
					row.Status == PolicyStatusMaster.PolicyInForceBind || row.Status == PolicyStatusMaster.FormalQuote || row.Status == PolicyStatusMaster.Application ||
					row.Status == PolicyStatusMaster.PolicyCancelled || row.Status == PolicyStatusMaster.QuoteOffered || row.Status == PolicyStatusMaster.PolicyInForceEndorsed ||
					row.Status == PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval || row.Status == PolicyStatusMaster.BindRequestDeclinedbyUW ||
					row.Status == PolicyStatusMaster.BindRequestonHold || row.Status === PolicyStatusMaster.PolicyInForceEndorsementRequestOnHold ||
					row.Status == PolicyStatusMaster.PolicyInForceReinstatementSignaturePending || row.Status == PolicyStatusMaster.PolicyInForceCancellationSignaturePending ||
					row.Status == PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval || row.Status == PolicyStatusMaster.PolicyInForceEndorsementSignaturePending ||
					row.Status == PolicyStatusMaster.Renewed || row.Status == PolicyStatusMaster.BindSignatureCompleted || row.Status == PolicyStatusMaster.UWQuoteDeclined ||
					row.Status == PolicyStatusMaster.UWReferral || row.Status == PolicyStatusMaster.ApplicationInitiated || row.Status == PolicyStatusMaster.EndorsementInitiated ||
					row.Status == PolicyStatusMaster.RenewalInitiated || row.Status == PolicyStatusMaster.Lead) && !row.IsRenew || row.Status == PolicyStatusMaster.PolicyInForceCancellationSignatureCompleted ||
					row.Status == PolicyStatusMaster.QuoteIndication || row.Status == PolicyStatusMaster.SubmissionDeclined || row.Status == PolicyStatusMaster.SubmissionUnderReview || row.Status == PolicyStatusMaster.ReferralAwaitingUWReview || row.Status == PolicyStatusMaster.SubmissionClosed || row.Status == PolicyStatusMaster.BindRequestDeclined || row.Status == PolicyStatusMaster.BindRequestClosed)
				&&
				<a className="display-inblock actionIcon me-1" data-bs-toggle="tooltip" title="View"
					onClick={() => { }}>
					<FontAwesomeIcon icon={faEye} size="lg" />
				</a>
			}
		</>
	);
}

const statusOptions = (PolicyStatusMaster) => {
	var optionArray = [];
	Object.entries(PolicyStatusMaster).forEach(([KEY, VALUE]) => {
		var option = {
			key: KEY,
			label: VALUE,
			value: VALUE,
		};
		optionArray.push(option);
	});
	optionArray.sort((a, b) => (a.label > b.label ? 1 : -1));
	optionArray.unshift({
		key: "ALLSTATUS",
		label: "All Status",
		value: "All Status"
	});
	return optionArray;
};

// advance search filter schema
let d = new Date();
let dformat =
	d.getFullYear().toString().padStart(2, "0") +
	"-" +
	(d.getMonth() + 1).toString().padStart(2, "0") +
	"-" +
	d.getDate().toString().padStart(2, "0");

let minFromDateFormat = "dd/MM/yyyy";

const ColumnStyle = (cell, row, rowIndex, colIndex) => {
	return row?.Status == "IsErrored" ? "datatable-error" : "success";
}

const colFormatter = (cell, row, rowIndex, colIndex) => {
	return row?.Status == "IsErrored" ? "datatable-error" : "success";
}

export const advanceFilterModel = [
	{
		"key": "advanceSearch",
		"type": "Card",
		"title": "",
		"className": "",
		"titleClassName": "commonHead commonHeadPadding",
		"childsClassName": "",
		"controls": [
			{
				"key": "businessName",
				"label": "BUSINESS NAME",
				"props": {
					"class": "inputText",
					"placeholder": "Please enter Business Name",
					"maxlength": "50",
					"minlength": "2"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "businessname",
				"errorMessage": "Please enter valid Business Name",
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				]
			},
			{
				"key": "fromdate",
				"label": "FROM DATE",
				"type": "date",
				"props": {
					"class": "inputText",
					"max": "2023-07-21",
					"placeholder": "Enter Date",
					"monthPlaceholder": "mm",
					"dayPlaceholder": "dd",
					"yearPlaceholder": "yyyy",
					"clearIcon": false,
					"minDate": "1923-07-21T00:00:00.000Z",
					"maxDate": "2023-07-21T06:14:12.471Z"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "fromdate",
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				]
			},
			{
				"key": "todate",
				"label": "TO DATE",
				"type": "date",
				"props": {
					"class": "inputText",
					"max": "2023-07-21",
					"placeholder": "Enter Date",
					"monthPlaceholder": "mm",
					"dayPlaceholder": "dd",
					"yearPlaceholder": "yyyy",
					"clearIcon": false,
					"minDate": "2023-07-20T18:30:00.000Z",
					"maxDate": "2023-07-21T06:14:12.471Z"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "todate",
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				]
			},
			{
				"key": "agencyName",
				"label": "AGENCY",
				"type": "search-dropdown",
				"props": {
					"class": "inputText",
					"placeholder": "Agency Name",
					"pattern": "[.a-zA-Z ]*$",
					"maxlength": "50",
					"minlength": "2"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "agencyName",
				"errorMessage": "Please enter valid Agency Name",
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				],
				"options": [
					{
						"key": "AGT017",
						"label": "McKinley & DiMarco Insurance Services (AGT017)",
						"value": "AGT017"
					},
					{
						"key": "AGT015",
						"label": "Charles R. Myers Insurance (AGT015)",
						"value": "AGT015"
					},
					{
						"key": "AGT020",
						"label": "Border City Insurance Services Inc. (AGT020)",
						"value": "AGT020"
					},
					{
						"key": "AGT019",
						"label": "Jack Armstrong Insurance (AGT019)",
						"value": "AGT019"
					},
					{
						"key": "AGT018",
						"label": "Allegiance Insurance Services, LLC (AGT018)",
						"value": "AGT018"
					},
					{
						"key": "AGT030",
						"label": "JLP Insurance Services (AGT030)",
						"value": "AGT030"
					},
					{
						"key": "AGT074",
						"label": "American Truck Insurance (AGT074)",
						"value": "AGT074"
					},
					{
						"key": "AGT027",
						"label": "Insurance Point (AGT027)",
						"value": "AGT027"
					},
					{
						"key": "AGT040",
						"label": "RoadGuard Insurance Services, Inc. (AGT040)",
						"value": "AGT040"
					},
					{
						"key": "AGT053",
						"label": "Trucking Now Insurance Agency, LLC (AGT053)",
						"value": "AGT053"
					},
					{
						"key": "AGT025",
						"label": "HH Insurance Agency (AGT025)",
						"value": "AGT025"
					},
					{
						"key": "AGT055",
						"label": "AMA United Transport Services (AGT055)",
						"value": "AGT055"
					},
					{
						"key": "AGT029",
						"label": "Southwest Insurance, LLC (AGT029)",
						"value": "AGT029"
					},
					{
						"key": "AGT021",
						"label": "Eagle Insurance (AGT021)",
						"value": "AGT021"
					},
					{
						"key": "AGT061",
						"label": "Tri-State Dealer Services, Inc. (AGT061)",
						"value": "AGT061"
					},
					{
						"key": "AGT072",
						"label": "Alpha Insurance Services (AGT072)",
						"value": "AGT072"
					},
					{
						"key": "AGT090",
						"label": "SWZ Insurance (AGT090)",
						"value": "AGT090"
					},
					{
						"key": "AGT032",
						"label": "Mesfin Tax & Insurance (AGT032)",
						"value": "AGT032"
					},
					{
						"key": "AGT035",
						"label": "Omega Insurance Services (AGT035)",
						"value": "AGT035"
					},
					{
						"key": "AGT081",
						"label": "PNP Insurance Group Solutions LLC (AGT081)",
						"value": "AGT081"
					},
					{
						"key": "AGT106",
						"label": "MELS Insurance Agency LLC (AGT106)",
						"value": "AGT106"
					},
					{
						"key": "AGT036",
						"label": "Ontiveros Insurance Group (AGT036)",
						"value": "AGT036"
					},
					{
						"key": "AGT084",
						"label": "Jennifer Haring Agency (AGT084)",
						"value": "AGT084"
					},
					{
						"key": "AGT052",
						"label": "Alico Insurance Agency of Texas LLC (AGT052)",
						"value": "AGT052"
					},
					{
						"key": "AGT024",
						"label": "GIA, Associates (AGT024)",
						"value": "AGT024"
					},
					{
						"key": "AGT082",
						"label": "Volmert & Associates LLC (AGT082)",
						"value": "AGT082"
					},
					{
						"key": "AGT045",
						"label": "TWI Agency Inc. (AGT045)",
						"value": "AGT045"
					},
					{
						"key": "AGT033",
						"label": "Navarro Insurance Agency (AGT033)",
						"value": "AGT033"
					},
					{
						"key": "AGT057",
						"label": "Coldwater Insurance Agency, Inc. (AGT057)",
						"value": "AGT057"
					},
					{
						"key": "AGT062",
						"label": "Rodriguez Insurance Agency LLC (AGT062)",
						"value": "AGT062"
					},
					{
						"key": "AGT031",
						"label": "Marlin Insurance Services (AGT031)",
						"value": "AGT031"
					},
					{
						"key": "AGT028",
						"label": "Assured Partners of Texas LLC (AGT028)",
						"value": "AGT028"
					},
					{
						"key": "AGT077",
						"label": "1st Patriot Insurance Services, LLC (AGT077)",
						"value": "AGT077"
					},
					{
						"key": "AGT051",
						"label": "Villa Texas Insurance Services, LLC (AGT051)",
						"value": "AGT051"
					},
					{
						"key": "AGT034",
						"label": "Nevjestic Insurance Agency LLC (AGT034)",
						"value": "AGT034"
					},
					{
						"key": "AGT092",
						"label": "Catherine M. Deulley (AGT092)",
						"value": "AGT092"
					},
					{
						"key": "AGT101",
						"label": "Legacy Truck Insurance Agency LLC (AGT101)",
						"value": "AGT101"
					},
					{
						"key": "AGT049",
						"label": "White Glove Partners (AGT049)",
						"value": "AGT049"
					},
					{
						"key": "AGT022",
						"label": "Family Insurance & Multi Services (AGT022)",
						"value": "AGT022"
					},
					{
						"key": "AGT124",
						"label": "Amera Insurance & Services Corp (AGT124)",
						"value": "AGT124"
					},
					{
						"key": "AGT083",
						"label": "Trucking Insurance Services of Texas (AGT083)",
						"value": "AGT083"
					},
					{
						"key": "AGT116",
						"label": "Got Coverage Inc. (AGT116)",
						"value": "AGT116"
					},
					{
						"key": "AGT023",
						"label": "G&S Insurance Solutions, LLC (AGT023)",
						"value": "AGT023"
					},
					{
						"key": "AGT065",
						"label": "Cartier Insurance Group, LLC (AGT065)",
						"value": "AGT065"
					},
					{
						"key": "AGT058",
						"label": "Danaco Group (AGT058)",
						"value": "AGT058"
					},
					{
						"key": "AGT079",
						"label": "Heitmann Agency LLC (AGT079)",
						"value": "AGT079"
					},
					{
						"key": "AGT026",
						"label": "Insurance Leader Group Inc. (AGT026)",
						"value": "AGT026"
					},
					{
						"key": "AGT078",
						"label": "Treaty Oak General Agency (AGT078)",
						"value": "AGT078"
					},
					{
						"key": "AGT046",
						"label": "Qualitas Insurance Agency, LLC (AGT046)",
						"value": "AGT046"
					},
					{
						"key": "AGT105",
						"label": "Atco Insurance Services, Inc. (AGT105)",
						"value": "AGT105"
					},
					{
						"key": "AGT044",
						"label": "Southwest Insurance Management (AGT044)",
						"value": "AGT044"
					},
					{
						"key": "AGT097",
						"label": "Anchorpoint Insurance Services (AGT097)",
						"value": "AGT097"
					},
					{
						"key": "AGT096",
						"label": "Texas Insurance Service Center Inc. (AGT096)",
						"value": "AGT096"
					},
					{
						"key": "AGT064",
						"label": "Commercial Asset Protectionals, LLC (AGT064)",
						"value": "AGT064"
					},
					{
						"key": "AGT109",
						"label": "PC Insurance Agency LLC (AGT109)",
						"value": "AGT109"
					},
					{
						"key": "AGT070",
						"label": "D&H Risk Services (AGT070)",
						"value": "AGT070"
					},
					{
						"key": "AGT112",
						"label": "Fino Company (AGT112)",
						"value": "AGT112"
					},
					{
						"key": "AGT063",
						"label": "Prime Time Insurance Services LLC (AGT063)",
						"value": "AGT063"
					},
					{
						"key": "AGT086",
						"label": "Risk Protection Managers, LLC (AGT086)",
						"value": "AGT086"
					},
					{
						"key": "AGT102",
						"label": "Bob White Insurance Agency LLC (AGT102)",
						"value": "AGT102"
					},
					{
						"key": "AGT103",
						"label": "Accurance Insurance Services LLC (AGT103)",
						"value": "AGT103"
					},
					{
						"key": "AGT139",
						"label": "CoAuto Insurance LLC (AGT139)",
						"value": "AGT139"
					},
					{
						"key": "AGT094",
						"label": "Southeastern Insurance Associates (AGT094)",
						"value": "AGT094"
					},
					{
						"key": "AGT123",
						"label": "My Trucking Agent (AGT123)",
						"value": "AGT123"
					},
					{
						"key": "AGT111",
						"label": "Atlantic Risk Solutions, LLC (AGT111)",
						"value": "AGT111"
					},
					{
						"key": "AGT145",
						"label": "People First Insurance Family (AGT145)",
						"value": "AGT145"
					},
					{
						"key": "AGT119",
						"label": "A&F Insurance Group LLC (AGT119)",
						"value": "AGT119"
					},
					{
						"key": "AGT113",
						"label": "Texas Insurance Bureau Services LLC (AGT113)",
						"value": "AGT113"
					},
					{
						"key": "AGT091",
						"label": "Elite Auto Insurance (AGT091)",
						"value": "AGT091"
					},
					{
						"key": "AGT143",
						"label": "Fisher Insurance Agency, Inc. (AGT143)",
						"value": "AGT143"
					},
					{
						"key": "AGT089",
						"label": "All Risk, Ltd. (AGT089)",
						"value": "AGT089"
					},
					{
						"key": "AGT107",
						"label": "AG Multiservices LLC (AGT107)",
						"value": "AGT107"
					},
					{
						"key": "AGT118",
						"label": "Hawk's Bay Insurance Group Inc (AGT118)",
						"value": "AGT118"
					},
					{
						"key": "AGT174",
						"label": "AMC Agents LLC (AGT174)",
						"value": "AGT174"
					},
					{
						"key": "AGT193",
						"label": "Premier U.S. Truck Insurance Group (AGT193)",
						"value": "AGT193"
					},
					{
						"key": "AGT138",
						"label": "Norte Insurance Services LLC (AGT138)",
						"value": "AGT138"
					},
					{
						"key": "AGT181",
						"label": "Eleodoro B Garza Insurance Agency (AGT181)",
						"value": "AGT181"
					},
					{
						"key": "AGT125",
						"label": "McMillan Insurance Group (AGT125)",
						"value": "AGT125"
					},
					{
						"key": "AGT168",
						"label": "RHW & JCW LLC (AGT168)",
						"value": "AGT168"
					},
					{
						"key": "AGT120",
						"label": "Select Risk Services, Inc. (AGT120)",
						"value": "AGT120"
					},
					{
						"key": "AGT202",
						"label": "ASAP Insurance Company LLC (AGT202)",
						"value": "AGT202"
					},
					{
						"key": "AGT204",
						"label": "TEG Services Inc (AGT204)",
						"value": "AGT204"
					},
					{
						"key": "AGT108",
						"label": "South Texas Insurance Agency Inc (AGT108)",
						"value": "AGT108"
					},
					{
						"key": "AGT177",
						"label": "Michael Farmer Insurance Agency (AGT177)",
						"value": "AGT177"
					},
					{
						"key": "AGT228",
						"label": "Meadors, Adams & Lee Inc (AGT228)",
						"value": "AGT228"
					},
					{
						"key": "AGT167",
						"label": "Stamos Insurance Agency (AGT167)",
						"value": "AGT167"
					},
					{
						"key": "AGT183",
						"label": "SOS Financial Solutions LLC (AGT183)",
						"value": "AGT183"
					},
					{
						"key": "AGT136",
						"label": "Tropical Insurance Agency LLC (AGT136)",
						"value": "AGT136"
					},
					{
						"key": "AGT146",
						"label": "Greenland Insurance Agency Inc (AGT146)",
						"value": "AGT146"
					},
					{
						"key": "AGT137",
						"label": "Echo Insurance Agency (AGT137)",
						"value": "AGT137"
					},
					{
						"key": "AGT110",
						"label": "VL 17 Insurance Agency LLC (AGT110)",
						"value": "AGT110"
					},
					{
						"key": "AGT209",
						"label": "Island Fleet Insurance Agency LLC (AGT209)",
						"value": "AGT209"
					},
					{
						"key": "AGT171",
						"label": "Insuremart Inc (AGT171)",
						"value": "AGT171"
					},
					{
						"key": "AGT201",
						"label": "AJM Insurance & Trucking Services LLC (AGT201)",
						"value": "AGT201"
					},
					{
						"key": "AGT222",
						"label": "A-1 Truck Insurance Group (AGT222)",
						"value": "AGT222"
					},
					{
						"key": "AGT198",
						"label": "BC Armstrong Insurance LLC (AGT198)",
						"value": "AGT198"
					},
					{
						"key": "AGT248",
						"label": "Trusted Insurance Group LLC (AGT248)",
						"value": "AGT248"
					},
					{
						"key": "AGT211",
						"label": "NFP Property & Casualty Services (AGT211)",
						"value": "AGT211"
					},
					{
						"key": "AGT148",
						"label": "Friends Insurance Agency II LLC (AGT148)",
						"value": "AGT148"
					},
					{
						"key": "AGT195",
						"label": "Benchmark Insurance Agency & Permit Center LLC (AGT195)",
						"value": "AGT195"
					},
					{
						"key": "AGT207",
						"label": "OTR Risk Management (AGT207)",
						"value": "AGT207"
					},
					{
						"key": "AGT240",
						"label": "Wilson Insurance & Investment Group (AGT240)",
						"value": "AGT240"
					},
					{
						"key": "AGT155",
						"label": "H2O Commercial Insurance Agency Corp (AGT155)",
						"value": "AGT155"
					},
					{
						"key": "AGT234",
						"label": "Elite Insurance & Financial Services LLC (AGT234)",
						"value": "AGT234"
					},
					{
						"key": "AGT214",
						"label": "Cook Insurance Group LLC (AGT214)",
						"value": "AGT214"
					},
					{
						"key": "AGT203",
						"label": "North Country Insurance (AGT203)",
						"value": "AGT203"
					},
					{
						"key": "AGT245",
						"label": "Maverick Truck Insurance (AGT245)",
						"value": "AGT245"
					},
					{
						"key": "AGT219",
						"label": "Tri County Independent Insurance Agency LLC (AGT219)",
						"value": "AGT219"
					},
					{
						"key": "AGT152",
						"label": "Prestige International Insurance Group Inc (AGT152)",
						"value": "AGT152"
					},
					{
						"key": "AGT127",
						"label": "Act Trucking Insurance Brokers (AGT127)",
						"value": "AGT127"
					},
					{
						"key": "AGT128",
						"label": "Cooper & Associates, Inc. (AGT128)",
						"value": "AGT128"
					},
					{
						"key": "AGT121",
						"label": "Harmony Insurance Agency, Inc. (AGT121)",
						"value": "AGT121"
					},
					{
						"key": "AGT186",
						"label": "CCT Insurance Solutions (AGT186)",
						"value": "AGT186"
					},
					{
						"key": "AGT200",
						"label": "Keep On Trucking Insurance Services Inc (AGT200)",
						"value": "AGT200"
					},
					{
						"key": "AGT232",
						"label": "Investors Insurance Agency (AGT232)",
						"value": "AGT232"
					},
					{
						"key": "AGT316",
						"label": "Gold Way Insurance Agency LLC (AGT316)",
						"value": "AGT316"
					},
					{
						"key": "AGT129",
						"label": "Texas Insurance & Financial Services Inc (AGT129)",
						"value": "AGT129"
					},
					{
						"key": "AGT169",
						"label": "MDA Insurance Services LLC (AGT169)",
						"value": "AGT169"
					},
					{
						"key": "AGT175",
						"label": "Whiterock Insurance Agency LLC (AGT175)",
						"value": "AGT175"
					},
					{
						"key": "AGT144",
						"label": "AMO Insurance Agency, Inc (AGT144)",
						"value": "AGT144"
					},
					{
						"key": "AGT230",
						"label": "Throne Insurance & Financial Services LLC (AGT230)",
						"value": "AGT230"
					},
					{
						"key": "AGT194",
						"label": "In Trucks Insurance Corp (AGT194)",
						"value": "AGT194"
					},
					{
						"key": "AGT215",
						"label": "MVT Insurance Services Inc (AGT215)",
						"value": "AGT215"
					},
					{
						"key": "AGT311",
						"label": "Agency 801 LLC (AGT311)",
						"value": "AGT311"
					},
					{
						"key": "AGT231",
						"label": "Vinsurance Services LLC (AGT231)",
						"value": "AGT231"
					},
					{
						"key": "AGT263",
						"label": "Abraham & Associates PLLC (AGT263)",
						"value": "AGT263"
					},
					{
						"key": "AGT258",
						"label": "Advisor Insurance Group (AGT258)",
						"value": "AGT258"
					},
					{
						"key": "AGT272",
						"label": "Brightline Insurance Services LLC (AGT272)",
						"value": "AGT272"
					},
					{
						"key": "AGT227",
						"label": "Exellion Group LLC (AGT227)",
						"value": "AGT227"
					},
					{
						"key": "AGT126",
						"label": "Supreme Insurance Agency LLC (AGT126)",
						"value": "AGT126"
					},
					{
						"key": "AGT225",
						"label": "Firova Insurance-Group Fig, LLC (AGT225)",
						"value": "AGT225"
					},
					{
						"key": "AGT151",
						"label": "Royale Insurance Agency, LLC (AGT151)",
						"value": "AGT151"
					},
					{
						"key": "AGT206",
						"label": "Marquee Insurance Group LLC (AGT206)",
						"value": "AGT206"
					},
					{
						"key": "AGT247",
						"label": "Twins Insurance Group LLC (AGT247)",
						"value": "AGT247"
					},
					{
						"key": "AGT197",
						"label": "Keystone Southwest Insurance Agency Inc (AGT197)",
						"value": "AGT197"
					},
					{
						"key": "AGT188",
						"label": "Eagle National Insurance (AGT188)",
						"value": "AGT188"
					},
					{
						"key": "AGT236",
						"label": "Canaan Insurance Agency LLC (AGT236)",
						"value": "AGT236"
					},
					{
						"key": "AGT295",
						"label": "De La Garza Insurance Group (AGT295)",
						"value": "AGT295"
					},
					{
						"key": "AGT217",
						"label": "Compass Insurance Group Inc (AGT217)",
						"value": "AGT217"
					},
					{
						"key": "AGT226",
						"label": "Evo Insurance LLC (AGT226)",
						"value": "AGT226"
					},
					{
						"key": "AGT264",
						"label": "Merit Insurance Services Inc (AGT264)",
						"value": "AGT264"
					},
					{
						"key": "AGT290",
						"label": "Triag Insurance LLP (AGT290)",
						"value": "AGT290"
					},
					{
						"key": "AGT252",
						"label": "Jones Truck Insurance Agency Inc (AGT252)",
						"value": "AGT252"
					},
					{
						"key": "AGT196",
						"label": "Prosperity Insurance Agency LLC (AGT196)",
						"value": "AGT196"
					},
					{
						"key": "AGT208",
						"label": "Executive Insurance Agency (AGT208)",
						"value": "AGT208"
					},
					{
						"key": "AGT251",
						"label": "Truck Insurance Hub LLC (AGT251)",
						"value": "AGT251"
					},
					{
						"key": "AGT218",
						"label": "Premier Texas Choice LLC (AGT218)",
						"value": "AGT218"
					},
					{
						"key": "AGT246",
						"label": "Western States Insurance Group Inc (AGT246)",
						"value": "AGT246"
					},
					{
						"key": "AGT173",
						"label": "Koonce Insurance Group (AGT173)",
						"value": "AGT173"
					},
					{
						"key": "AGT235",
						"label": "Del Toro Insurance Agency (AGT235)",
						"value": "AGT235"
					},
					{
						"key": "AGT210",
						"label": "D King Agency (AGT210)",
						"value": "AGT210"
					},
					{
						"key": "AGT191",
						"label": "Palerm Insurance Agency LLC (AGT191)",
						"value": "AGT191"
					},
					{
						"key": "AGT254",
						"label": "All Steps Insurance Services LLC (AGT254)",
						"value": "AGT254"
					},
					{
						"key": "AGT331",
						"label": "Rocklike Agency LLC (AGT331)",
						"value": "AGT331"
					},
					{
						"key": "AGT319",
						"label": "Haymond Insurance Inc (AGT319)",
						"value": "AGT319"
					},
					{
						"key": "AGT309",
						"label": "Best Choice Trucking Insurance Group LLC (AGT309)",
						"value": "AGT309"
					},
					{
						"key": "AGT322",
						"label": "SIG Insurance Services LLC (AGT322)",
						"value": "AGT322"
					},
					{
						"key": "AGT255",
						"label": "Safety Insurance Agency LLC (AGT255)",
						"value": "AGT255"
					},
					{
						"key": "AGT238",
						"label": "Covenant Insurance Services LLC (AGT238)",
						"value": "AGT238"
					},
					{
						"key": "AGT275",
						"label": "Simplex Insurance Services (AGT275)",
						"value": "AGT275"
					},
					{
						"key": "AGT289",
						"label": "Concord Commercial Trucking Insurance (AGT289)",
						"value": "AGT289"
					},
					{
						"key": "AGT281",
						"label": "Safeway Insurance Agency (AGT281)",
						"value": "AGT281"
					},
					{
						"key": "AGT243",
						"label": "The Risk Management Group Inc (AGT243)",
						"value": "AGT243"
					},
					{
						"key": "AGT271",
						"label": "Blackmon Commercial Insurance (AGT271)",
						"value": "AGT271"
					},
					{
						"key": "AGT250",
						"label": "United Multi-Services Agency LLC (AGT250)",
						"value": "AGT250"
					},
					{
						"key": "AGT306",
						"label": "Salty Dot Insurance Agency LLC (AGT306)",
						"value": "AGT306"
					},
					{
						"key": "AGT313",
						"label": "Top Flight Trucking Insurance Group LLC (AGT313)",
						"value": "AGT313"
					},
					{
						"key": "AGT298",
						"label": "Sky High Insurance Agency (AGT298)",
						"value": "AGT298"
					},
					{
						"key": "AGT239",
						"label": "Vortex Commercial Insurance Services (AGT239)",
						"value": "AGT239"
					},
					{
						"key": "AGT301",
						"label": "Thrive Commercial Onsurance Agency Inc (AGT301)",
						"value": "AGT301"
					},
					{
						"key": "AGT192",
						"label": "Protec Consulting Group LLC (AGT192)",
						"value": "AGT192"
					},
					{
						"key": "AGT317",
						"label": "Info Insurance Agency LLC (AGT317)",
						"value": "AGT317"
					},
					{
						"key": "AGT179",
						"label": "Mario Cruz Insurance Agency Inc (AGT179)",
						"value": "AGT179"
					},
					{
						"key": "AGT280",
						"label": "Quality Insurance Agency Inc (AGT280)",
						"value": "AGT280"
					},
					{
						"key": "AGT330",
						"label": "Texas Specialty Underwriters Inc (AGT330)",
						"value": "AGT330"
					},
					{
						"key": "AGT242",
						"label": "Trusted Insurance Group LLC (AGT242)",
						"value": "AGT242"
					},
					{
						"key": "AGT287",
						"label": "Shamrock Insurance Agency (AGT287)",
						"value": "AGT287"
					},
					{
						"key": "AGT268",
						"label": "Lone Star Insurance Agency LLC (AGT268)",
						"value": "AGT268"
					},
					{
						"key": "AGT229",
						"label": "Rev Insurance Agency LLC (AGT229)",
						"value": "AGT229"
					},
					{
						"key": "AGT265",
						"label": "Golden Hill Insurance (AGT265)",
						"value": "AGT265"
					},
					{
						"key": "AGT274",
						"label": "Tempo Insurance Group LLC (AGT274)",
						"value": "AGT274"
					},
					{
						"key": "AGT266",
						"label": "Skholl International LLC (AGT266)",
						"value": "AGT266"
					},
					{
						"key": "AGT284",
						"label": "1st Patriot Risk Management LLC (AGT284)",
						"value": "AGT284"
					},
					{
						"key": "AGT270",
						"label": "Big Rig Insurance Services LLC (AGT270)",
						"value": "AGT270"
					},
					{
						"key": "AGT291",
						"label": "Hawk-INS Group (AGT291)",
						"value": "AGT291"
					},
					{
						"key": "AGT273",
						"label": "Reyna Brown Insurance (AGT273)",
						"value": "AGT273"
					},
					{
						"key": "AGT249",
						"label": "Supra Insurance Services LLC (AGT249)",
						"value": "AGT249"
					},
					{
						"key": "AGT282",
						"label": "Perkins Insurance Agencies LLC (AGT282)",
						"value": "AGT282"
					},
					{
						"key": "AGT277",
						"label": "Habana First Rate Insurance LLC (AGT277)",
						"value": "AGT277"
					},
					{
						"key": "AGT294",
						"label": "Allied Insurance & Financial Svcs. (AGT294)",
						"value": "AGT294"
					},
					{
						"key": "AGT302",
						"label": "Straightway Insurance LLC (AGT302)",
						"value": "AGT302"
					},
					{
						"key": "AGT262",
						"label": "Insurance Unlimited of Louisiana LLC (AGT262)",
						"value": "AGT262"
					},
					{
						"key": "AGT253",
						"label": "Pena Insurance Agency (AGT253)",
						"value": "AGT253"
					},
					{
						"key": "AGT256",
						"label": "Transfleet Insurance Services (AGT256)",
						"value": "AGT256"
					},
					{
						"key": "AGT310",
						"label": "Hotaling Insurance Services (AGT310)",
						"value": "AGT310"
					},
					{
						"key": "AGT212",
						"label": "Varon Insurance Agency (AGT212)",
						"value": "AGT212"
					},
					{
						"key": "AGT279",
						"label": "Texas Insurance & Tax Center (AGT279)",
						"value": "AGT279"
					},
					{
						"key": "AGT315",
						"label": "Buchanan Insurance Services Inc (AGT315)",
						"value": "AGT315"
					},
					{
						"key": "AGT307",
						"label": "Go Safe Agency (AGT307)",
						"value": "AGT307"
					},
					{
						"key": "AGT323",
						"label": "Truckin Central Agency Inc (AGT323)",
						"value": "AGT323"
					},
					{
						"key": "AGT324",
						"label": "Lucila's Insurance Services LLC (AGT324)",
						"value": "AGT324"
					},
					{
						"key": "AGT326",
						"label": "Armadillo Insurance Group (AGT326)",
						"value": "AGT326"
					},
					{
						"key": "AGT288",
						"label": "Mark Moseley Agency (AGT288)",
						"value": "AGT288"
					},
					{
						"key": "AGT278",
						"label": "Soho Insurance Brokerage Inc (AGT278)",
						"value": "AGT278"
					},
					{
						"key": "AGT312",
						"label": "West Texas Insurance Agency (AGT312)",
						"value": "AGT312"
					},
					{
						"key": "AGT308",
						"label": "Safeline Insurance Agency Inc (AGT308)",
						"value": "AGT308"
					},
					{
						"key": "AGT325",
						"label": "Ewall Insurance Company (AGT325)",
						"value": "AGT325"
					},
					{
						"key": "AGT297",
						"label": "Resolute Insurance Group LLC (AGT297)",
						"value": "AGT297"
					},
					{
						"key": "AGT320",
						"label": "ATAB Insurance Services Inc. (AGT320)",
						"value": "AGT320"
					},
					{
						"key": "AGT259",
						"label": "M&V Tax Insurance Agency Inc (AGT259)",
						"value": "AGT259"
					},
					{
						"key": "AGT296",
						"label": "Saudia Anderson Ins Agency (AGT296)",
						"value": "AGT296"
					},
					{
						"key": "AGT303",
						"label": "S&A Insurance (AGT303)",
						"value": "AGT303"
					},
					{
						"key": "AGT276",
						"label": "Stagstone Risk Management LLC (AGT276)",
						"value": "AGT276"
					},
					{
						"key": "AGT285",
						"label": "Palta Insurance Group (AGT285)",
						"value": "AGT285"
					},
					{
						"key": "AGT314",
						"label": "RPO Plus Trust Insurance LLC (AGT314)",
						"value": "AGT314"
					},
					{
						"key": "AGT300",
						"label": "Titan Insurance & Mortgage Service (AGT300)",
						"value": "AGT300"
					},
					{
						"key": "AGT257",
						"label": "Trident Insurance Corp (AGT257)",
						"value": "AGT257"
					},
					{
						"key": "AGT299",
						"label": "Renegade Insurance LLC (AGT299)",
						"value": "AGT299"
					},
					{
						"key": "AGT267",
						"label": "Tigers Insurance Group LLC (AGT267)",
						"value": "AGT267"
					},
					{
						"key": "AGT260",
						"label": "Liz Insurance Agency (AGT260)",
						"value": "AGT260"
					},
					{
						"key": "AGT283",
						"label": "Davis & Associates Insurance Agency LLC (AGT283)",
						"value": "AGT283"
					},
					{
						"key": "AGT269",
						"label": "Trucker's Retirement Plan, Inc (AGT269)",
						"value": "AGT269"
					},
					{
						"key": "AGT305",
						"label": "Givesurance Insurance Service Inc (AGT305)",
						"value": "AGT305"
					}
				]
			},
			{
				"key": "insuredState",
				"label": "INSURED STATE",
				"type": "search-dropdown",
				"props": {
					"class": "inputText",
					"placeholder": "State Name",
					"pattern": "[.a-zA-Z ]*$",
					"maxlength": "50",
					"minlength": "2"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "agentstates",
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				],
				"options": [
					{
						"key": "texasState",
						"label": "TX",
						"value": "TX"
					},
					{
						"key": "oklahomaState",
						"label": "OK",
						"value": "OK"
					}
				]
			},
			{
				"key": "underwriterName",
				"label": "UNDERWRITER",
				"type": "search-dropdown",
				"props": {
					"class": "inputText",
					"placeholder": "Please search Underwriter Name",
					"pattern": "[.a-zA-Z ]*$",
					"maxlength": "50",
					"minlength": "2"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "underwriterid",
				"errorMessage": "Please enter valid Underwriter Name",
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				],
				"options": [
					{
						"key": "Andy",
						"label": "Andy Clymer (Andy)",
						"value": "Andy"
					},
					{
						"key": "Charlie",
						"label": "Charlie Halfen (Charlie)",
						"value": "Charlie"
					},
					{
						"key": "CogiAdmin",
						"label": "CogiAdmin (CogiAdmin)",
						"value": "CogiAdmin"
					},
					{
						"key": "Cogitate",
						"label": "Cogitate (Cogitate)",
						"value": "Cogitate"
					},
					{
						"key": "Dani",
						"label": "Dani Harris (Dani)",
						"value": "Dani"
					},
					{
						"key": "Geoff",
						"label": "Geoffrey Crater (Geoff)",
						"value": "Geoff"
					},
					{
						"key": "Iliana",
						"label": "Iliana Martinez (Iliana)",
						"value": "Iliana"
					},
					{
						"key": "Karen",
						"label": "Karen Fisk (Karen)",
						"value": "Karen"
					},
					{
						"key": "Kelly",
						"label": "Kelly Hoskins (Kelly)",
						"value": "Kelly"
					},
					{
						"key": "Lisa",
						"label": "Lisa Rawski (Lisa)",
						"value": "Lisa"
					},
					{
						"key": "Matt",
						"label": "Matt Young (Matt)",
						"value": "Matt"
					},
					{
						"key": "MattTest",
						"label": "Matt Young (MattTest)",
						"value": "MattTest"
					},
					{
						"key": "Milan",
						"label": "Milan Vukanac (Milan)",
						"value": "Milan"
					},
					{
						"key": "Misty",
						"label": "Misty Middlebrook (Misty)",
						"value": "Misty"
					},
					{
						"key": "Rea",
						"label": "Refugia Dubrule (Rea)",
						"value": "Rea"
					},
					{
						"key": "Sandra",
						"label": "Sandra Smithson (Sandra)",
						"value": "Sandra"
					},
					{
						"key": "Vanessa",
						"label": "Vanessa Ferreira (Vanessa)",
						"value": "Vanessa"
					},
					{
						"key": "Elizabeth",
						"label": "Elizabeth Stehling (Elizabeth)",
						"value": "Elizabeth"
					},
					{
						"key": "Tracy",
						"label": "Tracy Engel (Tracy)",
						"value": "Tracy"
					}
				]
			},
			{
				"key": "allStatuses",
				"label": "STATUS(ES)",
				"value": "select",
				"type": "search-dropdown",
				"props": {
					"class": "inputText"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "policystatus",
				"options": [
					{
						"key": "ALLSTATUS",
						"label": "All Status",
						"value": "All Status"
					},
					{
						"key": "BindRequestClosed",
						"label": "Bind Request - Closed",
						"value": "Bind Request - Closed"
					},
					{
						"key": "BindRequestDeclined",
						"label": "Bind Request - Declined",
						"value": "Bind Request - Declined"
					},
					{
						"key": "BindRequestUnderReview",
						"label": "Bind Request - Under Review",
						"value": "Bind Request - Under Review"
					},
					{
						"key": "BindRequestAwaitingUWApproval",
						"label": "Bind Request-Awaiting UW Approval",
						"value": "Bind Request-Awaiting UW Approval"
					},
					{
						"key": "BindSignatureCompleted",
						"label": "Bind Signature Completed",
						"value": "Bind Signature Completed"
					},
					{
						"key": "BindSignaturePending",
						"label": "Bind Signature Pending",
						"value": "Bind Signature Pending"
					},
					{
						"key": "CancellationInitiated",
						"label": "Cancellation Initiated",
						"value": "Cancellation Initiated"
					},
					{
						"key": "EndorsementInitiated",
						"label": "Endorsement Initiated",
						"value": "Endorsement Initiated"
					},
					{
						"key": "QuoteOffered",
						"label": "Formal Quote Offered",
						"value": "Formal Quote Offered"
					},
					{
						"key": "LOBNotOfferedByAgent",
						"label": "LOB Not Offered By Agent",
						"value": "LOB Not Offered By Agent"
					},
					{
						"key": "LOBNotOfferedByUW",
						"label": "LOB Not Offered By UW",
						"value": "LOB Not Offered By UW"
					},
					{
						"key": "PolicyCancelled",
						"label": "Policy Cancelled",
						"value": "Policy Cancelled"
					},
					{
						"key": "PolicyInForceCancellationRequestPendingApproval",
						"label": "Policy In Force - Cancellation Request Pending Approval",
						"value": "Policy In Force - Cancellation Request Pending Approval"
					},
					{
						"key": "PolicyInForceCancellationSignaturePending",
						"label": "Policy In Force - Cancellation Signature Pending",
						"value": "Policy In Force - Cancellation Signature Pending"
					},
					{
						"key": "PolicyInForceBind",
						"label": "Policy In Force-Bind",
						"value": "Policy In Force-Bind"
					},
					{
						"key": "PolicyInForceEndorsed",
						"label": "Policy In Force-Endorsed",
						"value": "Policy In Force-Endorsed"
					},
					{
						"key": "PolicyInForceReInstated",
						"label": "Policy In Force-ReInstated",
						"value": "Policy In Force-ReInstated"
					},
					{
						"key": "Application",
						"label": "Quick Quote",
						"value": "Quick Quote"
					},
					{
						"key": "QuoteExpired",
						"label": "Quote Expired",
						"value": "Quote Expired"
					},
					{
						"key": "QuoteIndication",
						"label": "Quote Indication",
						"value": "Quote Indication"
					},
					{
						"key": "FormalQuoteRequested",
						"label": "Quote Requested",
						"value": "Quote Requested"
					},
					{
						"key": "ReferralAwaitingUWReview",
						"label": "Referral - Awaiting UW Review",
						"value": "Referral - Awaiting UW Review"
					},
					{
						"key": "ReInstatementInitiated",
						"label": "Reinstate Initiated",
						"value": "Reinstate Initiated"
					},
					{
						"key": "RetailerQuoteDeclined",
						"label": "Retailer - Quote Declined",
						"value": "Retailer - Quote Declined"
					},
					{
						"key": "FormalQuote",
						"label": "Submission",
						"value": "Submission"
					},
					{
						"key": "SubmissionClosed",
						"label": "Submission Closed",
						"value": "Submission Closed"
					},
					{
						"key": "SubmissionDeclined",
						"label": "Submission Declined",
						"value": "Submission Declined"
					},
					{
						"key": "SubmissionUnderReview",
						"label": "Submission Under Review",
						"value": "Submission Under Review"
					},
					{
						"key": "UWQuoteDeclined",
						"label": "UW - Quote Declined",
						"value": "UW - Quote Declined"
					},
					{
						"key": "UWReferral",
						"label": "Underwriter Referral",
						"value": "Underwriter Referral"
					}
				],
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				]
			},
			{
				"key": "newRenewalSelect",
				"label": "NEW / RENEWAL",
				"type": "search-dropdown",
				"props": {
					"class": "inputText"
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-3 mb-2 mt-3",
				"isColummnDisplay": false,
				"dataPath": "isRenewal",
				"options": [
					{
						"key": "newPolicy",
						"label": "New",
						"value": "New"
					},
					{
						"key": "renewalPolicy",
						"label": "Renewal",
						"value": "Renewal"
					},
					{
						"key": "bothPolicy",
						"label": "Both",
						"value": "Both"
					}
				],
				"conditionalDisplay": [
					{
						"src": "showAdvanceFilters",
						"exp": "==",
						"needRefComp": false,
						"target": "true",
						"connector": "&&"
					}
				]
			}
		]
	}
];

export const accountHubColummns = [
	{
		dataField: 'BusinessName',
		text: 'BUSINESS',
		sort: true,
		headerStyle: () => {
			return { width: "12%" };
		}
	},
	{
		dataField: 'EffectiveDate',
		text: 'EFFECTIVE DATE',
		sort: true,
		headerStyle: () => {
			return { width: "15%" };
		},
		formatter: effectiveDateFormatter
	},
	{
		dataField: 'Location',
		text: 'CITY, ST',
		sort: true,
		headerStyle: () => {
			return { width: "15%" };
		}
	},
	{
		dataField: 'Location',
		text: 'LOCATION',
		sort: true,
		headerStyle: () => {
			return { width: "15%" };
		},
		hidden: true
	},
	{
		dataField: 'PolicyNumber',
		text: 'POLICY NO.',
		headerStyle: () => {
			return { width: "12%" };
		},
		sort: true
		// hidden : policyInfo.PolicyNumber == "" ? true : false
	},
	{
		dataField: 'IsQuoteNumber',
		text: 'QUOTE NO.',
		sort: true,
		hidden: true
	},
	{
		dataField: 'IsRenew',
		text: 'Renewal',
		sort: true,
		hidden: true
	},
	{
		dataField: 'Agent',
		text: 'AGENT',
		sort: true,
		headerStyle: () => {
			return { width: "12%" };
		},
		hidden: true
	},
	{
		dataField: 'Agency',
		text: 'AGENCY',
		sort: true,
		hidden:true,
		headerStyle: () => {

		}
	},
	{
		dataField: 'Underwriter',
		text: 'UNDERWRITER',
		sort: true,
		headerStyle: () => {
			return { width: "12%" };
		}
	},
	{
		dataField: 'LastUpdatedDate',
		text: 'LAST UPDATE',
		headerStyle: () => {
			return { width: "15%" };
		},
		sort: true,
		formatter: lastUpdateDateFormatter
	},
	{
		dataField: 'Status',
		text: 'STATUS',
		sort: true,
		headerStyle: () => {
			return { width: "8%" };
		}
	},
	{
		dataField: 'actions',
		text: 'ACTIONS',
		isDummyField: true,
		csvExport: false,
		headerStyle: () => {
			return {textAlign: "center"}
		},
		style: () => {return {textAlign: "center"}},
		formatter: DashboardAccountHubActions
	}
]

export const selectDropdownModel = [
	{
		key: "advanceSearch",
		type: "Card",
		title: "",
		className: "",
		titleClassName: "commonHead commonHeadPadding",
		childsClassName: "",
		controls: [
			{
				key: "statuslabel",
				label: "STATUS(ES)",
				type: "label",
				props: { class: "inputText" },
				labelClass: "p-0 mb-1",
				positionClass: "col-md-12",
				isColummnDisplay: false,
			},
			{
				key: "status",
				value: "select",
				type: "search-dropdown",
				props: { class: "inputText" },
				labelClass: "p-0",
				positionClass: "col-md-12",
				isColummnDisplay: false,
				dataPath: "policystatus",
				options: statusOptions(PolicyStatusMaster),
			},
		],
	},
];

export const accountHubModel = {
	policystatus: 'All Status',
	policynumber: null,
	quoteNumber: null,
	agentid: null,
	agentname: null,
	agentstates: null,
	insuredname: null,
	fromdate: null,
	todate: null,
	propertyaddress: null,
	underwriterid: null,
	businessname: null,
	transactiondate: null,
	lob: null,
	isRenewal: "Both",
	showAdvanceFilters: false,
	agencyName: null
}

export const accountHubExpandCols = [
	{
		dataField: 'LOB',
		text: 'Line of Business',
		sort: false,
		classes: ColumnStyle,
		headerStyle: () => {
			return { width: "12%" };
		},
		formatter: colFormatter
	},
	{
		dataField: 'PolicyNumber',
		text: 'Quote/Policy Number',
		sort: false,
		classes: ColumnStyle,
		headerStyle: () => {
			return { width: "17%" };
		},
	},
	{
		dataField: 'AIM_ID',
		text: 'Aim Reference No.',
		sort: false,
		classes: ColumnStyle,
		headerStyle: () => {
			return { width: "20%" };
		},
	},
	{
		dataField: 'Premium',
		text: 'Premium',
		sort: false,
		classes: ColumnStyle,
		headerStyle: () => {
			return { width: "15%" };
		},
		formatter: colFormatter
	},
	{
		dataField: 'Status',
		text: 'Status',
		sort: false,
		classes: ColumnStyle,
		headerStyle: () => {
			return { width: "20%" };
		},
		formatter: colFormatter
	},
	{
		dataField: 'actions',
		text: 'ACTIONS',
		isDummyField: true,
		csvExport: false,
		headerStyle: () => {
			return { width: "10%" };
		},
		formatter: colFormatter
	}
];
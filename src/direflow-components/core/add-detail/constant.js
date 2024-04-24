const violationMasterData = [
	{
		"Id": "59",
		"State": "GA",
		"SISCode": "902",
		"Value": "Accident-AF",
		"Description": "Accident At Fault",
		"FirstOffense": "3",
		"SecondandMoreOffense": "4"
	},
	{
		"Id": "58",
		"State": "GA",
		"SISCode": "901",
		"Value": "Accident - NAF",
		"Description": "Accident Not At Fault",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "9",
		"State": "GA",
		"SISCode": "162",
		"Value": "Adm Action/DUI",
		"Description": "Adm Action/Refusal/DUI",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "70",
		"State": "GA",
		"SISCode": "515",
		"Value": "Agg Driving",
		"Description": "Agressive Driving",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "4",
		"State": "GA",
		"SISCode": "123",
		"Value": "Use Another Lic",
		"Description": "Allow Another to Use License/Mutilated",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "6",
		"State": "GA",
		"SISCode": "125",
		"Value": "Allow Mnr Oper",
		"Description": "Allow Minor to operate motor vehicle",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "36",
		"State": "GA",
		"SISCode": "582",
		"Value": "Assault",
		"Description": "Assault",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "35",
		"State": "GA",
		"SISCode": "581",
		"Value": "Attempt Elude",
		"Description": "Attempt to Elude Police",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "33",
		"State": "GA",
		"SISCode": "561",
		"Value": "Auto Felony Use",
		"Description": "Auto Used in commission of felony",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "38",
		"State": "GA",
		"SISCode": "621",
		"Value": "Brakes Reqd",
		"Description": "Brakes required",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "60",
		"State": "GA",
		"SISCode": "903",
		"Value": "CMP < $1,000",
		"Description": "CMP < $1,000",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "61",
		"State": "GA",
		"SISCode": "904",
		"Value": "CMP >= $1,000",
		"Description": "CMP >= $1,000",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "54",
		"State": "GA",
		"SISCode": "841",
		"Value": "Careless Drive",
		"Description": "Careless Driving",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "55",
		"State": "GA",
		"SISCode": "843",
		"Value": "Child Restraint",
		"Description": "Child Restraint Violation",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "31",
		"State": "GA",
		"SISCode": "551",
		"Value": "Crim Negl Homcd",
		"Description": "Criminally Negligent Homicide",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "29",
		"State": "GA",
		"SISCode": "521",
		"Value": "DUI",
		"Description": "DUI - Alcohol and/or Drugs",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "44",
		"State": "GA",
		"SISCode": "681",
		"Value": "Defective exhst",
		"Description": "Defective exhaust",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "53",
		"State": "GA",
		"SISCode": "828",
		"Value": "Drv Vision Obs",
		"Description": "Drivers vision obscured",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "52",
		"State": "GA",
		"SISCode": "825",
		"Value": "Drv thru barrcd",
		"Description": "Driving through barricade/closed road",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "3",
		"State": "GA",
		"SISCode": "121",
		"Value": "No Drivers Lic",
		"Description": "Driving while cancelled/No Drivers Lic",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "5",
		"State": "GA",
		"SISCode": "124",
		"Value": "Revoked Lic",
		"Description": "Driving while revoked/suspended",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "64",
		"State": "GA",
		"SISCode": "907",
		"Value": "Drv w/o Ins",
		"Description": "Driving without insurance",
		"FirstOffense": "1",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "10",
		"State": "GA",
		"SISCode": "223",
		"Value": "Fail Rpt Acc",
		"Description": "Failure to Report Accident",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "26",
		"State": "GA",
		"SISCode": "381",
		"Value": "Failure Signal",
		"Description": "Failure to Signal",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "16",
		"State": "GA",
		"SISCode": "322",
		"Value": "Fail to Stop",
		"Description": "Failure to Stop at Stop Sign",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "37",
		"State": "GA",
		"SISCode": "613",
		"Value": "Fail Dim Lghts",
		"Description": "Failure to dim lights",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "14",
		"State": "GA",
		"SISCode": "320",
		"Value": "Fail Heed Siren",
		"Description": "Failure to heed siren or blue lights",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "17",
		"State": "GA",
		"SISCode": "331",
		"Value": "Not Obey Traf",
		"Description": "Failure to obey trafic control/sign",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "49",
		"State": "GA",
		"SISCode": "811",
		"Value": "Fail Stop RR",
		"Description": "Failure to stop at railroad crossing",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "15",
		"State": "GA",
		"SISCode": "321",
		"Value": "Fail Yld R/W",
		"Description": "Failure to yield right of way",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "23",
		"State": "GA",
		"SISCode": "361",
		"Value": "Follow too clos",
		"Description": "Following too close",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "40",
		"State": "GA",
		"SISCode": "660",
		"Value": "Hours of Svc",
		"Description": "Hours of Service",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "42",
		"State": "GA",
		"SISCode": "671",
		"Value": "Illegal Towing",
		"Description": "Illegal towing",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "51",
		"State": "GA",
		"SISCode": "821",
		"Value": "Improper Backin",
		"Description": "Improper Backing",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "47",
		"State": "GA",
		"SISCode": "687",
		"Value": "Improper Equip",
		"Description": "Improper Equipment",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "19",
		"State": "GA",
		"SISCode": "333",
		"Value": "Improper Ln Chg",
		"Description": "Improper Lane Usage/Lane Change",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "48",
		"State": "GA",
		"SISCode": "712",
		"Value": "Improper Park",
		"Description": "Improper Parking",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "24",
		"State": "GA",
		"SISCode": "371",
		"Value": "Improper Pass",
		"Description": "Improper Passing",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "20",
		"State": "GA",
		"SISCode": "342",
		"Value": "Improper Turn",
		"Description": "Improper Turn",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "41",
		"State": "GA",
		"SISCode": "662",
		"Value": "Improp Load",
		"Description": "Improper load (shift/spill)",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "39",
		"State": "GA",
		"SISCode": "632",
		"Value": "Improper Tint",
		"Description": "Improper window tint",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "62",
		"State": "GA",
		"SISCode": "905",
		"Value": "Inexp ovr 18",
		"Description": "Inexperienced driver over 18",
		"FirstOffense": "2",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "2",
		"State": "GA",
		"SISCode": "120",
		"Value": "Juvenile",
		"Description": "Juvenile/Administrative Action",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "11",
		"State": "GA",
		"SISCode": "226",
		"Value": "Left Scene Acc",
		"Description": "Left Scene of Accident",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "32",
		"State": "GA",
		"SISCode": "552",
		"Value": "Manslaughter",
		"Description": "Manslaughter-2nd Degree",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "1",
		"State": "GA",
		"SISCode": "112",
		"Value": "No Tag",
		"Description": "No Tag or Improper Tag",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "43",
		"State": "GA",
		"SISCode": "672",
		"Value": "Obstr Traff",
		"Description": "Obstruction of traffic/Hwy loading",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "22",
		"State": "GA",
		"SISCode": "354",
		"Value": "One-Way Street",
		"Description": "One-Way Street",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "34",
		"State": "GA",
		"SISCode": "571",
		"Value": "Oper Veh No Con",
		"Description": "Operating MV without owners consent",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "50",
		"State": "GA",
		"SISCode": "820",
		"Value": "Other Traffic",
		"Description": "Other-Moving and Traffic",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "57",
		"State": "GA",
		"SISCode": "891",
		"Value": "Other Non-Movin",
		"Description": "Other-Non-Moving nor traffic violation",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "25",
		"State": "GA",
		"SISCode": "374",
		"Value": "Pass School bus",
		"Description": "Passed stopped school bus",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "30",
		"State": "GA",
		"SISCode": "532",
		"Value": "Open Container",
		"Description": "Possessing open container alcohol/drugs",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "13",
		"State": "GA",
		"SISCode": "316",
		"Value": "Racing on Hwy",
		"Description": "Racing on Highway",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "27",
		"State": "GA",
		"SISCode": "511",
		"Value": "Reckless Drvg",
		"Description": "Reckless Driving",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "28",
		"State": "GA",
		"SISCode": "513",
		"Value": "Reckless Endgmt",
		"Description": "Reckless Endangerment",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "8",
		"State": "GA",
		"SISCode": "134",
		"Value": "Refused Chm Tst",
		"Description": "Refused Chemical Test",
		"FirstOffense": "4",
		"SecondandMoreOffense": "7"
	},
	{
		"Id": "18",
		"State": "GA",
		"SISCode": "332",
		"Value": "Running Red Lt",
		"Description": "Running Red Light",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "65",
		"State": "GA",
		"SISCode": "908",
		"Value": "SR-22",
		"Description": "SR-22",
		"FirstOffense": "2",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "12",
		"State": "GA",
		"SISCode": "311",
		"Value": "Speeding",
		"Description": "Speeding",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "66",
		"State": "GA",
		"SISCode": "312",
		"Value": "Speed 0-18 over",
		"Description": "Speeding 1-18 over speed limit",
		"FirstOffense": "1",
		"SecondandMoreOffense": "1"
	},
	{
		"Id": "67",
		"State": "GA",
		"SISCode": "313",
		"Value": "Spd 19-33 over",
		"Description": "Speeding 19-33 mph over limit",
		"FirstOffense": "2",
		"SecondandMoreOffense": "2"
	},
	{
		"Id": "68",
		"State": "GA",
		"SISCode": "314",
		"Value": "Spd 34+ over",
		"Description": "Speeding 34+ mph over limit",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "45",
		"State": "GA",
		"SISCode": "684",
		"Value": "Tires",
		"Description": "Tires",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "69",
		"State": "GA",
		"SISCode": "165",
		"Value": "Wireless Device",
		"Description": "Unlawful Use of Wireless Device",
		"FirstOffense": "1",
		"SecondandMoreOffense": "2"
	},
	{
		"Id": "63",
		"State": "GA",
		"SISCode": "906",
		"Value": "Unver Drv Rec",
		"Description": "Unverifiable driving record",
		"FirstOffense": "3",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "46",
		"State": "GA",
		"SISCode": "685",
		"Value": "Veh Out of Svc",
		"Description": "Vehicle out of service",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "7",
		"State": "GA",
		"SISCode": "132",
		"Value": "Violating Restr",
		"Description": "Violating Restrictions",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	},
	{
		"Id": "21",
		"State": "GA",
		"SISCode": "351",
		"Value": "Wrg Side Road",
		"Description": "Wrong Side of Road",
		"FirstOffense": "3",
		"SecondandMoreOffense": "3"
	},
	{
		"Id": "56",
		"State": "GA",
		"SISCode": "861",
		"Value": "Youthful Offend",
		"Description": "Youthful offender",
		"FirstOffense": "0",
		"SecondandMoreOffense": "0"
	}
];

const ViolationDisputeReasonData = [
	{ key: "SelectDisputeReason", label: "Please Select", value: "" },
	{ key: "disputeReason1", label: "Not at Fault", value: "Not at Fault" },
	{ key: "disputeReason2", label: "Not My Claim", value: "Not My Claim" },
	{ key: "disputeReason2", label: "In Subrogation", value: "In Subrogation" },
	{ key: "disputeReason2", label: "Other", value: "Other" },
]

export { violationMasterData, ViolationDisputeReasonData };

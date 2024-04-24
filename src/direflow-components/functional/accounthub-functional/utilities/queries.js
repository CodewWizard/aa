import gql from 'graphql-tag';

export const GETACCOUNTHUB = gql`
query GetByFilter ($input: filters)
{
  getByFilter(input: $input) {
    id
    EffectiveDate
    ExpirationDate
    QuoteNumber
    PolicyNumber
    PolicyStatus
    Agency {
      Code
      Name
    }
    Agent {
      Code
      Name
    }
    UnderWriter {
      Code
      Name
    }
    InsuredAccount {
      BusinessInfo {
        BusinessName
        BusinessType
        FirstName
        MiddleName
        LastName
        Locations {
          Address {
            Number
            AddressType
            Description
            AddressLine1
            AddressLine2
            AptSuite
            City
            County
            CountyCode
            State
            PoBox
            Postalcode
            FormattedAddress
            UnFormattedAddress
            AdministrationArea1
            AdministrationArea2
            Locality
            Lat
            Long
            Street
            Name
            Premise
            Status
            Territory
            StreetName
            IsManual
            Business
            PlaceId
          }
          NickName
          LocationNumber
          IsValid
          Status
          Type
      }
      }
    }
    TotalPremium {
      AnnualPremium
    }
    Audit {
      CreatedBy
      CreatedOn
      LastUpdatedBy
      LastUpdatedOn
    }
    Transaction {
      Date
      Type
      Status
      Number
    }
    ExternalRefrences {
        ReferenceNumber
        ReferenceTarget
        Status
    }
    Attributes {
      AppSource
      isMaster
      Lob
    }
  }
}
`;
import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import DynamicForm from "../dynamic-form/dynamic-form";

const GooglePlacesAutoCompleteWithEdit = (props) => {
  const [manualAddressForm, setManualAddressForm] = useState({
    ...props.manualAddressFormModel,
  });

  const [address, setAddress] = useState("");
  const [addressType, setAddressType] = useState(props.addressType || "M");
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  
  // The base datamodel
  let dataModel = {
    "IsManual": false,
    "StreetName": "",
    "AddressLine1": "",
    "AddressLine2": "",
    "City": "",
    "State": "",
    "County": "",
    "CountyCode": "",
    "Zip": "",
    "Country": "",
    "CountryCode": "",
    "PlaceId": "",
    "Number": 0,
    "Name": "",
    "Long": "",
    "Lat": "",
    "Description": "",
    "AddressType": "M",
    "FormattedAddress": "",
    "UnFormattedAddress": "",
    "Status": "",
    "AptSuite": "",
    "PoBox": "",
    "CityCode": "",
    "Territory":"",
    "TerritoryCode": "",
    "StateCode": ""
  }

  const onGoogleComponentChange = (val) => {
    fetchAddress(val);
    // setAutoCompleteValue(null);
  };

  const getAddressObject = (address_components) => {
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: [
        "administrative_area_level_1",
        "administrative_area_level_2",
        "administrative_area_level_3",
        "administrative_area_level_4",
        "administrative_area_level_5",
      ],
      city: [
        "locality",
        "sublocality",
        "sublocality_level_1",
        "sublocality_level_2",
        "sublocality_level_3",
        "sublocality_level_4",
      ],
      country: ["country"],
      county: ["administrative_area_level_2"],
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: "",
      formatted: "",
      shortCountry: "",
      statecode: ""
    };
    if (address_components != undefined) {
      address_components.forEach((component) => {
        for (var shouldBe in ShouldBeComponent) {
          if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
            if ((shouldBe === "country" && props.isCountryShort)|| (shouldBe === "province" && props.isStateShort)) {
              address[shouldBe] = component.short_name;
            } else {
              address[shouldBe] = component.long_name;
            }
            if(shouldBe === "province"){
              address["statecode"] = component.short_name;
            }
            if(shouldBe === "country"){
              address["shortCountry"] = component.short_name;
            }
          }
        }
      });
    }
    
    address.address = address.street_number + " " + address.street;
    address.state = address.province;
    return address;
  };

  const displayAddressTogether = (obj, setIt=true) => {
    let tempaddress = "";
    let incField = props.includedFields;
    for(const indx in incField){
      if(obj[incField[indx]]?.trim()?.length > 0){
        if((incField[indx] == "State" && incField[parseInt(indx)+1] == "Zip") ){
          tempaddress = tempaddress.concat(`${obj[incField[indx]]}  `);
        }
        else{
          tempaddress = tempaddress.concat(`${obj[incField[indx]]}, `);
        }
      }
    }
    
    if(incField?.length == 0 || !incField){
      for(const ele of Object.keys(obj)){
        if(["AddressLine1", "AddressLine2", "City", "State", "Zip"].includes(ele) && obj[ele]?.toString()?.trim()?.length > 0){
          tempaddress = tempaddress.concat(`${obj[ele]}${ele != "State" ? ",": " "} `)
        }
      }
    }

    if(setIt){
      setAddress(tempaddress.substring(0, tempaddress.length - 2));
    }
    return tempaddress.substring(0, tempaddress.length - 2);
  }

  const onSaveAddress = () =>{
    const isValid = document.getElementById(props.controlKey || "manualAddressFormGAE").checkValidity();
    if(!isValid){
      return false;
    }
    props.onSaveAddress(manualAddressForm);
  }

  const fetchAddress = async (addressObj) => {
    try {
      let geocodeObj =
        addressObj && (await geocodeByPlaceId(addressObj?.value?.place_id));
      const _tempObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);

      const _addressObject =
        _tempObject === undefined ||
        _tempObject === null ||
        _tempObject === ""
          ? undefined
          : {
              IsManual: false,
              StreetName: `${_tempObject.street_number} ${_tempObject.street}`?.trim(),
              AddressLine1: _tempObject.address?.trim(),
              AddressLine2: "",
              City: _tempObject.city,
              State: _tempObject.state,
              County: _tempObject.county,
              CountyCode: "",
              Zip: _tempObject.postal_code,
              Country: _tempObject.country,
              CountryCode: _tempObject.shortCountry,
              PlaceId: addressObj?.value?.place_id,
              Number: 0,
              Name: "",
              Long: props.isLatLngString? geocodeObj[0]?.geometry?.location?.lng()?.toString() : geocodeObj[0]?.geometry?.location?.lng(),
              Lat: props.isLatLngString? geocodeObj[0]?.geometry?.location?.lat()?.toString() : geocodeObj[0]?.geometry?.location?.lat(),
              Description: "",
              AddressType: addressType || "M",
              FormattedAddress: geocodeObj[0]?.formatted_address, //address from google formatted_address
              UnFormattedAddress: addressObj?.label.includes(
                _tempObject.postal_code
              )
                ? addressObj?.label
                : addressObj?.label + ", " + addressObj?.label, // address in full address
              Status: "",
              AptSuite: "",
              PoBox: "",
              CityCode: "",
              Territory:"",
              TerritoryCode: "",
              "StateCode": _tempObject.statecode
            };
      if (addressObj != undefined && _addressObject != undefined) {
        let tempAddressObject = {..._addressObject, UnFormattedAddress: displayAddressTogether(_addressObject, false)}
        setManualAddressForm(tempAddressObject);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(props.manualAddressFormModel?.UnFormattedAddress == "" || props.isIterator){
      setManualAddressForm(props.manualAddressFormModel);
    }
  }, [props.manualAddressFormModel]);

  return (
    <>
      <div className="row">
        <div
          id="#/properties/addressautocomplete"
          name="locationTable"
          aria-label="locationTable"
          className="col-md-12"
          role="datatable"
        >
          <GooglePlacesAutocomplete
            key={`googleautocomplete-${props.controlKey}`}
            apiKey={props.apiKey}
            minLengthAutocomplete="3"
            onLoadFailed={(error) =>
              console.error("Could not inject Google script", error)
            }
            selectProps={{
              isClearable: true,
              value: autoCompleteValue,
              onChange: onGoogleComponentChange,
            }}
          />
        </div>

        <DynamicForm
          key="manualAddress"
          title=""
          formId={props.controlKey || "manualAddressFormGAE"}
          onChangeValidateForm="true"
          positionClass="form"
          titlePositionClass="form-title"
          formPositionClass="dynamic-form"
          actionsPositionClass="form-actions"
          submitPositionClass="btn btn-primary m-3 float-right"
          defaultValues={{ ...manualAddressForm }}
          validators={[]}
          model={props.manualAddressSchema}
          dataModel={{ ...manualAddressForm }}
          isInternalForm={props.isInternalForm}
          onSubmit={(model, e) => {}}
          onChange={(model, key) => {
            debugger;
            if(key?.length > 0){
              if(model && manualAddressForm && JSON.stringify(model) === JSON.stringify(manualAddressForm)) return;
              model.IsManual =true;
              key = props.controlKey+"-"+ key;
            }
            else{
              model.IsManual = false;
              key = "locationwithedit-"+ props.controlKey;
            }
            if(key === "addresstype"){
              setAddressType(model.AddressType);
            }
            model.UnFormattedAddress = displayAddressTogether(model)
            setManualAddressForm({...dataModel, ...manualAddressForm, ...model});
            props.setAddress({...dataModel, ...manualAddressForm, ...model}, key);
          }}
          onBlur={(model, key) => {}}
        />
        <div
          id="#/properties/unformattedDisplay"
          className={props.extras?.editParentClass || "d-flex justify-content-between align-items-center"}
        >
          <div className={props.isSaveBtn? "col-md-10 col-sm-10": props.extras?.editSubClass ? props.extras?.editSubClass: "col-md-12 col-sm-12"}>
            <label className={props.extras?.editLabelClass || ""} htmlFor="addressDisplay">{props.extras?.editLabelName || "Full Address"}</label>
            <input
              id="addressDisplay"
              type="text"
              readOnly
              value={address}
              className={props.extras?.editInpClass || "inputText col-xl-12 col-md-12 mb-4 align-self-end"}
              />
          </div>
          {props.isSaveBtn && <button type="button" className="btn btnStyle btnPrim" onClick={onSaveAddress}>SAVE</button>}
        </div>
      </div>
    </>
  );
};

export default GooglePlacesAutoCompleteWithEdit;

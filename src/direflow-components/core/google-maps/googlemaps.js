import React, { useState, useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import DataTable from '../data-table/datatable';
import ModalPopup from '../modal/modal';
import DynamicForm from "../dynamic-form/dynamic-form"
import "./googlemaps.scss"

const GoogleMaps = (props) => {
    // props.LocationTypes
    const [addresses, setAddresses] = useState([]);
    const [addressObj, setAddressObj] = useState(null);
    const [disableSave, setDisableSave] = useState(true);
    const [deleteModal, setDeleteModal] = useState(false);
    const [addressType, setAddressType] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [rows, setRows] = useState([]);
    const [deleteRowIndex, setDeleteRowIndex] = useState(-1);
    const [deleteRow, setDeleteRow] = useState({});
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    // 
    const [isAddressSelected, setIsAddressSelected] = useState(false);

    const [showManualAddressForm, setShowManualAddressForm] = useState(false);

    const [tempAddressObj, setTempAddressObj] = useState({});

    const [manualAddressForm, setManualAddressForm] = useState({ ...props.manualAddressFormModel });

    const toggleDeleteModal = () => setDeleteModal(!deleteModal);

    const ImageFormatter = (cell, row) => {
        return (
            (row.type == "Mailing Address") ?
                <img src={props.assets?.mailingaddress || props?.mailingImgPath} alt="Mailing Address" /> :
                (row.type == "Primary Garaging Address") ?
                    <img src={props.assets?.primarygarage || "images/primarygarage.png"} alt="Primary Garaging Address" /> :
                    (row.type == "Garaging Address") ?
                        <img src={props.assets?.garagingaddress || "images/pin-address.png"} alt="Garaging Address" /> : ""
        );
    }

    const LocationsActions = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div className='d-flex'>
                <a href="#" className="display-inblock" data-bs-toggle="tooltip" title="Edit Location"
                    onClick={(e) => onTableEdit(e, row, rowIndex)}>
                    <img className="m-1" src={props.assets?.edit || `images/edit-icon.png`} alt="" />
                </a>
                <a href="#" className="display-inblock" data-bs-toggle="tooltip" title="Delete Location"
                    onClick={(e) => onTableDelete(e, row, rowIndex)}>
                    <img className="m-1" src={props.assets?.delete || `images/delete-icon.png`} alt="" />
                </a>
            </div>
        );
    }

    const cols = [
        {
            dataField: 'type',
            text: 'TYPE',
            sort: false,
            headerStyle: () => {
                return { width: "10%" };
            },
            formatter: ImageFormatter
        },
        {
            dataField: 'address',
            text: 'ADDRESS',
            sort: false,
            headerStyle: () => {
                return { width: "90%" };
            }
        },
        {
            dataField: 'place_id',
            text: 'PLACE_ID',
            sort: false,
            hidden: true
        },
        {
            dataField: 'actions',
            text: 'Actions',
            isDummyField: false,
            csvExport: false,
            headerStyle: () => {
                return { width: "20%" };
            },
            formatter: LocationsActions
        }
    ];

    const onTableEdit = (e, row, rowIndex) => {
        e.preventDefault();
        setEditIndex(rowIndex);
        if(!row.isManual)   setAddressObj({ label: row.address, value: { description: row.address, place_id: row?.place_id } });
        setAddressType([row.type]);
        setDisableSave(false);
        setShowManualAddressForm(row.isManual);
        if (row.isManual) {
            setManualAddressForm(row.manualAddressForm);
        }
    }

    const onTableDelete = (e, row, rowIndex) => {
        e.preventDefault();
        setDeleteRowIndex(rowIndex);
        setDeleteRow(row);
        toggleDeleteModal();
    }

    const onGoogleComponentChange = (val) => {
        if (val?.label.length == 0)
            setDisableSave(true);
        else {
            setDisableSave(false);
            setAddressObj(val);
        }
    }

    const onCheckboxChanged = (e, selectedValue) => {
        let addressTypes = [...addressType];

        const index = addressTypes.indexOf(selectedValue);
        if (index > -1) {
            addressTypes.splice(index, 1);
        } else {
            addressTypes.push(selectedValue);
        }

        setAddressType(addressTypes);

        if (addressObj?.value?.description.length > 0) {
            let _tempaddobj = tempAddressObj;
            props.addObjType === "normal" ?
                _tempaddobj.Address.Description = selectedValue :
                _tempaddobj.Description = selectedValue;
            setTempAddressObj(_tempaddobj);
        }
    }

    const checkForDuplicateAddress = (type, isManual) => {
        let addressFoundIndex;
        if (isManual) {
            props.addObjType === "normal" ?
                addressFoundIndex = addresses.findIndex(x => x.Address.UnFormattedAddress === `${manualAddressForm.streetAddress}, ${manualAddressForm.city}, ${manualAddressForm.state}, ${manualAddressForm.zip}`
                    && type === x.Address.Description
                ) :
                addressFoundIndex = addresses.findIndex(x => x.UnFormattedAddress === `${manualAddressForm.streetAddress}, ${manualAddressForm.city}, ${manualAddressForm.state}, ${manualAddressForm.zip}`
                    && type === x.Description);
        } else {
            props.addObjType === "normal" ?
                addressFoundIndex = addresses.findIndex(x => x.Address.PlaceId === tempAddressObj.Address.PlaceId && type === x.Address.Description) :
                addressFoundIndex = addresses.findIndex(x => x.PlaceId === tempAddressObj.PlaceId && type === x.Description);
        }

        return addressFoundIndex > -1 && editIndex == -1 ? true : false;
    }

    const getBlankAddress = ()=> {
        return props.addObjType === "normal" ? {
            "NickName": "",
            "LocationNumber": "",
            "Type": "",
            "Address": {
                "Postalcode": "",
                "PlaceId": "",
                "Number": "",
                "Name": "",
                "Long": "",
                "Locality": "",
                "Lat": "",
                "Premise": "",
                "Description": "",
                "CountyCode": "",
                "County": "",
                "City": "",
                "Business": "",
                "AdministrationArea2": "",
                "AdministrationArea1": "",
                "Street": "",
                "FormattedAddress": "",
                "UnFormattedAddress": "",
                "Status": "",
                "PoBox": "",
                "AddressLine1": "",
                "AddressLine2": "",
                "AptSuite": "",
                "Territory": "",
                "State": "",
                "IsManual": true
            },
            "IsValid": false,
            "Status": ""
        } : {
            "AddressType": "M",
            "IsManual": false,
            "Postalcode": "",
            "PlaceId": "",
            "Number": "",
            "Name": "",
            "Long": "",
            "Locality": "",
            "Lat": "",
            "State": "",
            "PoBox": "",
            "AddressLine1": "",
            "AddressLine2": "",
            "AptSuite": "",
            "Territory": "",
            "Premise": "",
            "Description": "",
            "CountyCode": "",
            "County": "",
            "City": "",
            "Country": "",
            "CountryCode": "",
            "Addr2": "",
            "Business": "",
            "AdministrationArea2": "",
            "AdministrationArea1": "",
            "Street": "",
            "StreetName": "",
            "FormattedAddress": "",
            "UnFormattedAddress": "",
            "Status": ""
        };
    }

    const getFormattedAddress = ()=> {
        let _addressObject = getBlankAddress();
        debugger;
        if(editIndex > -1)  _addressObject = props.addObjType === "normal" ? addresses[editIndex] : addresses;
        debugger;
        if(props.addObjType === "normal") {
            _addressObject.LocationNumber = addresses.length;
            _addressObject.Address.Postalcode = manualAddressForm.zip;
            _addressObject.Address.PlaceId = _addressObject.Address.PlaceId || "ManualAddress_" + ((tempAddressObj.length || 0) + 1);
            _addressObject.Address.Number = _addressObject.Address.Number?.length > 0 ? _addressObject.Address.Number : addresses.length;
            _addressObject.Address.Description = addressType;
            _addressObject.Address.City = manualAddressForm.city;
            _addressObject.Address.FormattedAddress = manualAddressForm.streetAddress;
            _addressObject.Address.UnFormattedAddress = `${manualAddressForm.streetAddress}, ${manualAddressForm.city}, ${manualAddressForm.state}, ${manualAddressForm.zip}`;
            _addressObject.Address.State = manualAddressForm.state;
            _addressObject.Address.IsManual = true;
        } else {
            _addressObject.AddressType = "M";
            _addressObject.Postalcode = manualAddressForm.zip;
            _addressObject.IsManual = true;
            _addressObject.Number = addresses.length;
            _addressObject.Address.Description = addressType;
            _addressObject.City = manualAddressForm.city;
            _addressObject.FormattedAddress = manualAddressForm.streetAddress;
            _addressObject.UnFormattedAddress = `${manualAddressForm.streetAddress}, ${manualAddressForm.city}, ${manualAddressForm.state}, ${manualAddressForm.zip}`;
            _addressObject.State = manualAddressForm.state;
        }
        return _addressObject;
    }

    const onTableAdd = () => {
        debugger;
        let _addressObject;
        if (showManualAddressForm) {
            const isValid = document.getElementById("manualAddressForm").checkValidity()
            if (!isValid) {
                return false;
            } else {
                _addressObject = getFormattedAddress();

                if (addressObj != undefined && _addressObject != undefined) {
                    switch (props.type) {
                        case "array":
                            setTempAddressObj(_addressObject);
                            break;
                        case "string":
                            setTempAddressObj(_addressObject);
                            break;
                        case "object":
                            setTempAddressObj(_addressObject);
                            break;
                        default:
                            console.log("Default");
                    }
                }
            }
        }
        // if no addresstype is selected
        if(addressType?.length === 0){
            setIsAddressSelected(true);
            return;
        }

        let temprows = rows.length ? [...rows] : [];
        let tempAddresses = addresses.length ? [...addresses] : [];
        let isEditRecord = editIndex !== -1;
        addressType.forEach((type) => {
            if (props.type !== 'string' && checkForDuplicateAddress(type, showManualAddressForm)) {
                return false;
            } else {
                debugger;
                let tempaddressObj = !showManualAddressForm ? { ...tempAddressObj } : { ..._addressObject };

                if (props.addObjType === "normal") {
                    tempaddressObj.Address.Description = type;
                } else {
                    tempaddressObj.Description = type;
                }
                let newRow = props.addObjType === "normal" ? createData(new Date().valueOf(), tempaddressObj.Address.Description, tempaddressObj.Address.UnFormattedAddress + (tempaddressObj.Address.UnFormattedAddress.includes(tempaddressObj.Address.Postalcode) ?
                    '' : ', ' + tempaddressObj.Address.Postalcode), tempaddressObj.Address.PlaceId) :
                    createData(new Date().valueOf(), tempaddressObj.Description, tempaddressObj.UnFormattedAddress + (tempaddressObj.UnFormattedAddress.includes(tempaddressObj.Postalcode) ?
                        '' : ', ' + tempaddressObj.Postalcode), tempaddressObj.PlaceId);

                if (editIndex === -1) {
                    temprows.push(newRow);
                    tempAddresses.push(JSON.parse(JSON.stringify(tempaddressObj)));
                }
                else {
                    if (isEditRecord) {
                        isEditRecord = false;
                        temprows[editIndex] = newRow;
                        tempAddresses[editIndex] = JSON.parse(JSON.stringify(tempaddressObj));
                    } else {
                        temprows.push(newRow);
                        tempAddresses.push(JSON.parse(JSON.stringify(tempaddressObj)));
                    }
                }

                // check this
                // string -> unformatted address we need to send
                switch (props.type) {
                    case "array":
                        props.setAddress(tempAddresses);
                        break;
                    case "string":
                        let address = props.addObjType === "normal" ? tempaddressObj.Address.UnFormattedAddress : tempaddressObj.UnFormattedAddress;
                        props.setAddress(address);
                        break;
                    case "object":
                        props.setAddress(JSON.parse(JSON.stringify(tempaddressObj)));
                        break;
                    default:
                        console.log("Default");
                }
            }
        });

        // Make every Place_id unique
        temprows.forEach((row, rindx) => {
            let isSame = false;
            temprows.forEach((srow, sindx) => {
                if (sindx != rindx && srow.place_id == row.place_id) {
                    if (row.place_id.includes("ManualAddress_"))
                        isSame = "ManualAddress_";
                    else isSame = row.place_id;
                }
            });
            if (isSame) {
                row.place_id = `${isSame}_${rindx}`;
            }
        });
        tempAddresses.forEach((addr, aindx) => {
            let isSame = false;
            tempAddresses.forEach((srow, sindx) => {
                if (sindx != aindx && srow.Address.PlaceId == addr.Address.PlaceId) {
                    if (addr.Address.PlaceId.includes("ManualAddress_")) {
                        isSame = "ManualAddress_";
                    }
                    else isSame = addr.Address.PlaceId
                }
            });
            if (isSame) {
                addr.Address.PlaceId = `${isSame}_${aindx}`;
            }
        });

        setRows(temprows);
        setEditIndex(-1);
        setAddresses(tempAddresses);
        setAddressObj(null);
        setDisableSave(true);
        setShowManualAddressForm(false);
        setAddressType([]);
        setManualAddressForm({ ...props.manualAddressFormModel });
    }

    const createData = (id, type, address, place_id, isManual=showManualAddressForm, _address) => {
        let _manualAddressForm = JSON.parse(JSON.stringify(manualAddressForm));
        if(_address) {
            _manualAddressForm.streetAddress = _address?.Address?.AddressLine1 || _address?.Address?.FormattedAddress;
            _manualAddressForm.city = _address?.Address?.City;
            _manualAddressForm.state = _address?.Address?.State;
            _manualAddressForm.zip = _address?.Address?.Postalcode;
        }
        return { id, type, address, place_id, isManual, manualAddressForm : _manualAddressForm };
    };


    const confirmDelete = () => {
        // remove from list table
        const temp = [...rows];
        temp.splice(deleteRowIndex, 1);
        setRows(temp);

        // remove from return values
        const tempResp = [...addresses];

        let index = tempResp.findIndex(x => x.Address.PlaceId == deleteRow.place_id);
        tempResp.splice(index, 1);
        setAddresses(tempResp);
        props.setAddress(tempResp);
        setDeleteRowIndex(-1);
        setDeleteRow({});
        toggleDeleteModal();
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
                "administrative_area_level_5"
            ],
            city: [
                "locality",
                "sublocality",
                "sublocality_level_1",
                "sublocality_level_2",
                "sublocality_level_3",
                "sublocality_level_4"
            ],
            country: ["country"]
        };

        let address = {
            street_number: "",
            postal_code: "",
            street: "",
            province: "",
            city: "",
            country: "",
            formatted: ""
        };
        if (address_components != undefined) {
            address_components.forEach((component) => {
                for (var shouldBe in ShouldBeComponent) {
                    if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
                        if (shouldBe === "country" || shouldBe === "province") {
                            address[shouldBe] = component.short_name;
                        } else {
                            address[shouldBe] = component.long_name;
                        }
                    }
                }
            });
        }
        // Fix the shape to match our schema
        address.address = address.street_number + " " + address.street;
        delete address.street_number;
        delete address.street;
        if (address.country === "US") {
            address.state = address.province;
            delete address.province;
        }
        return address;
    };


    useEffect(() => {
        const fetchAddress = async () => {
            try {
                let geocodeObj = addressObj && (await geocodeByPlaceId(addressObj?.value?.place_id))
                const _tempObject = geocodeObj && getAddressObject(geocodeObj[0].address_components);

                // console.log(_tempObject);
                // console.log(addressObj);
                const _addressObject = (_tempObject === undefined || _tempObject === null || _tempObject === "") ? undefined : props.addObjType === "normal" ? {
                    "NickName": "",
                    "LocationNumber": addresses.length,
                    "Type": "",
                    "Address": {
                        "Postalcode": _tempObject.postal_code,
                        "PlaceId": addressObj?.value?.place_id,
                        "Number": addresses.length,
                        "Name": "",
                        "Long": "",
                        "Locality": "",
                        "Lat": "",
                        "Premise": "",
                        "Description": addressType,
                        "CountyCode": "",
                        "County": _tempObject.country,
                        "City": _tempObject.city,
                        "Business": "",
                        "AdministrationArea2": "",
                        "AdministrationArea1": "",
                        "Street": "",
                        "FormattedAddress": _tempObject.address,
                        "UnFormattedAddress": addressObj.label.includes( _tempObject.postal_code) ?  addressObj.label : (addressObj.label + ', ' + _tempObject.postal_code),
                        "Status": "",
                        "PoBox": "",
                        "AddressLine1": "",
                        "AddressLine2": "",
                        "AptSuite": "",
                        "Territory": "",
                        "State": _tempObject.state,
                        "IsManual": false,
                        "Country": _tempObject.country,
                        "AddressType": "M",
                        "CountryCode": "",
                        "Addr2": "",
                        "StreetName":"",
                    },
                    "IsValid": false,
                    "Status": ""
                } : {
                    "AddressType": "M",
                    "IsManual": false,
                    "Postalcode": _tempObject.postal_code,
                    "PlaceId": addressObj?.value?.place_id,
                    "Number": addresses.length,
                    "Name": "",
                    "Long": "",
                    "Locality": "",
                    "Lat": "",
                    "State": _tempObject.state,
                    "PoBox": "",
                    "AddressLine1": "",
                    "AddressLine2": "",
                    "AptSuite": "",
                    "Territory": "",
                    "Premise": "",
                    "Description": addressType,
                    "CountyCode": "",
                    "County": _tempObject.country,
                    "City": _tempObject.city,
                    "Country": "",
                    "CountryCode": "",
                    "Addr2": "",
                    "Business": "",
                    "AdministrationArea2": "",
                    "AdministrationArea1": "",
                    "Street": "",
                    "StreetName": "",
                    "FormattedAddress": _tempObject.address,
                    "UnFormattedAddress": addressObj?.label.includes(_tempObject.postal_code) ? addressObj?.label : (addressObj?.label + ', ' + addressObj?.label),
                    "Status": ""
                };

                if (addressObj != undefined && _addressObject != undefined) {
                    switch (props.type) {
                        case "array":{
                            setTempAddressObj(_addressObject);
                            console.log(_addressObject);
                            props.disableSaveButton && props.setAddress([...props.value, _addressObject]);
                            break;
                        }
                        case "string":{
                            setTempAddressObj(_addressObject);
                            let address = props.addObjType === "normal" ? _addressObject.Address.UnFormattedAddress : _addressObject.UnFormattedAddress;
                            props.setAddress(address);
                            break;
                        }
                        case "object":{
                            setTempAddressObj(_addressObject);
                            props.setAddress({...JSON.parse(JSON.stringify(_addressObject))?.Address});
                            break;
                        }
                        default:
                            console.log("Default");
                    }
                }
            } catch(err) {
                console.error(err);
            }
        };
        fetchAddress();
    }, [addressObj]);

    useEffect(() => {
        if (props.type == "array") {
            if (JSON.stringify(props.value) !== JSON.stringify(addresses)) {
                // Make every Place_id unique
                let tempAddresses = [...props.value];
                tempAddresses.forEach((addr, aindx) => {
                    let isSame = false;
                    tempAddresses.forEach((srow, sindx) => {
                        if (sindx != aindx && srow.Address.PlaceId == addr.Address.PlaceId) {
                            if (addr.Address.PlaceId.includes("ManualAddress_")) {
                                isSame = "ManualAddress";
                            }
                            else isSame = addr.Address.PlaceId
                        }
                    });
                    if (isSame) {
                        addr.Address.PlaceId = `${isSame}_${aindx}`;
                    }
                });
                setAddresses(tempAddresses);
                onInitialLoad();
            }
            // setIsInitialLoad(false);
        }
    }, [props.value]);

    const onInitialLoad = () => {
        let tableRows = [];
        tableRows = props.value.map((_address, index)=>{
            if (props.addObjType === "normal") return createData(index, _address?.Address.Description, _address?.Address.UnFormattedAddress, _address?.Address.PlaceId, _address?.Address.IsManual, _address);
            else return createData(index, _address?.Description, _address?.UnFormattedAddress, _address?.PlaceId, _address?.IsManual, _address);
        });
        // Make every Place_id unique
        tableRows.forEach((row, rindx) => {
            let isSame = false;
            tableRows.forEach((srow, sindx) => {
                if (sindx != rindx && srow.place_id == row.place_id){
                    if(row.place_id.includes("ManualAddress_"))
                        isSame = "ManualAddress";
                    else isSame = row.place_id;
                }
            });
            if (isSame) {
                row.place_id = `${isSame}_${rindx}`;
            }
        });
        setRows(tableRows);
    };

    return (
        <>
            <div className='row'>
                {
                    !showManualAddressForm && <div id='#/properties/addressautocomplete' name="locationTable" aria-label="locationTable" className={props.showManualAddressEnableOption ? 'col-xl-8' : "col-md-12"} role="datatable">
                        <GooglePlacesAutocomplete
                            apiKey={props.apiKey}
                            minLengthAutocomplete="3"
                            onLoadFailed={(error) => (console.error("Could not inject Google script", error))}
                            selectProps={{
                                isClearable: true,
                                value: addressObj,
                                onChange: onGoogleComponentChange
                            }}
                            disabled={showManualAddressForm}
                        />
                    </div>
                }
                {
                    props.showManualAddressEnableOption && <div className="form-group-checkbox col-xl-4 mt-xl-0 mt-sm-3">
                        <div key={"cfr"} className="form-check form-switch ps-0">
                            <label htmlFor="manualAddress" key="manualAddressLabel" className="form-check-label">Add Address Manually</label>

                            <input
                                className="form-check-input"
                                id="manualAddress"
                                type="checkbox"
                                key="manualAddress"
                                name="manualAddress"
                                checked={showManualAddressForm}
                                style={{ marginLeft: "10px" }}
                                onChange={(e) => {
                                    setShowManualAddressForm(x => !x);
                                    setManualAddressForm(props.manualAddressFormModel);
                                }}
                            />
                        </div>
                    </div>
                }
            </div>
            {
                showManualAddressForm &&
                <>
                    <DynamicForm
                        key="manualAddress"
                        title=""
                        formId="manualAddressForm"
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
                        onSubmit={(model, e) => {
                            // e.preventDefault();
                            // console.log(model, e, '232');
                            // onTableAdd();
                        }}
                        onChange={(model, key) => {
                            setManualAddressForm(model);
                            if(props.type === "object"){
                                props.setAddress({ ...model, IsManual: showManualAddressForm}, key, "manual");
                            }
                        }}
                        onBlur={(model, key) => {
                        }}
                    />
                </>
            }

            <>

                <div className='row align-items-center mb-2'>
                    {props.LocationTypes.length > 0 &&
                        <div className='col-md-9'>
                            <div className='row'>
                                {
                                    props.LocationTypes.map((loc, indx) => {
                                        return (
                                            <div className="customRadio col-xl-4 col-md-6 m-0" onClick={(e) => onCheckboxChanged(e, loc)}>
                                                <input
                                                    className="customCheck d-flex"
                                                    type="checkbox"
                                                    checked={addressType.includes(loc) ? true : false}
                                                />
                                                <label htmlFor={loc} key={"ll" + indx}>{loc}
                                                </label>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    }
                    {(props.disableSaveButton == undefined || props.disableSaveButton != true)  &&
                        <div className='col-md-3' style={{ textAlign: 'right' }}>
                            {disableSave && !showManualAddressForm ?
                                <button type="button" className="btn btnStyle btnClose me-0" onClick={onTableAdd} disabled>SAVE</button> :
                                <button type="button" className="btn btnStyle btnPrim me-0" onClick={onTableAdd}>SAVE</button>
                            }
                        </div>
                    }
                </div>

                <ModalPopup
                    type="confirm"
                    size="md"
                    successLabel="DELETE"
                    closeLabel="CANCEL"
                    showModal={deleteModal}
                    setShowModal={setDeleteModal}
                    message="Are you sure to delete the location?"
                    onClose={() => { setDeleteModal(false) }}
                    onSuccess={confirmDelete}
                />

                {/* Modal Popup if mailing address or garage address not selected */}
                <ModalPopup
                    type="alert"
                    size="md"
                    successLabel="Close"
                    closeLabel="Close"
                    header="Error"
                    showModal={isAddressSelected}
                    setShowModal={setIsAddressSelected}
                    id="errorModal"
                    html={props.addressErrorMessage || "Please Select atleast one address type"}
                    onSuccess={() => setIsAddressSelected(false)}
                />

                {/* Address List Grid */}
                {
                    props.type === "array" && <div>
                        <DataTable cols={cols} rows={rows} isBordered={false} needPagination={false} tableKey={"id" + rows.length} />
                    </div>
                }
            </>
        </>
    );
}

export default GoogleMaps;

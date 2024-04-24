import React, { Fragment, useEffect, useState } from "react";
import GoogleMaps from "../google-maps/googlemaps";
import DateTimePicker from "react-datetime-picker";
import ToggleButtonComponent from "../toggle-button/togglebutton";
import Dropdown from "../dropdown/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faExclamationCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ReactHtmlParser from "react-html-parser";
import MaskedInput from "../masked-input/masked-input";
import moment from "moment";
import RadioButton from "../buttonlist/buttonlist";
import LineOfBusiness from "../lob/lob";
import GooglePlacesAutoCompleteWithEdit from "../googleplacesautocomplete-with-edit/autocompletewithedit";
import AddDataToTable from "../add-data-to-table/addDataToTable";
import jsonata from "jsonata";
import IntegrationInput from "../../functional/integration-input/integration";

const DynamicForm = (props) => {
  let title = props.title || "";
  const [schema, setSchema] = useState(props.model);
  const [state, setState] = useState(props.dataModel);
  const [lastChangedKey, setLastChangedKey] = useState("");
  const [groupControls, setGroupControls] = useState(null);
  const [groupControlsIndex, setGroupControlsIndex] = useState(null);
  const[showWidget,setShowWidget] =useState(false)
  // const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (props.onChange) props.onChange(state, lastChangedKey);
    const checkIfAnyIterator = props.model.filter(
      (x) => x.type === groupTypes.iterator
    );
    debugger;
    addIteratorExistingControls(checkIfAnyIterator);
  }, [state, lastChangedKey]);

  useEffect(() => {
    // JSON.stringify(state) !== JSON.stringify(props.dataModel) && setState(props.dataModel);
    if (JSON.stringify(state) !== JSON.stringify(props.dataModel)) {
      setState(props.dataModel);
      setLastChangedKey("");
    }
    const checkIfAnyIterator = props.model.filter(
      (x) => x.type === groupTypes.iterator
    );
    addIteratorExistingControls(checkIfAnyIterator);
  }, [props.dataModel]);

  useEffect(() => {
    setSchema(props.model);
  }, [props.model]);

  const groupTypes = {
    card: "Card",
    iterator: "iterator",
  };

  const controlTypes = {
    icon: "icon", //p
    file: "file",
    date: "date",
    date2: "date2",
    text: "text",
    radio: "radio",
    phone: "phone",
    image: "image", //p
    label: "label",
    email: "email",
    month: "month",
    switch: "switch",
    select: "select",
    button: "button", //p
    toggle: "toggle",
    number2: "number2",
    textPA: "textPA",
    textS: "textS",
    textAN: "textAN",
    currency: "currency",
    textarea: "textarea",
    checkbox: "checkbox",
    location: "location",
    multiselect: "multi-select",
    staticContent: "staticContent",
    groupedselect: "grouped-select",
    searchdropdown: "search-dropdown",
    dynamicContent: "dynamicContent",
    buttonlist: "buttonlist",
    lob: "lob",
    locationwithedit: "locationwithedit",
    adddatatotable: "adddatatotable",
    integrationinput: "integrationinput"
  };

  const inputInvalidate = (e, errorMessage, required) => {
    debugger;
    if ((required === true || required === "true"  ) &&( e?.target?.value?.trim()==="" || e.target?.checked)) {
      e.target.classList.add("error-show");
      e.target.setCustomValidity(
        errorMessage || "Please enter a valid input for this field"
      );
      props.toastHandler && props.toastHandler(e, errorMessage, required);
    } else // if (required === false || required === "false")
    {
      if (typeof e != "object") {
        return;
      }
      e.target.classList.remove("error-show");
      e.target.setCustomValidity("");
    }
  };

  const validateJSONata = async (expression, data) => {
    expression = jsonata(expression);
    const result = await expression.evaluate(data);
    return result;
  }

  const validate = async () => {
    let errors = {};
    const validators = props.validators;
    let gotError = false;

    for(const component of validators){
      let fieldValue = getValueFromStatetByPath(component.key);

      for(const condition of component.validations){
        let r;
        if(condition.expression)  r = await validateJSONata(condition.expression, state);
        else  r = condition.validator(fieldValue, state);

        if (!r && !gotError) {
          if (errors[component.key] == undefined) {
            errors[component.key] = [];
          }
          errors[component.key].push(condition.message);
          gotError = true;
        }
      }
    }
    // validators.forEach((component) => {
    //   let fieldValue = getValueFromStatetByPath(component.key);
    //   component.validations.forEach((condition) => {
    //     let r;
    //     if(condition.expression)  r = validateJSONata(condition.expression, state);
    //     else  r = condition.validator(fieldValue, state);

    //     if (!r && !gotError) {
    //       if (errors[component.key] == undefined) {
    //         errors[component.key] = [];
    //       }
    //       errors[component.key].push(condition.message);
    //       gotError = true;
    //     }
    //   }, this);
    // });
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = await validate();
    if (Object.entries(errors).length !== 0) {
      if (props.onError) props.onError(e, state, errors);
      return false;
    }
    if (props.onSubmit) props.onSubmit(state, e);
  };

  const getValueFromStatetByPath = (path) => {
    return path
      ?.split(".")
      .reduce((o, key) => (o && o[key]
        // ?.toString()
        ? o[key] : null), state);
  };

  const isValidKey = function (key) {
    return key !== "__proto__" && key !== "constructor" && key !== "prototype";
  };

  const setPath = function (obj, path, value, delimiter) {
    var arr;
    var key;
    if (!obj || typeof obj !== "object") obj = {};
    if (typeof path === "string") path = path.split(delimiter || ".");
    if (Array.isArray(path) && path.length > 0) {
      arr = path;
      key = arr[0];
      if (isValidKey(key)) {
        if (arr.length > 1) {
          arr.shift();
          obj[key] = setPath(obj[key], arr, value, delimiter);
        } else obj[key] = value;
      }
    }
    return obj;
  };

  // Dependent input Calculator
  const dependentInputCalculator = async (calculativeExp, newValue, path, fObj) => {
    if (calculativeExp?.length) {
      newValue = `${newValue}`.trim();
      for (const item of calculativeExp) {
        let calculatedValue = item.defaultValue == undefined ? 0 : item.defaultValue;
        if (item.isIterator) {
          item.path = `${item.parentPath}.${item.path.replace("@iteratorIndex", path.split(`${item.parentPath}.`)?.[1]?.split(".")[0])}`
        }
        if (newValue != "" && newValue != null && newValue != undefined) {
          let exp = item.exp.replace(/{exp}/g, parseFloat(newValue));
          calculatedValue = await validateJSONata(exp, state);
        }
        fObj[item.path] = calculatedValue;
      }
    }
  }

  const setValueToStateByPath = async (key, path, newValue, type, temppath, calculativeExp) => {
    var object = { ...state };

    if (props.calculativeExp && props.calculativeExp[key]) {
      calculativeExp = props.calculativeExp[key];
    }

    if (// for array
      // path.includes("Location") ||
      type == "adddatatotable" ||
      type == "location" ||
      path.includes("Locations") ||
      path == "addObj" ||
      type === controlTypes.searchdropdown ||
      type === controlTypes.multiselect ||
      (type == "multiple" && type != controlTypes.toggle) ||
      path.includes("IncorporationAge") ||
      type === controlTypes.groupedselect
    ) {
            object = setPath(object, path, newValue, ".");

      // It is for clearing the input fields
      if(type == "adddatatotable"){
        object = setPath(object, temppath, {}, ".");
      }

      if ((type === controlTypes.searchdropdown) && calculativeExp) {
        var fObj = flattenObj(object);
        await dependentInputCalculator(calculativeExp, newValue, path, fObj);
        object = unflatten(fObj);
      }

      setState(object);
    } else { //for object
      var fObj = flattenObj(object);
      fObj[path] = newValue;

      if(calculativeExp){
        await dependentInputCalculator(calculativeExp, newValue, path, fObj);
      }

      var uObj = unflatten(fObj);
      setState(uObj);
    }
  };

  const flattenObj = (obj, parent, res = {}) => {
    for (const key in obj) {
      const propName = parent ? parent + "." + key : key;
      if (
        (obj[key] != undefined || obj[key] != null) &&
        typeof obj[key] === "object" &&
        ((Array.isArray(obj[key]) && obj[key].length > 0) ||
          Object.keys(obj[key]).length != 0)
      ) {
        flattenObj(obj[key], propName, res);
      } else res[propName] = obj[key];
    }
    return res;
  };

  const hasError = (path) => {
    let hasErrors = false;
    if (props?.Errors?.length > 0) {
      props.Errors.forEach((f) => {
        if (path?.includes(f)) hasErrors = true;
      });
    }
    return hasErrors;
  };

  const unflatten = (data) => {
    const result = {};
    for (const i in data) {
      const keys = i.split(".");
      keys.reduce(function (r, e, j) {
        return (
          r[e] ||
          (r[e] = isNaN(Number(keys[j + 1]))
            ? keys.length - 1 === j
              ? data[i]
              : {}
            : [])
        );
      }, result);
    }
    return result;
  };

  const onChange = (e, key, path, type = "single", dateFormat = "yyyy-MM-DD", calculativeExp) => {

    setLastChangedKey(key);

    // remove required error
    if (
      ![
        controlTypes.toggle,
        controlTypes.location,
        controlTypes.date,
        controlTypes.searchdropdown,
        controlTypes.multiselect,
        controlTypes.groupedselect,
        controlTypes.buttonlist,
        controlTypes.lob,
        controlTypes.adddatatotable
      ].includes(type)
    ) {
      e.target.classList.remove("error-show");
      e.target.setCustomValidity("");
    }

    // set Value By Path 
    if (
      [
        controlTypes.currency,
        controlTypes.phone,
        controlTypes.lob,
        controlTypes.buttonlist,
        "single",
      ].includes(type)
    ) {
      if ([controlTypes.currency, controlTypes.phone].includes(type)) {
        setValueToStateByPath(key, path, e.target.rawValue, type, null, calculativeExp);
      } else if (e?.target?.type == controlTypes.checkbox)
        setValueToStateByPath(key, path, e.target.checked ? "true" : "false");
      else if (e?.target?.type == controlTypes.file)
        setValueToStateByPath(key, path, e.target.files);
      else if (type == controlTypes.buttonlist)
        setValueToStateByPath(key, path, e);
      else if (type == controlTypes.lob) setValueToStateByPath(key, path, e);
      else setValueToStateByPath(key, path, e.target.value, type, null, calculativeExp);
    }
    else if (type === controlTypes.location)
      setValueToStateByPath(key, path, e, type);
    else if (type == controlTypes.adddatatotable) {
      setValueToStateByPath(key, path, e, type, dateFormat);//dateFormat is the temppath for datatable 
    }
    else if (type == controlTypes.toggle)
      setValueToStateByPath(key, path, e, type);
    else if (type == controlTypes.date) {
      try {
        // let testDate = new Date(e);
        if (e === "clearDate") {
          setValueToStateByPath(key, path, "");
        }
        else if (e) {
          let dateString = moment(e).format(dateFormat);
          // let dateString =
          //   e.getFullYear().toString().padStart(2, "0") +
          //   "-" +
          //   (e.getMonth() + 1).toString().padStart(2, "0") +
          //   "-" +
          //   e.getDate().toString().padStart(2, "0");
          setValueToStateByPath(key, path, dateString);
        }
      } catch (err) {}
    } else if (
      [
        controlTypes.searchdropdown,
        controlTypes.multiselect,
        controlTypes.groupedselect,
      ].includes(type)
    )
      setValueToStateByPath(key, path, e, type, null, calculativeExp);
    else {
      let currentValue = getValueFromStatetByPath(path);
      currentValue = Array.isArray(currentValue) ? currentValue : [];
      let found = currentValue.find((d) => d === e.target.value);
      if (found) {
        let data = currentValue.filter((d) => {
          return d !== found;
        });
        setValueToStateByPath(key, path, data, type);
      } else
        setValueToStateByPath(
          key,
          path,
          [e.target.value, ...currentValue],
          type
        );
    }
  };

  function evaluateRules(rules, key = "") {
    var singleRule = "";
    var singleRuleResult = "";
    var result = [];
    var connectors = [];
    for (var val of rules) {
      if (val.exp.toLowerCase() == "includes") {
        if(val.isTargetValue){
          singleRule =
            "state."+val.src + ".includes('" + val.target + "')";
        }
        else{
          singleRule =
            "state."+val.src + ".includes('" + getValueFromStatetByPath(val.target) + "')";
        }

      } else if (val.exp.toLowerCase() == "any") {
        singleRule =
          getValueFromStatetByPath(val.src).findIndex(eval(val.target)) > -1;
      } else {
        let lhs = getValueFromStatetByPath(val.src);
        let rhs = val.needRefComp
          ? getValueFromStatetByPath(val.target)
          : val.target;
        singleRule =
          !isNaN(lhs) && !isNaN(rhs)
            ? `${lhs} ${val.exp} ${rhs}`
            : `'${lhs}' ${val.exp} '${rhs}'`;
      }
      result.push(eval(singleRule));
      connectors.push(val.connector);
    }
    for (let i = 0; i < result.length; i++) {
      let connector = i < connectors.length - 1 ? connectors[i] : "";
      singleRuleResult = singleRuleResult + result[i] + connector;
    }
    const rulesResult = eval(singleRuleResult);
    const finalResult = rulesResult ? "true" : "false";
    return finalResult;
  }

  const setModelCallBack = (updatedModel) => {
    updatedModel ?? setState(updatedModel);
  };

  const executeEvent = (e, events, currentEventType, key) => {
    if (typeof window !== "undefined") {
      if (events?.length > 0 && events.find((e) => e.type == currentEventType))
        return eval(
          events
            .find((e) => e.type == currentEventType)
            .event(e, state, setModelCallBack, null)
        );
      else return () => { };
    }
  };

  const validateEmail = (key, required) => {
    // const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~@-]+$/;
    if (!emailRegex.test(key)) {
      inputInvalidate(key, "Invalid email format", required);
      // alert("Please enter a valid email address");
      // event.preventDefault();
    }
    return !emailRegex.test(key);
  };

  const blockInvalidCharForEmailField = (e) =>
    ["Backspace", "Delete"].includes(e.key) ||
    (validateEmail(e.key) && e.preventDefault());

  const validateAlphaNumeric = (key) => {
    const alphabetRegex = /^[a-zA-Z0-9]*$/;
    return !alphabetRegex.test(key);
  };

  const blockInvalidCharForAlphaNumericField = (e) =>
    ["Backspace", "Delete", " ", "."].includes(e.key) ||
    (validateAlphaNumeric(e.key) && e.preventDefault());

  const validateSerials = (key) => {
    const alphabetRegex = /^[a-zA-Z0-9]*$/;
    return !alphabetRegex.test(key);
  };

  const blockInvalidCharForSerialsField = (e) =>
    ["Backspace", "Delete"].includes(e.key) ||
    (validateSerials(e.key) && e.preventDefault());

  const validatePureAlpha = (key) => {
    const alphabetRegex = /^[a-zA-Z]*$/;
    return !alphabetRegex.test(key);
  };

  const blockInvalidCharForPureAlphaField = (e) =>
    ["Backspace", "Delete", " "].includes(e.key) ||
    (validatePureAlpha(e.key) && e.preventDefault());

  // DateTimePicker start
  const setDateInitialValue =(e, key, path, type, maxDate, minDate, momentFormat, setDefaultDate = true)=>{
    setShowWidget(true);

    if(!setDefaultDate) return;

    if(e?.length === 0){
      let todaysDate = moment();
      if(minDate > todaysDate){
        onChange(minDate, key, path, type, momentFormat);
      }
      else if(maxDate < todaysDate){
        onChange(maxDate, key, path, type, momentFormat);
      }
      else{
        onChange(todaysDate, key, path, type, momentFormat);
      }
    }
    // if(e?.target?.type != "button" && e?.target?.value?.length === 0){
    //   let todaysDate = moment();
    //   if(minDate > todaysDate){
    //     onChange(minDate, key, path, type);
    //   }
    //   else if(maxDate < todaysDate){
    //     onChange(maxDate, key, path, type);
    //   }
    //   else{
    //     onChange(todaysDate, key, path, type);
    //   }
    // }
    setLastChangedKey(key);
  }

  const handleKeyPress = (e) => {
    debugger;
    if (e.key === 'Enter'|| e.key === 'Tab') {
      // e.preventDefault(); 
      setShowWidget(false)
    }
  }
  // DateTimePicker end
  const convertText = (val, type) => {
    if(type == "uppercase"){
      return val?.toUpperCase();
    }
    else if(type == "lowercase"){
      return val?.toLowerCase();
    }
    else if(type == "capitalize"){
      debugger;
      return val.split(" ").map((i)=>{
        if(i.length>0)
          return i.charAt(0)?.toUpperCase() + i.slice(1)?.toLowerCase();
      }).join(" ");
    }
    return val;
  }


  const renderControls = (controls) => {
    const excludeTypes = [
      controlTypes.image,
      controlTypes.button,
      controlTypes.icon,
      controlTypes.label,
    ];
    let groupUI = controls.map((m) => {
      let key = m.key;
      let target = key;
      let name = m.name;
      let value = m.value;
      let events = m.events;
      let path = m.dataPath;
      let isTooltip = m.isTooltip;
      let type = m.type || controlTypes.text;
      let labelClass = m.labelClass;
      let inputClass = m.inputClass;
      let elementprops = m.props || {};
      let needMultiple = m.needMultiple;
      let positionClass = m.positionClass;
      let toolTipMessage = m.toolTipMessage;
      let needColummnDisplay = m.isColummnDisplay;
      let conditionalDisplay = m.conditionalDisplay;
      let conditionalDisabled = m.conditionalDisabled;
      let conditionalReadOnly = m.conditionalReadOnly;
      let placement = m.toolTipPlacement;
      let required = m.props?.required;
      let calculativeExp = m.calculativeExp;

      if (hasError(path) && !elementprops["class"].includes("error-show"))
        elementprops["class"] = elementprops["class"] + " error-show";

      if (hasError(path) && !props["class"].includes("error-show"))
        props["class"] = props["class"] + " error-show";

      let displayRule =
        conditionalDisplay != undefined
          ? evaluateRules(conditionalDisplay, key)
          : "true";

      value = excludeTypes.includes(type)
        ? value
        : getValueFromStatetByPath(path) || "";

      let disabledRule =
        conditionalDisabled != undefined
          ? evaluateRules(conditionalDisabled, key)
          : m?.props?.disabled
            ? "true"
            : "false";
      let readOnlyRule =
        conditionalReadOnly != undefined
          ? evaluateRules(conditionalReadOnly, key)
          : m?.props?.readOnly
            ? "true"
            : "false";

      const popover = toolTipMessage != undefined && (
        <Popover id="popover" style={{ zIndex: 1 }} className={m?.toolTipParentClass || ""}>
          <Popover.Content
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 5,
              padding: "10px",
            }}
          >
            {ReactHtmlParser(toolTipMessage)}
          </Popover.Content>
        </Popover>
      );
      let input = null;
      switch (type) {
        case controlTypes.icon: {
          input = (
            <Fragment key={"cfr" + key}>
              <span
                {...elementprops}
                type={type}
                key={key}
                name={name}
                onClick={(e) => {
                  if (key.startsWith("iterator-remove")) {
                    onIteratorRemoveRow(name);
                    setLastChangedKey(key);
                  } else {
                    if (props.onElementClick) props.onElementClick(e, key);
                  }
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </Fragment>
          );
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.file: {
          input = (
            <input
              id={key}
              key={key}
              type={type}
              name={name}
              {...elementprops}
              onChange={(e) => {
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              // onInvalid={(e) => { e.currentTarget.classList.add("error-show"); }}
              onBlur={(e) => {
                executeEvent(e, events, "onBlur", key);
              }}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
            />
          );
          break;
        }
        case controlTypes.image: {
          input = (
            <Fragment key={"cfr" + key}>
              <image {...elementprops} />
            </Fragment>
          );
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.date: {
          input = (
            <DateTimePicker
              id={key}
              type={type}
              {...elementprops}
              disableClock={true}
              format={m.props?.format ||  "MM/dd/yyyy"}
              maxDate={new Date(elementprops["maxDate"]) || ""}
              minDate={elementprops["minDate"]? new Date(elementprops["minDate"]) :  new Date("1900-01-01T00:00:00.000Z")}
              value={value ?  moment(value).format(m.props?.momentFormat || "MM/DD/yyyy"): ""}
              // onFocus = {(e)=>{setDateInitialValue(e, key, path, "date", moment(elementprops["maxDate"]), moment(elementprops["minDate"]))}}
              onChange={(e) => {
                onChange(e === null ? "clearDate" : e, key, path, "date", m.props?.momentFormat || "yyyy-MM-DD");
                executeEvent(e, events, "onChange", key);
                setShowWidget(false);
              }}
              onKeyDown={handleKeyPress}
              locale={m.props?.locale || "en-US"}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => {
                e.currentTarget.classList.add("error-show");
              }}
              onBlur={(e) => {
                executeEvent(e, events, "onBlur", key);
              }}
              isCalendarOpen={lastChangedKey == key?  showWidget : false}
              onCalendarOpen={()=>setDateInitialValue(value, key, path, "date", moment(elementprops["maxDate"]), moment(elementprops["minDate"]), m.props?.momentFormat || "yyyy-MM-DD", m.props?.setDefaultDate)}
            />
          );
          break;
        }
        case controlTypes.date2: {
          input = (
            <DateTimePicker
              id={key}
              type={type}
              {...elementprops}
              disableClock={true}
              format={m.props?.format ||  "MM/dd/yyyy"} // for new date()
              maxDate={moment(elementprops["maxDate"]).toDate() || ""}
              minDate={elementprops["minDate"]? moment(elementprops["minDate"]).toDate() :  moment("1900-01-01T00:00:00.000Z").toDate()}
              value={value ?  moment(value).toDate(): ""}
              onChange={(e) => {
                onChange(e === null ? "clearDate" : e, key, path, "date", m.props?.momentFormat || "YYYY-MM-DD");
                executeEvent(e, events, "onChange", key);
                setShowWidget(false);
              }}
              onKeyDown={handleKeyPress}
              locale={m.props?.locale || "en-US"}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => {
                e.currentTarget.classList.add("error-show");
              }}
              onBlur={(e) => {
                executeEvent(e, events, "onBlur", key);
              }}
              isCalendarOpen={lastChangedKey == key?  showWidget : false}
              onCalendarOpen={()=>setDateInitialValue(value, key, path, "date", moment(elementprops["maxDate"]), moment(elementprops["minDate"]), m.props?.momentFormat || "YYYY-MM-DD", m.props?.setDefaultDate)}
            />
          );
          break;
        }
        case controlTypes.label: {
          input = (
            <Fragment key={"cfr" + key}>
              <label
                {...elementprops}
                key={key}
                className="inputLabel primaryColor4 p-0"
              >
                {value}
              </label>
              {m?.label?.length > 0 && (
                <>
                  <label className={m.labelClass}>
                    {m?.label}
                    {isTooltip && (
                      <OverlayTrigger
                        placement={placement}
                        trigger={m.toolTipTrigger || "click"}
                        overlay={popover}
                      >
                        <a id="popover" className="ps-2">
                          <FontAwesomeIcon icon={m.isToopTipExclamation ?  faExclamationCircle : faCircleQuestion} size="1x"
                            color={m.props?.primaryColor} />
                        </a>
                      </OverlayTrigger>
                    )}
                  </label>
                </>
              )}
            </Fragment>
          );
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.month: {
          input = (
            <input
              key={key}
              id={key}
              type={type}
              name={name}
              value={value}
              {...elementprops}
              onKeyDown={(e) => {
                if (e.key != "Tab") {
                  e.preventDefault();
                  return false;
                } else return true;
              }}
              onChange={(e) => {
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage)}
              onBlur={(e) => {
                executeEvent(e, events, "onBlur", key);
              }}
            />
          );
          break;
        }
        case controlTypes.phone: {
          input = (
            <MaskedInput
              id={key}
              key={key}
              name={name}
              value={value}
              required={required}
              {...elementprops}
              onChange={(e) => {
                onChange(e, target, path, type);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              options={{
                blocks: [3, 3, 4],
                delimiters: ["-", "-", "-"],
                numericOnly: true,
              }}
            />
          );
          break;
        }
        case controlTypes.email: {
          input = (
            <input
              id={key}
              key={key}
              name={name}
              type="email"
              value={value}
              {...elementprops}
              required={required}
              onBlur={(e) => {
                executeEvent(e, events, "onBlur", key);
                e.target.value = e.target.value.trim();
                // e.target.value = e.target.value.replaceAll(/\s/g,"");
                // validateEmail(e, required);
              }}
              onChange={(e) => {
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              onKeyDown={blockInvalidCharForEmailField}
            />
          );
          break;
        }
        case controlTypes.radio: {
          input = m.options.map((o) => {
            let checked = o.value == value;
            return (
              <Fragment key={"fr" + o.key}>
                <div className="customRadio col-md-4">
                  <label htmlFor={o.key} key={"ll" + o.key}>
                    <input
                      id={o.key}
                      type={type}
                      key={o.key}
                      name={m.key}
                      value={o.value}
                      checked={checked}
                      {...elementprops}
                      className="form-input"
                      onChange={(e) => {
                        onChange(e, o.name, path);
                        executeEvent(e, events, "onChange", key);
                      }}
                      onBlur={(e) => {
                        executeEvent(e, events, "onBlur", key);
                      }}
                      onInvalid={(e) => inputInvalidate(e, m.errorMessage)}
                    />
                    <div className="circle"></div>
                    <span>{o.label}</span>
                  </label>
                </div>
              </Fragment>
            );
          });
          input = (
            <div className={"form-group-radio " + m.positionClass}>{input}</div>
          );
          break;
        }
        case controlTypes.switch: {
          input = m.options.map((o) => {
            let checked = false;
            if (value && value.toString().length > 0)
              checked = value.toString().indexOf(o.value) > -1 ? true : false;

            return (
              <div key={"cfr" + o.key} className="form-check form-switch">
                <input
                  id={o.key}
                  key={o.key}
                  name={o.name}
                  type="checkbox"
                  checked={checked}
                  {...elementprops}
                  className="form-check-input"
                  value={o.value == "true" ? "true" : "false"}
                  onChange={(e) => {
                    onChange(
                      e,
                      m.key,
                      path,
                      needMultiple ? "multiple" : "single"
                    );
                    executeEvent(e, events, "onChange", key);
                  }}
                  onInvalid={(e) => inputInvalidate(e, m.errorMessage)}
                  onBlur={(e) => {
                    executeEvent(e, events, "onBlur", key);
                  }}
                />
              </div>
            );
          });
          input = <div className="form-group-checkbox">{input}</div>;
          break;
        }
        case controlTypes.select: {
          input = m.options.map((o) => {
            return (
              <option key={o.key} value={o.value} className="form-input">
                {o.label}
              </option>
            );
          });
          input = (
            <select
              id={key}
              value={value}
              {...elementprops}
              onChange={(e) => {
                onChange(e, m.key, path, needMultiple ? "multiple" : "single");
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage)}
              onBlur={(e) => {
                executeEvent(e, events, "onBlur", key);
              }}
            >
              {input}
            </select>
          );
          break;
        }
        case controlTypes.toggle: {
          input = (
            <ToggleButtonComponent
              conditionalTextArea={false}
              {...elementprops}
              id={key}
              key={key}
              type={type}
              value={value}
              options={m.options}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onChange={(e) => {
                onChange(e, m.key, path, "toggle");
                executeEvent(e, events, "onChange", key);
              }}
            />
          );
          break;
        }
        case controlTypes.button: {

          input = (
            <Fragment key={"cfr" + key}>
              <button
                {...elementprops}
                type={type}
                key={key}
                name={name}
                onClick={(e) => {
                  if (key.startsWith("iterator-remove")) {
                    onIteratorRemoveRow(e);
                    setLastChangedKey(key);
                  } else {
                    if (props.onElementClick) props.onElementClick(e, key);
                  }
                  // else if(){}
                }}
              >
                {value}
              </button>
            </Fragment>
          );
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.currency: {
          input = (
            <MaskedInput
              {...elementprops}
              key={key}
              name={name}
              id={key}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              value={value}
              options={{
                numeral: true,
                numeralThousandsGroupStyle: "thousand",
                numeralPositiveOnly: true,
                numeralDecimalScale: m.props?.needDecimal != undefined ? m.props?.needDecimal ? 2 : 0 : 2,
                ...m.props?.options
              }}
              onChange={(e) => {
                onChange(e, target, path, type, null, calculativeExp);
                executeEvent(e, events, "onChange", key);
              }}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
            />
          );
          break;
        }
        case controlTypes.number2: {
          input = (
            <MaskedInput
              id={key}
              key={key}
              name={name}
              value={value}
              required={required}
              {...elementprops}
              onChange={(e) => {
                onChange(e, target, path, "single", "", calculativeExp);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              options={{
                blocks: [parseInt(m.props.maxlength || 12)],
                numericOnly: true,
                ...m.props?.options
              }}
            />
          );
          break;
        }
        case controlTypes.textPA: {
          input = (
            <input
              {...elementprops}
              id={key}
              type="text"
              key={key}
              name={name}
              value={value}
              required={required}
              onChange={(e) => {
                if(elementprops?.textCase){
                  e.target.value = convertText(e.target.value, elementprops?.textCase);
                }
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
                onChange(e, target, path);
              }}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              onKeyDown={blockInvalidCharForPureAlphaField}
            />
          );
          break;
        }
        case controlTypes.textAN: {
          input = (
            <input
              {...elementprops}
              id={key}
              type="text"
              key={key}
              name={name}
              value={value}
              required={required}
              onChange={(e) => {
                if(elementprops?.textCase){
                  e.target.value = convertText(e.target.value, elementprops?.textCase);
                }
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
                onChange(e, target, path);
              }}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              onKeyDown={blockInvalidCharForAlphaNumericField}
            />
          );
          break;
        }
        case controlTypes.textS: {
          input = (
            <input
              {...elementprops}
              id={key}
              type="text"
              key={key}
              name={name}
              value={value}
              required={required}
              onChange={(e) => {
                if(elementprops?.textCase){
                  e.target.value = convertText(e.target.value, elementprops?.textCase);
                }
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
                onChange(e, target, path);
              }}
              onKeyDown={blockInvalidCharForSerialsField}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
            />
          );
          break;
        }
        case controlTypes.textarea: {
          input = (
            <textarea
              id={key}
              key={key}
              name={name}
              type={type}
              required={required}
              value={value}
              {...elementprops}
              onChange={(e) => {
                // e.target.value = e.target.value.replaceAll(/\s+/g," ").replace(/^\s+/, '');
                onChange(e, target, path);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
                onChange(e, target, path);
                executeEvent(e, events, "onBlur", key);
              }}
            />
          );
          break;
        }
        case controlTypes.checkbox: {
          input = m.options.map((o) => {
            let checked = false;
            if (value && value.length > 0)
              checked = value.indexOf(o.value) > -1 ? true : false;
            return (
              <Fragment key={"cfr" + o.key}>
                <input
                  id={o.key}
                  type={type}
                  key={o.key}
                  name={o.name}
                  checked={checked}
                  {...elementprops}
                  className="customCheck d-flex"
                  value={o.value ? "true" : "false"}
                  onChange={(e) => {
                    onChange(
                      e,
                      m.key,
                      path,
                      needMultiple ? "multiple" : "single"
                    );
                    executeEvent(e, events, "onChange", key);
                  }}
                  onInvalid={(e) => inputInvalidate(e, m.errorMessage)}
                  onBlur={(e) => {
                    executeEvent(e, events, "onBlur", key);
                  }}
                />
                <label
                  className="align-items-center"
                  htmlFor={o.key}
                  key={"ll" + o.key}
                >
                  {o.label}
                </label>
              </Fragment>
            );
          });
          input = <div className="form-group-checkbox">{input}</div>;
          break;
        }
        case controlTypes.location: {
          input = (
            <Fragment key={"cfr" + key} children={key}>
              <GoogleMaps
                type={props.type}
                disableSaveButton={props.disableSaveButton}
                value={value}
                LocationTypes={props.LocationTypes}
                addObjType={props.locationAddObjType}
                mailingImgPath={props.mailingImgPath}
                garagingImgPath={props.garagingImgPath}
                assets={props.assets}
                addressErrorMessage = {elementprops.addressErrorMessage}
                setAddress={(e, key, opType) => {
                  if (props.type === "object" && opType === "manual") {
                    if (!e || !key) {
                      if (e["IsManual"]) {
                        onChange(true, key, path + ".IsManual", "location");
                      }
                      return;
                    }
                    onChange(e[key], key, path + "." + key, "location");
                  } else if (props.type === "object") {
                    onChange({ ...e, Description: "" }, key, path, "location");
                  } else {
                    onChange(e, m.key, path, "location");
                  }
                }}
                manualAddressSchema={props.manualAddressSchema}
                apiKey={props.apiKey}
                manualAddressFormModel={props.manualAddressFormModel}
                showManualAddressEnableOption={
                  props.showManualAddressEnableOption
                }
              />
            </Fragment>
          );
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.staticContent: {
          input = (
            <Fragment key={"cfr" + key}>{ReactHtmlParser(m.value)}</Fragment>
          );
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.dynamicContent: {
          let dynamicHTML = m.value;
          m.options.forEach((o) => {
            let replaceValue =
              o.label?.length > 0 ? getValueFromStatetByPath(o.label) : o.value; // dynamicHTML = dynamicHTML.replace( "value", o.value )
            if (dynamicHTML.includes(o.key)) {
              // debugger
              dynamicHTML = dynamicHTML.replace(o.key, replaceValue ?? o.value);
            }
          });
          input = (
            <div className="form-group">{ReactHtmlParser(dynamicHTML)}</div>
          ); // input = input.map(element => <div className="form-group"> {ReactHtmlParser(element)}</div>")
          break;
        }
        case controlTypes.multiselect:
        case controlTypes.groupedselect:
        case controlTypes.searchdropdown: {
          input = (
            <div className="custSelect position-relative">
              <Dropdown
                controlKey={key}
                value={value}
                {...elementprops}
                required={required}
                options={m.options}
                onChange={(values) => {
                  onChange(values, m.key, path, type, null, calculativeExp);
                  executeEvent(values, events, "onChange");
                }}
                onBlur={(e) => {
                  executeEvent(e, events, "onBlur");
                }}
                disabled={disabledRule === "true" ? "disabled" : ""}
                readOnly={readOnlyRule === "true" ? "readOnly" : ""}
                onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
                isMulti={type === "multi-select" || type === "grouped-select"}
              />
            </div>
          );
          break;
        }
        case controlTypes.buttonlist: {
          input = (
            <RadioButton
              title={m.title}
              {...elementprops}
              value={value}
              type={type}
              required={required}
              options={m.options}
              onChange={(values) => {
                onChange(values, m.key, path, "buttonlist");
              }}
            />
          );
          break;
        }
        case controlTypes.lob: {
          input = (
            <LineOfBusiness
              {...elementprops}
              title={m.title}
              value={value}
              type={type}
              options={m.options}
              onChange={(values) => {
                onChange(values, m.key, path, "lob");
                // executeEvent(values, events, 'onChange', key);
              }}
            />
          );
          break;
        }
        case controlTypes.locationwithedit: {
          input = <Fragment key={"cfr" + key} children={key}>
            <GooglePlacesAutoCompleteWithEdit
              apiKey={props.apiKey}
              controlKey={key}
              manualAddressFormModel={getValueFromStatetByPath(path) || {}}
              manualAddressSchema={props?.manualAddressSchema}
              isCountryShort={m?.isCountryShort}
              isStateShort={m?.isStateShort}
              isLatLngString={m?.isLatLngString}
              isSaveBtn={m?.isSaveBtn}
              includedFields={m?.includedFields}
              setAddress ={(model, key) =>{
                debugger;
                onChange(model, key, path, "location");
              }}
              extras = {m?.extras}
              {...elementprops}
              onSaveAddress = {(data)=>{console.log("Future Use")}}
            />
          </Fragment>
          input = <div className="form-group">{input}</div>;
          break;
        }
        case controlTypes.adddatatotable:{
          input = <AddDataToTable
            controlKey= {key}
            schemaData = {state}
            value={getValueFromStatetByPath(path) || []}
            dataPath = {path}
            tempPath = {m.tempPath}
            columns = {props.columns}
            onChange = {(model)=>{
              onChange(model, key, path, "adddatatotable", m.tempPath);
              // onChange({}, `cleared-${key}`, m.tempPath, "adddatatotable");
              setLastChangedKey(key);
            }}
            requiredDataFields={m.requiredDataFields || []}
            onAddHandler={(currObj, currData)=>{
              if(props.onAddHandler){
                const isValid = props.onAddHandler(currObj, currData, key);
                return isValid;
              }
              return true;
            }}
            onTableDeleteHandler={props.onTableDeleteHandler}
            ignoreIndex={m?.ignoreIndex}
            keyField={m.keyField || "actions"}
            {...elementprops}
          />
          break;
        }
        case controlTypes.integrationinput: {
          input = <IntegrationInput
            extraProps={{
              parentClass: m.parentClass,
              inpPositionClass: m.inpPositionClass,
              btnPositionClass: m.btnPositionClass
            }}
            inpProps={{ ...m.inpProps }}
            btnProps={{ ...m.btnProps }}
            integrationConfigs={{ ...props.integrationConfigs }}
            inputInvalidate={inputInvalidate}
            state={state}
            apiKey={m.apiKey}
            loggedInuser={props.loggedInuser}
            onChange={(e) => {
              onChange(e, key, path);
            }}
            toast={props.toast}
            setState={(data) => { setState(data) }}
          />
          break;
        }
        default: {
          input = (
            <input
              id={key}
              key={key}
              name={name}
              type={type}
              value={value}
              required={required}
              {...elementprops}
              onChange={(e) => {
                onChange(e, target, path, "single", "", calculativeExp);
                executeEvent(e, events, "onChange", key);
              }}
              disabled={disabledRule === "true" ? "disabled" : ""}
              readOnly={readOnlyRule === "true" ? "readOnly" : ""}
              onInvalid={(e) => inputInvalidate(e, m.errorMessage, required)}
              onBlur={(e) => {
                if(m.props.noBlurEvent) return;
                e.target.value = e.target.value.trim()
                  .replaceAll(/\s+/g, " ")
                  .replace(/^\s+/, "");
                onChange(e, target, path);
                executeEvent(e, events, "onBlur", key);
                props.onBlur && props.onBlur(e, key, e.target.value);
              }}
            />
          );
          break;
        }
      }

      return (
        displayRule == "true" && (
          <Fragment key={"f" + key}>
            {!excludeTypes.includes(type) ? (
              <>
                {!needColummnDisplay ? (
                  <div key={"g" + key} className={positionClass}>
                    {m?.label?.length > 0 && (
                      <div className={labelClass}>
                        <label
                          key={"l" + key}
                          htmlFor={key}
                          className="inputLabel primaryColor4 p-0"
                        >
                          {m.label}
                          {isTooltip && (
                            <OverlayTrigger
                              placement={placement}
                              trigger={m.toolTipTrigger || "click"}
                              overlay={popover}
                            >
                              <a id="popover" className="ps-2">
                                <FontAwesomeIcon
                                  icon={m.isToopTipExclamation ? faExclamationCircle : faCircleQuestion}
                                  size="1x"
                                  color={m.props?.primaryColor}
                                />
                              </a>
                            </OverlayTrigger>
                          )}

                          {m?.isTooltipClick && (
                            <a id="popover" className="ps-2" onClick={(e) => { props.onOverlayClick && props.onOverlayClick(key) }}>
                              <FontAwesomeIcon
                                color={m.props?.primaryColor}
                                icon={m.isToopTipExclamation ? faExclamationCircle : faCircleQuestion}
                                size="1x"
                              />
                            </a>
                          )}
                        </label>
                      </div>
                    )}
                    {m.prefix?.length > 0 || m.postfix?.length > 0 ? (
                      <div className={"input-group " + inputClass}>
                        {m.prefix?.length > 0 && (
                          <span className="input-group-text border-0 primaryColor4">
                            {m.prefix}
                          </span>
                        )}
                        {input}
                        {m.postfix?.length > 0 && (
                          <span className="input-group-text border-0 primaryColor4">
                            {m.postfix}
                          </span>
                        )}
                      </div>
                    ) : (
                      <>{m.type !== "label" && input}</>
                    )}
                  </div>
                ) : (
                  <div className={positionClass}>
                    {m?.label?.length > 0 && (
                      <div className={labelClass}>
                        <label
                          key={"l" + key}
                          htmlFor={key}
                          className="inputLabel primaryColor4 p-0"
                        >
                          {m.label}
                          {isTooltip && (
                            <OverlayTrigger
                              placement={placement}
                              trigger={m.toolTipTrigger || "click"}
                              overlay={popover}
                            >
                              <a id="popover" className="ps-2">
                                <FontAwesomeIcon
                                  icon={m.isToopTipExclamation ? faExclamationCircle : faCircleQuestion}
                                  size="1x"
                                  color={m.props?.primaryColor}
                                />
                              </a>
                            </OverlayTrigger>
                          )}
                          {m?.isTooltipClick && (
                            <a id="popover" className="ps-2" onClick={(e) => { props.onOverlayClick && props.onOverlayClick(key) }}>
                              <FontAwesomeIcon
                                icon={m.isToopTipExclamation ? faExclamationCircle : faCircleQuestion}
                                size="1x"
                                color={m.props?.primaryColor}
                              />
                            </a>
                          )}
                        </label>
                      </div>
                    )}
                    {!(m.prefix?.length > 0 || m.postfix?.length > 0) && (
                      <div className={inputClass}>{input}</div>
                    )}
                    {(m.prefix?.length > 0 || m.postfix?.length > 0) && (
                      <div className={inputClass}>
                        {m.prefix?.length > 0 && (
                          <span className="input-group-text border-0 primaryColor4">
                            {m.prefix}
                          </span>
                        )}
                        {m.type !== "label" && input}
                        {m.postfix?.length > 0 && (
                          <span className="input-group-text border-0 primaryColor4">
                            {m.postfix}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {
                  m.props?.addRowSeparatorDiv && <div class="w-100 m-0"></div>
                }
              </>
            ) : (
              <>
                <div key={"g" + key} className={positionClass}>
                  {input}
                </div>
                {
                  m.props?.addRowSeparatorDiv && <div class="w-100 m-0"></div>
                }
              </>

            )}
          </Fragment>
        )
      );
    });
    return groupUI;
  };

  const onIteratorRemoveRow = (name) => {
    let index = parseInt(name);
    let groupKey = name.split(".")[2];
    let elementNameParts = name.split(".");
    let parentDataPath = "";
    elementNameParts.forEach((x, index) => {
      if (index === 3) parentDataPath = x;
      else if (index > 3) parentDataPath = parentDataPath + "." + x;
    });
    let parentDataModel = getValueFromStatetByPath(parentDataPath);
    parentDataModel.splice(index, 1);
    setValueToStateByPath(groupKey, parentDataPath, parentDataModel);
  };

  const addIteratorNewControls = (g) => {
    let parentDataModel = getValueFromStatetByPath(g.parentDataPath) || [];
    let singleDataModel = {};
    let fixedControls = JSON.parse(JSON.stringify(g));
    fixedControls.controls.forEach((ctrl) => {
      if (ctrl.dataPath != undefined && ctrl.dataPath.includes(".")) {
        const dataKey = ctrl.dataPath.split(".");
        if (dataKey?.length > 2) {
          let path = ctrl.dataPath.replace("@iteratorIndex.", "");
          singleDataModel[path] = "";
          singleDataModel = unflatten(singleDataModel);
        }
        else {
          singleDataModel[dataKey[dataKey.length - 1]] = "";
        }
      }
    });
    parentDataModel.push(singleDataModel);
    setValueToStateByPath(g.key, g.parentDataPath, parentDataModel, "iterator");
  };

  const addSingleIteratorGroup = (
    g,
    existingValues,
    newIndex,
    addedControls
  ) => {
    let groupKey = g.key + "." + g.parentDataPath;
    addedControls[groupKey] = addedControls[groupKey] || [];
    newIndex[groupKey] = newIndex[groupKey] > -1 ? newIndex[groupKey] : -1;

    let labelIndex = 0;

    for (let items in existingValues) {
      newIndex[groupKey] = parseInt(newIndex[groupKey]) + 1;
      let fixedControls = JSON.parse(JSON.stringify(g));
      let classDeleteButton =
        (g.isIteratorMandatory === "true" || g.isIteratorMandatory === true) &&
          (items === "0" || items === 0)
          ? "actionIcon d-none"
          : "actionIcon d-block";
      fixedControls.controls.push({
        key: "iterator-remove" + `.${g.key}.` + items,
        name: items + ".remove." + groupKey,
        type: "icon",
        value: "-",
        positionClass: g.deleteIconClass,
        props: {
          className: classDeleteButton,
          addRowSeparatorDiv: true
        },
      });
      fixedControls.controls.forEach((ctrl) => {
        // Apply Label Only for First Iterator,ignore other
        if (items != 0 && g.haveLabelOnlyForFirstControl) {
          ctrl.label = ""
        }
        // for labels index
        if (ctrl.type == "label") {
          // labelIndex++;
          ctrl.label = ctrl.label?.replace("@labelIndex", (parseInt(items) + 1).toString());
        }

        if (ctrl.type != "icon")
          ctrl.name = ctrl?.name?.replace("@iteratorIndex", items);
        ctrl.key = ctrl.key + "." + items;

        if (
          ctrl.dataPath != undefined &&
          ctrl.dataPath.includes("@iteratorIndex")
        )
          ctrl.dataPath =
            g.parentDataPath +
            "." +
            ctrl?.dataPath?.replace("@iteratorIndex", parseInt(items));
        if (ctrl.conditionalDisplay?.length > 0) {
          ctrl.conditionalDisplay.map((d) => {
            d.src =
              typeof d.src === "string" && d.src.includes("@iteratorIndex")
                ? g.parentDataPath +
                "." +
                d.src.replace("@iteratorIndex", parseInt(items))
                : d.src;
            d.target =
              typeof d.target === "string" && d.src.includes("@iteratorIndex")
                ? g.parentDataPath +
                "." +
                d.target.replace("@iteratorIndex", parseInt(items))
                : d.target;
            return d;
          });
        }
      });
      addedControls[groupKey] = addedControls[groupKey].concat(
        fixedControls.controls
      );
    }
    return { newIndex, addedControls };
  };

  const addIteratorExistingControls = (iteratorGroups) => {
    let addedControls = {};
    let newIndex = {};
    for (let iteratorIndex in iteratorGroups) {
      let g = iteratorGroups[iteratorIndex];
      const existingValues = getValueFromStatetByPath(g.parentDataPath);
      let singleGroup = addSingleIteratorGroup(
        g,
        existingValues,
        newIndex,
        addedControls
      );
      addedControls = singleGroup.addedControls;
      newIndex = singleGroup.newIndex;
    }
    setGroupControlsIndex(newIndex);
    setGroupControls(addedControls);
  };

  const renderForm = () => {
    try {
      let model = props.model;
      let formUI = model.map((g) => {
        let gkey = g.key;
        let gtype = g.type;
        let cardDisplayRule = "true";
        if (g.conditionalDisplay)
          cardDisplayRule = evaluateRules(g.conditionalDisplay);
        let formGroup = <></>;
        // let controlDict={}
        if (g.type == groupTypes.iterator) {
          //   g.childsClassName= (!g.hideIteratorBg) 
          //   //&& groupControls[iteratorKey]?.length
          //  ? g.childsClassName? g.childsClassName:  "boxWrapper border-0 px-3 commonShadow" : "";

          // just set it to true,if you want to hide iterator when length<0.
          if (g.hideIteratorBg) {
            if (groupControls[g.key + "." + g.parentDataPath]?.length > 0) {
              g.childsClassName = g.tempChildsClassName;
            }
            else {
              g.childsClassName = "";
            }
          }

          formGroup = (
            <>
              {groupControls &&
                groupControls[g.key + "." + g.parentDataPath] && (
                  <>
                    {renderControls(
                      groupControls[g.key + "." + g.parentDataPath]
                    )}
                  </>
                )}
            </>
          );
          // if(groupControls){
          //   const iteratorKey = (g.key + "." + g.parentDataPath)
          //   g.childsClassName= (!g.hideIteratorBg) 
          //   //&& groupControls[iteratorKey]?.length
          //  ? "boxWrapper border-0 px-3 commonShadow":"";
          //  let allIteratorControls=groupControls[iteratorKey]
          // allIteratorControls.forEach(control => {
          // let index=control.key.split(".").pop();
          //   if(controlDict[index] && controlDict[index].length > 0){
          //     controlDict[index] = [...controlDict[index],control];
          //   }
          //   else controlDict[index]=[control]
          // });
          // formGroup = (
          //   <>
          //   {Object.entries(controlDict)?.map(([k,v]) =>
          //     (<div className="row" id={k}>
          //     {
          //       // groupControls &&
          //     //   groupControls[g.key + "." + g.parentDataPath] && 
          //     //   (
          //       <>
          //           {renderControls(v)}
          //         </>
          //       // )
          //       }
          //     </div>
          //     ))
          //   }
          //   </>
          // )
          // }
        }
        else formGroup = renderControls(g.controls);
        return (
          cardDisplayRule == "true" && (
            <Fragment key={"f" + gkey}>
              <div
                key={gtype + gkey}
                className={"formBox formBoxHgt" + g.className}
              >
                <div className="d-flex justify-content-between">
                  {g.title.length > 0 && (
                    <h5
                      className={
                        "primaryColor3 graphik-Medium mb-3 " + g.titleClassName
                      }
                    >
                      {g.title} &nbsp;
                      {g.isTooltip && (
                        <OverlayTrigger
                          placement={g.toolTipPlacement}
                          trigger={g.toolTipTrigger || "click"}
                          overlay={
                            g.toolTipMessage && <Popover id="popover" style={{ zIndex: 1 }}>
                              <Popover.Content
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                  borderRadius: 5,
                                  padding: "10px",
                                }}
                              >
                                {ReactHtmlParser(g.toolTipMessage)}
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <a id="popover" className="ps-2">
                            <FontAwesomeIcon icon={g.isToopTipExclamation ? faExclamationCircle : faCircleQuestion} size="1x"
                              color={g.toolTipColor}
                            />
                          </a>
                        </OverlayTrigger>
                      )}
                      {g?.isTooltipClick && (
                        <a id="popover" className="ps-2" onClick={(e) => { props.onOverlayClick && props.onOverlayClick(gkey) }}>
                          <FontAwesomeIcon
                            icon={g.isToopTipExclamation ? faExclamationCircle : faCircleQuestion}
                            size="1x"
                            color={g.toolTipColor}
                          />
                        </a>
                      )}
                      {g?.subTitle && <p className={g.subTitleClass || ""}>{g.subTitle}</p>}
                    </h5>
                  )}
                  {(g.type == groupTypes.iterator && (g.showBtn == undefined ? true : g.showBtn)) && (
                    <button
                      type="button"
                      onClick={(e) => {
                        setLastChangedKey("add-" + g.key)
                        addIteratorNewControls(g)
                      }}
                      form="setGenericForms"
                      id="submitsetGenericForms"
                      className="btn btnStyle btnPrim mb-2"
                    >
                      {g.buttonName}
                    </button>
                  )}
                  {
                    g.sideButtons && <div className="side-btn-main-container">
                      {
                        g.sideButtons.map((btn, indx) => {
                          return <>
                            <button
                              key={`side-btns-${g.key}-${btn}`}
                              type="button"
                              onClick={(e) => { props.sideBtnHandler && props.sideBtnHandler(`${g.key}-${btn}`, indx, e) }}
                              id={`side-btns-${indx}-${btn}`}
                              className="btn btnStyle btnPrim mb-2 custom-side-btn"
                            >
                              {btn}
                            </button>
                          </>
                        })
                      }
                    </div>
                  }
                </div>
                <div className={g.childsClassName}>
                  <div className="row align-items-center g-4">{formGroup}</div>
                </div>
              </div>
            </Fragment>
          )
        );
      });
      return formUI;
    } catch (errr) {
      console.error(errr);
    }
  };

  return (
    <div className={props.positionClass}>
      {props.title.length > 0 && (
        <h3 className={props.titlePositionClass}>{title}</h3>
      )}
      {props.isInternalForm ? <>{renderForm()}</> : <form
        id={props.formId ?? "dynamic-form"}
        className={props.formPositionClass}
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        {renderForm()}
        {/* <input type={"submit"} value={"submit"} /> */}
      </form>}
    </div>
  );
};

export default DynamicForm;

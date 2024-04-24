import axios from "axios";
import { axiosKeys, consoleLogs } from "../constants/constants";
import { advanceFilterModel } from "../constants/schemas";

const callAPI = async (type, url, payload, _headers = {}, _responsetype = '') => {
  try {
    const config = {
      headers: _headers,
      responseType: _responsetype
    }
    switch (type) {
      case axiosKeys.PostAction: {
        try {
          const response = await axios.post(url, payload, config);
          return response.status === 204 ? true : response.data;
        } catch (error) {
          console.error(consoleLogs.Utilities.Shared.Helpers.AxiosPost, error);
          throw error;
        }
      }
      case axiosKeys.GetAction: {
        try {
          const response = await axios.get(url, config);
          return response.data;
        } catch (error) {
          console.error(consoleLogs.Utilities.Shared.Helpers.AxiosGet, error);
          throw error;
        }
      }
    }
  } catch (error) {
    console.error(consoleLogs.Utilities.Shared.Helpers.CallAPI, error);
    throw error;
  }
}

const removeDuplicateColumns = (table1, table2, propertyName) => {
  const filteredArray = table2.filter(obj1 =>
    !table1.some(obj2 => obj1[propertyName] === obj2[propertyName])
  );
  return filteredArray;
}

const updateFilters = (filters, filterIndex) => {
  const tempFilters = [...filters];
  let TransactionYearFilterIndex = tempFilters.findIndex(obj => obj.key === "TransactionYear")
  let TransactionMonthFilterIndex = tempFilters.findIndex(obj => obj.key === "TransactionMonth")
  if (filterIndex == TransactionYearFilterIndex && TransactionMonthFilterIndex > -1) {
    tempFilters.splice(TransactionMonthFilterIndex, 1)
  }
  tempFilters.splice(filterIndex, 1);
  return tempFilters;
}

const updateFiltersFormData = (filtersFormData, filters) => {
  let tempdata = { ...filtersFormData };
  Object.entries(filtersFormData).forEach(([k, v]) => {
    tempdata[k] = "";
  });
  filters.forEach(item => {
    tempdata[item.key] = item.value;
  })
  return tempdata;
}

const updateFiltersByKey = (filters, model, key) => {

  let tempFilters = JSON.parse(JSON.stringify(filters))
  const indexOfObject1 = tempFilters.findIndex(object => object.key == key);
  if (model?.[key]?.length > 0) {
    let item1 = { key, value: model[key] };
    if (indexOfObject1 > -1) {
      tempFilters[indexOfObject1].value = model[key];
    } else {
      tempFilters.push(item1);
    }
  } else if (indexOfObject1 > -1) {
    tempFilters.splice(indexOfObject1, 1);
  }

  return tempFilters;
}

const filterPoliciesByModel = (model, policies) => {
  let tempPolicies = [...policies];
  Object.entries(model).forEach((k) => {
    if (model[k[0]]?.length > 0) {
      tempPolicies = tempPolicies.filter(x => x[k[0]] == model[k[0]]);
    }
  })
  return tempPolicies;
}

const getFilterKey = (key) => {
  switch (key) {
    case 'TransactionYear':
      return 'Year'
    case 'TransactionMonth':
      return 'Month'
    case 'TransactionType':
      return 'Transaction'
    case 'AgencyName':
      return 'Agency'
    case 'UnderwriterName':
      return 'Underwriter'
    case 'Lob':
      return 'LOB'
    case 'RenewalFlag':
      return 'RB-NB'
    default:
      return
  }
}
const AddUWExtraFields = (role, schema) => {
  if (role.toLowerCase() == 'underwriter') {
    schema[0].controls.push(
      {
        key: "AgencyName",
        type: "search-dropdown",
        value: "",
        label: "Select Agency",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-xxl-3 col-lg-4 col-md-2",
        isColummnDisplay: false,
        dataPath: "AgencyName",
        options: []
      },
      {
        key: "UnderwriterName",
        value: "",
        label: "Select UW",
        type: "search-dropdown",
        props: { class: "inputText", placeholder: "testing uw" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-xxl-3 col-lg-4 col-md-2",
        isColummnDisplay: false,
        dataPath: "UnderwriterName",
        options: []
      },
    )
  }
  return schema;
}

const GetSchema = (schema = false, role) => {
  let filterSchema = advanceFilterModel;
  if (schema) {
    return schema;
  }
  filterSchema = AddUWExtraFields(role, advanceFilterModel);
  return filterSchema;
}

const SetSchemaDefaultValues = (defaultSchema, props) => {
  let schema = defaultSchema;
  schema = JSON.parse(JSON.stringify(schema));
  schema.map(s => {
    s.controls = s.controls.map(c => {
      switch (c.key) {
        case 'AgencyName':
          c.options.push(...props.agencyList)
          c.props.primaryColor = props.primaryColor
          break;
        case 'UnderwriterName':
          c.options.push(...props.uwList)
          c.props.primaryColor = props.primaryColor
          break;
        case 'State':
          c.options.push(...props.stateList)
          c.props.primaryColor = props.primaryColor
          break;
        case 'Lob':
          c.options.push(...props.lobsList)
          c.props.primaryColor = props.primaryColor
          break;
      }
      return c;
    });
    return s;
  })

  if (props.setDefaultValuesHandler) {
    const tempSchema = props.setDefaultValuesHandler(schema);
    if (tempSchema)
      schema = tempSchema;
  }
  return schema;
}

const GetColor = (colorArray) => {
  if (colorArray.length == 1) return colorArray
  let k = colorArray.length;
  colorArray.splice(0, k - 1)
  return colorArray
}

const GroupByKey = (array, key) => {
  return array
    .reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
    }, {});
}

// const GroupByKeyUW = (array, key) => {
//   return array.reduce((hash, obj) => {
//     if (obj[key] === undefined) return hash;
//     const keyValue = obj[key];
//     if (!hash[keyValue]) {
//       hash[keyValue] = { count: obj.count, data: [obj] };
//     } else {
//       hash[keyValue].count += obj.count;
//       hash[keyValue].data.push(obj);
//     }
//     return hash;
//   }, {});
// };

// const GroupByKeyUW = (array, key) => {

//   array.sort((a, b) => new Date(`${a.TransactionMonth}-01-${a.TransactionYear}`) < new Date(`${b.TransactionMonth}-01-${b.TransactionYear}`) ? 1 : -1);
//   const uniqueObjects = array.filter(
//     (array, index, self) =>
//       index ===
//       self.findIndex((t) => t.QuoteNumber === array.QuoteNumber && t.TransactionType === array.TransactionType)
//   );
//   let result = GroupByKeyWithSum(uniqueObjects, key);

//   let keywisecount = [];
//   Object.entries(result).forEach(item => {
//     keywisecount.push({ label: item[0], count: item[1].count });
//   });
//   return keywisecount;
// };

// const GroupByKeyWithSum = (array, key) => {
//   const result = {};
//   array.forEach(obj => {
//     const keyValue = obj[key];
//     if (!result[keyValue]) {
//       if (obj.IsPreBind) {

//         result[keyValue] = { count: 1 }
//       } else {
//         result[keyValue] = { count: obj.count };
//       }
//     } else {
//       if (obj.IsPreBind) {
//         result[keyValue].count += 1
//       } else {
//         result[keyValue].count += obj.count;
//       }
//     }
//   });
//   return result;
// };


const GroupByKeyUW = (array, key) => {
  // No sorting if not necessary
  // array.sort((a, b) => new Date(`${b.TransactionMonth}-01-${b.TransactionYear}`) - new Date(`${a.TransactionMonth}-01-${a.TransactionYear}`));
  // const uniqueObjects = filterUniqueObjects(array);
  const result = groupByKeyWithSum(array, key);
  return transformResult(result);
};

const filterUniqueObjects = (array) => {
  const seen = new Set();
  const uniqueObjects = [];
  for (let obj of array) {
    const key = `${obj.QuoteNumber}-${obj.TransactionType}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueObjects.push(obj);
    }
  }
  return uniqueObjects;
};

const filterUniqueVersions = (array) => {
  array.sort((a, b) => parseInt((b.QuoteVersion)) - parseInt(a.QuoteVersion));
  const seen = new Set();
  const uniqueObjects = [];
  for (let obj of array) {
    const key = obj.QuoteNumber;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueObjects.push(obj);
    }
  }
  return uniqueObjects;
};

const groupByKeyWithSum = (array, key) => {
  const result = {};
  for (let obj of array) {
    const keyValue = obj[key];
    if (!result[keyValue]) {
      result[keyValue] = { count: 0 };
    }
    result[keyValue].count += obj.IsPreBind ? 1 : obj.count;
  }
  return result;
};

const transformResult = (result) => {
  const keywisecount = [];
  for (let [key, value] of Object.entries(result)) {
    keywisecount.push({ label: key, count: value.count });
  }
  return keywisecount;
};


const CountGroupItems = (obj) => {

  let keywisecount = [];
  Object.entries(obj).forEach(item => {
    keywisecount.push({ label: item[0], count: item[1].length });
  });
  return keywisecount;
}

const GetUniqueListBy = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}

export { CountGroupItems, GetColor, GetSchema, GetUniqueListBy, GroupByKey, GroupByKeyUW, SetSchemaDefaultValues, callAPI, filterPoliciesByModel, filterUniqueVersions, getFilterKey, removeDuplicateColumns, updateFilters, updateFiltersByKey, updateFiltersFormData };



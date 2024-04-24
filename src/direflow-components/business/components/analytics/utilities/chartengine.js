
import moment from "moment";
import { chartOptionsForMultiChart, chartOptionsWithScales, chartOptionsWithScalesUW, chartOptionsWithoutScales, chartOptionsWithoutScalesUW } from "../constants/constants";
import { CountGroupItems, GetColor, GroupByKey, GroupByKeyUW, filterUniqueVersions } from "./helpers";

export class AnalyticsConst {

  constructor(arg, styles) {
    this.stylebackgroundColor = styles.backgroundColor;
    this.styleborderColor = styles.borderColor;
    this.transactionTypeMaster = arg.transactionTypeMaster;
    this.policyStatusMaster = arg.policyStatusMaster;
    this._chartOptionsForMultiChart = chartOptionsForMultiChart;
    this._chartOptionsWithoutScales = chartOptionsWithoutScales;
    this._chartOptionsWithoutScalesUW = chartOptionsWithoutScalesUW;
    this._chartOptionsWithScales = chartOptionsWithScales;
    this._chartOptionsWithScalesUW = chartOptionsWithScalesUW;
  }


  backgroundColor(labelCount) {
    let _backgroundColor = JSON.parse(JSON.stringify(this.stylebackgroundColor))
    _backgroundColor.length = labelCount;
    return _backgroundColor;
  }

  borderColor(labelCount) {
    let _borderColor = [...this.styleborderColor];
    _borderColor.length = labelCount;
    return _borderColor;
  }

  filterAndGroupData(data, key, filterCallback) {
    const filteredData = data.filter(filterCallback);
    const groupedData = GroupByKey(filteredData, key);
    const countedItems = CountGroupItems(groupedData);
    return countedItems;
  }

  insertMissingLabels(a1, a2, a3) {
    a1.map(i => {
      if (!a2.includes(i.label)) {
        a3.push({
          'label': i.label, 'count': 0
        })
      }
    })
  }

  // Policy analytics
  policyAnalyticsConfig(policies, year) {
    return {
      YearwiseCount: {
        chartPositionClass: "chartContainerHeighted border",
        chartKey: "yearwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsForMultiChart,
        chartTitle: "Year-wise Transaction Count",
        chartData: this.getPAYearlyTrnData(policies)
      },
      MonthwiseCount: {
        chartPositionClass: "chartContainerHeighted border",
        chartKey: "monthwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsForMultiChart,
        chartTitle: "Month-wise Transaction Count",
        chartData: this.getPAMonthyTrnData(policies, year)
      },
      NewrenewelwiseCount: {
        chartPositionClass: "chartContainerMediumHeighted border",
        chartKey: "newRenewelWiseCountDoughnut",
        chartType: "doughnut",
        chartOptions: this._chartOptionsWithoutScales,
        chartTitle: "New/Renewal Transaction Count",
        chartData: this.getNewrenewelwiseCountDataset(policies)
      },
      TransactiontypewiseCount: {
        chartPositionClass: "chartContainerMediumHeighted border",
        chartKey: "transactionTypeWiseCountDoughnut",
        chartType: "doughnut",
        chartOptions: this._chartOptionsWithoutScales,
        chartTitle: "Transaction-wise Count",
        chartData: this.getTransactiontypewiseCountDataset(policies)
      }
    };
  }

  policyTransactionFilters(policy) {
    return (Object.values(this.transactionTypeMaster).includes(policy.TransactionType) && (policy.IsUwData == false && policy.IsPolicyBind == true))
  }

  getPAYearlyTrnData(policies) {

    let RatioCount = [], RRRatio = [];
    const yearlyTrnData = this.filterAndGroupData(policies, 'TransactionYear', policy => { return this.policyTransactionFilters(policy) })
    const yearlyBindData = this.filterAndGroupData(policies, 'TransactionYear', policy => { return policy.TransactionType === this.transactionTypeMaster.POLICY && policy.IsPolicyBind == true })

    const filterBindPolicy = policies.filter(policy => {
      return policy.TransactionType === this.transactionTypeMaster.POLICY && policy.IsPolicyBind === true;
    });

    const filterQuotePolicyPreBind = policies.filter(policy => {
      return (policy.IsFormalQuoteOffered == 1 && ["1", "A"].includes(policy.QuoteVersion) && policy.IsUwData == false && policy.IsPolicyBind == false)
    });
    const filterQuotePolicyTemp = [...filterBindPolicy, ...filterQuotePolicyPreBind];
    const filterQuotePolicy = filterUniqueVersions(filterQuotePolicyTemp)
    const yearQuoteData = this.filterAndGroupData(filterQuotePolicy, 'TransactionYear', policy => { return true })

    const countedPoliciesByRenewal = this.filterAndGroupData(policies, 'TransactionYear', policy => { return policy.RenewalFlag === "RB" })

    yearlyTrnData.push(
      {
        'label': parseInt(yearlyTrnData[0]?.label) - 1,
        'count': 0
      },
      {
        'label': parseInt(yearlyTrnData[0]?.label) - 2,
        'count': 0
      }

    )
    yearlyTrnData.sort(function (a, b) {
      return a?.label - b?.label
    })

    //Quote to Bind Ratio Creation
    if (yearlyBindData.length > 0 && yearQuoteData.length > 0) {
      yearQuoteData.map(year1 => {
        var a = yearlyBindData.find(x => x.label === year1.label);
        if (a) {
          RatioCount.push({
            'label': year1?.label, 'count': parseFloat((a.count / year1?.count).toFixed(2))
          })

        }
      })
    }


    if (countedPoliciesByRenewal.length > 0 && yearlyTrnData.length > 0) {
      yearlyTrnData.map(year1 => {
        var a = countedPoliciesByRenewal.find(x => x.label === year1.label);
        if (a) {
          RRRatio.push({
            'label': year1.label, 'count': parseFloat((a.count / year1.count).toFixed(2))
          })
        }
      })
    }
    let temp = RatioCount.map(i => i.label)
    let temp2 = RRRatio.map(i => i.label)

    this.insertMissingLabels(yearlyTrnData, temp, RatioCount);
    this.insertMissingLabels(yearlyTrnData, temp2, RRRatio)

    RatioCount.sort((a, b) => a.label - b.label)
    RRRatio.sort((a, b) => a.label - b.label)

    let qbColor = GetColor(this.backgroundColor(2))
    let qbBorderColor = GetColor(this.borderColor(2));
    let rrColor = GetColor(this.backgroundColor(3));
    let rrBorderColor = GetColor(this.borderColor(3));

    return {
      labels: yearlyTrnData.map(x => x.label),
      datasets: [
        {
          type: "bar",
          fill: false,
          label: 'Transaction Count',
          data: yearlyTrnData.map(x => x.count),
          backgroundColor: this.backgroundColor(1),
          borderColor: this.borderColor(1),
          borderWidth: 1,
          yAxisID: 'y1',
          order: 3,
          datalabels: {
            display: "auto",
            anchor: 'end',
            align: 'top',
            clip: false,
            labels: {
              title: {
              }
            }
          }
        },
        {
          type: "line",
          label: 'Q/B Ratio',
          data: RatioCount.map(x => x.count),
          backgroundColor: qbColor,
          borderColor: qbBorderColor,
          borderWidth: 2,
          yAxisID: 'y2',
          borderDash: [5, 10],
          lineTension: 0.1,
          order: 1
        },
        {
          type: "line",
          label: 'Retention Ratio',
          data: RRRatio.map(x => x.count),
          backgroundColor: rrColor,
          borderColor: rrBorderColor,
          borderWidth: 2,
          yAxisID: 'y2',
          borderDash: [5, 10],
          lineTension: 0.1,
          order: 1
        }
      ]
    };
  }

  getPAMonthyTrnData(policies, year) {
    let RatioCount = [], RRRatio = [];
    let tempPolicies = policies.filter(policy => {
      return this.policyTransactionFilters(policy)
    });

    const countedPolicies = this.filterAndGroupData(tempPolicies, 'TransactionMonth', x => x.TransactionYear == year)

    const filterBindPolicy = policies.filter(policy => {
      return policy.TransactionType === this.transactionTypeMaster.POLICY && policy.IsPolicyBind === true;
    });
    const countedBindPolicies = this.filterAndGroupData(filterBindPolicy, 'TransactionMonth', x => x.TransactionYear == year)

    // policies = 
    const filterQuotePolicyPreBind = policies.filter(policy => {
      return (policy.IsFormalQuoteOffered == 1 && ["1", "A"].includes(policy.QuoteVersion) && policy.IsUwData == false && policy.IsPolicyBind == false)
    });
    const filterQuotePolicyTemp = [...filterBindPolicy, ...filterQuotePolicyPreBind];
    const filterQuotePolicy = filterUniqueVersions(filterQuotePolicyTemp)
    const countedQuotePolicies = this.filterAndGroupData(filterQuotePolicy, 'TransactionMonth', x => x.TransactionYear == year)

    //Quote to Bind Ratio Creation
    countedQuotePolicies.map(year1 => {
      var a = countedBindPolicies.find(x => x.label === year1.label);
      if (a) {
        RatioCount.push({
          'label': year1.label, 'count': parseFloat((a.count / year1.count).toFixed(2))
        })
      }
    })

    //Renewal Policies
    const filterRenewalPolicy = policies.filter(policy => {
      return policy.RenewalFlag === "RB"
    });
    const countedPoliciesByRenewal = this.filterAndGroupData(filterRenewalPolicy, 'TransactionMonth', x => x.TransactionYear == year)
    //Retention Ratio Creation
    if (countedPoliciesByRenewal.length > 0 && countedPolicies.length > 0) {
      countedPolicies.map(year1 => {
        var a = countedPoliciesByRenewal.find(x => x.label === year1.label);
        if (a) {
          RRRatio.push({
            'label': year1.label, 'count': parseFloat((a.count / year1.count).toFixed(2))
          })
        }
      })
    }

    let temp = RatioCount.map(i => i.label)
    this.insertMissingLabels(countedPolicies, temp, RatioCount);

    countedPolicies.sort(function (a, b) { return a.label - b.label })
    RatioCount.sort(function (a, b) { return a.label - b.label })

    let temp2 = RRRatio.map(i => i.label)
    this.insertMissingLabels(countedPolicies, temp2, RRRatio);

    RRRatio.sort(function (a, b) { return a.label - b.label })
    let qbColor = GetColor(this.backgroundColor(2))
    let qbBorderColor = GetColor(this.borderColor(2));
    let rrColor = GetColor(this.backgroundColor(3));
    let rrBorderColor = GetColor(this.borderColor(3));

    return {
      labels: countedPolicies.map(x => moment(x.label, 'M').format('MMMM')),
      datasets: [
        {
          label: 'Transaction Count',
          data: countedPolicies.map(x => x.count),
          backgroundColor: this.backgroundColor(1),
          borderColor: this.borderColor(1),
          borderWidth: 0,
          yAxisID: 'y1',
          order: 3,
          datalabels: {
            display: "auto",
            anchor: 'end',
            align: 'top',
            clip: false,
            labels: {
              title: {
              }
            }
          }
        },
        {
          type: "line",
          label: 'Q/B Ratio',
          data: RatioCount.map(x => x.count),
          backgroundColor: qbColor,
          borderColor: qbBorderColor,
          borderWidth: 2,
          yAxisID: 'y2',
          borderDash: [5, 10],
          lineTension: 0.1,
          order: 1
        },
        {
          type: "line",
          label: 'Retention Ratio',
          data: RRRatio.map(x => x.count),
          backgroundColor: rrColor,
          borderColor: rrBorderColor,
          borderWidth: 2,
          yAxisID: 'y2',
          borderDash: [5, 10],
          lineTension: 0.1,
          order: 2
        }
      ]
    };
  }

  getTransactiontypewiseCountDataset(policies) {
    const countedPolicies = this.filterAndGroupData(policies, 'TransactionType', policy => { return this.policyTransactionFilters(policy) })
    const data = countedPolicies.map(x => x.count);
    if (countedPolicies.length > 1) {
      data.splice(0, 0, 0);
    }
    const labels = countedPolicies.map(x => x.label);
    if (labels.length > 1) {
      labels.splice(0, 0, "");
    }
    const backgroundColor = this.backgroundColor(labels.length)
    if (labels.length > 1) {
      backgroundColor.splice(0, 0, 'rgba(100, 100, 100, 0)')
    }
    const borderColor = this.borderColor(labels.length)
    if (labels.length > 1) {

      borderColor.splice(0, 0, 'rgba(100, 100, 100, 0)')
    }
    return {
      labels: labels,
      datasets: [
        {
          label: 'Transaction Count',
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        }
      ]
    };
  }

  getNewrenewelwiseCountDataset(policies) {
    const countedPolicies = this.filterAndGroupData(policies, 'RenewalFlag', policy => { return this.policyTransactionFilters(policy) })
    const _labels = countedPolicies.map(x => x.label).map(x => x === "NB" ? "New Business" : "Renewal Business");
    return {
      labels: _labels,
      datasets: [
        {
          label: 'Transaction Count',
          data: countedPolicies.map(x => x.count),
          backgroundColor: this.backgroundColor(countedPolicies.map(x => x.label).length),
          borderColor: this.borderColor(countedPolicies.map(x => x.label).length),
          borderWidth: 1,
        }
      ]
    };
  }

  //Quote Analytics
  QuoteInitiatorAnalyticsConfig(policies, year) {
    return {
      YearwiseCount: {
        chartPositionClass: "border chartContainerHeighted",
        chartKey: "yearwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScales,
        chartTitle: "Year-wise Formal Quote Count",
        chartData: this.getYearWiseQuoteCountDataset(policies)
      },
      MonthwiseCount: {
        chartPositionClass: "border chartContainerHeighted",
        chartKey: "monthwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScales,
        chartTitle: "Month-wise Formal Quote Count",
        chartData: this.getMonthWiseQuoteCountDataset(policies, year)
      },
    };
  }

  getYearWiseQuoteCountDataset(policies) {
    const filterPolicy = policies.filter(policy => {
      return (policy.IsFormalQuoteOffered == 1 && policy.IsUwData == false)
    })

    const countedPoliciesAgent = this.filterAndGroupData(filterPolicy, 'TransactionYear', policy => { return (policy.AccountType?.toLowerCase() == "agent") })
    const countedPoliciesUW = this.filterAndGroupData(filterPolicy, 'TransactionYear', policy => { return (policy.AccountType?.toLowerCase() != "agent") })
    let uwList = countedPoliciesUW.map(i => i.label);
    let agentList = countedPoliciesAgent.map(i => i.label)

    this.insertMissingLabels(countedPoliciesUW, agentList, countedPoliciesAgent)
    this.insertMissingLabels(countedPoliciesAgent, uwList, countedPoliciesUW)
    countedPoliciesAgent.sort(function (a, b) {
      return a.label - b.label
    })

    countedPoliciesUW.sort(function (a, b) {
      return a.label - b.label
    })

    let uwColor = this.backgroundColor(1);
    let uwBorderColor = this.borderColor(1);
    let agentColor = this.backgroundColor(2)
    agentColor.splice(0, 1)
    let agentBorderColor = this.borderColor(2)
    agentBorderColor.splice(0, 1);

    return {
      labels: countedPoliciesAgent.map(x => x.label),
      datasets: [
        {
          label: 'UW',
          data: countedPoliciesUW.map(x => x.count),
          backgroundColor: uwColor,
          borderColor: uwBorderColor,
          borderWidth: 1,
        },
        {
          label: 'Agent',
          data: countedPoliciesAgent.map(x => x.count),
          backgroundColor: agentColor,
          borderColor: agentBorderColor,
          borderWidth: 1,
        }
      ]
    };
  }

  getMonthWiseQuoteCountDataset(policies, year) {
    const filterPolicy = policies.filter(policy => {
      return (policy.IsFormalQuoteOffered == 1 && policy.IsUwData == false)
    })

    const agentFilterPolicy = filterPolicy.filter(policy => { return (policy.AccountType?.toLowerCase() == 'agent') })
    const uwfilterPolicy = filterPolicy.filter(policy => { return (policy.AccountType?.toLowerCase() != 'agent') })
    const countedPoliciesUW = this.filterAndGroupData(uwfilterPolicy, 'TransactionMonth', x => x.TransactionYear == year)
    const countedPolicies = this.filterAndGroupData(agentFilterPolicy, 'TransactionMonth', x => x.TransactionYear == year)
    let uwList = countedPoliciesUW.map(i => i.label);
    let agentList = countedPolicies.map(i => i.label)

    this.insertMissingLabels(countedPolicies, uwList, countedPoliciesUW)
    this.insertMissingLabels(countedPoliciesUW, agentList, countedPolicies)

    let quotetransactions = countedPolicies.sort(function (a, b) { return a.label - b.label })
    let quotetransactionsUW = countedPoliciesUW.sort(function (a, b) { return a.label - b.label })

    let uwColor = this.backgroundColor(1);
    let uwBorderColor = this.borderColor(1);
    let agentColor = this.backgroundColor(2)
    agentColor.splice(0, 1)
    let agentBorderColor = this.borderColor(2)
    agentBorderColor.splice(0, 1);


    return {
      labels: quotetransactions.map(x => moment(x.label, 'M').format('MMMM')),
      datasets: [
        {
          label: 'UW',
          data: quotetransactionsUW.map(x => x.count),
          backgroundColor: uwColor,
          borderColor: uwBorderColor,
          borderWidth: 1,
        },
        {
          label: 'Agent',
          data: quotetransactions.map(x => x.count),
          backgroundColor: agentColor,
          borderColor: agentBorderColor,
          borderWidth: 1,
        }
      ]
    };
  }

  //Bind analytics
  BindInitiatorAnalyticsConfig(policies, year) {
    return {

      YearwiseCountPreview: {
        chartPositionClass: "chartContainerMediumHeighted p-4",
        chartKey: "yearwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScales,
        chartTitle: "Bind Analytics",
        chartData: this.getYearWiseBindCountDataset(policies)
      },
      YearwiseCount: {
        chartPositionClass: "border chartContainerHeighted",
        chartKey: "yearwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScales,
        chartTitle: "Year-wise Bound Policy Transaction Count",
        chartData: this.getYearWiseBindCountDataset(policies)
      },
      MonthwiseCount: {
        chartPositionClass: "border chartContainerHeighted",
        chartKey: "monthwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScales,
        chartTitle: "Month-wise Bound Policy Transaction Count",
        chartData: this.getMonthWiseBindCountDataset(policies, year)
      },
    };
  }

  getYearWiseBindCountDataset(policies) {
    const filterPolicy = policies.filter(x => {
      return this.policyTransactionFilters(x)
    })

    const countedPoliciesUW = this.filterAndGroupData(filterPolicy, 'TransactionYear', policy => { return (policy.AccountType?.toLowerCase() != "agent") })
    const countedAgentPolicies = this.filterAndGroupData(filterPolicy, 'TransactionYear', policy => { return (policy.AccountType?.toLowerCase() == "agent") })
    let uwList = countedPoliciesUW.map(i => i.label);
    let agentList = countedAgentPolicies.map(i => i.label)

    this.insertMissingLabels(countedAgentPolicies, uwList, countedPoliciesUW);
    this.insertMissingLabels(countedPoliciesUW, agentList, countedAgentPolicies);

    const sortedPoliciesUW = countedPoliciesUW.sort(function (a, b) { return a.label - b.label })
    const sortedAgentPolicies = countedAgentPolicies.sort(function (a, b) { return a.label - b.label })
    let uwColor = this.backgroundColor(1);
    let uwBorderColor = this.borderColor(1);
    let agentColor = this.backgroundColor(2)
    agentColor.splice(0, 1)
    let agentBorderColor = this.borderColor(2)
    agentBorderColor.splice(0, 1);

    return {
      labels: countedPoliciesUW.map(x => x.label),
      datasets: [
        {
          label: 'UW',
          data: sortedPoliciesUW.map(x => x.count),
          backgroundColor: uwColor,
          borderColor: uwBorderColor,
          borderWidth: 1,
        },
        {
          label: 'Agent',
          data: sortedAgentPolicies.map(x => x.count),
          backgroundColor: agentColor,
          borderColor: agentBorderColor,
          borderWidth: 1,
        }
      ]
    };
  }

  getMonthWiseBindCountDataset(policies, year) {
    const filterPolicy = policies.filter(x => { return this.policyTransactionFilters(x) })

    const agentFilterPolicy = filterPolicy.filter(policy => { return (policy.AccountType?.toLowerCase() == 'agent') })
    const uwfilterPolicy = filterPolicy.filter(policy => { return (policy.AccountType?.toLowerCase() != 'agent') })
    const countedPoliciesUW = this.filterAndGroupData(uwfilterPolicy, 'TransactionMonth', x => x.TransactionYear == year)
    const countedPolicies = this.filterAndGroupData(agentFilterPolicy, 'TransactionMonth', x => x.TransactionYear == year)
    let uwList = countedPoliciesUW.map(i => i.label);
    let agentList = countedPolicies.map(i => i.label);

    this.insertMissingLabels(countedPolicies, uwList, countedPoliciesUW);
    this.insertMissingLabels(countedPoliciesUW, agentList, countedPolicies);

    let bindTransactionsAgent = countedPolicies.sort(function (a, b) { return a.label - b.label })
    let bindTransactionsUW = countedPoliciesUW.sort(function (a, b) { return a.label - b.label })

    let uwColor = this.backgroundColor(1);
    let uwBorderColor = this.borderColor(1);
    let agentColor = this.backgroundColor(2)
    agentColor.splice(0, 1)
    let agentBorderColor = this.borderColor(2)
    agentBorderColor.splice(0, 1);
    return {
      labels: bindTransactionsAgent.map(x => moment(x.label, 'M').format('MMMM')),
      datasets: [
        {
          label: 'UW',
          data: bindTransactionsUW.map(x => x.count),
          backgroundColor: uwColor,
          borderColor: uwBorderColor,
          borderWidth: 1,
        },
        {
          label: 'Agent',
          data: bindTransactionsAgent.map(x => x.count),
          backgroundColor: agentColor,
          borderColor: agentBorderColor,
          borderWidth: 1,
        }
      ]
    };
  }

  //UW Analytics
  underWriterAnalyticsConfig(policies, year) {
    return {
      YearwiseCount: {
        chartPositionClass: "border chartContainerHeighted",
        chartKey: "yearwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScalesUW,
        chartTitle: "Year-wise Count",
        chartData: this.getYearWiseCountDatasetUW(policies)
      },
      MonthwiseCount: {
        chartPositionClass: "border chartContainerHeighted",
        chartKey: "monthwiseCountBar",
        chartType: "bar",
        chartOptions: this._chartOptionsWithScalesUW,
        chartTitle: "Month-wise Count",
        chartData: this.getMonthWiseCountDatasetUW(policies, year)
      },
      NewrenewelwiseCount: {
        chartPositionClass: "border chartContainerMediumHeighted",
        chartKey: "newRenewelWiseCountDoughnut",
        chartType: "doughnut",
        chartOptions: this._chartOptionsWithoutScales,
        chartTitle: "New/Renewal Status Count",
        chartData: this.getNewrenewelwiseCountDataset(policies)
      },
      StatuswiseCount: {
        chartPositionClass: "border chartContainerHeightedUW",
        chartKey: "transactionTypeWiseCountDoughnut",
        chartType: "doughnut",
        chartOptions: this._chartOptionsWithoutScalesUW,
        chartTitle: "Status-wise Count",
        chartData: this.getYearWiseStatusCountDataset(policies)
      },

      StatuswiseCountPreview: {
        chartPositionClass: "chartContainerMediumHeighted p-4",
        chartKey: "transactionTypeWiseCountDoughnut",
        chartType: "doughnut",
        chartOptions: this._chartOptionsWithoutScales,
        chartTitle: "Underwriter Analytics",
        chartData: this.getYearWiseStatusCountDataset(policies)
      }
    };
  }

  getYearWiseStatusCountDataset(policies) {

    const tempPolicies = policies.filter(policy => {
      return ((Object.values(this.policyStatusMaster).includes(policy.TransactionType) && policy.IsUwData == true))
    });
    const countedPolicies = GroupByKeyUW(tempPolicies, 'TransactionType');
    // const countedPolicies = CountGroupItems(groupedPolicies);
    // const labels = countedPolicies.map(x => x.lablel);
    const data = countedPolicies.map(x => x.count);
    if (countedPolicies.length > 1) {
      data.splice(0, 0, 0);
    }
    const labels = countedPolicies.map(x => x.label);
    if (labels.length > 1) {
      labels.splice(0, 0, "");
    }
    const backgroundColor = this.backgroundColor(labels.length)
    if (labels.length > 1) {
      backgroundColor.splice(0, 0, 'rgba(100, 100, 100, 0)')
    }
    const borderColor = this.borderColor(labels.length)
    if (labels.length > 1) {

      borderColor.splice(0, 0, 'rgba(100, 100, 100, 0)')
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'Transaction Count',
          data: data,
          backgroundColor: backgroundColor,
          // backgroundColor: this.backgroundColor(1),
          borderColor: borderColor,
          borderWidth: 1,
        }
      ]
    };
  }

  getYearWiseCountDatasetUW(policies) {
    const tempPolicies = policies.filter(policy => {
      return ((Object.values(this.policyStatusMaster).includes(policy.TransactionType) && policy.IsUwData == true))
    });

    const countedPolicies = GroupByKeyUW(tempPolicies, 'TransactionYear');
    // const countedPolicies = CountGroupItems(groupedPolicies);
    countedPolicies.push(
      {
        'label': parseInt(countedPolicies[0]?.label) - 1,
        'count': 0
      },
      {
        'label': parseInt(countedPolicies[0]?.label) - 2,
        'count': 0
      }
    )
    countedPolicies.sort(function (a, b) {
      return a?.label - b?.label
    })
    return {
      labels: countedPolicies.map(x => x.label),
      datasets: [
        {
          label: 'Transaction Count',
          data: countedPolicies.map(x => x.count),
          backgroundColor: this.backgroundColor(1),
          borderColor: this.borderColor(1),
          borderWidth: 1,
        }
      ]
    };
  }

  getMonthWiseCountDatasetUW(policies, year) {

    const filteredPolicies = policies.filter(x => x.TransactionYear == year);
    const tempPolicies = filteredPolicies.filter(policy => {
      return ((Object.values(this.policyStatusMaster).includes(policy.TransactionType) && policy.IsUwData == true))
    });
    const countedPolicies = GroupByKeyUW(tempPolicies, 'TransactionMonth');
    // const countedPolicies = CountGroupItems(groupedPolicies);
    const uwtransactions = countedPolicies.sort(function (a, b) {
      return a.label - b.label
    })
    return {
      labels: uwtransactions.map(x => moment(x.label, 'M').format('MMMM')),
      datasets: [
        {
          label: 'Transaction Count',
          data: uwtransactions.map(x => x.count),
          backgroundColor: this.backgroundColor(1),
          borderColor: this.borderColor(1),
          borderWidth: 1,
        }
      ]
    };
  }

}

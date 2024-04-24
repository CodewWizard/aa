import React, { useEffect, useState } from "react";
// import PolicyAnalytics from '../policyanalytics'
import moment from "moment";
import NProgress from 'nprogress';
import { PageHead } from "../../../../../component-exports";
import AnalyticsTabs from "../analyticstabs";
import { chartFilters, consoleLogs, tabList } from "../constants/constants";
import { AnalyticsConst } from "../utilities/chartengine";
import { GetSchema, SetSchemaDefaultValues, callAPI } from "../utilities/helpers";
const AnalyticsLanding = (props) => {

    let filters = [];
    const [policyData, setPolicyData] = useState([]);
    const [showAnalyticsTabs, setShowAnalyticsTabs] = useState(false)
    const [showMainPage, setShowMainPage] = useState(true);
    const [focusedTab, setFocusedTab] = useState('policyanalytics');
    const FiltersData = {};
    const [filtersFormData, setFiltersFormData] = useState(props.filterModel ? props.filterModel : FiltersData);
    const [isClicked, setIsClicked] = useState(false)
    const [filterSchema, setFilterSchema] = useState(SetSchemaDefaultValues(GetSchema(props.schema, props.userType), props))

    const {
        pageTitle,
        pageDesc,
        favicon
    } = props;

    useEffect(() => {
        if (props.userType.toLowerCase() == 'underwriter') {
            tabList.push(
                'Quote Initiators',
                'Bind Initiators',
                // 'UW Analytics'
            )
        }
    }, [])

    const fetchData = async () => {
        NProgress.start();
        try {
            let joburl = props.jobAPIEndPoint
            let client = props.client
            const result = await callAPI('POST', joburl, { filepath: `analytics/${client}-analytics.json` }, {}, 'json')
            const x = result.filter((policy) => {
                return (moment(policy.TransactionYear, 'YYYY', true).isValid())
            })
            if (props.userType.toLowerCase() === 'agent') {
                setPolicyData(x.filter((policy) => {
                    return policy.AgentCode == props.accountId
                }))
            } else {

                setPolicyData(x)
            }
            // setPolicyData(result)
            // return result;
            NProgress.done();

        } catch (error) {
            console.log(consoleLogs.Utilities.Pages.Analytics.LoadBDE, 'ERROR', error);
            throw error;
        }
    }
    let arg = {
        policyStatusMaster: props.statusKeys,
        transactionTypeMaster: props.transactionKeys
    }

    const analyticsConst = new AnalyticsConst(arg, props.styles)//
    const analyticsChartCards = [{ tabName: "Policy Analytics", image: props.assets?.policyanalytics || "images/Policy Analytics.svg" }]
    if (props.userType.toLowerCase() == 'underwriter') {
        analyticsChartCards.push(
            { tabName: "Quote Initiators", image: props.assets?.quoteinitiators || "images/Quote Initiators.svg" },
            { tabName: "Bind Initiators", image: props.assets?.bindinitiators || "images/Bind Initiators.svg" },
            //  { tabName: "UW Analytics", image: props.assets?.uwanalytics || "images/Underwriter Analytics.svg" }
        )
    }

    return (
        <>
            {
                showMainPage && (
                    <div className="main-content mt-3">
                        <div className="content3">
                            <div className="businessStartDiv col-100 floatLft">
                                <div className="commonHead">
                                    <h2>ANALYTICS</h2>
                                </div>
                                <PageHead
                                    title={pageTitle}
                                    description={pageDesc}
                                    favicon={favicon}
                                />

                                <div className='boxWrapper px-3 commonShadow'>
                                    <div class="row g-4">
                                        {
                                            analyticsChartCards.map(element => {
                                                return (
                                                    <div class="col-xxl-3 col-md-6">
                                                        <div class="card">
                                                            <div className="p-4">
                                                                <h5 class="fw-bold fs-5">{element.tabName}</h5>
                                                                <div className="text-end">
                                                                    <img className="anldashIcon" src={element.image} alt="Card image cap" />
                                                                </div>
                                                            </div>
                                                            <div class="card-body border-top">

                                                                <a onClick={async () => {
                                                                    await fetchData();
                                                                    setShowAnalyticsTabs(true)
                                                                    setShowMainPage(false)
                                                                    setFocusedTab(element.tabName)
                                                                }}
                                                                    class="btn btnStyle btnPrim">Explore</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div>{props?.customReportConfig?.landingText || ("Note: The Analytics reports are generated everyday at " + moment.utc('2012-12-16 00:00').local().format('hh:mm A'))}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }

            {
                showAnalyticsTabs && (
                    <div className="newSection">
                        <div className="cntWmenu">
                            <div className='main-content mt-3'>
                                <div className='boxWrapper px-3 commonShadow'>
                                    <AnalyticsTabs
                                        {...props}
                                        FiltersFormData={filtersFormData}
                                        policiesData={policyData}
                                        advanceFilterModel={filterSchema}
                                        tabList={tabList}
                                        focusedTab={focusedTab}
                                        chartFilters={chartFilters}
                                        filters={filters} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )


}

export default AnalyticsLanding;
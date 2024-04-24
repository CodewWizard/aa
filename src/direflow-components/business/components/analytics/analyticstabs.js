import NProgress from 'nprogress';
import React, { useEffect, useState } from "react";
import TabsGroup from '../../../core/tabs/tabs';
import BindAnalyticsComponent from "./bindanalytics";
import PolicyAnalytics from "./policyanalytics";
import QuoteAnalyticsComponent from "./quoteanalytics";
import UWAnalyticsComponent from "./uwanalytics";
const AnalyticsTabs = (props) => {


    const pa = <PolicyAnalytics {...props} />
    const qa = <QuoteAnalyticsComponent {...props} />
    const ba = <BindAnalyticsComponent {...props} />
    const uwa = <UWAnalyticsComponent {...props} />
    const d1 = <div></div>
    const d2 = <div></div>
    const d3 = <div></div>

    const [tabList, setTabList] = useState(props.tabList || []);
    const [contentList, setContentList] = useState([]);
    const [defaultTab, setDefaultTab] = useState(props.focusedTab);
    useEffect(() => {
        setDefaultTab(props.defaultTab)
        renderComponents(defaultTab)
    }, [props.defaultTab])

    const renderComponents = (key) => {
        switch (key) {
            case 'Policy Analytics':
                NProgress.start()
                setContentList([pa]);
                NProgress.done()
                break;
            case 'Quote Initiators':
                NProgress.start()
                setContentList([d1, qa]);
                NProgress.done()
                break;
            case 'Bind Initiators':
                NProgress.start()
                setContentList([d1, d2, ba]);
                NProgress.done()
                break;
            case 'UW Analytics':
                NProgress.start()
                setContentList([d1, d2, d3, uwa]);
                NProgress.done()
                break;
        }
    }



    return (
        <TabsGroup
            tabList={tabList}
            defaultTab={defaultTab}
            contentList={contentList}
            onTabClick={renderComponents}
        />)
}

export default AnalyticsTabs;
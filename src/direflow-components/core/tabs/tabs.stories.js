import React from 'react';
import TabsGroup from './tabs';

const application = (<div>Application</div>);
const coverages = <div>Coverages</div>
const documents = <div>Documents</div>
const endorsement = <div>Endorsement</div>

const tabsArgs = {
    tabList: ["application", "coverages","documents", "endorsement",],
    defaultTab: "application",
    contentList: [application, coverages, documents, endorsement],
    onTabClick: (key)=>{ console.log(key)} //optional
}

export default {
    title: 'Design System/Core/Tabs',
    component: TabsGroup
};

const Template = (args) => <TabsGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = tabsArgs;

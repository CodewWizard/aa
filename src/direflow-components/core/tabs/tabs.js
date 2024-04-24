import React, { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabsGroup = (props) => {
  const [tabList, setTabList] = useState(props.tabList || []);
  const [tabContentList, setTabContentList] = useState(props.contentList || []);
  const [selectedTab, setSelectedTab] = useState('application')

  useEffect(()=>{
    setTabContentList(props.contentList);
  }, [props.contentList]);
  
  return (
    <Tabs 
        defaultActiveKey={props.defaultTab || selectedTab} 
        id="summary-tabs" 
        className="mb-3 compaTabs"
        onSelect={(key) => {
          setSelectedTab(key)
          if(props.onTabClick){
            props.onTabClick(key);
          }
        }}
    >
      {
        tabList.map((value, index)=>{
          return (
            <Tab eventKey={value} title={value.charAt(0).toUpperCase() + value.slice(1)}>
                {tabContentList[index]}
            </Tab>
          )
        })
      }
    </Tabs>
  );
};
export default TabsGroup;

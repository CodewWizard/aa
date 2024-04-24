import React from 'react';
import Navigation from "../navbar/navbar";
import Header from "../header/header";
import ProgressBar from "../progressbar/progressbar";
import { useEffect, useState } from 'react';
import FooterComponent from '../footer/footer';

const HeaderNavigationContentSidebar = (props) => {
  const { currentStage } = props;
  let loggedInUser = props.store.getState();
  const [user, setUser] = useState(loggedInUser["loggedInUserReducer"]);
  const [application, setApplication] = useState(loggedInUser["applicationReducer"]);
  // const progressBarSchema = props.ProgressMilestones[currentStage.toLowerCase()];
  const [progressBarSchema, setProgressBarSchema] = useState(props.ProgressMilestones[currentStage.toLowerCase()]);
  const currentPage = currentStage.toLowerCase() || "";


  useEffect(() => {
    if (!user?.encodedJWT?.length > 0);
  }, [user]);

  useEffect(()=>{
    setProgressBarSchema(props.ProgressMilestones[currentStage.toLowerCase()]);
  }, [props.ProgressMilestones, currentStage]);

  console.log(progressBarSchema, "032")
  return (
    <>
      {
        user?.encodedJWT?.length > 0 &&
        <div className="wrapper">
          <Navigation
            application={application}
            sharedSetNavigation={props.sharedSetNavigation}
            onMenuSelected={props.onMenuSelected}
            Menus={props.Menus}
          />
          <Header user={user} userLogout={props.userLogout} checkValidUser={props.checkValidUser} assets={props.assets} />
          <div id="content" className="active">
            <div className="main_container">
              {props.children}
            </div>
            <ProgressBar
              schema={progressBarSchema}
              currentPage={currentPage}
              MilestoneIndex={application.MilestoneIndex}
              currentPageCheck={props.currentPageCheck}
              onHandleProgressClick={props.onHandleProgressClick}
              needContinueBtn={props.needContinueBtn}
              disableIndex={props.disableIndex}

              userInfo={props.userInfo}
              userInfoClass={props.userInfoClass}
            />
            <FooterComponent
              needSaveForLater={props.needSaveForLater}
              needBack={props.needBack}
              needCancel={props.needCancel}
              needNext={props.needNext}
              needCustomBtn={props.needCustomBtn}

              onSuccessSaveForLater={props.onSuccessSaveForLater}
              onFailureSaveForLater={props.onFailureSaveForLater}
              onCloseSaveForLater={props.onCloseSaveForLater}
              onSuccessCancelApplication={props.onSuccessCancelApplication}
              onCloseCancelApplication={props.onCloseCancelApplication}
              onBack={props.onBack}
              onNext={props.onNext}
              onCustomBtnClick={props.onCustomBtnClick}
            
              backBtnText={props.backBtnText}
              cancelBtnText={props.cancelBtnText}
              saveBtnText={props.saveBtnText}
              nextBtnText={props.nextBtnText}
              customBtnText={props.customBtnText}

              backBtnClass = {props.backBtnClass}
              closeBtnClass = {props.closeBtnClass}
              saveBtnClass = {props.saveBtnClass}
              nextBtnClass = {props.nextBtnClass}
              customBtnClass={props.customBtnClass}
            />
          </div>
        </div>
      }
    </>

  );

}

export default HeaderNavigationContentSidebar;
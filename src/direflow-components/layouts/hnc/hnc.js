import React from 'react'
import Navigation from "../navbar/navbar";
import Header from "../header/header";
import { useEffect, useState } from 'react';

const HeaderNavigationContent = (props) => {
  let loggedInUser = props.store.getState();
  const [user, setUser] = useState(loggedInUser["loggedInUserReducer"]);
  const [application, setApplication] = useState(loggedInUser["applicationReducer"]);
  console.log(loggedInUser,"159")
  useEffect(() => {
    if (!(user?.encodedJWT?.length > 0)) window.location.href = "/";
  }, [user]);

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
            {props.children}
          </div>
        </div>
      }
    </>


  );
}

export default HeaderNavigationContent;
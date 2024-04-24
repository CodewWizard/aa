import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = (props) => {

    return (
        <>
        <div className="wrapper bg-image">
          <div className="login-page-content">
              <div className="left-panel">
                  <div className="left-panel-content">
                      <div className="login-ca-logo">
                        <img src={props.assets?.logo || "images/logo.png"} className='headerLogo' alt="Cogitate" />
                      </div>
                      <div className="left-panel-child">
                          <div className="login-ca-txt">
                              {props.isHeadingLogo ? <img src={props.headingImgPath} alt='Logo' /> :
                              <>
                              {props?.headingOne && <span className="logoHead1">{props.headingOne}</span>}
                              {props?.headingTwo && <span className="logoHead2">{props.headingTwo}</span>}
                              </>}
                          </div>
                      </div>
                  </div>
                  <div className="company-rights">
                      <p>2023 @
                          <a href="https://www.cogitate.us" rel="noreferrer" target="_blank">Cogitate Technology Solutions</a>, All Rights
                          Reserved
                      </p>
                  </div>
              </div>
              <div className="right-panel">
                <form className="login-form" onSubmit={props.onFormSubmit}>
                  <div className="form-header mb-3">Login</div>
                  <div className="input-group">                        
                      <span className="input-group-addon">
                          <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input type="text" placeholder="Username" name="username" className="form-control" />
                  </div>
                  <div className="input-group">
                      <span className="input-group-addon">
                          <FontAwesomeIcon icon={faLock} />                            
                      </span>
                      <input type="password" placeholder="Password" name="password" className="form-control" />
                  </div>
                  <input type="submit" className="buttonLogin" value="Sign In" />
                  {props?.description && <p className='browserText'>{props?.description}</p>}
                </form>
              </div>
          </div>
        </div>
      </>
    );
};

export default LoginForm;

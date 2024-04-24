import React from 'react';

const Header = (props) => {
    props.checkValidUser && props.checkValidUser();
    return (
      <div className="top-navbar bgWhite border-bottom commonShadow">
        <nav className="navbar navbar-expand-lg h-100 py-0">
          <div className="container-fluid h-100 px-0">
            <a className="navbar-brand d-flex align-items-center ps-3 nohandcursor">
              <img src={props.assets?.logo || "images/logo.png"} className='headerLogo'width="100px" alt="Cogitate" />
              <span className="ms-3 ps-3 position-relative py-2" id="sidebarCollapse">
              </span>
            </a>
  
            <div className="collapse navbar-collapse d-lg-block d-xl-block d-md-none d-none flex-grow-0 h-100"
              id="navbarSupportedContent">
              <ul className="nav navbar-nav notifiContainer ml-auto h-100 commonShadow">
                <li className="dropdown notifiBox d-flex align-items-center border-start nav-item h-100 active">
                  <ul className="dropdown-menu dropdown-menu-align boxAlign">
                    <h3
                      className="notification-list-name d-flex justify-content-between align-items-lg-center mb-0">
                      Notifications
                      <span className="clear-3">Clear All</span>
                    </h3>
                    <li className="list__item">
                      <a className="px-0">
                        <div className="row m-auto">
                          <div className="col-md-2 d-flex">
                            <p className="user-image">IB</p>
                          </div>
                          <div className="col-md-8 px-0">
                            <p className="messages">
                              <b> Underwriter name </b> has approved Application XXXX and
                              Policy number generated is: SGIH00000000.
                            </p>
                            <p className="rowDate">May 05, 2021</p>
                          </div>
                          <div className="col-md-2 d-flex m-auto justify-content-center">
                            <i className="fa fa-minus-circle rowDelete" aria-hidden="true"></i>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item d-flex align-items-center border-start h-100">
                  <a className="nav-link userPanLink d-flex nohandcursor">
                    <div className="userCode">
                      <h6 className='m-auto'>{props.user?.decodedJWT?.FirstName?.charAt(0).toUpperCase()}{props.user?.decodedJWT?.LastName?.charAt(0).toUpperCase()}</h6>
                    </div>
                    <div className="d-flex flex-column userName">
                      <h6 className="text-body mb-0 font-14">{props.user?.decodedJWT?.FirstName?.toUpperCase()} {props.user?.decodedJWT?.LastName?.toUpperCase()}</h6>
                      <span className="text-black-50">{props.user?.decodedJWT?.role.split(',').length > 1 ? props.user?.decodedJWT?.role.split(',').pop() : props.user?.decodedJWT?.role}</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center border-start h-100">
                  <a className="nav-link d-grid" id="logout" onClick={() => props.userLogout()}>
                    <img className="m-auto" src={props.assets?.logout || "images/logout-ico.png"} alt="" />
                    <span className="primaryColor1">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
import React,{ useState } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Navigation = (props) => {
  let { application, Menus } = props;
  const [lastMenuSelected, setLastMenuSelected] = useState(application["NavigationIndex"] ?? 0);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );
  
  return (
    <nav id="sidebar" className="border-end bgWhite commonShadow active">
      <ul className="list-unstyled components">
        {
          Menus?.map((menu, mindex) => {
            return (
              <OverlayTrigger
                key={mindex}
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip(menu.Label)}
              >
                <li className={mindex === lastMenuSelected ? "dropdown active" : "dropdown"} key={mindex} onClick={(e) => {
                  setLastMenuSelected(mindex);
                  props.onMenuSelected(mindex, e, menu.Key, menu.Href)
                }}>
                  <a legacyBehavior href={menu.Href} name={menu.Key} alt="" className={menu.Childs?.length > 0 ? "dropdown-toggle" : "dashboard"} passHref>
                    <img className="svg align-baseline" src={menu.Src} alt={menu.Label} />
                    <span>{menu.Label}</span>
                  </a>
                  {
                    menu.Childs?.length > 0 &&
                    <ul className="collapse list-unstyled menu pagesubmenu">
                      {
                        menu.Childs?.map((submenu, sindex) => {
                          return (
                            <li key={sindex}>
                              <a alt="" href={submenu.Href}>{submenu.Label}</a>
                            </li>
                          );
                        })
                      }
                    </ul>
                  }
                </li>
              </OverlayTrigger>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default Navigation;
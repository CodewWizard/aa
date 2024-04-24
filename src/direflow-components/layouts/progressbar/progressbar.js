import React, { useState, useEffect } from 'react';
import ReactHtmlParser from "react-html-parser";

const ProgressBar = (props) => {
  const [schema, setSchema] = useState(props.schema);
  console.log("🚀 ~ file: progressbar.js:5 ~ ProgressBar ~ schema:", schema)
  const [lastMilestoneIndex, setlastMilestoneIndex] = useState(props.MilestoneIndex ?? []);
  const [disableIndex, setDisableIndex] = useState(props.disableIndex ?? []);

  useEffect(() => {
    setlastMilestoneIndex(props.MilestoneIndex ?? [])
  }, [props.MilestoneIndex]);

  useEffect(() => {
    setSchema(props.schema);
    setlastMilestoneIndex(props.MilestoneIndex);
  }, [props.schema]);

  return (
    <div className="mb-3 menuWrapper">
      <h1>{props.schema.key}</h1>
      <ul className="quoteType p-0">
        {
          schema?.milestones?.map((ms, indx) => {
            return (
              !ms.Hidden &&
              <li className={lastMilestoneIndex?.includes(indx) ? (ms.Disabled ? "activeDisble active" : "active") : (ms.Disabled ? "inactiveDisble" : "inactiveLink")} key={indx}>
                {
                  lastMilestoneIndex?.includes(indx) ?
                    <a style={{ textDecoration: 'none' }} onClick={(e) => props.onHandleProgressClick(e, schema.submitForm, ms.Href)}>
                      <label>
                        {
                          props.currentPageCheck(indx, ms.Href)
                            ?
                            <input type="radio" name="radio" checked disabled />
                            :
                            <input type="radio" name="radio" disabled />
                        }
                        <span>{ms.Label}</span>
                      </label>
                    </a>
                    :
                    <a style={{ textDecoration: 'none' }}>
                      <label>
                        {
                          props.currentPageCheck(indx, ms.Href)
                            ?
                            <input type="radio" name="radio" checked disabled />
                            :
                            <input type="radio" name="radio" disabled />
                        }
                        <span>{ms.Label}</span>
                      </label>
                    </a>
                }
              </li>
            );
          })
        }
      </ul>
      {props.needContinueBtn && <button type="submit" form={schema.submitForm} className="btn btnStyle btnSecon mt-5" id="pageSubmitButton">CONTINUE</button>}

      {props.userInfo && <div className={props.userInfoClass || "row mt-5"}>
        {ReactHtmlParser(props.userInfo)}
      </div>}
    </div>
  );
}

export default ProgressBar;
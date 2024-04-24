import React, { useEffect, useRef, useState } from "react";
import { callAPI, getMasters, invokeAdaptiveAPI } from "../utilities/helpers/shared"
import NProgress from "nprogress";

const IntegrationInput = (props) => {
    const {
        btnProps,
        inpProps,
        extraProps,
        integrationConfigs,
        inputInvalidate,
        onChange,
        state,
        toast,
        apiKey,
        loggedInuser,
        setState
    } = props;

    const [configData, setConfigData] = useState(undefined);
    const [searchValue, setSearchValue] = useState("");
    const [policy, setPolicy] = useState(state);

    const input = useRef();

    useEffect(() => {
        setPolicy(state);
    }, [state])

    const onSearch = async (e) => {
        e.preventDefault();

        try {
            if (searchValue.trim().length == 0) {
                inputInvalidate({ target: input.current }, "", true);
                return;
            }
            NProgress.start();
            let tempConfigData = configData;
            if (!tempConfigData) {
                tempConfigData = await getMasters(integrationConfigs.client, integrationConfigs.table, { env: { NEXT_PUBLIC_MASTER_DATA_URL: integrationConfigs.env?.NEXT_PUBLIC_MASTER_DATA_URL } });
                setConfigData(tempConfigData);
            }

            let adaptiveAPIConfig = tempConfigData.find((item) => item.ApiKey == apiKey);

            const extraParams = {
                AdaptiveApiURL: adaptiveAPIConfig.AdaptiveApiURL,
                InputKey: adaptiveAPIConfig.InputKey,
                OutputKey: adaptiveAPIConfig.OutputKey,
                SubcriptionKey: adaptiveAPIConfig.ApimSubcriptionKey,
                needDoc: adaptiveAPIConfig.NeedDoc,
                TemplatePath: adaptiveAPIConfig.TemplatePath,
                DocumentType: adaptiveAPIConfig.DocumentType,
                Filename: adaptiveAPIConfig.Filename,
                FolderName: adaptiveAPIConfig.FolderName,
                AuthToken: loggedInuser.encodedJWT
            };

            let resp = await invokeAdaptiveAPI(policy, extraParams, loggedInuser);

            setState(resp);
        } catch (error) {
            toast && toast.error("Something Went Wrong", true);
            console.log("Search Handler Failed>>>", error);
        } finally {
            NProgress.done();
        }
    }

    const onSearchChange = (e) => {
        setSearchValue(e.target.value);
        onChange(e);
    }

    return <>
        <div className={extraProps?.parentClass || "row align-items-center g-4"}>
            <div id="integrationForm" className={extraProps?.inpPositionClass || "col-xxxl-3 col-xxl-4 col-lg-6"}>
                <input ref={input} type="text" id="integrationInp" className="inputText" required placeholder="Enter..." maxlength="8" value={searchValue} {...inpProps} onChange={onSearchChange} onInvalid={(e) => inputInvalidate(e, "", true)} />
            </div>
            <div className={extraProps?.btnPositionClass || "col-xxxl-9 col-xxl-8 col-lg-6 align-self-end"}>
                <div className="form-group">
                    <button onClick={onSearch} id="integrationBtn" className="btn btnStyle btnSecon" {...btnProps}>{btnProps?.btnName || "Search"}</button>
                </div>
            </div>
        </div>
    </>
}

export default IntegrationInput;
import React, { useState, useCallback, memo, useRef } from "react";
import CancellationLanding from "../../business/components/cancel/landing";
import NProgress from 'nprogress';


const actions = {
    CancelAction: 'cancel',
    RateEndorsement: "rateendorse",
}



const CancellationFunctional = (props) => {
    const {
        requestedPage,
        mutationQuery,
        overrideReturnPremiumSchema,
        overrideFeesSchema,
        submitInsuredSignatureSchema,
        save
    } = props;

    const [cancellationLandingData, setCancellationLandingData] = useState(props.cancellationLandingData);
    const [cancellationSchema, setCancellationSchema] = useState(props.cancellationSchema);
    const [toggleStatus, setToggleStatus] = useState(props.toggleStatus);
    let sum = cancellationLandingData?.FeesAndTaxes?.reduce((x, y) => x + y.Amount, 0);
    const [totalFeesAndTaxes, setTotalFeesAndTaxes] = useState(sum);

    const onSchemaChange = useCallback((changedSchema, key) => {
        let tempChangedSchema = changedSchema;
        if (props.onSchemaChange) {
            tempChangedSchema = props.onSchemaChange(tempChangedSchema, key);
        }
        setCancellationLandingData(tempChangedSchema);
    });

    const onFormSubmit = useCallback(async (model, key) => {
        NProgress.start();
        let raterCall = await save(model, actions.RateEndorsement, mutationQuery.RateEndorsment, requestedPage.CancelLandingRate);
        let feesandtaxesamout = 0;
        if (raterCall) {
            raterCall.FeesAndTaxes.forEach(ft => { feesandtaxesamout += ft.Amount });
            setTotalFeesAndTaxes(feesandtaxesamout);
            setCancellationLandingData(raterCall);
            setToggleStatus({ ...toggleStatus, cancellationcard: true });
            
            if (props.onFormSubmit) {
                await props.onFormSubmit(model, key);
            }
        }
        else console.error('Ooops something went wrong.');

        NProgress.done();

    });

    const cancelPolicy = useCallback(async () => {

    });

    const downloadForm = useCallback(async (tempSummary) => {

    });

    const revertTransaction = useCallback(async (model) => {

    });

    const submitForApproval = useCallback(async () => {

    });

    const OverrideReturnPremiumForm = useRef({
        schema: overrideReturnPremiumSchema,
        dataModel: {},
        onSchemaChange: (model, key) => {
            // console.log(model);
        },
        onFormSubmit: (dataModel, event) => console.log(dataModel),
    });

    const OverrideFeesForm = useRef({
        schema: overrideFeesSchema,
        dataModel: {},
        onSchemaChange: (model, key) => {
            // console.log(model);
        },
        onFormSubmit: (dataModel, event) => console.log(dataModel),
    });

    const SubmitSignatureForm = useRef({
        schema: submitInsuredSignatureSchema,
        dataModel: {},
        onSchemaChange: (model, key) => {
            // console.log(model);
        },
        onFormSubmit: (dataModel, event) => console.log(dataModel)
    });

    return (<>
        <CancellationLanding
            config={props.config}
            toggleStatus={toggleStatus}
            cancellationLandingData={cancellationLandingData}
            cancellationSchema={cancellationSchema}
            onSchemaChange={onSchemaChange}
            onFormSubmit={onFormSubmit}
            ApproveCancellation={cancelPolicy}
            downloadForm={downloadForm}
            RevertPolicy={revertTransaction}
            totalFeesAndTaxes={totalFeesAndTaxes}
            cancellationCardConfig={props.cancellationCardConfig}
            OverrideReturnPremiumForm={OverrideReturnPremiumForm.current}
            OverrideFeesForm={OverrideFeesForm.current}
            SubmitSignatureForm={SubmitSignatureForm.current}
            submitForApproval={submitForApproval}
        />
    </>)
};

export default memo(CancellationFunctional);
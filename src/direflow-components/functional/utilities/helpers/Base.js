export class Base {
    constructor(store, keys, status, env, staticItems, alertMsgs, logout, query, emailConfigs, CustomHeaders, dmsProperties, isProgramTypeLOB, programTypeValue) {
        this.store = store;
        this.PolicyStatusMaster = status.PolicyStatusMaster;
        this.TransactionTypeMaster = status.TransactionTypeMaster
        this.storeKeys = keys.storeKeys;
        this.cancellationKeys = keys.cancellationKeys;
        this.reinstatementKeys = keys.reinstatementKeys;
        this.commonKeys = keys.commonKeys;
        this.routeKeys = keys.routeKeys;
        this.apolloKeys = keys.apolloKeys;
        this.env = env;
        this.staticItems = staticItems;
        this.alertMsgs = alertMsgs;
        this.logout = logout;
        this.query = query;
        this.emailConfigs = emailConfigs;
        this.CustomHeaders = CustomHeaders;
        this.dmsProperties = dmsProperties || {};
        this.isProgramTypeLOB = isProgramTypeLOB;
        this.programTypeValue = programTypeValue;
    }

    getStoreState = (key) => {
        try {
            let state = this.store.getState();
            switch (key) {
                case this.storeKeys.ApplicationReducer:
                    return state[this.storeKeys.ApplicationReducer];
                case this.storeKeys.LoggedInUserReducer:
                    return state[this.storeKeys.LoggedInUserReducer];
                case this.storeKeys.MasterReducer:
                    return state[this.storeKeys.MasterReducer];
                case this.storeKeys.PolicyReducer:
                    return JSON.parse(JSON.stringify(state[this.storeKeys.PolicyReducer]));
                case this.storeKeys.VersionReducer:
                    return state[this.storeKeys.VersionReducer];
                case this.storeKeys.SchemaReducer:
                    return state[this.storeKeys.SchemaReducer];
                default:
                    return state;
            }
        } catch (error) {
            console.error("consoleLogs.Utilities.Pages.Shared.GetStoreState", error);
            throw error;
        }
    }

    setLoginUserRole = () => {
        const currentLoginState = this.getStoreState(this.storeKeys.LoggedInUserReducer);
        return currentLoginState?.decodedJWT?.role.split(',').length > 1 ? currentLoginState?.decodedJWT?.role.split(',').pop() : currentLoginState?.decodedJWT?.role;
    }
}
import {RootState} from 'app/providers/StoreProvider';

export const getLoginFormValidateErrors = (state: RootState) => state.login.validateErrors
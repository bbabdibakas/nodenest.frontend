import {RootState} from 'app/providers/StoreProvider';

export const getLoginFormServerErrors = (state: RootState) => state.login.serverErrors
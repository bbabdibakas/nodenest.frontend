import {RootState} from 'app/providers/StoreProvider';

export const getLoginFormIsLoading = (state: RootState) => state.login.isLoading
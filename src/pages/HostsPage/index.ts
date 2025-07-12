import {hostsPageReducer} from "./model/slice/hostsPageSlice";
import {HostsPageState} from "./model/types/HostsPageState";
import HostsPage from "./ui/HostsPage";

export type {
    HostsPageState
}

export {
    HostsPage,
    hostsPageReducer
}
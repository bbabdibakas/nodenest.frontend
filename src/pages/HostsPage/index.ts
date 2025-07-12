import {hostsPageReducer} from "./model/slice/hostsPageSlice";
import {HostsPageState} from "./model/types/HostsPageState";
import {HostsPageAsync} from "./ui/HostsPage.async";

export type {
    HostsPageState
}

export {
    HostsPageAsync as HostsPage,
    hostsPageReducer
}
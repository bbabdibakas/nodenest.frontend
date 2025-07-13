import {Host} from "entities/Host";

export interface HostsPageState {
    hosts: Host[];
    isLoading: boolean;
    serverErrors?: string[];
}
export interface Host {
    id: string;
    hostId: string;
    name: string;
    ip: string;
}

export interface HostsPageState {
    hosts: Host[];
    isLoading: boolean;
    serverErrors?: string[];
}
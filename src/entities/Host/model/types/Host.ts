export type HostStatus = 'initializing' | 'running' | 'deleting' | 'offline' | 'starting' | 'stopping' | 'error';

export interface Host {
    id: number
    hostId: number
    name: string
    status: HostStatus
    created: Date
    ip: string,
    isIpBlocked: boolean
    isUnreachable: boolean | null
    isConfigFileExists: boolean | null
    wabaHealthStatusCode: number | null
    createdAt: Date
    updatedAt: Date
}
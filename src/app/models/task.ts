export interface Task {
    id: string;
    clientId: string;
    reason: string;
    providedService: string;
    description: string;
    date: Date;
    medium: string;
}
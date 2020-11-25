export interface ToastMessage {
    header?: string;
    body: string;
    severity?: ToastSeverity;
}

export enum ToastSeverity {
    SUCCESS,
    DANGER,
    STANDARD
}

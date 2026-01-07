interface TawkAPI {
    maximize(): void;
    minimize(): void;
    toggle(): void;
    popup(): void;
    showWidget(): void;
    hideWidget(): void;
    addEvent(name: string, data: any, callback?: (error: any) => void): void;
    onLoad: () => void;
    onStatusChange: (status: string) => void;
    // Add other methods if needed based on Tawk.to documentation
}

interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
}

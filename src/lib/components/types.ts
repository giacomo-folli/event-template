export type FetchedEvent = {
    creatorId: 1;
    description: string;
    endDate: string;
    id: number;
    isShared: boolean;
    location: string;
    shareToken: string; // event identifier for url
    shareUrl: string; // url resource + event identifier 
    startDate: string;
    title: string;
}
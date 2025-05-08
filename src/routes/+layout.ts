import type { FetchedEvent } from '$lib/components/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
    return fetch('/api')
        .then(res => res.json())
        .then(data => {
            const event = data.events[0] as FetchedEvent;
            return { event, error: '' };
        })
        .catch(error => ({ event: null, error: 'Failed to fetch event' }));
};
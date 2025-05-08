import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
    const id = url.searchParams.get('id');
    return fetch(`/api/event?id=${id}`)
        .then(res => res.json())
        .catch((error) => ({ error: 'Failed to fetch event' }));
};
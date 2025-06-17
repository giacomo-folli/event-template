
import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { FetchedEvent } from '$lib/components/types';

export const GET: RequestHandler = async ({ url, fetch }) => {
  try {
    const id = url.searchParams.get('id');
    if (!id) {
      return json({ data: { event: null, error: 'No id provided' } }, { status: 400 });
    }

    if (!env.API_KEY) {
      return json({ event: null, error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch('https://bernini.replit.app/api/events', {
      headers: {
        'X-API-Key': env.API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const data = await response.json();
    const event = data.events.find((event: FetchedEvent) => event.shareToken == id);

    return json({ event, error: '' });
  } catch (error) {
    return json({ event: null, error: 'Failed to fetch events' }, { status: 500 });
  }
} 

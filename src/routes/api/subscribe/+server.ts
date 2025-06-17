
import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ url, fetch, request }) => {
  try {
    const { email, id } = await request.json();

    if (!id) {
      return json({ error: 'No id provided' }, { status: 400 });
    }

    if (!env.API_KEY) {
      return json({ error: 'API key not configured' }, { status: 500 });
    }

    const apiUrl = `https://bernini.replit.app/api/events/${id}/participants`
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'X-API-Key': env.API_KEY
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe participant');
    }

    return json({ error: '' });
  } catch (error) {
    return json({ error: 'Failed to subscribe participant' }, { status: 500 });
  }
} 

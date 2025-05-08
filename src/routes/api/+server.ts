import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function GET() {
  try {
    const response = await fetch('https://bernini.replit.app/api/events', {
      headers: {
        'X-API-Key': env.API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const data = await response.json();
    return json(data);
  } catch (error) {
    return json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

import { json } from "@sveltejs/kit"
import type { FetchedEvent } from "./types"

export const subscribeParticipant = async (email: string, event: FetchedEvent) => {
    const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, id: event.id })
    })

    if (!response.ok) {
        throw new Error('Failed to subscribe participant')
    }

    return json({ ok: true })
}
import type { FetchedEvent } from "./types"

export const subscribeParticipant = async (email: string, event: FetchedEvent) => {
    const apiResource = `/api/events/${event.id}/participants`
    const response = await fetch(apiResource, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })

    if (!response.ok) {
        throw new Error('Failed to subscribe participant')
    }
}
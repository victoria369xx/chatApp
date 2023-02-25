const requestUrl = 'https://randomfox.ca/floof/'

export const testApi = {
    get: async () => {
            const response = await fetch(requestUrl)
            if (!response.ok) {
                throw new Error('Error', response)
            }
            return response.json()
    }
}
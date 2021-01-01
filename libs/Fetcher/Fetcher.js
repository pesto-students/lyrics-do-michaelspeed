// Fetcher with async a little bit like axios
export default async function Fetcher(url, options = {}) {
    const response = await fetch(url, options)

    // Handle Errors
    if (!response.ok) {
        const message = `An Error has occurred: ${response.status}`
        throw new Error(message);
    }

    const data = await response.json();
    return {
        data: data,
        status: response.status,
        response: response
    }
}

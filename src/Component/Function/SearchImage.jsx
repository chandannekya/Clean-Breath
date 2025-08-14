import axios from "axios";

/**
 * Fetches a single photo from the Unsplash API based on a search query.
 *
 * @param {string} query The search term for the photo.
 * @returns {string | null} The URL of the first photo found, or null if an error occurs or no results are found.
 */
const searchPhotos = async (query) => {
  try {
    // Make a GET request to the Unsplash API
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        // Use the API key from the environment variables
        Authorization: `Client-ID ${import.meta.env.VITE_accessKey}`,
      },
      params: {
        query: query,
        per_page: 5, // Request 5 photos but we will only use the first one
      },
    });

    // Check if the response has data and at least one result
    if (response.data && response.data.results && response.data.results.length > 0) {
      // Return the URL of the first photo
      return response.data.results[0].urls.regular;
    }

    // If no results are found, log a message and return null
    console.warn(`No photos found for query: "${query}"`);
    return null;
  } catch (error) {
    // Log any errors that occur during the API call
    console.error("Error fetching photos:", error);
    // Return null in case of an error
    return null;
  }
};

export default searchPhotos;

import axios from "axios";

const searchPhotos = async (query) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_accessKey}`,
      },
      params: {
        query: query,
        per_page: 5,
      },
    });

    return response.data.results[0].urls.regular;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};

export default searchPhotos;

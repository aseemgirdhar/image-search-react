import React from "react";
import axios from "axios";
const SearchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID y8tqQxBlmsOeQA9aWwmRSFhHM5k1w4spnCNI5lU0W2c",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default SearchImage;

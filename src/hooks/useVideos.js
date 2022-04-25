import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const KEY = "KEY";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;

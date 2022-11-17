import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Videos from "../Videos/Videos";

import { fetchFromApi } from "../../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const params = useParams();
  const searchTerm = params.searchTerm;

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2, paddingLeft: "120px" }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for :
        <span style={{ color: "#FC1503", paddingLeft: "5px" }}>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

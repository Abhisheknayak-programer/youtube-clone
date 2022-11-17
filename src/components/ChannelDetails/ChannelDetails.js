import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../Videos/Videos";
import ChannelCard from "../ChannelCard/ChannelCard";
import { fetchFromApi } from "../../utils/fetchFromApi";

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videosDetails, setVideosDetails] = useState([]);

  // console.log(channelDetails);
  // console.log(videosDetails);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideosDetails(data?.items)
    );
  }, [id]);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )",
            zIndex: 10,
            height: "200px",
          }}
        />

        <ChannelCard channel={channelDetails} marginTop="-110px" />
      </Box>

      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "120px" } }} />
        <Videos videos={videosDetails} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;

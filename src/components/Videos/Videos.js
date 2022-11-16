import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";

const Videos = (props) => {
  // console.log(props.videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {props.videos.map((item, ind) => (
        <Box key={ind}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channel={item} />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

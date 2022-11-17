import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import Loader from "../Loader/Loader";

const Videos = (props) => {
  // console.log(props.videos);

  if (!props.videos?.length) return <Loader />;

  return (
    <Stack
      direction={props.direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {props.videos?.map((item, ind) => (
        <Box key={ind}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

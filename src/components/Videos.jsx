import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';
  
  // Check if this component is being used as a sidebar on the details page
  const isRowDirection = direction === "column";
  
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: isRowDirection ? 'column' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
        alignItems: 'start',
        gap: '16px',
        width: '100%'
      }}
    >
      {videos.map((item, idx) => (
        <Box 
          key={idx} 
          sx={{ 
            // If it's a sidebar column, lock cards to 100% width so they stack cleanly
            width: isRowDirection 
              ? '100%' 
              : { 
                  xs: '100%', 
                  sm: 'calc(50% - 8px)', 
                  md: 'calc(33.33% - 11px)', 
                  lg: 'calc(25% - 12px)' 
                } 
          }}
        >
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
      ))}
    </Box>
  );
}

export default Videos;
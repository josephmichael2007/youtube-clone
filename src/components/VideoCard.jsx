import React from 'react';
import { Link } from 'react-router-dom'; 
import { Typography, Card, CardContent, CardMedia, Box, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const channelFirstLetter = snippet?.channelTitle ? snippet.channelTitle.charAt(0).toUpperCase() : 'Y';

  return (
    <Card 
      sx={{ 
        width: '100%', 
        boxShadow: "none", 
        borderRadius: 0, 
        backgroundColor: 'transparent', 
        overflow: 'hidden' 
      }}
    >
      {/* Strict 16:9 Widescreen Thumbnail Wrapper */}
      <Link to={videoId ? `/video/${videoId}` : '#'} style={{ textDecoration: 'none' }}>
        <Box sx={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px' }}>
          <CardMedia 
            image={snippet?.thumbnails?.high?.url || 'https://i.ibb.co/G2LwCHL/page-not-found.png'} 
            alt={snippet?.title} 
            sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' // Prevents portrait/stretched thumbnail image blowout
            }} 
          />
        </Box>
      </Link>

      {/* Metadata Description Block */}
      <CardContent sx={{ backgroundColor: "transparent", padding: '12px 0px', display: 'flex', gap: '12px' }}>
        
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '#'} style={{ textDecoration: 'none' }}>
          <Avatar sx={{ width: 36, height: 36, backgroundColor: '#FC3C44', fontSize: '14px', fontWeight: 'bold', color: '#FFF' }}>
            {channelFirstLetter}
          </Avatar>
        </Link>

        <Box sx={{ flex: 1 }}>
          {/* Main White Title Container */}
          <Link to={videoId ? `/video/${videoId}` : '#'} style={{ textDecoration: 'none', color: '#FFF' }}>
            <Typography 
              variant="body1" 
              fontWeight="500" 
              sx={{ 
                color: '#FFF',
                lineHeight: '1.3rem',
                fontSize: '14px',
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                mb: '4px'
              }}
            >
              {snippet?.title || 'No Title Available'}
            </Typography>
          </Link>

          {/* Subtitle Channel Profile Link */}
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '#'} style={{ textDecoration: 'none', color: '#AAA' }}>
            <Typography 
              variant="body2" 
              display="flex" 
              alignItems="center" 
              fontWeight="400"
              fontSize="12px"
              sx={{ color: '#AAA', '&:hover': { color: '#FFF' } }} 
            >
              {snippet?.channelTitle || 'Unknown Channel'}
              <CheckCircleIcon sx={{ fontSize: "12px", color: "#AAA", ml: "4px" }} />
            </Typography>
          </Link>
        </Box>

      </CardContent>
    </Card>
  );
};

export default VideoCard;
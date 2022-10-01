import React from "react";
import { useState, useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

// import pause from "../../../public/images/svgIcons/pause.svg";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      console.log("audio play phase");
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSong(() => {
        let temp = props.setCurrentSong;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSong(() => {
        let temp = props.setCurrentSong;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <Card
      sx={{
        zIndex: 10,
        position: "absolute",
        display: "flex",
        width: "293px",
        margin: "200px 0 0 30%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.songs[props.currentSong].title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.songs[props.currentSong].artist}
          </Typography>
        </CardContent>
        <audio ref={audioEl}>
          <source src={props.songs[props.currentSong].src} />
        </audio>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={() => skipSong(false)}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label="play/pause"
          >
            {isPlaying ? "=" : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
          </IconButton>
          <IconButton aria-label="next" onClick={() => skipSong(true)}>
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.songs[props.currentSong].photo}
        alt={props.songs[props.currentSong].title}
      />
    </Card>
  );
}

export default Player;

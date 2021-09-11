

const videoPlayer = (video) => {
  const isPlaying = true;
 
  video.addEventListener("mouseover", function() {
    if (video.paused && !isPlaying) {
      video.play();
      isPlaying = false;
  }
  });
  video.addEventListener("mouseleave", function() {
    if (!video.paused && isPlaying) {
      video.pause();
      isPlaying = true;
  }
  });
}

export{videoPlayer}

  const togglePlayer = () => {
    const method = video.paused ? 'play' : 'pause';
    console.log(video);
    video[method]();
  }


  export{togglePlayer};
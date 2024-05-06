window.onload = function() {
    var videoElement = document.querySelector('.fullscreen-bs__video');
    var videoSource = document.querySelector('.fullscreen-bs').getAttribute('data-bs-video');
    
    if (videoElement && videoSource) {
      videoElement.src = videoSource;
    }
  };
  
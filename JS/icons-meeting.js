//Buttons fuctionality for the meeting page
document.addEventListener('DOMContentLoaded', function () {
    const muteButton = document.getElementById('microphone-btn');
    const muteIcon = document.getElementById('mute-icon');
    const muteText = document.getElementById('mute-text');
  
    let isMuted = false;
  
    muteButton.addEventListener('click', function () {
      isMuted = !isMuted;
      if (isMuted) {
        muteIcon.src = '/Images/icons/Mic off.svg'; // Change to your muted icon
        muteText.textContent = 'Unmute';
      } else {
        muteIcon.src = '/Images/icons/microphone-on.svg'; // Change to your unmuted icon
        muteText.textContent = 'Mute';
      }
    });
  });

  //This is for control the video and when user click change the image and the text 
document.addEventListener('DOMContentLoaded', function () {
    const videoButton = document.getElementById('video-btn');
    const videoText = document.getElementById('video-text');
  
    let isVideoOn = true; // Set initial video state
  
    videoButton.addEventListener('click', function () {
      isVideoOn = !isVideoOn;
      if (isVideoOn) {
        document.getElementById('video-icon').src = '/Images/icons/video-chat.svg'; // Change to your video on icon
        videoText.textContent = 'Stop Video';
      } else {
        document.getElementById('video-icon').src = '/Images/icons/video-chat-off.svg'; // Change to your video off icon
        videoText.textContent = 'Start Video';
      }
    });
});

//This is for the message icon and when user clicks appears the message content 
document.addEventListener('DOMContentLoaded', function () {
    const messageButton = document.getElementById('message-btn');
    const messageInput = document.getElementById('message-input');
  
    messageButton.addEventListener('click', function () {
      // Toggle display of the message input area
      messageInput.style.display = messageInput.style.display === 'none' ? 'block' : 'none';
    });
  });
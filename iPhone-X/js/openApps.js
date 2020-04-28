
$('.facebook').click(() => {
    let iframe = document.createElement("iframe");
    iframe.style.width = "280px";
    iframe.style.height = "100%";
    iframe.src = "https://www.instagram.com";
    $('#home-screen').append(iframe);
})


$('.camera-icon').click(() => {
    openCamera()
})


openCamera = () => {

    var video = document.createElement('video');
    var cameraApp = document.createElement('div');
    var topToolbar = document.createElement('div');
    var mode = document.createElement('div');
    var bottomToolbar = document.createElement('div');
    var pressBtn = document.createElement('div');
    var circle = document.createElement('div');
    var previousImg = document.createElement('canvas');

    cameraApp.classList = ["camera-app"]
    topToolbar.classList = ['top-toolbar']
    mode.classList = ['mode']
    bottomToolbar.classList = ['bottom-toolbar']
    pressBtn.classList = ['press-btn']
    circle.classList = ['circle']
    previousImg.classList = ['previous-img']

    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.style.width = '480px';
    video.style.height = '380px';
    video.style.marginLeft = "-95px";
    previousImg.style.width = "45px";
    previousImg.style.height = "45px";

    pressBtn.append(circle);
    bottomToolbar.append(pressBtn);
    bottomToolbar.append(previousImg);

    cameraApp.append(topToolbar);
    cameraApp.append(video);
    cameraApp.append(mode);
    cameraApp.append(bottomToolbar);

    /* Setting up the constraint */
    var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
    var constraints = {
    audio: false,
        video: {
            facingMode: facingMode
        }
    };

    /* Stream it to video element */
    navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
        video.srcObject = stream;
    });
    $('#screen').prepend(cameraApp);
    
    $('.circle').click(() => {
        var context = previousImg.getContext('2d');
        console.log('draw')
        // Draw the video frame to the canvas.
        context.drawImage(video, 0, 0, previousImg.width, 
            previousImg.height);
    })

}
const video = document.querySelector('#video'),
      btnPlay = document.querySelector('#btnPlay'),
      btnStop = document.querySelector('#btnStop'),
      ImgSrc = document.querySelector('#ImgSrc'),
      porgressContainer = document.querySelector('#PorgressContainer'),
      progressBar = document.querySelector('#progressBar'),
      time = document.querySelector('#time'),
      fullScreen = document.querySelector('#fullScreen'),
      Volume = document.querySelector('#volume'),
      vContainer = document.querySelector('#vContainer'),
      volumeContainer = document.querySelector('#volumeContainer'),
      volumeContainerBar = document.querySelector('#volumeContainerBar');      

let isPlay = false;
let isVolume = false;
let fullScreens = false;
/*videoPlay */
function videoPlay(){
    isPlay = true;
    video.play();
    ImgSrc.src = './img/pouse.svg';
}

/*videoPause */
function videoPause(){
    isPlay  = false;
    video.pause();
    ImgSrc.src = './img/play.svg';
}


btnPlay.addEventListener('click', ()=>{
    if(!isPlay){
        videoPlay();
    }else{
        videoPause();
    }
})

video.addEventListener('click', ()=>{
    if(!isPlay){
        videoPlay();
    }else{
        videoPause();
    }
})


/*stopPlay */

function StopPlay(){
    video.pause();
    video.currentTime = 0;
    ImgSrc.src = './img/play.svg';
}


btnStop.addEventListener('click', StopPlay);




/* porgressContainer */

function PorgressClcik(event){

    let widthX = this.offsetWidth;
    let clickX = event.offsetX;
    let duration = video.duration;

    let porgressContainerWidth = (clickX / widthX) * duration;
   
    video.currentTime = porgressContainerWidth;
    

}

porgressContainer.addEventListener('click', PorgressClcik);


/* PorgressWidth */

function Porgress(){
    let duration = video.duration;
    let currentTime = video.currentTime;

    let PorgressWidth = (currentTime / duration) * 100;
    
    progressBar.style.width = `${PorgressWidth}%`
   
}

video.addEventListener('timeupdate', ()=>{
    Porgress();
    videoTime();
});


/*time */

function videoTime (){
    let cs = parseInt(video.currentTime % 60);
    let cm = parseInt((video.currentTime / 60) %     60)

     time.innerHTML= `${cm}:${cs}`;
}

/*volumeContainer */


function VolumeContainer(event){
    let Height = this.offsetHeight;
    let clickY = event.offsetY;
    
    let volumeContainerBarHeight = (clickY / Height) * 100;
    console.log(volumeContainerBarHeight)
    volumeContainerBar.style.height = `${volumeContainerBarHeight}%`;

    let volumeContainerBarH = (clickY / Height) * 1;
    console.log(volumeContainerBarH)
    video.volume = volumeContainerBarH;

    video.play();
}

volumeContainer.addEventListener('click', VolumeContainer)



Volume.addEventListener('click', function(){
    if(isVolume =! isVolume){
       
        vContainer.classList.add('active');
        
    }else{
       
        vContainer.classList.remove('active');  
    
    }
});

/* fullScreen */

function openFullscreen() {
    fullScreens = true;
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
  }
  
  function closeFullscreen() {
    fullScreens = false;
    if (video.exitFullscreen) {
        video.exitFullscreen();
    } else if (video.webkitExitFullscreen) { /* Safari */
        video.webkitExitFullscreen();
    } else if (video.msExitFullscreen) { /* IE11 */
        video.msExitFullscreen();
    }
  }

  

  fullScreen.addEventListener('click', ()=>{
    if(!fullScreens){
        openFullscreen();
    }else{
        closeFullscreen();
    }
})




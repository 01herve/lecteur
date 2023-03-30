const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('triangle');
const pauseButton = document.getElementById('pause');
const progressBarAudio = document.getElementById('progress');
const duration = document.querySelector('.duration');
const control = document.querySelector('ul')
const command = document.querySelectorAll('li')
const boxInput = document.querySelector('.box')
const volumeRange = document.getElementById('volume');
const sources = document.querySelector('source')
const left = document.querySelectorAll('.bool')










let isPlaying = false;

left.forEach(element => {
  element.addEventListener('click', val);
});

function val(element) {

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      
      const lefts = Math.floor(Math.random() * data.audioFiles.length);
      const url = data.audioFiles[lefts];
      const audioPlayer = document.querySelector('#audioPlayer');
      sources.setAttribute('src', url);
      audioPlayer.load();
      play()
      element.classList.add('active')
    })
    .catch(error => console.error(error));
}

function play() {
  audioPlayer.play();
  isPlaying = true;
  playButton.style.transition = 'all 2s ease-out';
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
  duration.classList.add ('show')
//   leftrigth[2].classList.add ('show')
  control.style.display = 'inline-block';
  
}



function declencheInput(){
    boxInput.classList.add('show')
    duration.classList.add('show')
}

function declencheVolume(){
    volumeRange.classList.add('show')
}

volumeRange.addEventListener('input', () => {
    audioPlayer.volume = volumeRange.value;
    });

    

function pause() {
  audioPlayer.pause();
  isPlaying = false;
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline-block';
  control.style.display = 'none';
  duration.classList.remove('show')
  boxInput.classList.remove('show')
  volumeRange.classList.remove('show')
}

function updateprogressBarAudio() {
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBarAudio.value = percent;
  
  const minutes = Math.floor(audioPlayer.currentTime / 60);
  const seconds = Math.floor(audioPlayer.currentTime % 60);
  
  duration.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}


playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);

progressBarAudio.addEventListener('input', () => {
  const seekTo = (audioPlayer.duration * ((progressBarAudio.value)/ 100)) ;
  audioPlayer.currentTime = seekTo;
});

audioPlayer.addEventListener('timeupdate', updateprogressBarAudio);
command[0].addEventListener('click',declencheVolume)
command[1].addEventListener('click',declencheInput)


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2030b7b884msh782eca73d8a3bbbp14bbe4jsn532160868e03',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '2030b7b884msh782eca73d8a3bbbp14bbe4jsn532160868e03',
    //         'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response.body))
    //     .catch(err => console.error(err));
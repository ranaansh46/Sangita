// adding buttons
let button_a = document.getElementById('music-button1');
let button_s = document.getElementById('music-button2');
let button_j = document.getElementById('music-button3');
let button_k = document.getElementById('music-button4');
let button_z = document.getElementById('music-button5');
let button_x = document.getElementById('music-button6');
let button_n = document.getElementById('music-button7');
let button_m = document.getElementById('music-button8');

// adding sounds
let Audio_1 = document.getElementById('music_File_1');
let Audio_2 = document.getElementById('music_File_2');
let Audio_3 = document.getElementById('music_File_3');
let Audio_4 = document.getElementById('music_File_4');
let Audio_5 = document.getElementById('music_File_5');
let Audio_6 = document.getElementById('music_File_6');
let Audio_7 = document.getElementById('music_File_7');
let Audio_8 = document.getElementById('music_File_8');

let sound_a, sound_s, sound_j, sound_k, sound_z, sound_x, sound_n, sound_m;

function createAudioObject(fileInput, callback) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const audio = new Audio();
    audio.src = e.target.result;
    callback(audio);
  };
  reader.readAsDataURL(fileInput.files[0]);
}

function play_sound(sound, button) {
  sound.currentTime = 0;
  sound.play();
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, sound.duration + 250);
}

// Create audio objects when file inputs change
Audio_1.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_a = audio;
  });
});
Audio_2.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_s = audio;
  });
});
Audio_3.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_j = audio;
  });
});
Audio_4.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_k = audio;
  });
});
Audio_5.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_z = audio;
  });
});
Audio_6.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_x = audio;
  });
});
Audio_7.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_n = audio;
  });
});
Audio_8.addEventListener('change', function () {
  createAudioObject(this, function (audio) {
    sound_m = audio;
  });
});

// this section makes the sound on keypress
document.addEventListener('keypress', (e) => {
    keypressed = (e.key);
        
    if (keypressed == "a") {
        play_sound(sound_a, button_a);
      }
      if (keypressed == "s") {
        play_sound(sound_s, button_s);
      }
      if (keypressed == "j") {
        play_sound(sound_j, button_j);
      }
      if (keypressed == "k") {
        play_sound(sound_k, button_k);
      }
      if (keypressed == "z") {
        play_sound(sound_z, button_z);
      }
      if (keypressed == "x") {
        play_sound(sound_x, button_x);
      }
      if (keypressed == "n") {
        play_sound(sound_n, button_n);
      }
      if (keypressed == "m") {
        play_sound(sound_m, button_m);
      }
})


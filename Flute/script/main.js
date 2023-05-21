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
let sound_a = new Audio("Music/Flute/a.wav");
let sound_s = new Audio("Music/Flute/s.wav");
let sound_j = new Audio("Music/Flute/j.wav");
let sound_k = new Audio("Music/Flute/k.wav");
let sound_z = new Audio("Music/Flute/z.wav");
let sound_x = new Audio("Music/Flute/x.wav");
let sound_n = new Audio("Music/Flute/n.wav");
let sound_m = new Audio("Music/Flute/m.wav");  

function play_sound(sound,button){
    sound.currentTime=0;
    sound.play();
    button.classList.add('pressed')
    setTimeout(() => {
        button.classList.remove('pressed')
    }, sound.duration + 250);
}

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
        play_sound(sound_x, button_s);
      }
      if (keypressed == "n") {
        play_sound(sound_n, button_n);
      }
      if (keypressed == "m") {
        play_sound(sound_m, button_m);
      }
})

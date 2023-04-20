// buttons
let button_a = document.getElementById('music-button1');
let button_s = document.getElementById('music-button2');
let button_j = document.getElementById('music-button3');
let button_k = document.getElementById('music-button4');
let button_z = document.getElementById('music-button5');
let button_x = document.getElementById('music-button6');
let button_n = document.getElementById('music-button7');
let button_m = document.getElementById('music-button8');

// sounds
let sound_a = new Audio("Music/a.wav");
let sound_s = new Audio("Music/s.wav");
let sound_j = new Audio("Music/j.wav");
let sound_k = new Audio("Music/k.wav");
let sound_z = new Audio("Music/z.wav");
let sound_x = new Audio("Music/x.wav");
let sound_n = new Audio("Music/n.wav");
let sound_m = new Audio("Music/m.wav");
  
function play_sound(sound,button){
    sound.currentTime=0;
    sound.play();
    button.classList.add('pressed')
    setTimeout(() => {
        button.classList.remove('pressed')
    }, sound.duration + 250);
}

button_a.addEventListener('click',()=>{
    button_a.classList.add('pressed')
    button_a.classList.remove('pressed')
})

// this section makes the sound on keypress
document.addEventListener('keypress', (e) => {
    keypressed = (e.key);
        
    switch (keypressed) {
        case 'a':
            play_sound(sound_a,button_a);
            break;
        case 's':
            play_sound(sound_s,button_s);
            break;
        case 'j':
            play_sound(sound_j,button_j);
            break;
        case 'k':
            play_sound(sound_k,button_k);
            break;
        case 'z':
            play_sound(sound_z,button_z);
            break;
        case 'x':
            play_sound(sound_x,button_x);
            break;
        case 'n':
            play_sound(sound_n,button_n);
            break;
        case 'm':
            play_sound(sound_m,button_m);
            break;
        default:
            break;
    }
})

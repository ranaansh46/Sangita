
let button_a = document.getElementById('music-button1');
let button_s = document.getElementById('music-button2');
let button_j = document.getElementById('music-button3');
let button_k = document.getElementById('music-button4');
let button_z = document.getElementById('music-button5');
let button_x = document.getElementById('music-button6');
let button_n = document.getElementById('music-button7');
let button_m = document.getElementById('music-button8');

let sound_a = new Audio("Music/a.wav");
let sound_s = new Audio("Music/s.wav");
let sound_j = new Audio("Music/j.wav");
let sound_k = new Audio("Music/k.wav");
let sound_z = new Audio("Music/z.wav");
let sound_x = new Audio("Music/x.wav");
let sound_n = new Audio("Music/n.wav");
let sound_m = new Audio("Music/m.wav");
  

document.addEventListener('keypress', (e) => {
    keypressed = (e.key);
        
    switch (keypressed) {
        case 'a':
            console.log('a');
            sound_a.currentTime=0;
            sound_a.play();
            break;
        case 's':
            console.log('s');
            sound_s.currentTime=0;
            sound_s.play();
            break;
        case 'j':
            console.log('j');
            sound_j.currentTime=0;
            sound_j.play();
            break;
        case 'k':
            console.log('k');
            sound_k.currentTime=0;
            sound_k.play();
            break;
        case 'z':
            console.log('z');
            sound_z.currentTime=0;
            sound_z.play();
            break;
        case 'x':
            console.log('x');
            sound_x.currentTime=0;
            sound_x.play();
            break;
        case 'n':
            console.log('n');
            sound_n.currentTime=0;
            sound_n.play();
            break;
        case 'm':
            console.log('m');
            sound_m.currentTime=0;
            sound_m.play();
            break;
        default:
            break;
    }
})

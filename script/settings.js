const radioButtons = document.querySelectorAll('input[type="radio"]');
let selectedValue;

for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        selectedValue = radioButton.value;
        break;
    }
}
if (selectedValue === 'option1') {
    let sound_a = new Audio("/Music/Drum/a")
    let sound_s = new Audio("/Music/Drum/s")
    let sound_z = new Audio("/Music/Drum/z")
    let sound_x = new Audio("/Music/Drum/x")
    let sound_j = new Audio("/Music/Drum/j")
    let sound_k = new Audio("/Music/Drum/k")
    let sound_n = new Audio("/Music/Drum/n")
    let sound_m = new Audio("/Music/Drum/m")
    console.log(selectedValue);
}
else if (selectedValue === 'option2') {
    let sound_a = new Audio("/Music/Phonk/a")
    let sound_s = new Audio("/Music/Phonk/s")
    let sound_z = new Audio("/Music/Phonk/z")
    let sound_x = new Audio("/Music/Phonk/x")
    let sound_j = new Audio("/Music/Phonk/j")
    let sound_k = new Audio("/Music/Phonk/k")
    let sound_n = new Audio("/Music/Phonk/n")
    let sound_m = new Audio("/Music/Phonk/m")
    console.log(selectedValue);
}
else if (selectedValue === 'option3') {
    let sound_a = new Audio("/Music/Flute/a")
    let sound_s = new Audio("/Music/Flute/s")
    let sound_z = new Audio("/Music/Flute/z")
    let sound_x = new Audio("/Music/Flute/x")
    let sound_j = new Audio("/Music/Flute/j")
    let sound_k = new Audio("/Music/Flute/k")
    let sound_n = new Audio("/Music/Flute/n")
    let sound_m = new Audio("/Music/Flute/m")
    console.log(selectedValue);
}

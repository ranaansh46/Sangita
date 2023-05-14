// Initialize the audio context
const audioContext = new AudioContext();
const audioCtx = new AudioContext();

// Load the audio files
const audioFiles = {};
audioFiles["a"] = "/Drum/Music/Drum/a.wav";
audioFiles["s"] = "/Drum/Music/Drum/s.wav";
audioFiles["z"] = "/Drum/Music/Drum/z.wav";
audioFiles["x"] = "/Drum/Music/Drum/x.wav";
audioFiles["j"] = "/Drum/Music/Drum/j.wav";
audioFiles["k"] = "/Drum/Music/Drum/k.wav";
audioFiles["n"] = "/Drum/Music/Drum/n.wav";
audioFiles["m"] = "/Drum/Music/Drum/m.wav";

const loadAudioFiles = async () => {
  for (const key in audioFiles) {
    audioFiles[key] = await loadAudioFile(audioContext, audioFiles[key]);
  }
};

loadAudioFiles();

// Initialize the recorder
let isRecording = false;
let recordedKeys = [];

const startRecording = () => {
  isRecording = true;
  recordedKeys = [];
  document.getElementById("record-button").style.backgroundColor = "red";
};

const stopRecording = () => {
  isRecording = false;
  document.getElementById("record-button").style.backgroundColor = "initial";
  playRecordedKeys();
};

function playRecordedKeys() {
    let startTime = audioCtx.currentTime;
  
    for (let i = 0; i < recordedKeys.length; i++) {
      let key = recordedKeys[i];
      let source = audioCtx.createBufferSource();
      source.buffer = audioFiles[key];
      source.connect(audioCtx.destination);
      
      if (isFinite(startTime)) {
        source.start(startTime);
      } else {
        console.log("Invalid start time: " + startTime);
      }
      
      startTime += keyGap[key];
    }
  }
  

// Add event listeners
document.getElementById("record-button").addEventListener("click", () => {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
});

document.addEventListener("keydown", (event) => {
  if (isRecording && ["a", "s", "z", "x", "j", "k", "n", "m"].includes(event.key)) {
    if (recordedKeys.length === 0) {
      recordedKeys.push({ key: event.key, timeGap: 0 });
    } else {
      const timeGap = performance.now() - recordedKeys[recordedKeys.length - 1].timeStamp;
      recordedKeys.push({ key: event.key, timeGap: timeGap });
    }
  }
});

// Load audio file function
function loadAudioFile(audioContext, url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = () => {
      audioContext.decodeAudioData(request.response).then((buffer) => {
        resolve(buffer);
      }).catch((error) => {
        reject(error);
      });
    };

    request.onerror = () => {
      reject(new Error("Error loading audio file"));
    };

    request.send();
  });
}

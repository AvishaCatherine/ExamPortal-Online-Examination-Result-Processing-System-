let warnings = 0;

function triggerWarning(reason){
  warnings++;

  let msgs = [
    "Suspicious eye movement 👀",
    "Face not visible ⚠️",
    "Multiple screens detected 🖥️",
    "AI flagged unusual behavior 🤖"
  ];

  let msg = msgs[Math.floor(Math.random()*msgs.length)];

  document.getElementById("warningBox").classList.remove("hidden");
  document.getElementById("warnText").innerText =
    reason + "\n" + msg + "\nWarning " + warnings + "/3";

  document.getElementById("dots").innerText = "🔴 ".repeat(warnings);

  if(warnings >= 3){
    document.getElementById("warningBox").classList.add("hidden");
    document.getElementById("barred").classList.remove("hidden");
  }
}

function resumeExam(){
  document.getElementById("warningBox").classList.add("hidden");
  document.documentElement.requestFullscreen();
}

// EVENTS
document.addEventListener("visibilitychange", ()=>{
  if(document.hidden) triggerWarning("Tab switch detected");
});

window.addEventListener("blur", ()=>{
  triggerWarning("Window change detected");
});

document.addEventListener("fullscreenchange", ()=>{
  if(!document.fullscreenElement){
    triggerWarning("Exited fullscreen");
  }
});

// BLOCK KEYS
document.addEventListener("keydown", (e)=>{
  if(e.key==="F12" || e.ctrlKey){
    e.preventDefault();
    triggerWarning("Blocked key usage");
  }
});

// FORCE FULLSCREEN
document.documentElement.requestFullscreen();
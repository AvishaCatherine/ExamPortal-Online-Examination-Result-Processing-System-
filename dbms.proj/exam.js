let time = 60;

// CAMERA
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
  document.getElementById("cam").srcObject = stream;
})
.catch(() => alert("Camera required!"));

// TIMER
let timer = setInterval(()=>{
  time--;
  document.getElementById("timer").innerText = time;
  if(time<=0) submitExam();
},1000);

// PROGRESS
document.querySelectorAll("input").forEach(i=>{
  i.addEventListener("change", ()=>{
    let count = document.querySelectorAll("input:checked").length;
    document.getElementById("progress").innerText = count + "/2";
  });
});

// SUBMIT
function submitExam(){
  clearInterval(timer);

  let score = 0;
  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');

  if(q1 && q1.value==="a") score++;
  if(q2 && q2.value==="a") score++;

  localStorage.setItem("score", score);
  window.location.href="result.html";
}
let ctx = document.getElementById("chart").getContext("2d");

let data = [50, 80, 60];

data.forEach((val,i)=>{
  ctx.fillRect(i*80+20, 200-val, 40, val);
});
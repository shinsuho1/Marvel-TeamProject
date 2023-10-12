const graphe = document.querySelectorAll(".graphe");
const imgs = document.querySelectorAll(".thang");
const box = document.querySelectorAll(".title");
const inner = document.querySelectorAll(".progress");
const ott = document.getElementById(".title"); 




window.addEventListener("load",()=>{
  graphe.forEach((el,index)=>{
    el.classList.add("on");
  })
});



graphe.forEach((el,index)=>{
  el.addEventListener("click",()=>{
    
    for (let i = 0; i<imgs.length; i++){
      imgs[i].classList.remove("on");
    }
    imgs[index].classList.add("on");
    
  });
});



// ott.addEventListener("mouseover", function (event) {
//   event.progress.style.color = "red";
// }, false);


// ott.addEventListener("mouseout", function(event){
//   event.progress.style.color = "white";
// }, false)







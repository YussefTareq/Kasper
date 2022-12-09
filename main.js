let liSwitch = document.querySelectorAll(".shuffle li");
let images =document.querySelectorAll(".imgs-container .box");
let arrImg =Array.from(images);
liSwitch.forEach((el)=>{
    el.addEventListener("click",removeActive);
    el.addEventListener("click",mangeImgs);

})
function removeActive(){
    liSwitch.forEach((el)=>{
        el.classList.remove("active");
        this.classList.add("active");

    })
}
function mangeImgs(){
    arrImg.forEach((el)=>{
        el.style.display="none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display="block"
    })
}
let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");

// let span =document.querySelectorAll(".skills .progress span")
// let sectionTwo = document.querySelector(".two");

window.onscroll =function(){
if (window.scrollY >= section.offsetTop - 100){
    if(!started){
nums.forEach((num)=>startCount(num));
}
started=true
}
};

let started =false;

function startCount(el){
    let goal = el.dataset.goal;
    
    let count = setInterval(() => {
        el.textContent++;
    if (el.textContent==goal){
        clearInterval(count);
    
}
}, 1000 / goal)

}
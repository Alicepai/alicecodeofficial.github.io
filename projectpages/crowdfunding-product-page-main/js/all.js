// active bookmarks
const bookmark = document.getElementById("bookmark");
let flag = false;
bookmark.addEventListener('click',function(){
flag = !flag;
if(flag){
    const circle = document.getElementById("circle");
    circle.style.fill = "hsl(176, 72%, 28%)";
    const icon = document.getElementById("icon");
    icon.style.fill = "#fff";
    const words = document.getElementById("bookmarkWord");
    words.innerHTML = "Bookmarked";
    bookmark.classList.remove("prevent");
    bookmark.classList.add("actived");

}else{
    const circle = document.getElementById("circle");
    circle.style.fill = "#2F2F2F";
    icon.style.fill = "#B1B1B1";
    const words = document.getElementById("bookmarkWord");
    words.innerHTML = "Bookmark";
    bookmark.classList.add("prevent");
    bookmark.classList.remove("actived");
}
})

// active bookmark for mobile
const mobileBookmark = document.querySelector(".mobile-bookmark");
let flag2 = false;
mobileBookmark.addEventListener('click',function(){
flag2 = !flag2;
if(flag2){
    const mobilecircle = document.getElementById("mobile-circle");
    mobilecircle.style.fill = "hsl(176, 72%, 28%)";
    mobileBookmark.style.color = "hsl(176, 72%, 28%)";
    const mobileIcon = document.getElementById("mobile-icon");
    mobileIcon.style.fill = "#fff";
}else{
    const mobilecircle = document.getElementById("mobile-circle");
    mobilecircle.style.fill = "#2F2F2F";
    mobileBookmark.style.color = "hsl(0, 0%, 48%)";
    const mobileIcon = document.getElementById("mobile-icon");
    mobileIcon.style.fill = "#B1B1B1";
}
})


// modal
const modal = document.getElementById("modal01")
const backupbtn = document.getElementById("backupbtn");
backupbtn.addEventListener("click",function(){
    modal.style.display = "block";
})
const closebtn = document.getElementById("closebtn");
closebtn.addEventListener("click",function(){
    modal.style.display = "none";
})

// select options
const inputs = document.querySelectorAll("input[type=radio]");
const modalCards = document.querySelectorAll(".modal-card");
const qty = document.querySelectorAll(".qty h2");
for(let i=0;i<inputs.length;i++){
    // watch the range is document
    let modalCardLowerInfo = modalCards[i].querySelector(".modal-card-lower-info"); 
    document.addEventListener("change",function(e){
        if(inputs[i].checked){
            modalCards[i].style.borderColor = "hsl(176, 50%, 47%)";
            if(+qty[i-1].innerHTML){
                modalCardLowerInfo.style.display = "flex";
            }else{
                modalCards[i].style.borderColor = "#eee";
            }
            
        }else{
            modalCards[i].style.borderColor = "";
            modalCardLowerInfo.style.display = "none";
        }
        })
}

const continueBtns = document.querySelectorAll(".continue-btn");
const modal02 = document.getElementById("modal02");
for(let i=0;i<continueBtns.length;i++){
    continueBtns[i].addEventListener('click',function(){
        modal.style.display = "none";
        // setTimeout(()=>{
            modal02.style.display = "block";
        // },2000)
    })
}

const endBtn = document.getElementById("endbtn");
endBtn.addEventListener("click",()=>{
    modal02.style.display = "none";
})

// navbar
const mobileIcon = document.querySelector(".openIcon");
const closeIcon = document.getElementById("closeIcon");
const mobilenav = document.querySelector("#modal03");
const logo = document.getElementById("logo");

mobileIcon.addEventListener("click",()=>{
    mobilenav.style.display = "block";
    mobileIcon.style.display = "none";
    closeIcon.style.display = "block";
    logo.style.display = "block"
})
closeIcon.onclick = ()=>{
    mobilenav.style.display = "none";
    mobileIcon.style.display = "block";
    closeIcon.style.display = "none";
    logo.style.display = "none"
}





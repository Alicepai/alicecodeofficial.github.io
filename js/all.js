// control menuicon
    var menuicon = document.getElementById("menuicon");
    var menu = document.querySelector(".menu");
    menuicon.onclick = function(){
        menuicon.classList.toggle("change");
        menu.classList.toggle("active");
    }
// once resize, close the mobile menu
var wrap = document.querySelector(".wrap");
window.onresize = function(){
    if(wrap.offsetWidth >= 555){
        menu.classList.remove("active");
    }
}
console.log(wrap.offsetWidth);
// calculating percentage
var progression = document.querySelector(".progression");
var progressSpan = document.querySelector(".progression span");
progressSpan.innerHTML = 0+"%"+"&nbsp;<i class='fas fa-arrow-up'></i>";


var num;
document.onscroll = function(e){
    e = e || window.e;
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var p = document.body.scrollHeight || document.documentElement.scrollHeight;
    var ch = document.documentElement.clientHeight;
    num = st/(p-ch);
    num = Math.round(num*100)
    console.log(window.screenY);
    console.log(window.innerHeight);


    if(window.pageYOffset>0){  //垂直方向已滚动的像素值，所以大於0，代表可以滾動，換言之就是有滾動條
        progression.style.display="block";
    }
    progressSpan.innerHTML = num+"%"+"&nbsp;<i class='fas fa-arrow-up'></i>";
}


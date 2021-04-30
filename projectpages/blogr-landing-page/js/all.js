// mobile Icon
const hamIcon = document.getElementById("hamIcon");
const closeIcon = document.getElementById("closeIcon");

const mobilenav = document.getElementsByClassName("mobilenav")[0];
hamIcon.addEventListener('click',function(){
    this.style.display = 'none';
    closeIcon.style.display = 'block';
    mobilenav.classList.add("actived");
})
closeIcon.addEventListener('click',function(){
    this.style.display = 'none';
    hamIcon.style.display = 'block';
    mobilenav.classList.remove("actived");
})

const accs = document.getElementsByClassName("acc");
for(let i =0;i<accs.length;i++){
    accs[i].addEventListener("click",function(){
        this.classList.toggle("show");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+"px";
        }
    })
}

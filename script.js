"use strict"
const share = document.querySelector(".share");
const shareButton = document.querySelector(".share_btn");
const shareButton2 = document.querySelector(".share_btn2");
const mediaSection = document.querySelector(".soc_media");
const mainSection = document.querySelector(".main_section");
const arrow = document.querySelector(".arrow");
const appearFunc = () =>{
    if(mediaSection.classList.contains("appear")){
        mediaSection.style.display = "none";
        mediaSection.classList.remove("appear");
        mediaSection.classList.add("hide");
    }
    else{
        mediaSection.style.display = "flex";
        mediaSection.classList.add("appear");
        mediaSection.classList.remove("hide"); 
    }
}

shareButton.addEventListener("click",()=>{
    appearFunc();
})

shareButton2.addEventListener("click", ()=>{
    appearFunc();
})


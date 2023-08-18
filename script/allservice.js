// Creating an external div to append to the block div.
let divOne = document.createElement('div');
let video = document.createElement("video");
video.src = "./assets/videos/How to Run an Android App on Your Phone.mp4";
video.autoplay = false;
video.controls = true;
video.height = 240;
video.width = 300;
let h3 = document.createElement("h3");
h3.innerText = "summary";
h3.style.color = "#560af0";
h3.style.paddingTop = "10px";
h3.style.fontSize = "25px";
let p = document.createElement("p");
p.innerText = `lkmklndklndklnskdnisn isnd ndoin dosn don oidsnkdn kdln
     ldkn lkdsn kdsn idns kdn kndsk ndk mdsl nskldn opns lmsl`;
p.style.fontSize = "25px";
p.style.paddingTop = "10px";
let closebtn = document.createElement("button");
closebtn.className = "btn";
closebtn.innerText = "close";

divOne.appendChild(video);
divOne.appendChild(h3);
divOne.appendChild(p);
divOne.appendChild(closebtn);

let border = document.querySelector(".border");
console.log(border);
 let block = document.querySelector(".block");
 console.log(block);
 

 let btn = document.querySelector(".btn").
addEventListener('click', displayVideo);
function displayVideo() {
    block.classList.add("hide");
    border.appendChild(divOne);
    divOne.style.display = "block";
};


closebtn.addEventListener("click", () =>{
     block.classList.remove("hide");
     divOne.style.display = "none";
     
    // border = "";
    // let block = document.querySelector(".block");
     //border.innerhtml = "block";
});
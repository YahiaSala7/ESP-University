
// Up Scroll
const upButton = document.getElementById("up-button");
function scrollUp(){
    if(window.scrollY >= 100){
        upButton.style.opacity="1";
        upButton.style.visibility="visible";
    }
    else{
        upButton.style.opacity="0";
        upButton.style.visibility="hidden";
        
    }
}
function clickUp(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
window.addEventListener('scroll',scrollUp)
upButton.addEventListener('click',clickUp)

// Bars Button
const barsButton = document.getElementById("bars-button");
const navList= document.querySelector("nav ul")

let barsCount=0;
 function rotate(){ 
    if(barsCount%2==0){
    barsButton.classList.add("first-rotate")
    navList.classList.add("list")
    barsButton.classList.remove("second-rotate")
    barsCount++;
    }
    else{
    barsButton.classList.add("second-rotate")
    navList.classList.remove("list")
    barsButton.classList.remove("first-rotate")
    barsCount++;    
}
};
barsButton.addEventListener("click" , rotate);

// Daynamic Height
const LandSection = document.getElementById("landing-section")
window.onresize = dHeight ;
window.onload= dHeight;
function dHeight(){
let width = window.innerWidth;
LandSection.style.width=`${width.toString()}px - 20px `
LandSection.style.height=`${width.toString() / 1.9}px `
}

//About List
const angleOne= document.getElementById("angle-one")
const angleTwo= document.getElementById("angle-two")
const diivIngle=document.getElementById("div-angle")
const aboutList= document.getElementById("about-list")
let arrowCount=0;
function down(){
    if(arrowCount % 2 === 0){
        angleOne.style.cssText="transform:rotate(45deg)";
        angleTwo.style.cssText="transform:rotate(-45deg)";
        aboutList.classList.add("go-down");
        aboutList.classList.remove("go-up");
        arrowCount++;
    }else{
        angleOne.style.cssText="transform:rotate(-45deg)";
        angleTwo.style.cssText="transform:rotate(45deg)";  
        aboutList.classList.remove("go-down");
        aboutList.classList.add("go-up");
        arrowCount++;
    }

}
diivIngle.addEventListener('click',down);
window.addEventListener('reload',down);
// Change Background Images
const bulltOne =document.getElementById("bullt-one")
const bulltTwo =document.getElementById("bullt-two")
const bulltThree =document.getElementById("bullt-three")
const imgOne=document.querySelector(".landing .img-one");
const imgTwo=document.querySelector(".landing .img-two");
const imgThree=document.querySelector(".landing .img-three");

function switchBackGroundOne(){
    imgOne.style.opacity="1";
    imgTwo.style.opacity="0";
    imgThree.style.opacity="0";
    bulltOne.style.cssText="background-color: var(--main-color);border-color: var(--main-color);";
    bulltTwo.style.cssText="background-color:transparent;border-color: white;";
    bulltThree.style.cssText="background-color:transparent;border-color: white;";
}
function  switchBackGroundTwo(){
    imgTwo.style.opacity="1";
    imgThree.style.opacity="0";
    bulltTwo.style.cssText="background-color: var(--main-color);border-color: var(--main-color);";
    bulltOne.style.cssText="background-color:transparent;border-color: white;";
    bulltThree.style.cssText="background-color:transparent;border-color: white;";
}
function  switchBackGroundThree(){
    imgThree.style.opacity="1";
    imgTwo.style.opacity="0";
    bulltThree.style.cssText="background-color: var(--main-color);border-color: var(--main-color);";
    bulltOne.style.cssText="background-color:transparent;border-color: white;";
    bulltTwo.style.cssText="background-color:transparent;border-color: white;";

}
bulltOne.addEventListener("click", switchBackGroundOne)
bulltTwo.addEventListener("click", switchBackGroundTwo)
bulltThree.addEventListener("click", switchBackGroundThree)

// const switchBackGrounds=["switchBackGroundOne","switchBackGroundTwo","switchBackGroundThree"]

    // setInterval({
        
    // },1000)

//Videos
const videoOne = document.getElementById("video-one");
const videoTwo = document.getElementById("video-two");
const videoTree = document.getElementById("video-three");
const videoFour = document.getElementById("video-four");
const cambridge=document.getElementById("cambridge");
const oxford=document.getElementById("oxford");
const MIT=document.getElementById("MIT");
const stanford=document.getElementById("stanford");

function videoChangeOxford(){
oxford.style.display="block";
cambridge.style.display="none";
MIT.style.display="none";
stanford.style.display="none";
}
function videoChangecambridge(){
oxford.style.display="none";
cambridge.style.display="block";
MIT.style.display="none";
stanford.style.display="none";
}
function videoChangeMIT(){
oxford.style.display="none";
cambridge.style.display="none";
MIT.style.display="block";
stanford.style.display="none";
}
function videoChangeStanford(){
oxford.style.display="none";
cambridge.style.display="none";
MIT.style.display="none";
stanford.style.display="block";
}

videoTwo.addEventListener("click" , videoChangeOxford);
videoOne.addEventListener("click" , videoChangecambridge);
videoTree.addEventListener("click" , videoChangeStanford);
videoFour.addEventListener("click" , videoChangeMIT);

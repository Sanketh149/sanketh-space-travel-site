const crewTitleCont = document.querySelector(".crew-info-cont .crew-title-cont");
const crewNameCont = document.querySelector(".crew-info-cont .crew-name-cont");
const crewImgCont = document.querySelector(".crew-img");
const crewBioCont = document.querySelector(".crew-bio-cont");
const menuBtns = document.querySelectorAll(".circle-menu li");
const number = document.querySelectorAll(".number");

const url = "./data.json";

//EVENTLISTENERS


menuBtns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(!btn.classList.contains("active")){
            menuBtns.forEach(btn=>{ btn.classList.remove("active-circle")})
            btn.classList.add("active-circle")
        }
    })
})

//FUNCTIONS
function infoButtons(){
    for(let i = 0; i < menuBtns.length ;i++){
       menuBtns[i].addEventListener("click",(e)=>{
           let number = menuBtns[i].value 
           if(e.target){
            crewImgCont.innerHTML = " ";
            crewBioCont.innerHTML = " ";
            crewNameCont.innerHTML = " ";
            crewTitleCont.innerHTML = " ";
            createHtml(number)
            }
        })
    }
}

async function createHtml(number){
    const dataFetch = await fetch(url);
    const data = await dataFetch.json();
    const crewImg = document.createElement("img");
    crewImg.classList.add("crew-image");
    crewImg.src = data.crew[number].images.png
    crewImgCont.appendChild(crewImg);
    //creating planet name element
    const crewTitle = document.createElement("h3");
    const crewName = document.createElement("h2");
    crewTitle.innerHTML = data.crew[number].role.toUpperCase();
    crewName.innerHTML = data.crew[number].name.toUpperCase();
    crewTitleCont.appendChild(crewTitle)
    crewNameCont.appendChild(crewName)
    //Creating and retreving Bio information
    const crewBio = document.createElement("p");
    crewBio.innerHTML = data.crew[number].bio;
    crewBioCont.appendChild(crewBio);
}


createHtml(0)
infoButtons()

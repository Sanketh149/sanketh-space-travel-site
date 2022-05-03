const planetCont = document.querySelector(".planet-img-cont");
const planetTitle = document.querySelector(".planet-name");
const planetDescrip = document.querySelector(".description");
const distance = document.querySelector(".distance");
const timeDistance = document.querySelector(".time");
const planetBtnList = document.querySelectorAll(".planet-info-cont ul li");

const url = "./data.json";

//Funtions

function planetOptions(){
    for(let i = 0; i< planetBtnList.length ;i++){
        let index = planetBtnList[i].value
        planetBtnList[i].addEventListener("click",(e)=>{
            if(e.target && !planetBtnList[i].classList.contains("active")){
                planetCont.innerHTML = " "
                planetTitle.innerHTML = " "
                createHtml(index)
                planetBtnList.forEach(btn => btn.classList.remove("active"))
                planetBtnList[i].classList.add("active")
            }
        })
    }
}


 async function createHtml(number){
        const dataFetch = await fetch(url);
        const data = await dataFetch.json();
        const planetImg = document.createElement("img");
        planetImg.classList.add("planet-img");
        planetImg.src =data.destinations[number].images.png;
        planetCont.appendChild(planetImg)
        //creating planet name element
        const planetName = document.createElement("h1")
        planetName.innerHTML = data.destinations[number].name.toUpperCase();
        planetTitle.appendChild(planetName)
        planetDescrip.innerHTML = data.destinations[number].description;
        distance.innerHTML = data.destinations[number].distance;
        timeDistance.innerHTML = data.destinations[number].travel;
        
}


createHtml(0)
planetOptions();


function IconDisplace(){

    const div= document.getElementById("icons")
    const input=document.getElementById("input")
    const label=document.getElementById("label-pokedex")
    input.addEventListener('focus',enable)
    input.addEventListener('blur',disble)

    function enable(){
        div.style.transform="translateX(100%)";
        input.style.textAlign="start";
        label.classList.add("colorfull");
        div.style.color="white";
    }
    function disble(){
        div.style.transform="translateX(200%)";
        input.style.textAlign="center";
        label.classList.remove("colorfull")
        div.style.color="black";
    }
}
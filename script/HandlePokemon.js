



const HandlePokemon=()=>{

    const name=document.getElementById("input").value;
    const pokeImg=document.getElementById("pokeImg");
    const typesCell = document.getElementById("types");
    const info=document.getElementById("info");
    const row=document.getElementById("row")
    const hide=document.getElementById('hide')
    const img_error=document.getElementById('img-error')
    let infoP=[]
    let rows=["Altura", "Peso", "Habilidades"];



    row.innerHTML="";
    typesCell.innerHTML="";
    info.innerHTML="";
    pokeImg.src
    console.log(name);

    rows.forEach(element=>{
        const td=document.createElement("td")
        td.textContent=element;
        row.appendChild(td);
    }

    )
    
    var END_POINT="https://pokeapi.co/api/v2/pokemon/"
    END_POINT+=name
    console.log(END_POINT)

    fetch(END_POINT).then(Response=>Response.json()).then(
        data=>{
            hide.style.display="flex"
            img_error.classList.remove("error")
            const namep=data.name;
            const heightP=data.height;
            const weight=data.weight;
            const abilities=data.abilities.map(ability=>ability.ability.name);
            const type=data.types.map(type=>type.type.name)
            const sprite=data.sprites.other.dream_world.front_default;
            document.getElementById("nameP").textContent=namep
            console.log(sprite);
            pokeImg.src=sprite;
       
            infoP.push(heightP,weight,abilities[0])
         
            infoP.forEach(element => {
                const td=document.createElement("td");
                td.textContent=element
                info.appendChild(td);

            });

        
        }
    ).catch(error=>{
    pokeImg.src='./assets/404.jpeg';
    
    row.innerHTML="";
    hide.style.display="none"
    img_error.classList.add("error")
      console.log("error"+error)
       ;
    }
        
    )

   




}

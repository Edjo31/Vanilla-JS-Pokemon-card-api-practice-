

const PokeSearch= async (name)=>{

    const pokemonName = name; 

    try{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        const pokemonTypes = data.moves.map(move=>move.move.name)
        console.log(`Tipo(s) de ${pokemonName}:`, pokemonTypes);
      })
      .catch(error => {
        console.log('Error al obtener los datos:', error);
      });

    }
    catch{
        console.log('error')

    }

    return[]



}
export {PokeSearch}
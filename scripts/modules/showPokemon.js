export default function exibirPokemon() {
    try {
        const pokeAPI = (url) => axios.get(`https://pokeapi.co/api/v2/${url}`);
    const btnPokemon = document.getElementById('search-pokemon');

    btnPokemon.addEventListener('click', (event) => {
        const selectValue = document.getElementById('pokemon').value;

        pokeAPI(`pokemon/${selectValue}`)
            .then(response => {
                console.log(response.data.id)
                return response.data.id;
            })
            .then(id => pokeAPI(`evolution-chain/${id}/`))
            .then(response => response.data.chain.species)
            .then(evolutions => {
                // const evolution2 = evolutions[0].species;
                // document.querySelector('.pokemon-result').innerHTML = evolution2;
                console.log(evolutions)
                
                // console.log(evolution2)
                // console.log(evolutions[0].evolves_to[0])
            })
            // adicionar catch
            
            // ------------------------     POR QUE ELE TA BUSCANDO UM ID DIFERENTE DA SUA EVOLUÇÃO??????????????????????????????????????  -----------------------------------------
    })
    } catch (error) {
        console.error(error);
    }
    
}
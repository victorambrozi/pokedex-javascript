export default function exibirPokemon() {
    const pokeAPI = (url) => axios.get(`https://pokeapi.co/api/v2/${url}`);
    const btnPokemon = document.getElementById('search-pokemon');

    btnPokemon.addEventListener('click', (event) => {
        const selectValue = document.getElementById('pokemon').value;

        pokeAPI(`pokemon/${selectValue}`)
            .then(response => {
                // console.log(response)
                return response.data.id;
            })
            .then(id => pokeAPI(`evolution-chain/${id}/`))
            .then(response => response.data.chain.evolves_to)
            .then(evolutions => {
                const evolution2 = evolutions[0].species.name;
                document.querySelector('.pokemon-result').innerHTML = evolution2
                
                console.log(evolutions[0].evolves_to[0])
            })
    })
}
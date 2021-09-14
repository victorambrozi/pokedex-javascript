export default function exibirPokemon() {
    const pokeAPI = (url) => axios.get(`https://pokeapi.co/api/v2/${url}`);
    const btnPokemon = document.getElementById('search-pokemon');

    btnPokemon.addEventListener('click', (event) => {
        const selectValue = document.getElementById('pokemon').value;

        pokeAPI(`pokemon/`)
            .then(console.log)
    })
}

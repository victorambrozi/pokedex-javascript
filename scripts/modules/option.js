export default function preencherOptions() {
    try {
        const pokeAPI = (url) => axios.get(`https://pokeapi.co/api/v2/${url}`);
        pokeAPI('pokemon/')
            .then(response => response.data.results)
            .then(resultsAPI => {
                // preenche as options do select
                resultsAPI.forEach(pokemon => {
                    $('#pokemon').append(`<option value=${pokemon.name}>${pokemon.name.toUpperCase()}</option>`)
                })
            })
            .catch(err => new Error(err))
    } catch (error) {
        console.error(error);
    }
}

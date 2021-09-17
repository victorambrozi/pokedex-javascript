export default function preencherOptions() {
    try {
        const fetchAPI = (url) => fetch(`https://pokeapi.co/api/v2/${url}`);
        fetchAPI('pokemon/')
            .then(response => response.json())
            .then(pokeAPI => pokeAPI.results)
            .then(resultsAPI => {
                // preenche as options do select
                resultsAPI.forEach(({ name }) => {
                    $('#pokemon').append(`<option value=${name}>${name.toUpperCase()}</option>`)
                })
            })
            .catch(err => console.error(err))
    } catch (err) {
        throw new Error((err));
    }
}

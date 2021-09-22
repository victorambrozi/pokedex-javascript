export default async function preencherOptions() {
    const fetchAPI = (url) => fetch(`https://pokeapi.co/api/v2/${url}`);
    try {
        const response = await fetchAPI('pokemon/');
        const pokeApiJSON = await response.json();
        const resultsAPI = pokeApiJSON.results;

        // preenche as options do select
        resultsAPI.forEach(({ name }) => {
            $('#pokemon').append(`<option value=${name}>${name.toUpperCase()}</option>`)
        })
    } catch (err) {
        throw new Error((err));
    }
}

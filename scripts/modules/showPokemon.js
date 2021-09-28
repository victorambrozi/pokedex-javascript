export default function exibirPokemon() {
    const btnPokemon = document.getElementById('search-pokemon');

    btnPokemon.addEventListener('click', captureApiData);

    async function captureApiData() {
        const fetchAPI = (url) => fetch(`https://pokeapi.co/api/v2/${url}`);
        const selectValue = document.getElementById('pokemon').value;
        
        try {
            const response = await fetchAPI(`pokemon/${selectValue}`)
            const pokemonJSON = await response.json();
            const {
                name,
                height,
                weight,
                types,
                sprites: {
                    front_default: avatar
                }
            } = pokemonJSON;

            const pokemonProperties = {
                type: types[0].type.name,
                name,
                height,
                weight,
                avatar
            };
            insertElement(pokemonProperties)
        } catch (err) {
            console.error(err);
        }
    }

    function insertElement({ name, height, weight, type, avatar }) {
        const cardContentElement = document.querySelector('[data-pokemon="content"]');
        const cardAvatarElement = document.querySelector('[data-pokemon="avatar"]');
        const responseResult = document.querySelector('[data-pokemon="result"]')

        responseResult.classList.add("active");

        cardAvatarElement.innerHTML = `<img src="${avatar}" alt="Avatar">`;
        cardContentElement.innerHTML =
            `
                <h2 class="pokemon-name"> ${name}</h2>
                <p><strong>Altura</strong>: ${height}m</p>
                <p><strong>Peso</strong>: ${weight}kg</p>            
                <p><strong>Tipo</strong>: ${type}</p>            
            `;
    }
}
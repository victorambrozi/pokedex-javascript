export default function exibirPokemon() {
    try {
        const fetchAPI = (url) => fetch(`https://pokeapi.co/api/v2/${url}`);
        const btnPokemon = document.getElementById('search-pokemon');

        btnPokemon.addEventListener('click', () => {
            const selectValue = document.getElementById('pokemon').value;

            fetchAPI(`pokemon/${selectValue}`)
                .then(response => response.json())
                .then((dataPokemon) => {
                    const {
                        name,
                        height,
                        id,
                        weight,
                        types,
                        sprites: {
                            front_default: avatar
                        }
                    } = dataPokemon;

                    const pokemonProperties = { 
                        type: types[0].type.name,
                        name,
                        height,
                        weight,
                        avatar
                    }

                    return insertElement(pokemonProperties);

                })
                .catch(err => { throw new Error(err) })

        })
    } catch (err) {
        console.error(err);
    }

    function insertElement({ name, height, weight, type, avatar }) {
        const cardContentElement = document.querySelector(".card-content");
        const cardAvatarElement = document.querySelector(".card-avatar img");

        cardAvatarElement.src = `${avatar}`

        cardContentElement.innerHTML =
            `
                <h2 class="pokemon-name"> ${name}</h2>
                <p>${height}m</p>
                <p>${weight}kg</p>            
                <p>${type}</p>            
            `

    }
}
import preencherOptions from './modules/option.js';
import exibirPokemon from './modules/showPokemon.js';

window.addEventListener('load', start);

function start() {
    preencherOptions();
    exibirPokemon();
}
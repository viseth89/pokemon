const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const fetchPokemons = async () => {
    for(let i=1; i<=pokemons_number; i++) {
        await getPokemon(i)
    }
}



const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
}

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const type = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1)


    const pokeInnerHTML = `
        <div class ="img-container">
            <img src = ${pokemon.sprites.other["official-artwork"].front_default}>
            <h3 class="name">         00${pokemon.id} ${name} </h3>
            <h3 class="name"> Type :  ${type}</h3>
        </div>
        
    `;
    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);


}

fetchPokemons()
/* 
The goal with this script is to try and learn async await;
trying to add the words to the previous script3.js did not work;

Its not as simple as just adding the words (not suprising)

Async await is also suppose to help make the response quicker, the goal will be to be able to explain it.


no 'await' in line 7 result in object promise pending








References :
1. https://www.jamesqquick.com/blog/build-a-pokedex-with-vanilla-javascript -> Struggled at promise section

-> "Typically, you shouldn't make asynchronous calls inside of a For Loop."

"promise chaining" - ?

-> Acquired Useful hover 

.card:hover {
  animation: bounce 0.5s linear;
}



2. https://www.youtube.com/watch?v=gyC19H4ip1k -> Did not understand

3. https://www.youtube.com/watch?v=XL68br6JyYs -> Very helpful walkthrough 

4. When do we use async, should we always use async if we can?
5. if we have to make the function async how do we know where to use await?

6. Claim is to be concise -> Not sure I feel its much cleaner...

7. Whiteboard -> memory

8. 

pokemon.name.slice(1) - ulbasaur
pokemon.name.slace(4) - asaur

${pokemon.sprites.other.dream_world.front_default}
${pokemon.sprites.other["official-artwork"].front_default}



*/
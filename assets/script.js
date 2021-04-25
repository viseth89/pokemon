// Pokemon

// 1. Create Base url
let baseURL = "https://pokeapi.co/api/v2"

// 2. Query -> second part of url 
//let query  = "/pokemon?offset=0&limit=151"
let query  = "/pokemon/charmander"

//3. Check to make sure js is loaded with a simple console.log
console.log("JS has been loaded")



let filmList = document.getElementById("film-list")



// Write fetch request.
fetch(baseURL + query)                      //4. Fetch Concatenated URL
    .then(res => res.json())                //5. Capture the response -> https://stackoverflow.com/questions/46579533/what-does-thenres-res-json-in-react-native-fetch-mean
    .then(json => {                         
        console.log(json)
        console.log(json.name)
        console.log(json.order)
        console.log(json.stats)
        console.log(json.stats[1])
        console.log(json.stats[1].base_stat)
        console.log(json.stats[1].stat)
        console.log('stat name')
        console.log(json.stats[0].stat.name)
        console.log(json.stats[1].stat.name)
        console.log(json.stats[2].stat.name)
        console.log(json.stats[3].stat.name)
        console.log(json.stats[4].stat.name)
        console.log(json.stats[5].stat.name)
        console.log('species')
        console.log(json.species)
        // console.log(typeof json)         = View typeof for json => Object
        


        let card_title = document.getElementsByClassName("card-title")
        card_title[0].replaceWith(json.name)

        let stat_list = document.getElementById("stat_list2")
        // stat_list.append(json.name)

        let list_group_item = document.getElementsByClassName("list-group-item")
        list_group_item[1].append(json.name)
        filmList.append(json.name)

        displayResults(json)                                    
    })                     



function displayResults(pokemons) {
    let pokemonList = document.getElementById("pokemon-list")
 
    // pokemons.map(pokemon => {
    //     let pokemonLi = document.createElement('li')
    //     pokemonLi.innerText= `${pokemon.name }`
    //     pokemonList.appendChild(pokemonLi)
    // })
    let pokemonLi = document.createElement('li')
    pokemonLi.innerText= `${pokemons.name }`
    console.log(pokemonList)

}


    // Display Results
// function displayResults(films) {
//     // Grabs the ul element from the index.html
//     let filmList = document.getElementById("film-list")
//     // Goes through the films that are passed in to the function
//     filmList.appendChild(films)


    // films.map(film => {
    //     // For each film I make a new li tag
    //     let filmLi = document.createElement('li') 
    //     // Assignment of the film title and rt_score to the inner text 
    //     filmLi.innerText = `${film.title } ${film.rt_score}`
    //     // Adds the newly made li tag with text to the ul tag
    //     filmList.appendChild(filmLi)
    // })

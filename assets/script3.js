const baseURL = "https://ghibliapi.herokuapp.com"


let query  = "https://pokeapi.co/api/v2/pokemon/pikachu"

fetch(query) // Reaches out to the internet to get data
    .then(res => res.json()) // Returns on the json data
    .then(json => {
        console.log(json)
        console.log(json)
        console.log('viseth')
        console.log(json.stats)
        console.log(json.name)
        console.log('array')
        let myArr = json.stats.map(pokemon => { // Make a new array reducing the items
            return {
                stat: pokemon.stat.name,
                base_stat: pokemon.base_stat
     }
            })
        // Sort them by rating
        // let sortedArr = myArr.sort((cur, prev) => prev.rt_score - cur.rt_score)
        // Passes off the Sorted Array to be displayed
        // displayResults(sortedArr)
        // displayResults(sortedArr)
        console.log(myArr)
        console.log(myArr[2])


        let pokemon_name_2 = document.getElementById("pokemon-name-2")
        let filmList = document.getElementById("pokemon-name-2")
        // work on capitalize

        filmList.replaceWith(json.name)

        displayResults(myArr)
    })


    function displayResults(films) {
        // Grabs the ul element from the index.html
        let filmList = document.getElementById("film-list")
        
        // let pokemon_name_2 = document.getElementById("pokemon-name-2")
        // pokemon_name_2.appendChild(films.name)

        films.map(film => {                                                             // Goes through the films that are passed in to the function
            let filmLi = document.createElement('li')
            filmLi.className = "list-group-item"
            //console.log(filmLi)                                   // For each film I make a new li tag
            filmLi.innerText = `${film.stat } ${film.base_stat}`                        // Assignment of the film title and rt_score to the inner text 
            filmList.appendChild(filmLi)
            //console.log(filmLi)                                                // Adds the newly made li tag with text to the ul tag
                              
        })
        
    }

// Pokemon

// 1. Create Base url
let baseURL = "https://pokeapi.co/api/v2"

// 2. Query -> second part of url 
//let query  = "/pokemon?offset=0&limit=151"
let query  = "/pokemon/charmander"

//3. Check to make sure js is loaded with a simple console.log
console.log("JS has been loaded")

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
        console.log(json.species)
        // console.log(typeof json)         = View typeof for json => Object
        let pokeNameArr = json.results.map(pokemon => pokemon.name) //6. Create new Array -> Implicit return with consise body
        // console.log(typeof pokeNameArr)  = View typeof for array => Object
        console.log(pokeNameArr)
        pokeNameArr.sort()
        console.log(pokeNameArr)                 
                                            
    })                     
                                            
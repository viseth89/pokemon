// let myname = 'viseth'

// function greet(name){
//     console.log(name)
// }

// greet(myname)

names = [ 'viseth', 'abby','tyson']
names2 = []
for(let i = 0; i< names.length; i++){
    console.log(names[i])
}

names.forEach(item=>{
    console.log('line16 ' + item)
    names2.push(item)
})
console.log('names2 IS BELOW')
console.log(names2)



let query = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch(query)
    .then(res=>res.json())
    .then(json =>{
        console.log(json)
        newArray = []
        let myArr = json.stats.map(pokemon =>{
            return {
                stat: pokemon.stat.name,

            }
        })
        console.log(myArr)

    })


let nameArr = ["one", "two", "three"]
let tmp = []
for(let name of nameArr){
    console.log('for' + name)
    if(name==='end') break;
    tmp.push(name)
}

console.log('tmp ' + tmp)
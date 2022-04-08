const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue'
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow'
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown'
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue'
    }
]

// get an array of all names

console.log(characters.map(character => {return character.name}))

// get an array of all heights

console.log(characters.map(character => character.height))


// get an array of objects with just name and height properties

console.log(characters.map(character => ({name: character.name, height: character.height})))

// get an array of all first names

console.log(characters.map(character => character.name.split('a').join('aza')))





// nested arrays and objects
let heroesObject = {heroes: [
    {name: 'Wonder Woman', actor: 'Gal Gadot'},
    {name: 'Aquaman', actor: 'Jason Mamoa'},
    {name: 'Thor', actor: 'Chris Hemsworth'},
    {name: 'Black Widow', actor: 'Scarlettt Johansson'},
    {name: 'Batman', actor: ['Adam West', 'Val Kilmer', 'Ben Affleck', 'Christian Bale']}
]}

// access Wonder Woman's name
console.log(heroesObject.heroes[0].actor)

// access Aquaman's actor
console.log(heroesObject.heroes[1].actor)


// fix the misspelling in Black Widow's actor 
console.log(heroesObject.heroes[3].actor = 'Scarlett Johansson')

// add another batman actor to the array of batmans - Robert Pattinson
console.log(heroesObject.heroes[4].actor.push("Robert Pattison"))
console.log(heroesObject.heroes[4].actor.unshift("Robert Pattinson"))
console.log(heroesObject.heroes[4].actor)

// batmanArr = heroesObject.heroes[4].actor
// console.log(batmanArr)
// newArr = batmanArr 
// newArr.push("Robert Pattison")
// console.log("newarr", newArr)
// console.log("batmanArr", batmanArr)

// newArr = [batmanArr]
// console.log(newArr)
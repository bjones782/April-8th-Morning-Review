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
// get an array of all heights
// get an array of objects with just name and height properties
// get an array of all first names

const names = characters.map(character => {
    return character.name
})

const partialCharacter = characters.map(character => ({name: character.name, mass: character.mass}))

const firstNames = characters.map(character => character.name.split(" ")[0])

console.log(names.)
console.log(firstNames)


// nested arrays and objects
let heroesObject = {heroes: [
    {name: 'Wonder Woman', actor: 'Gal Gadot'},
    {name: 'Aquaman', actor: 'Jason Mamoa'},
    {name: 'Thor', actor: 'Chris Hemsworth'},
    {name: 'Black Widow', actor: 'Scarlettt Johansson'},
    {name: 'Batman', actor: ['Adam West', 'Val Kilmer', 'Ben Affleck', 'Christian Bale']}
]}

// access Wonder Woman's name


// fix the misspelling in Black Widow's actor 


// add another batman actor to the array of batmans
heroesObject.heroes[4].actor.push('Robert Pattinson')
console.log(heroesObject.heroes[4].actor)
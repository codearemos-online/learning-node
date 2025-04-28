const heroes = [
    {
        id: 1,
        name: 'Superman',
        owner: 'DC'                 
    },
    {
        id: 2,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Wonder Woman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Ironman',
        owner: 'Marvel'
    },
    {
        id: 5,
        name: 'Thor',
        owner: 'Marvel'
    },
    
]

const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

console.log(findHeroById(1));




export interface Hero{
    id:number,
    name:string,
    owner:string
}

export const heroes:Hero[] = [
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
    
];


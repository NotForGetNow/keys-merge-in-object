const villager = [
    {
        city: 'Almaty',
        name: 'Maks'
    },
    {
        city: 'Astana',
        name: 'Amir'
    },
    {
        city: 'Almaty',
        name: 'Serik'
    },
    {
        city: 'Atyrau',
        name: 'Batuhan'
    },
    {
        city: 'Taraz',
        name: 'Kanat'
    },
]

const villagerNew = []

villager.forEach(({city, name}) => {
    if (villagerNew[city]){
        villagerNew[city] += `, ${name}`
    } else {
        villagerNew[city] = name
    }
})

console.log(villagerNew);
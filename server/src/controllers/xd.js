const arr = [
    {
        id: 1,
        bame: 'pepe',
    },
        {
        id: 2,
        bame: 'sdf',
    },
        {
        id: 3,
        bame: 'sss',
    },
        {
        id: 4,
        bame: 'aaa',
    }
]

const filter = (arr) => {
    console.log(arr.filter((char) => char.id != 4))
}

filter(arr)
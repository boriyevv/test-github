
let data = [
    {
        ism: "Abdulla",
        familiya: 'Botirov',
        boyi: 1.79,
        yoshi: 24,
        ishJoyi: {
            name: 'IT Park',
            location: 'Karshi'
        }
    },
    {
        ism: "Mahmud",
        familiya: 'Murtozov',
        boyi: 1.84,
        yoshi: 15,
        ishJoyi: {
            name: 'IT Park',
            location: 'Samarqand'
        }
    },
    {
        ism: "Muhammad",
        familiya: 'Karimov',
        boyi: 1.64,
        yoshi: 13,
        ishJoyi: {
            name: 'IT Park',
            location: 'Toshkent'
        }
    },
    {
        ism: "Olim",
        familiya: 'Sattorov',
        boyi: 1.76,
        yoshi: 14,
        ishJoyi: {
            name: 'Epam',
            location: 'Toshkent'
        }
    },

    {
        ism: "Abdulla",
        familiya: 'Botirov',
        boyi: 1.79,
        yoshi: 24,
        ishJoyi: {
            name: 'IT Park',
            location: 'Karshi'
        }
    },
    {
        ism: "Mahmud",
        familiya: 'Murtozov',
        boyi: 1.84,
        yoshi: 15,
        ishJoyi: {
            name: 'IT Park',
            location: 'Samarqand'
        }
    },
    {
        ism: "Muhammad",
        familiya: 'Karimov',
        boyi: 1.64,
        yoshi: 13,
        ishJoyi: {
            name: 'IT Park',
            location: 'Toshkent'
        }
    },
    {
        ism: "Olim",
        familiya: 'Sattorov',
        boyi: 1.76,
        yoshi: 14,
        ishJoyi: {
            name: 'Epam',
            location: 'Toshkent'
        }
    }, 
]


let inp = document.querySelector('.inp')
let list = document.querySelector('.list')

inp.addEventListener('input', (e) => {

    let filtered = data.filter(item => item.ism.toLowerCase().includes((e.target.value).toLowerCase()))

    render(filtered)
})



function render(arr) {
    list.innerHTML = null

    for (let i = 0; i < arr.length; i++) {

        let li = document.createElement('li')
        li.setAttribute('class', 'list-item')

        li.innerHTML = `
                    <h2>Ism : ${arr[i].ism} </h1>
                    <h2>Familiya : ${arr[i].familiya}</h1>
                    <h3>Yoshi : ${arr[i].yoshi}</h3>
                    <h3>Boyi : ${arr[i].boyi}</h3>
                    <h5>Ish Joyi : ${arr[i].ishJoyi.name}</h5>
                    <h5>Manzil : ${arr[i].ishJoyi.location}</h5>
        `

        list.append(li)

    }




}

render(data)








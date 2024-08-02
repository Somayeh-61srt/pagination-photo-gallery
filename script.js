const photosArray = [
    {
        id: 1,
        src: 'img/gaetano-cessati-ssguzho__K8-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 2,
        src: 'img/lala-azizli-zBiH-nrKSAI-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 3,
        src: 'img/marek-piwnicki-_4JMamCCwk0-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 4,
        src: 'img/martin-bennie-EFzGg7N_mYQ-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 5,
        src: 'img/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 6,
        src: 'img/tom-podmore-N1ONXKUAiGU-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 7,
        src: 'img/tonia-kraakman-m3L4kgaxoNE-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 8,
        src: 'img/randy-fath-EfqzvX7bJVI-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 9,
        src: 'img/daniel-carmona-lQfud444elU-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 10,
        src: 'img/ana-paula-grimaldi-cMg-yeS2g6o-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    },
    {
        id: 11,
        src: 'img/zhenyu-luo-ABJDGBtciK4-unsplash.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.'
    }
]

let photosContainer = document.querySelector('.items')
let buttonsContainer = document.querySelector('.buttons')

let currentPage = 1
let rowsCount = 3

function displayPhotos(allPhotosArray, photoContainer, rowsCount, currentPage) {
    photosContainer.innerHTML = ''
    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount
    let paginatedPhotos = allPhotosArray.slice(startIndex, endIndex)

    let newDivForImg, newTitle, newImg
    paginatedPhotos.forEach(function (photo) {
        newDivForImg = document.createElement('div')
        newDivForImg.classList.add('item')
        photoContainer.append(newDivForImg)
        newImg = document.createElement('img')
        newImg.classList.add('image')
        newImg.src = photo.src
        newTitle = document.createElement('h6')
        newTitle.classList.add('content')
        newTitle.innerHTML = photo.title
        newDivForImg.append(newImg, newTitle)
    })

}

function setupPagination(allPhotosArray, pagesContainer, rowsCount) {
    pagesContainer.innerHTML = ''
    let pageCount = Math.ceil(allPhotosArray.length / rowsCount)
    let btn
    for (let i = 1; i < pageCount + 1; i++) {
        btn = paginationButtonGenerator(i, allPhotosArray)
        pagesContainer.append(btn)

    }
}

function paginationButtonGenerator(page, allPhotosArray) {
    let button = document.createElement('button')
    button.innerHTML = page
    button.classList.add('btn')
    buttonsContainer.append(button)
    if (page === currentPage) {
        button.classList.add('active-color')
    }
    button.addEventListener('click', function () {
        currentPage = page
        displayPhotos(allPhotosArray, photosContainer, rowsCount, currentPage)
        let prevPage = document.querySelector('button.active-color')
        prevPage.classList.remove('active-color')
        button.classList.add('active-color')
    })
    return button
}

displayPhotos(photosArray, photosContainer, rowsCount, currentPage)
setupPagination(photosArray, buttonsContainer, rowsCount)
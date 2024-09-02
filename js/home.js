// ? =============> Global ===============>
const rowData = document.getElementById('rowData');
const homeSection = document.getElementById('home');
const detailsSection = document.getElementById('details');
// ! =============> When Start ===============>
getData('mmorpg')
// * =============> Events ===============>


document.querySelectorAll('.menu a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        document.querySelector('.menu .active').classList.remove('active')
        this.classList.add('active')

        const category = this.dataset.category;

        getData(category)
    })
})


document.getElementById('logOut').addEventListener('click' , function(){
    localStorage.removeItem('userToken')
    location.href = './index.html'
})







// ! =============> Functions ===============>
async function getData(categoryName) {

    document.querySelector('.loader-container').classList.remove('d-none')


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd3bcbca979msh165edd3da41e323p11db94jsn8a3e83c6ce03',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options)


    const data = await response.json()

    
    
    
    document.querySelector('.loader-container').classList.add('d-none')
    displayData(data)
    


}



function displayData(arr) {
    let cartoona = '';


    for (let i = 0; i < arr.length; i++) {
        cartoona += `<div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card p-3" onclick="showDetails(${arr[i].id})">
                        <img src="${arr[i].thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="card-h d-flex justify-content-between">
                                <p class="title mb-0">${arr[i].title}</p>
                                <div class=" mb-0">free</div>
                            </div>
                            <p class="card-text text-center p-2">
                                ${arr[i].short_description.split(' ').slice(0, 10).join(' ')}</p>
                        </div>

                        <div class="card-footer d-flex justify-content-between">
                            <p class="category mb-0">${arr[i].genre}</p>
                            <p class="platform mb-0">${arr[i].platform}</p>
                        </div>
                    </div>
                </div>`

    }

    rowData.innerHTML = cartoona;


}

function showDetails(idGame) {
    console.log(idGame);
    getDetails(idGame)

}

async function getDetails(idGame) {


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd3bcbca979msh165edd3da41e323p11db94jsn8a3e83c6ce03',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options)
    const details = await response.text()

    const finalDetails =  JSON.parse(details)

    console.log(finalDetails);



    desplayDetails(finalDetails)


}



function desplayDetails(specificDetails){

    let backGround = specificDetails.thumbnail.replace('thumbnail.jpg' , 'background.jpg')
    document.getElementById('details').style.backgroundImage = `url(${backGround})`



    homeSection.classList.add('d-none')
    detailsSection.classList.remove('d-none')

        cartoona = `<div class="container">

            <div class="row px-3 py-3 g-3">

                <div class="col-12">
                    <div class=" d-flex align-items-center justify-content-between p-2">
                        <h4 class="display-5 fw-medium m-0">Game Details </h4>
                        <i class="fa-solid fa-x fa-2x" onclick="closeDetails()"></i>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="details-head">
                        <img class="w-100" src="${specificDetails.thumbnail}" alt="Deatil Of Game">
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="details-content">
                        <h4>Title:${specificDetails.title}</h4>
                        <p>Category: <span>${specificDetails.genre}</span>  </p>
                        <p>Platform: <span>${specificDetails.platform}</span> </p>
                        <p>Status: <span>${specificDetails.status}</span> </p>
                        <p>${specificDetails.description}</p>
                        <a href="${specificDetails.game_url}" id="showGame" class="btn btn-outline-danger" target="_blank">Show Game</a>
                    </div>
                </div>
            </div>
        </div>`
    


    document.getElementById('details').innerHTML = cartoona;


}



function closeDetails(){
    detailsSection.classList.add('d-none');
    homeSection.classList.remove('d-none')
}




//! =============> Authentication ===============>

(function(){
    if(localStorage.getItem('userToken') === null){
        location.href = './index.html'
    }
})()




// const endTime = new Date('2024-07-12T12:34:56');
// const now = new Date();
// const tom = new Date()+1;
// const resultt = endTime-now; 

// console.log(now);
// console.log(endTime);
// console.log(resultt);
// console.log(tom);

let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const result = tomorrow-today;

console.log("Today: " + today);
console.log("Tomorrow: " + tomorrow);
console.log("result: " + result);


console.log(result/1000);
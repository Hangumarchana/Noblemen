console.log('Hello World');

let DataBase;
let TopPick1 = document.getElementById('pick1');
let TopPick2 = document.getElementById('pick2');
let Cat1=document.getElementById('cat1');
let Cat2=document.getElementById('cat2');
let Cat3=document.getElementById('cat3');
let Cat4=document.getElementById('cat4');
let instagramLogo = document.getElementById('instagramLogo');
let pinterestLogo = document.getElementById('pinterestLogo');
let facebookLogo = document.getElementById('facebookLogo');
let twitterLogo = document.getElementById('twitterLogo');
let instagramLogo1 = document.getElementById('instagramLogo1');
let pinterestLogo1 = document.getElementById('pinterestLogo1');
let facebookLogo1 = document.getElementById('facebookLogo1');
let twitterLogo1 = document.getElementById('twitterLogo1');
let main2 = document.getElementById('main');
 instagramLogo.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.instagram.com/nobelprize');
 })
pinterestLogo.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.youtube.com/thenobelprize');
 })
 facebookLogo.addEventListener('click', function (event) {
     event.stopPropagation();
     window.open('https://www.facebook.com/nobelprize/');
 })
twitterLogo.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.linkedin.com/company/nobelprize/');
})
instagramLogo1.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.instagram.com/nobelprize');
})
pinterestLogo1.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.youtube.com/thenobelprize');
})
facebookLogo1.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.facebook.com/nobelprize/');
})
twitterLogo1.addEventListener('click', function (event) {
    event.stopPropagation();
    window.open('https://www.linkedin.com/company/nobelprize/');
})
main2.addEventListener('click', function (event) {
    event.stopPropagation();
    window.location.href = 'index.html';
});
console.log(main);
function redirect(){
    window.location.href = 'Category.html';
}

async function fetchData() {
    try {
        const response = await fetch('Data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        DataBase = await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    await fetchData();

    TopPick1.innerHTML = `
        <div class="ImgDiv">
            <img class="TopImg" src="${DataBase[9].Image}" alt="${DataBase[10].WinnerName}"></img>
        
        </div>
        <p class="TopName Winner1">${DataBase[9].WinnerName}</p>
        <p class="TopAward">${DataBase[9].AwardReason}</p>
        
        
        
    `;
    console.log(DataBase[10]);

    TopPick2.innerHTML = `
        <div class="ImgDiv det1">
            <img class="TopImg" src="${DataBase[10].Image}" alt="${DataBase[11].WinnerName}"></img>
        
        </div>
        <p class="TopName Winner1"  >${DataBase[10].WinnerName}</p>
        <p class="TopAward"  >${DataBase[10].AwardReason}</p>

        
    `;

    Cat1.innerHTML = `
        <div class="CatDiv">
            <img class="CatImg" src="${DataBase[209].Image}" alt="${DataBase[209].WinnerName}"></img>
        
        </div>
        <p class="CatName Winner1">${DataBase[209].WinnerName}</p>
        <p class="CatAward">${DataBase[209].AwardReason}</p>
    `
    Cat2.innerHTML = `
        <div class="CatDiv">
            <img class="CatImg" src="${DataBase[210].Image}" alt="${DataBase[210].WinnerName}"></img>
        
        </div>
        <p class="CatName Winner1">${DataBase[210].WinnerName}</p>
        <p class="CatAward">${DataBase[210].AwardReason}</p>
    `
    Cat3.innerHTML = `
    <div class="CatDiv">
        <img class="CatImg" src="${DataBase[213].Image}" alt="${DataBase[213].WinnerName}"></img>
    
    </div>
    <p class="CatName Winner1">${DataBase[213].WinnerName}</p>
    <p class="CatAward">${DataBase[213].AwardReason}</p>
    `
    Cat4.innerHTML = `
    
    <div class="CatDiv">
        <img class="CatImg" src="${DataBase[206].Image}" alt="${DataBase[206].WinnerName}"></img>
    
    </div>
    <p class="CatName Winner1">${DataBase[206].WinnerName}</p>
    <p class="CatAward">${DataBase[206].AwardReason}</p>
    
    `
    console.log(DataBase[209])

}



main();

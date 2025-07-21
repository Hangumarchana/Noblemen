console.log('Hello World');

let DataBase;
let TopPick1 = document.getElementById('pick1');
let TopPick2 = document.getElementById('pick2');
let Cat1=document.getElementById('cat1');
let Cat2=document.getElementById('cat2');
let Cat3=document.getElementById('cat3');
let Cat4=document.getElementById('cat4');


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
        <p class="TopName">${DataBase[9].WinnerName}</p>
        <p class="TopAward">${DataBase[9].AwardReason}</p>
        
        
        
    `;
    console.log(DataBase[10]);

    TopPick2.innerHTML = `
        <div class="ImgDiv">
            <img class="TopImg" src="${DataBase[10].Image}" alt="${DataBase[11].WinnerName}"></img>
        
        </div>
        <p class="TopName"  >${DataBase[10].WinnerName}</p>
        <p class="TopAward"  >${DataBase[10].AwardReason}</p>

        
    `;

    Cat1.innerHTML = `
        <div class="CatDiv">
            <img class="CatImg" src="${DataBase[209].Image}" alt="${DataBase[209].WinnerName}"></img>
        
        </div>
        <p class="CatName">${DataBase[209].WinnerName}</p>
        <p class="CatAward">${DataBase[209].AwardReason}</p>
    `
    Cat2.innerHTML = `
        <div class="CatDiv">
            <img class="CatImg" src="${DataBase[210].Image}" alt="${DataBase[210].WinnerName}"></img>
        
        </div>
        <p class="CatName">${DataBase[210].WinnerName}</p>
        <p class="CatAward">${DataBase[210].AwardReason}</p>
    `
    Cat3.innerHTML = `
    <div class="CatDiv">
        <img class="CatImg" src="${DataBase[213].Image}" alt="${DataBase[213].WinnerName}"></img>
    
    </div>
    <p class="CatName">${DataBase[213].WinnerName}</p>
    <p class="CatAward">${DataBase[213].AwardReason}</p>
    `
    Cat4.innerHTML = `
    
    <div class="CatDiv">
        <img class="CatImg" src="${DataBase[206].Image}" alt="${DataBase[206].WinnerName}"></img>
    
    </div>
    <p class="CatName">${DataBase[206].WinnerName}</p>
    <p class="CatAward">${DataBase[206].AwardReason}</p>
    
    `
    console.log(DataBase[209])

}



main();

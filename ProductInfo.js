console.log("ProductInfo.js");

let DataBase8 = [];

attachClickHandlers();
attachClickHandlers1();
attachClickHandlers2();
attachClickHandlers3();
attachClickHandlers4();

function attachClickHandlers() {
    document.body.addEventListener('click', function (event) {
        const card = event.target.closest('.det');
        if (!card) return;

        event.preventDefault();


        const winnerElem = card.querySelector('.Winner');
        if (!winnerElem) return;

        const winnerName = winnerElem.textContent.trim();
        if (!winnerName) return;

        const encodedName = encodeURIComponent(winnerName);
        console.log("Navigating to:", `PersonInfo.html?name=${encodedName}`);

        window.location.href = `PersonInfo.html?name=${encodedName}`;
    });
}
function attachClickHandlers1() {
    const searchGrid = document.getElementById('SearchGrid');
    if (!searchGrid) return;

    searchGrid.addEventListener('click', function (event) {
        const clicked2 = event.target.closest('.data2');
        if (!clicked2) return;

        event.preventDefault();

        const winnerName = clicked2.querySelector('.Winner')?.textContent.trim();
        if (!winnerName) return;

        const encodedName = encodeURIComponent(winnerName);
        window.location.href = `PersonInfo.html?name=${encodedName}`;
    });
}


function attachClickHandlers2() {
    document.body.addEventListener('click', function (event) {
        console.log("Click detected");


        const clicked = event.target.closest('.Winner1');
        console.log("Clicked Element:", clicked);

        if (!clicked) return;

        event.preventDefault();

        const winnerName = clicked.textContent.trim();
        console.log("Winner Name:", winnerName);

        if (!winnerName) return;

        const encodedName = encodeURIComponent(winnerName);
        console.log("Navigating to:", `PersonInfo.html?name=${encodedName}`);


        window.location.href = `PersonInfo.html?name=${encodedName}`;
    });
}
function attachClickHandlers3() {
    document.body.addEventListener('click', function (event) {

        const btn = event.target.closest('.SeeMore');
        if (!btn) return;

        event.preventDefault();


        const card = btn.closest('.YearCard');
        if (!card) return;


        const winnerName = card.querySelector('.YearDetail1')?.textContent.trim();
        if (!winnerName) return;

        const encodedName = encodeURIComponent(winnerName);
        console.log("Navigating to:", `PersonInfo.html?name=${encodedName}`);


        window.location.href = `PersonInfo.html?name=${encodedName}`;
    });
}
function attachClickHandlers4() {
    document.body.addEventListener('click', function (event) {
        const btn = event.target.closest('.catBt');
        if (!btn) return;

        event.preventDefault();

        const card = btn.closest('div');

        if (!card) return;

        const dataElem = card.querySelector('.Data');
        if (!dataElem) return;

        const winnerName = dataElem.textContent.trim();
        if (!winnerName) return;

        const encodedName = encodeURIComponent(winnerName);
        console.log("Navigating to:", `PersonInfo.html?name=${encodedName}`);

        window.location.href = `PersonInfo.html?name=${encodedName}`;
    });
}

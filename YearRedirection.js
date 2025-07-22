let selectedYear;


document.querySelectorAll('.TimeFilter').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        selectedYear = this.innerText.trim();
        console.log("Selected Year:", selectedYear);

        const targetUrl = `YearProduct.html?year=${selectedYear}`;


        if (window.location.pathname.includes('YearProduct.html')) {
            if (window.location.href === targetUrl) {
                window.location.reload();
            } else {
                window.location.href = targetUrl;
            }
        } else {
            window.location.assign(targetUrl);
        }
    });
});

let DataBase4 = [];


async function fetchData() {
    try {
        const response = await fetch('Data.json');
        if (!response.ok) throw new Error("Failed to load data");
        DataBase4 = await response.json();
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}


function getYearFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('year');
}


function renderProducts(filteredData, selectedYear) {
    const container = document.getElementById('YearFilter');
    const YearNumber = document.getElementById('YearNumber');

    container.innerHTML = '';

    if (YearNumber) {
        YearNumber.innerHTML = `<h1 class="TimeYear">${selectedYear} Nobel Prize Winners</h1>`;

    }

    if (filteredData.length === 0) {
        container.innerHTML = `<p>No data found for ${selectedYear}</p>`;
        return;
    }

    filteredData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('YearCard');
        card.innerHTML = `
            <div class="TimeDiv">
                <img src="${product.Image}" alt="${product.WinnerName}">
            </div>
            <div class="CardContent">
                <p class="YearDetail1">${product.WinnerName}</p>
                <p class="YearDetail2">${product.Category}</p>
                <p class="YearDetail3">${product.AwardReason}</p>
            </div>
            <button class="SeeMore">View More</button>
        `;
        container.appendChild(card);
    });
}


window.onload = async function () {
    await fetchData();

    const yearFromURL = getYearFromURL();
    if (!yearFromURL) return;

    const filtered = DataBase4.filter(item => item.Year == yearFromURL);
    renderProducts(filtered, yearFromURL);
};

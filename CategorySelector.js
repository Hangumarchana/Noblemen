let Category;
let DataBase5 = [];

document.querySelectorAll('.catSelector').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        Category = this.innerText.trim().toLowerCase();
        console.log("Selected Category:", Category);

        const targetUrl1 = `Category.html?category=${Category}`;

        if (window.location.pathname.includes('Category.html')) {
            if (window.location.href === targetUrl1) {
                window.location.reload();
            } else {
                window.location.href = targetUrl1;
            }
        } else {
            window.location.assign(targetUrl1);
        }
    });
});

async function fetchData() {
    try {
        const response = await fetch('Data.json');
        if (!response.ok) throw new Error("Failed to load data");
        DataBase5 = await response.json();
        console.log('Data loaded:', DataBase5);
    } catch (err) {
        console.error("Error fetching data:", err);
    }

}

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category')?.toLowerCase();
}

function renderProducts(filteredData, selectedCategory, gridId, nameId, cardClass, divClass, detailPrefix) {
    const container = document.getElementById(gridId);
    const categoryName = document.getElementById(nameId);

    if (!container) return;

    container.innerHTML = '';

    if (categoryName) {

        categoryName.innerHTML = `<h1 class="catName">${selectedCategory}</h1>`;
        console.log(selectedCategory);

    }

    if (filteredData.length === 0) {
        container.innerHTML = `<p>No data found for ${selectedCategory}</p>`;
        return;
    }

    filteredData.forEach(product => {
        const card = document.createElement('div');
        card.classList.add(cardClass);
        card.innerHTML = `
            <div class="${divClass}">
                <img src="${product.Image}" alt="${product.WinnerName}">
            </div>
            <div class="CardContent">
                <p class="${detailPrefix}Detail1 Data">${product.WinnerName}</p>
                <p class="${detailPrefix}Detail2">${product.Category}</p>
                <p class="${detailPrefix}Detail3">${product.AwardReason}</p>
            </div>
            <button class="SeeMore catBt">View More</button>
        `;
        container.appendChild(card);
    });

}

window.onload = async function () {
    await fetchData();
    const categoryFromURL = getCategoryFromURL();

    if (!categoryFromURL || categoryFromURL === "show all results") {

        renderProducts(DataBase5.filter(item => item.Category.toLowerCase() === 'peace'), 'peace', 'CategoryGrid1', 'CategoryName1', 'PeaceCard', 'PeaceDiv', 'Peace');
        renderProducts(DataBase5.filter(item => item.Category.toLowerCase() === 'chemistry'), 'chemistry', 'CategoryGrid2', 'CategoryName2', 'ChemistryCard', 'ChemistryDiv', 'Chemistry');
        renderProducts(DataBase5.filter(item => item.Category.toLowerCase() === 'physics'), 'physics', 'CategoryGrid3', 'CategoryName3', 'PhysicsCard', 'PhysicsDiv', 'Physics');
        renderProducts(DataBase5.filter(item => item.Category.toLowerCase() === 'medicine'), 'medicine', 'CategoryGrid4', 'CategoryName4', 'MedicineCard', 'MedicineDiv', 'Medicine');
        return;
    }


    const filtered = DataBase5.filter(item => item.Category.toLowerCase() === categoryFromURL);

    switch (categoryFromURL) {
        case "peace":
            renderProducts(filtered, categoryFromURL, 'CategoryGrid1', 'CategoryName1', 'PeaceCard', 'PeaceDiv', 'Peace');
            break;
        case "chemistry":
            renderProducts(filtered, categoryFromURL, 'CategoryGrid2', 'CategoryName2', 'ChemistryCard', 'ChemistryDiv', 'Chemistry');
            break;
        case "physics":
            renderProducts(filtered, categoryFromURL, 'CategoryGrid3', 'CategoryName3', 'PhysicsCard', 'PhysicsDiv', 'Physics');
            break;
        case "medicine":
            renderProducts(filtered, categoryFromURL, 'CategoryGrid4', 'CategoryName4', 'MedicineCard', 'MedicineDiv', 'Medicine');
            break;
        default:
            console.warn("Unknown category:", categoryFromURL);
    }

}

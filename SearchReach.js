let SearchData;

const SearchRec1 = document.getElementById('SearchRec');
const SearchBar2 = document.getElementById('searchBar');
const Search1 = document.getElementById('Search');
const closeText1 = document.getElementById('closeText');
const SearchGrid = document.getElementById('SearchGrid');
const SearchGridRec=document.getElementById('SearchGridRec');


async function fetchData() {
    try {
        const response = await fetch('Data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        SearchData = await response.json();
        console.log('Fetched SearchData:', SearchData);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Render the filtered data
function renderGrid(data) {
    SearchGrid.innerHTML = "";

    if (!data || data.length === 0) {
        SearchGrid.innerHTML = "<p class='No'>No results found.</p>";
        return;
    }

    data.forEach(item => {
        SearchGrid.innerHTML += `
            <div class="SearchCard">
                <div class="SearchDiv">
                    <img src="${item.Image}" alt="${item.WinnerName}">
                </div>
                <div class="text">
                                <p class="TopCategory" id="c1">${item.Category}</p>
                                <p class="Winner" id="c2">${item.WinnerName}</p>
                                <p class="Reason" id="c3">${item.AwardReason}</p>
                
                </div>

            </div>
        `;
    });


    SearchGrid.scrollTo({ top: 0, behavior: 'smooth' });
}

// Input event listener
Search1.addEventListener("input", function () {
    const searchValue = this.value.trim().toLowerCase();
    if (!SearchData) return;

    const FilteredData = SearchData.filter(item =>
        item.WinnerName.toLowerCase().includes(searchValue) ||
        item.Category.toLowerCase().includes(searchValue)
    );

    if (FilteredData.length > 0) {
        SearchRec1.classList.add('FullShow');
        SearchBar2.classList.add('searchBar1');
        SearchGridRec.classList.add('showGrid');
    } else {
        SearchRec1.classList.remove('FullShow');
        SearchBar2.classList.remove('searchBar1');
        SearchGridRec.classList.remove('showGrid');
    }

    renderGrid(FilteredData);
    console.log('FilteredData:', FilteredData);
});


closeText1.addEventListener('click', () => {
    SearchRec1.classList.remove('FullShow');
    SearchBar2.classList.remove('searchBar1');
    SearchGridRec.classList.remove('showGrid');
    Search1.value = '';
    SearchGrid.innerHTML = '';



});

// Start fetching
fetchData();

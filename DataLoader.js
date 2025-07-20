let CardGrid=document.querySelector('.gridContainer');
let DataBase;

async function fetchData() {
    try {
        const response = await fetch('Data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        DataBase = await response.json();
        console.log('Inside fetchData:', DataBase);
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    await fetchData();

    DataBase.forEach(person =>{
        let Cards=document.createElement('div');
        Cards.classList.add('Cards');

        let Name=document.createElement('p');
        Name.classList.add('Name');
        Name.innerText=person.WinnerName;


        let Birthday=document.createElement('p');
        Birthday.classList.add('Birthday');
        Birthday.innerText=person.Birthday;

        let Category=document.createElement('p');
        Category.classList.add('Category');
        Category.innerText=person.Category;


        let Year=document.createElement('p');
        Year.classList.add('Year');
        Year.innerText=person.Year;



        let Award=document.createElement('p');
        Award.classList.add('Award');
        Award.innerText=person.AwardReason;

        let Image=document.createElement('img');
        Image.classList.add('Image');
        Image.src=person.Image;

        Cards.appendChild(Name);
        Cards.appendChild(Birthday);
        Cards.appendChild(Category);
        Cards.appendChild(Year);
        Cards.appendChild(Award);
        Cards.appendChild(Image);
        CardGrid.appendChild(Cards);



    })

}

main();

let DataBase2;
let TopGrid=document.getElementById('TopGrid');
let HotGrid=document.getElementById('HotGrid');
let RecentGrid=document.getElementById('RecentGrid');
async function fetchData() {
    try {
        const response = await fetch('Data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        DataBase2 = await response.json();
        console.log('Inside fetchData:', DataBase2);
    } catch (error) {
        console.log(error);
    }
}
async function main(){
    await fetchData();
    TopGrid.innerHTML = `
    <div class="Card1 det">
            <div class="TopDiv1">
                <img src="${DataBase2[125].Image}" alt="${DataBase2[125].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[125].Category}</p>
            <p class="Winner">${DataBase2[125].WinnerName}</p>
            <p class="Reason">${DataBase2[125].AwardReason}</p>
    
    </div>
     <div class="Card1 det" >
            <div class="TopDiv1">
                <img src="${DataBase2[182].Image}" alt="${DataBase2[182].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[182].Category}</p>
            <p class="Winner">${DataBase2[182].WinnerName}</p>
            <p class="Reason">${DataBase2[125].AwardReason}</p>
    
    </div>
     <div class="Card1 det">
            <div class="TopDiv1">
                <img src="${DataBase2[184].Image}" alt="${DataBase2[184].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[184].Category}</p>
            <p class="Winner">${DataBase2[184].WinnerName}</p>
            <p class="Reason">${DataBase2[184].AwardReason}</p>
    
    </div>
     <div class="Card1 det">
            <div class="TopDiv1">
                <img src="${DataBase2[134].Image}" alt="${DataBase2[134].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[134].Category}</p>
            <p class="Winner">${DataBase2[134].WinnerName}</p>
            <p class="Reason">${DataBase2[134].AwardReason}</p>
    
    </div>

    
    
    `
    console.log(DataBase2[206]);
    HotGrid.innerHTML=`
    <div class="Card2 det">
            <div class="HotDiv1 ">
                <img src="${DataBase2[193].Image}" alt="${DataBase2[193].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[193].Category}</p>
            <p class="Winner">${DataBase2[193].WinnerName}</p>
            <p class="Reason">${DataBase2[193].AwardReason}</p>
    
    </div>
     <div class="Card2 det">
            <div class="HotDiv1">
                <img src="${DataBase2[206].Image}" alt="${DataBase2[206].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[206].Category}</p>
            <p class="Winner">${DataBase2[206].WinnerName}</p>
            <p class="Reason">${DataBase2[206].AwardReason}</p>
    
    </div>
     <div class="Card2 det">
            <div class="HotDiv1">
                <img src="${DataBase2[210].Image}" alt="${DataBase2[210].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[210].Category}</p>
            <p class="Winner">${DataBase2[210].WinnerName}</p>
            <p class="Reason">${DataBase2[210].AwardReason}</p>
    
    </div>
     <div class="Card2 det">
            <div class="HotDiv1">
                <img src="${DataBase2[195].Image}" alt="${DataBase2[195].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[195].Category}</p>
            <p class="Winner">${DataBase2[195].WinnerName}</p>
            <p class="Reason">${DataBase2[195].AwardReason}</p>
    
    </div>
    
    `
    RecentGrid.innerHTML=`
        <div class="Card3 det">
            <div class="RecentDiv1">
                <img src="${DataBase2[212].Image}" alt="${DataBase2[212].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[212].Category}</p>
            <p class="Winner">${DataBase2[212].WinnerName}</p>
            <p class="Reason">${DataBase2[212].AwardReason}</p>
    
    </div>
     <div class="Card3 det">
            <div class="RecentDiv1">
                <img src="${DataBase2[208].Image}" alt="${DataBase2[208].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[208].Category}</p>
            <p class="Winner">${DataBase2[208].WinnerName}</p>
            <p class="Reason">${DataBase2[208].AwardReason}</p>
    
    </div>
     <div class="Card3 det">
            <div class="RecentDiv1">
                <img src="${DataBase2[205].Image}" alt="${DataBase2[205].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[205].Category}</p>
            <p class="Winner">${DataBase2[205].WinnerName}</p>
            <p class="Reason">${DataBase2[205].AwardReason}</p>
    
    </div>
     <div class="Card3 det">
            <div class="RecentDiv1">
                <img src="${DataBase2[203].Image}" alt="${DataBase2[203].WinnerName}">
            </div>
            <p class="TopCategory">${DataBase2[203].Category}</p>
            <p class="Winner">${DataBase2[203].WinnerName}</p>
            <p class="Reason">${DataBase2[203].AwardReason}</p>
    
    </div>
    `


}

main();
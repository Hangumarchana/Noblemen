let Filter1 = document.getElementById('Filter1');
let TimeRec = document.getElementById('TimeLineRec');
let TopArrow1 = document.getElementById('arrow-1');
let TopArrow2 = document.getElementById('arrow-2');
let Filter2= document.getElementById('Filter2');
let CategoryRec= document.getElementById('CategoryRec');
let SearchRec= document.getElementById('SearchRec');
let SearchLogo = document.getElementById('SearchLogo');
let closeText = document.getElementById('closeText');
let Close=document.getElementById('Close');
let Search=document.getElementById('Search');



Filter1.addEventListener('mouseenter', () => {
    TimeRec.classList.add('show');
    TopArrow1.classList.add('rotateTopArrow');
    SearchRec.classList.remove('showSearch');
    CategoryRec.classList.remove('showCategory');
    TopArrow2.classList.remove('rotateTopArrow');
});

TimeRec.addEventListener('mouseenter', () => {
    TimeRec.classList.add('show');
    TopArrow1.classList.add('rotateTopArrow');


});

Filter2.addEventListener('mouseenter',()=>{
    CategoryRec.classList.add('showCategory');
    TopArrow2.classList.add('rotateTopArrow');
    SearchRec.classList.remove('showSearch');
    TimeRec.classList.remove('show');
    TopArrow1.classList.remove('rotateTopArrow');
})
CategoryRec.addEventListener('mouseenter',()=>{
    CategoryRec.classList.add('showCategory');
    TopArrow2.classList.add('rotateTopArrow');
})


SearchLogo.addEventListener('click', function (event) {
    event.stopPropagation();
    SearchRec.classList.add('showSearch');
});
document.addEventListener('click', function (event) {
    if (SearchRec.classList.contains('showSearch') && !SearchRec.contains(event.target)) {
        SearchRec.classList.remove('showSearch');
    }
});


closeText.addEventListener('click',()=>{
    SearchRec.classList.remove('showSearch');
})
Close.addEventListener('click',()=>{
    Search.value='';
})
function hideTimeline() {

    setTimeout(() => {
        if (!TimeRec.matches(':hover') && !Filter1.matches(':hover')) {
            TimeRec.classList.remove('show');
            TopArrow1.classList.remove('rotateTopArrow');
        }
    }, 100);
}
function hideCategory(){

    setTimeout(()=>{
        if(!CategoryRec.matches(':hover')&&!Filter2.matches(':hover')){
            CategoryRec.classList.remove('showCategory');
            TopArrow2.classList.remove('rotateTopArrow');

        }
    },100)
}

Filter1.addEventListener('mouseleave', hideTimeline);
TimeRec.addEventListener('mouseleave', hideTimeline);
Filter2.addEventListener('mouseleave',hideCategory);
CategoryRec.addEventListener('mouseleave',hideCategory);

const dropdowns = [
    { triggerId: 'sub-1', menuId: 'dropdown-content-2024', arrowId: 'arrow-3' },
    { triggerId: 'sub-2', menuId: 'dropdown-content-2020', arrowId: 'arrow-4' },
    { triggerId: 'sub-3', menuId: 'dropdown-content-2015', arrowId: 'arrow-5' },
    { triggerId: 'sub-4', menuId: 'dropdown-content-2010', arrowId: 'arrow-6' },
    { triggerId: 'sub-5', menuId: 'dropdown-content-2005', arrowId: 'arrow-7' },

];

dropdowns.forEach(({ triggerId, menuId, arrowId }) => {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);

    if (!trigger || !menu || !arrow) return;


    trigger.addEventListener('mouseenter', () => {
        menu.classList.add('showSub');
        arrow.classList.add('rotateArrow');
    });

    menu.addEventListener('mouseenter', () => {
        menu.classList.add('showSub');
        arrow.classList.add('rotateArrow');
    });


    function hideDropdown() {
        setTimeout(() => {
            if (!trigger.matches(':hover') && !menu.matches(':hover')) {
                menu.classList.remove('showSub');
                arrow.classList.remove('rotateArrow');
            }
        }, 200);
    }

    trigger.addEventListener('mouseleave', hideDropdown);
    menu.addEventListener('mouseleave', hideDropdown);
});


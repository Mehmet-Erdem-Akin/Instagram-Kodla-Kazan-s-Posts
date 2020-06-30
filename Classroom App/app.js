const form = document.querySelector('form');
// inputlar
const studentNumber = document.querySelector('#studentNumber');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const vize = document.querySelector('#Vize');
const final = document.querySelector('#Final');


const mainbg = document.querySelector('#mainbg');
const add = document.querySelector('#btnAddNewTask');
const update = document.querySelector('#btnUpdateTask');

/*const sil = document.querySelector('#btnDeleteTask');*/
const iconn = document.querySelector('.fas fa-window-close');

// call event listeners
eventListeners();

function eventListeners(){
    // add click
    add.addEventListener('click',addNewItem);

    // update click
    update.addEventListener('click',updateItem);

    // delete click
    mainbg.addEventListener('click',deleteItem);
}

// add new item
function addNewItem(e){
    /*if(input.value ===''){
        alert('add new item');
        input.value = 'Anonymous';
    }*/
    
    // create card
    const card = document.createElement("div");
    card.className='card';
    card.style.width="18rem";
    if (studentNumber.value == '') {
        card.appendChild(document.createTextNode("No Number"));
    } else {
        card.appendChild(document.createTextNode(studentNumber.value));
    }

    // create icon 
    const icon = document.createElement("i");
    icon.className='fas fa-window-close';

    // create img
    const img = document.createElement("img");
    img.className='card-img-top';
    if (female.checked == true){
        img.setAttribute('src','girlavatar4.png');
        card.style.border='2px solid pink';
    } else{
        img.setAttribute('src','avatar2.png');
        card.style.border='2px solid lightblue';
    }
    img.alt='Card image cap';

    // create card body
    const cardbody = document.createElement("div");
    cardbody.className='card-body';

    // create h5
    const h5 = document.createElement("h5");
    h5.className='card-tittle';
    /*console.log(firstName.value+" "+lastName.value);*/
    if (firstName.value == '' && lastName.value == '') {
        h5.innerHTML="Anonymous";
    }else{
        h5.innerHTML=firstName.value+" "+lastName.value;
    }

    // create final label
    const labelfinal = document.createElement("label");
    labelfinal.className='labelfinal';
    labelfinal.innerHTML='Final: ';

    // create result label
    const labelresult = document.createElement("label");
    labelresult.className='labelresult';
    labelresult.innerHTML='Result: ';

    // create vize label
    const labelvize = document.createElement("label");
    labelvize.className='labelvize';
    labelvize.innerHTML='Vize: ';

    // create span badgevize
    const badgevize = document.createElement("span");
    badgevize.className='badgevize badge badge-primary';
    badgevize.innerHTML=Number(vize.value);

    // create span badgefinal
    const badgefinal = document.createElement("span");
    badgefinal.className='badgefinal badge badge-primary';
    badgefinal.innerHTML=Number(final.value);

    // create span badgeresult
    const badgeresult = document.createElement("span");
    badgeresult.innerHTML=Number(vize.value)*0.4 + Number(final.value)*0.6;
    badgeresult.value = Number(badgeresult.value).toFixed(2);
    if (badgeresult.textContent < 60){
        badgeresult.className='badgeresult badge badge-danger';
    }else if (badgeresult.textContent >= 60) {
        badgeresult.className='badgeresult badge badge-success';
    }else {
        badgeresult.className='badgeresult badge badge-primary';

    }


    /*console.log(mainbg);*/
    mainbg.appendChild(card);
    card.appendChild(icon);
    card.appendChild(img);
    card.appendChild(cardbody);
    cardbody.appendChild(h5);
    
    // add label to card-body
    cardbody.appendChild(labelvize);
    cardbody.appendChild(labelfinal);
    cardbody.appendChild(labelresult);

    // add span to label
    labelvize.appendChild(badgevize);
    labelfinal.appendChild(badgefinal);
    labelresult.appendChild(badgeresult);

    e.preventDefault();
}

// update an item
function updateItem(){

    
    e.preventDefault(); // sayfa yenilenmesin diye
}

// delete an item
function deleteItem(e){
    /*console.log(e.target);*/
    if (e.target.className === 'fas fa-window-close') {
        if (confirm('are you sure ?')) {    
        e.target.parentElement.remove();
        }
    }
    e.preventDefault();
}


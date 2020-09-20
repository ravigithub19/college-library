//Using the feature of ES6

class Book{
    constructor(regnb, bookNumber, department){
        this.regnb = regnb;
        this.bookNumber = bookNumber;
        this.department = department;
    }
}

class Display {
    add(book){
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.regnb}</td>
                            <td>${book.bookNumber}</td>
                            <td>${book.department}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
}

//Add submit eventListener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("Submitted");
    let regnb  = document.getElementById('regnb').value;
    let bookNumber  = document.getElementById('bookNumber').value;
    let department;
    let cse = document.getElementById('cse');
    let ece = document.getElementById('ece');
    let eee = document.getElementById('eee');
    let eie = document.getElementById('eie');
    let ce = document.getElementById('ce');
    let me = document.getElementById('me');
    let bsms = document.getElementById('bsms');

    if (cse.checked){
        department = cse.value;
    }
    else if(ece.checked){
        department = ece.value;
    }
    else if(eee.checked){
       department = eee.value;
    }
    else if(eie.checked){
       department = eie.value;
    }
    else if(ce.checked){
     department = ce.value;
    }
    else if(me.checked){
       department = me.value;
    }
    else if(bsms.checked){
       department = bsms.value;
    }

    let book = new Book(regnb, bookNumber, department);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();
}










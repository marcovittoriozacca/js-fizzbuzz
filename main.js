const rowHTML = document.querySelector('.main-grid');


//generazione dei numeri da 1 a 100 in console tramite ciclo for
for(let i = 1; i <= 100; i++){

    if(i % 5 === 0 && i % 3 === 0){
        const squareBox = `<div class="bg-primary border border-3  border-dark  text-light shadow-lg d-flex justify-content-center align-items-center square">
                        FizzBuzz
                    </div>`;
        rowHTML.innerHTML += squareBox;

    }else if (i % 3 === 0){
        const squareBox = `<div class="bg-danger border border-1 border-dark shadow-lg d-flex justify-content-center align-items-center square">
                        Fizz
                    </div>`;
        rowHTML.innerHTML += squareBox;        

    }else if (i % 5 === 0){
        const squareBox = `<div class="bg-warning border border-1 border-dark shadow-lg d-flex justify-content-center align-items-center square">
                                Buzz
                        </div>`;
        rowHTML.innerHTML += squareBox;

    }else{
        const squareBox = `<div class="bg-success border border-1 border-dark shadow-lg d-flex justify-content-center align-items-center square">
                            ${i}
                        </div>`;
        rowHTML.innerHTML += squareBox;
        
    }
}
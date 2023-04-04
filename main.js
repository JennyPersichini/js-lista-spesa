const listaSpesa = ['pane', 'riso', 'pasta', 'farina', 'uova', 'latte'];

let ul = document.querySelector('.list');

//CICLO FOR

/* for (let i = 0; i < listaSpesa.length; i++){

    console.log(listaSpesa[i]);

} */

//CICLO WHILE

let i = 0;

while (i < listaSpesa.length){

    let li = document.createElement('li');
    li.append(listaSpesa[i]); 
    ul.append(li);

    console.log(listaSpesa[i]);
    i++;
}

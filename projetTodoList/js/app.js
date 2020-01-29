// MODELE

//  <div class="todo">
//             <input type="checkbox" id="checkbox">
//             <label for="checkbox">Lorem ipsum dolor sit amet.</label>
//             <button class="bt-close">&times;</button>
//         </div>
let cpt = 0;

function createTodo(todoTxt){
const todoHtml = `<div class="todo">
<input type="checkbox" id="checkbox-${cpt}">
<label for="checkbox-${cpt}">${todoTxt}</label>
<button onclick="closeTodo(this.previousElementSibling.previousElementSibling,this.parentNode)" class="bt-close">&times;</button>
</div> `;
document.querySelector('#todolist').innerHTML += todoHtml;
}
//------------Methode détaillé--------------
// function createTodo(){
    // DECLARATION
//     const divTodo = document.createElement('div');
//     const inputTodo = document.createElement('input');
//     const labelTodo = document.createElement('label');
//     const buttonTodo = document.createElement('button');
    
//     // CONFIGURATION
//     divTodo.className = 'todo';
//     inputTodo.type = 'checkbox';
//     inputTodo.id = 'checkbox';
//     labelTodo.htmlFor = 'checkbox';
//     labelTodo.textContent ='Lorem ipsum dolor sit amet.';
//     buttonTodo.className = 'bt-close';
//     buttonTodo.innerHTML ='&times;';
    
//     // IMBRICATION
//     divTodo.appendChild(inputTodo);
//     divTodo.appendChild(labelTodo);
//     divTodo.appendChild(buttonTodo);
    
//     //VERIF IMBRICATION
//     console.log(divTodo);
    
//     //INJECTION DU CODE DANS HTML
//     document.querySelector('#todolist').appendChild(divTodo);
// }

//APPLIQUER LA FONCTION PRECEDENTE 
// A L EVENEMENT SUBMIT DE MON BOUTTON AJOUTER

function verifValue (val){
    return val.length >2;
}

function closeTodo (checkboxTag, todoTag){
    if (checkboxTag.checked){
        const reponse = confirm ('Tu veux vraiement supprimé cette tache ?');
        if (!reponse) return;
    }
    document.querySelector('#todolist').removeChild(todoTag);
}
document.forms['formule'].addEventListener(
    'submit',
    function (e){
        e.preventDefault();
        if (verifValue(this.todoTxt.value)){
            createTodo(this.todoTxt.value);
            cpt++;  
        }
        else {

            const errorTxt = document.querySelector('.error');
            errorTxt.style.display = 'block';
            setTimeout (() =>{
                errorTxt.style.display = 'none'; 
            },2500);
        }
    }
);

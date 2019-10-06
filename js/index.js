// Your code goes here

/*--button manipulation--*/

let count = 0;

let highLt = document.querySelectorAll('btn');
console.log(highLt);


while (count < highLt.length) {


hightLt[count].addEventListener('mouseover', (e) => {
    
    e.target.style.backgroundcolor = 'red' ;

    setTimeout(() => {
        e.target.style.color = '';
    }, 100);

 }, false);

 highLt[count].addEventListenter('click', (e) => {

    e.target.style.visibility = 'hidden';
 } );
 
}

/*--keydown--*/

document.addEventListener('keydown', (e) => {

    btn.textContent += ` ${e.code}`;

}, );

/*--wheel event--*/

let para = document.querySelectorAll('p');
console.log(para);












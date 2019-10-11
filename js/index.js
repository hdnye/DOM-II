// Your code goes here

/*--button manipulation--*/


let button = document.querySelectorAll('.btn');
console.log(button);


button.forEach((bttn) => {

    //Mouseover
    
    bttn.addEventListener('mouseover', (e) => {
    
        e.target.style.backgroundcolor = 'red' ;

         setTimeout(() => {
            e.target.style.color = '';
         }, 100);

  }, false);

    //Click

     bttn.addEventListenter('click', (e) => {

         e.target.style.visibility = 'hidden';
      }, );

      //Double Click 

      bttn.addEventListener('dbclick' ,(e) =>{
        return 'You clicked me!';
      })
 
 },);

 

/*--keydown--*/

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    button.textContent += ` ${e.code}`;

}, );

/*--wheel event--*/

let para = document.querySelectorAll('p');
console.log(para);

function zoom(e) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  para.style.transform = `scale(${scale})`;
}

let scale = 1;
para.onwheel = zoom;


/*--focus event--*/

let navBar = document.querySelector('.nav');
console.log(navBar);

navBar.addEventListener('focusin', (e) => {
  e.target.style.background = 'grey';    
});

navBar.addEventListener('focusout', (e) => {
  e.target.style.background = '';    

}, true);


/**--resize event--*/

window.addEventListener('resize', reportWindowSize);




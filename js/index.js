
// import {myfunction} from './detail.js';

 

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

if(signInBtn)
{
signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});
}

if(signUpBtn)
{
signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});
}

if(fistForm)
fistForm.addEventListener("submit", (e) => e.preventDefault());
if(secondForm)
secondForm.addEventListener("submit", (e) => e.preventDefault());

function onChangePassword() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmpassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }

// var elements = document.getElementsByClassName("btn");

// try{
//     let eventname = document.getElementById('desgh');
// if(eventname)
// console.log(eventname.innerHTML);
// }
// catch(e){
//     console.log(e);
// }

// function myfunction(i)
// { 
  
//    console.log(eventname);

// }



let first = document.getElementById('0');
// consolelog(first)
 first.addEventListener('click', ()=>{
     
    window.location.href = '../eventDetails.html?id=0';
    // console.log(myfunction(0));
});

let second = document.getElementById('1');  
second.addEventListener('click', ()=>{

    window.location.href = '../eventDetails.html?id=1';
//    console.log(myfunction(1));
});

// let third = document.getElementById('2');
// third.addEventListener('click', myfunction(2));

// let fourth = document.getElementById('3');
// fourth.addEventListener('click', myfunction(3));

// for (var i = 0; i < elements.length; i++) {

//     elements[i].addEventListener('click', ()=>{
        
//      let details = data[i];
//      let strid = "" + i;
//      let event =  document.getElementById(strid);
//      console.log("you have clicked");
//      console.log(elements[i].innerHTML);


//     });
//     elements[i].addEventListener('click', myfunction(i));

//     console.log(elements[i]);
// }

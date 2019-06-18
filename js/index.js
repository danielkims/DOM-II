// Your code goes here
const button1 = document.querySelector('#buttons1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'blue';
})

const button2 = document.querySelector('#buttons2');
button2.addEventListener('mouseover', function(event){
  event.target.style.background = 'black';
})

const button3 = document.querySelector('#buttons3');
button3.addEventListener('dblclick', function(event){
  event.target.style.color = 'red';
})

const funBus = document.querySelector('#fb');
funBus.addEventListener('mouseenter', function(event){
  event.target.style.border = '2px dashed brown';
});

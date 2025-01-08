


function createObserver(elementId, maxNumber, interval) 
 { let number = 1; function increaseNumber() 
 { document.getElementById(elementId).innerText = number; number++; 
 if (number > maxNumber) { clearInterval(intervalId); } } 
 let intervalId; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => 
 { if (entry.isIntersecting) { intervalId = setInterval(increaseNumber, interval); observer.unobserve(entry.target);   } }); });
  observer.observe(document.getElementById(elementId)); } createObserver('number1', 300, 25);   createObserver('number2', 240, 30);    createObserver('number3', 700, 10);        createObserver('number4', 630, 12);





const player8 = document.getElementById('myLottie');
function playAnimation() { player8.play(); } 
function stopAnimation() { player8.stop(); } 
function setSpeed(speed) { player8.setSpeed(speed); }



        
        
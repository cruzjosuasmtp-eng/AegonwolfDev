function showmenu(){
    const togglebtn = document.querySelector('.mobile-nav');
    const sidemenu = document.querySelector('.sidebar');
    
    togglebtn.classList.toggle('active');
    sidemenu.classList.toggle('active');

}
/* temp convert */
const celto = document.getElementById("celtofar");
const fare = document.getElementById("fartocel");
const restemp = document.getElementById("restemp");
const err = document.getElementById("error1");



function btnSub(event){
    event.preventDefault();
    let inp = document.getElementById("inp").value;
    inp = Number(inp);
    
      if (isNaN(inp) || inp === ""){
        err.textContent = "Please enter a valid number";
        return;
    }
   
    if(celto.checked){
     if(inp === ""){
         err.textContent = "Input Temperature";
     }
      else{
           let temp = Math.ceil((inp * 9/5) + 32);
         restemp.textContent = `${temp} °F`;
      }
    }
    else if(fare.checked){
        let temp = Math.ceil((inp - 32) * 5/9);
        restemp.textContent = `${temp} °C`
    }
    else{
        err.textContent="Please choose an option";
    }
}
/*animation8 about*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('back1');
    } else {
      entry.target.classList.remove('back1');
    }
  });
}, {
  threshold: .6
});

const vidback = document.querySelector('.gtk');

if (vidback) {
  observer.observe(vidback);
}

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('image-about1');
    } else {
      entry.target.classList.remove('image-about1');
    }
  });
}, {
  threshold: .4
});

const imgAbout = document.querySelector('.image-about');

if (imgAbout) {
  observer1.observe(imgAbout);
}

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('box-about1');
    } else {
      entry.target.classList.remove('box-about1');
    }
  });
}, {
  threshold: .3
});

const contenth3 = document.querySelector('.box-about');

if (contenth3) {
  observer2.observe(contenth3);
}

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('impro');
    } else {
      entry.target.classList.remove('impro');
    }
  });
}, {
  threshold: .6
});

const impro1 = document.querySelector('.imgpro-wrapper h1');

if (impro1) {
  observer4.observe(impro1);
}
/*animation sample works*/
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('phone-vid1');
    } else {
      entry.target.classList.remove('phone-vid1');
    }
  });
}, {
  threshold: .7
});

const samph11 = document.querySelector('.phone-vid');

if (samph11) {
  observer3.observe(samph11);
}

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('photopro');
    } else {
      entry.target.classList.remove('photopro');
    }
  });
}, {
  threshold: .7
});

const phot = document.querySelector('.photography h1');

if (phot) {
  observer5.observe(phot);
}
/* footer observer*/
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pro');
    } else {
      entry.target.classList.remove('pro');
    }
  });
}, {
  threshold: .4
});

const phot1 = document.querySelector('footer > div > div > .imgp');

if (phot1) {
  observer6.observe(phot1);
}

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('foot');
    } else {
      entry.target.classList.remove('foot');
    }
  });
}, {
  threshold: .7
});

const phot2 = document.querySelector('footer > div > div:nth-child(2)');

if (phot2) {
  observer7.observe(phot2);
}


const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('cont');
    } else {
      entry.target.classList.remove('cont');
    }
  });
}, {
  threshold: .7
});

const phot3 = document.querySelector('.wrapper-item h1');

if (phot3) {
  observer8.observe(phot3);
}
/*textconverter porject*/
function lower() {
  const input = document.getElementById("convert");
  input.value = input.value.toLowerCase();
}
function capital() {
  const input = document.getElementById("convert");
  
  input.value = input.value
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function upper(){
  const input = document.getElementById('convert');
 input.value = input.value.toUpperCase();

}
function clearText() {
  const input = document.getElementById("convert");
  const sentence = document.getElementById("charCount");
  input.value = "";
  sentence.innerText = "0"; 
}
function countChars() {
  const text = document.getElementById("convert").value;
  document.getElementById("charCount").innerText = text.length;
}
/*modal*/

function showmodal() {
  const modal1 = document.querySelector('.modal1-wrapper');
  const showm = document.querySelector('.showm');

  modal1.classList.toggle('active');
  showm.classList.toggle('active');
  
}

/*time*/
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.getElementById("timer").textContent =
    hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();
/*  temp js */





// =======================Home text==========================================
const arrDev = ["Passion", "Creativity", "Versatility"];

let count = 0;

window.setInterval(function changeText() {
  document.getElementById("description").innerText = arrDev[count];
  count < 2 ? count++ : (count = 0);
}, 1700);

const showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
};

setTimeout(function () {
showText("#name", "Britney K. Hall", 0, 200);   
}, 6700); 

// =======================mobile Navigation==========================================

const navOpen = document.getElementById('access_nav');
const navClose = document.getElementById('close_nav');
const navi = document.getElementById('navi');

navOpen.addEventListener('click', function(e) {
  navi.classList.remove("hide");
  navOpen.classList.add("hide");
  navClose.classList.remove("hide");
});


navClose.addEventListener('click', function(e) {
    navi.classList.add("hide");
    navOpen.classList.remove("hide");
    navClose.classList.add("hide");
  });

// =======================Site Navigation==========================================

const homeNav = document.getElementById('home-nav');
const aboutNav = document.getElementById('about-nav');
const resumeNav = document.getElementById('resume-nav');
const webNav= document.getElementById('web-nav');
const samplesNav= document.getElementById('samples-nav');
const contactNav = document.getElementById('contact-nav');
const home= document.getElementById("home");

const contact= document.getElementById("contact");
const about= document.getElementById("about");
const resume= document.getElementById("resume");
const web= document.getElementById("web");
 const samples= document.getElementById("samples");


homeNav.addEventListener('click', function() {
    home.classList.remove("hide");
    contact.classList.add("hide");
    resume.classList.add("hide");
    web.classList.add("hide");
    samples.classList.add("hide");
    about.classList.add("hide");
  });

aboutNav.addEventListener('click', function() {
    about.classList.remove("hide");
    home.classList.add("hide");
    resume.classList.add("hide");
    web.classList.add("hide");
    samples.classList.add("hide");
    contact.classList.add("hide");
  });

  resumeNav.addEventListener('click', function() {
    resume.classList.remove("hide");
    home.classList.add("hide");
    about.classList.add("hide");
    web.classList.add("hide");
    samples.classList.add("hide");
    contact.classList.add("hide");
  });

  webNav.addEventListener('click', function() {
    web.classList.remove("hide");
    home.classList.add("hide");    
    resume.classList.add("hide");
    about.classList.add("hide");
    samples.classList.add("hide");
    contact.classList.add("hide");
  });


  samplesNav.addEventListener('click', function() {
    const samples= document.getElementById("samples");
    samples.classList.remove("hide");
    home.classList.add("hide");
    resume.classList.add("hide");
    web.classList.add("hide");
    about.classList.add("hide");
    contact.classList.add("hide");
  });


  contactNav.addEventListener('click', function() {
    contact.classList.remove("hide");
    home.classList.add("hide");
    resume.classList.add("hide");
    web.classList.add("hide");
    samples.classList.add("hide");
    about.classList.add("hide");
  });



// =======================resume Navigation==========================================
  

const expectBtn = document.getElementById('expectBtn');
const eduBtn = document.getElementById('eduBtn');
const expBtn = document.getElementById('expBtn');
const skillsBtn= document.getElementById('skillsBtn');

const expectBtnClose = document.getElementById('expectBtnClose');
const eduBtnClose = document.getElementById('eduBtnClose');
const expBtnClose = document.getElementById('expBtnClose');
const skillsBtnClose = document.getElementById('skillsBtnClose');

const expect= document.getElementById("expect");
const edu= document.getElementById("edu");
const exp= document.getElementById("exp");
const skills= document.getElementById("skills");

expectBtn.addEventListener('click', function() {
    expect.classList.remove("hide");
    expectBtn.classList.add("hide");
    expectBtnClose.classList.remove("hide");
});

eduBtn.addEventListener('click', function() {
    edu.classList.remove("hide");
    eduBtn.classList.add("hide");
    eduBtnClose.classList.remove("hide");
});

expBtn.addEventListener('click', function() {
    exp.classList.remove("hide");
    expBtn.classList.add("hide");
    expBtnClose.classList.remove("hide");
});

skillsBtn.addEventListener('click', function() {
    skills.classList.remove("hide");
    skillsBtn.classList.add("hide");
    skillsBtnClose.classList.remove("hide");
});

expectBtnClose.addEventListener('click', function() {
    expect.classList.add("hide");
    expectBtn.classList.remove("hide");
    expectBtnClose.classList.add("hide");
});


eduBtnClose.addEventListener('click', function() {
    edu.classList.add("hide");
    eduBtn.classList.remove("hide");
    eduBtnClose.classList.add("hide");
});


expBtnClose.addEventListener('click', function() {
    exp.classList.add("hide");
    expBtn.classList.remove("hide");
    expBtnClose.classList.add("hide");
});



skillsBtnClose.addEventListener('click', function() {
    skills.classList.add("hide");
    skillsBtn.classList.remove("hide");
    skillsBtnClose.classList.add("hide");
});

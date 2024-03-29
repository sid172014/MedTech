// Selecting cursor and blur elements
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// Mousemove event listener for cursor movement
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

// Selecting all h4 elements inside #nav
var h4all = document.querySelectorAll("#nav h4");
// Adding mouseenter and mouseleave event listeners to h4 elements
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

// GSAP animation for changing the background color and height of #nav
gsap.to("#nav", {
    backgroundColor: "#321414",
    duration: 0.1,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

// GSAP animation for changing the background color of #main
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

// GSAP animation for fading in elements inside #about-us
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

// GSAP animation for scaling and staggered fading of .card elements
gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

// GSAP animations for moving #colon1 and #colon2 elements
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

// GSAP animation for moving #page4 h1 element
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
});

function registerButton(){
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    console.log(username,password,email);
}
// script.js

$(document).ready(function() {
    // Smooth scrolling to form section when clicking on login or sign up links
    $(".login-btn").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#scroller-in").offset().top
      }, 500);
});
    // You can add similar functionality for the login link if needed
  
  });
  
  function openPopupForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closePopupForm() {
    document.getElementById("popupForm").style.display = "none";
}

// Handling SignupForm 
document.getElementById('signupForm').addEventListener('submit', function(event){
    event.preventDefault();

    const form = document.getElementById('signupForm');
    const username = form.elements['username'].value;
    const password = form.elements['password'].value;
    const phone = form.elements['phone'].value;
    const email = form.elements['email'].value;
    
    axios.post('http://localhost:3000/users/signup', {
        username,password,phone,email
    }).then(function(response){
        console.log(response.data);
        document.getElementById('display').innerText = "Registered";
    });
});

// Handling loginForm
document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();
    
    const form = document.getElementById('loginform');
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    axios.post('http://localhost:3000/users/signin', {
        email,password
    }).then(function(responose){
        console.log(responose.data._id);
        window.location.href = `/users/second/${responose.data._id}`;
    });
});
// local reviews data
const reviews = [
  {
    id: 1,
    name: "Anisha Li",
    img: "./images/avatar-anisha.png",
    text: " Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },

  {
    id: 2,
    name: "Ali Bravo",
    img: "./images/avatar-ali.png",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 3,
    name: "Richard Watts",
    img: "./images/avatar-richard.png",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    id: 4,
    name: "Shanai Gough",
    img: "./images/avatar-shanai.png",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive. ",
  },
];

// select items
const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const info = document.querySelector("#info");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

//nav Hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links-container");
// Hamburger //
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

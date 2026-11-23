var reviews = [
  {
    name: "Anna Smith",
    job: "Designer",
    text: "Great service. I will come back again."
  },
  {
    name: "Bat Erdene",
    job: "Student",
    text: "Very easy to use and the team was helpful."
  },
  {
    name: "Sara Lee",
    job: "Teacher",
    text: "I recommend this to all my friends."
  },
  {
    name: "John Brown",
    job: "Engineer",
    text: "Fast, clean and exactly what I needed."
  }
];

var i = 0; // which review is showing now

var person = document.getElementById("name");
var job = document.getElementById("job");
var text = document.getElementById("text");

// Show the review number i
function show() {
  person.textContent = reviews[i].name;
  job.textContent = reviews[i].job;
  text.textContent = reviews[i].text;
}

document.getElementById("next").onclick = function () {
  i = i + 1;
  if (i == reviews.length) {
    i = 0; // go back to the first one
  }
  show();
};

document.getElementById("prev").onclick = function () {
  i = i - 1;
  if (i < 0) {
    i = reviews.length - 1; // go to the last one
  }
  show();
};

document.getElementById("random").onclick = function () {
  i = Math.floor(Math.random() * reviews.length);
  show();
};

show(); // show the first review when the page opens
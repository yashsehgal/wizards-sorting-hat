let username_input = document.querySelector(".username")

function submitUsername() {
  
  let username = username_input.value;
  if (!username) return;

  // let username_list = [];
  // username_list = JSON.parse(localStorage.getItem('username'))

  let username_list;
  if (localStorage.getItem('username') === null) {
    username_list = [];
  } else {
    username_list = JSON.parse(localStorage.getItem('username'));
  }

  username_list.push(username);
  localStorage.setItem('username', JSON.stringify(username_list));
  
  let latestUsername = username_list[username_list.length - 1];
  
  sortingHatApplication(latestUsername);
}

function getUsername() {
  let UsernameList = JSON.parse(localStorage.getItem('username'));
  let latestUsername = UsernameList[UsernameList.length - 1];
  return latestUsername;
}

function sortingHatApplication(username) {
  // removing username screens
  let username_section = document.querySelector(".username-input");
  let bg_image = document.querySelector(".bg");

  username_section.style.display = "none";
  bg_image.style.display = "none";

  let sortingHatGame = document.querySelector(".sorting-hat-game");
  sortingHatGame.style.display = "block";

  document.body.style.display = "block";

}

function loadFile(event) {
  
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
  
  getRandomHouse();
}


function getRandomHouse() {

  const house_names = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

  const houseName = house_names[Math.floor((Math.random() * house_names.length))];
  // console.log(houseName)



  let content = document.createElement("div");
  content.innerHTML = `
  <h2>
    Congratulations ${getUsername()} ! You have been selected in ${houseName} House.
  </h2>
  `;

  let houseImageGIF = document.createElement("img");

  if (houseName === "Gryffindor") { 
    houseImageGIF.src = "../assets/Gryffindor.gif";
  } else if (houseName === "Ravenclaw") {
    houseImageGIF.src = "../assets/Ravenclaw.gif";
  } else if (houseName === "Hufflepuff") {
    houseImageGIF.src = "../assets/Hufflepuff.gif";
  } else if (houseName === "Slytherin") {
    houseImageGIF.src = "../assets/Slytherin.gif";
  }

  document.getElementById("sorting-hat-content").append(content);
  document.getElementById("sorting-hat-content").append(houseImageGIF);
}
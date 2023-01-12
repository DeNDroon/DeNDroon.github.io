var leftMouse = false;
var bmState = false;
// ______________________________________________________________

const profiles = [
  (DeNDroon = {
    user: "Giorgi",
    img: 'url("src/img/my-pic.jpg")',
    story: true,
  }),
  (person1 = {
    user: "Buga",
    img: 'url("src/img/1per.jpg")',
    story: true,
    storyImg: 'url("stories/src/1story.jpg")',
  }),
  (person2 = {
    user: "Badri",
    img: 'url("src/img/2per.jpg")',
    story: true,
    storyImg: 'url("stories/src/2story.jpg")',
  }),
  (person3 = {
    user: "Gela",
    img: 'url("src/img/3per.jpg")',
    story: false,
  }),
  (person4 = {
    user: "Chakra",
    img: 'url("src/img/4per.jpg")',
    story: true,
    storyImg: 'url("stories/src/3story.jpg")',
  }),
  (person5 = {
    user: "Chxunkk_-",
    img: 'url("src/img/5per.jpg")',
    story: false,
  }),
  (person6 = {
    user: "Jima",
    img: 'url("src/img/6per.jpg")',
    story: false,
  }),
];
function getStories() {
  for (var i = 1; i < profiles.length; i++) {
    var elemParent = document.getElementById("story_section");
    var elem2 = document.createElement("span");
    var storyPhoto = document.createElement("div");
    var storyName = document.createElement("p");
    var storyBack = document.createElement("span");
    storyName.className = "story-desc";
    storyPhoto.className = "story-photo";
    storyPhoto.style.backgroundImage = profiles[i].img;
    storyPhoto.style.backgroundPosition = "center";
    elem2.className = "story";
    storyBack.className = "unview-story";
    if (profiles[i].story == true) {
      elemParent.appendChild(elem2);
      elem2.appendChild(storyBack);
      storyBack.appendChild(storyPhoto);
      elem2.appendChild(storyName);
      storyName.innerText = profiles[i].user;
      elem2.id = profiles[i].user;
      elem2.addEventListener("click", function () {
        showStory(this.id);
      });
    } else {
    }
  }
}
getStories();

function showStory(x) {
  var container = document.getElementById("story-container");
  for (var i = 0; i < profiles.length; i++) {
    if (profiles[i].user == x) {
      document.getElementById("story-open-photo").style.backgroundImage =
        profiles[i].storyImg;
    }
  }
  container.style.display = "block";
  startTimer();
}

function startTimer() {
  var start_Timer = 0;
  var time_indicator = document.getElementById("progress-timer");
  var story_timer = setInterval(function () {
    if (storyContainer.style.getPropertyValue("display") == "block") {
      time_indicator.style.width = start_Timer + "%";
      start_Timer += 0.2;
    }
    if (start_Timer >= 101) {
      document.getElementById("story-container").style.display = "none";
      clearInterval(story_timer);
    }
    if (storyContainer.style.getPropertyValue("display") == "none") {
      start_Timer = 0;
      time_indicator.style.width = "0%";
      clearInterval(story_timer);
    }
  }, 10);
}

const storyContainer = document.getElementById("story-container");
const storyFront = document.getElementById("story-open-photo");
var mouseStartPosY;
var storyPosY = storyContainer.style
  .getPropertyValue("top")
  .slice(0, storyContainer.style.getPropertyValue("top").length - 2);

storyFront.addEventListener("mousemove", function (e) {
  if (leftMouse == true && storyPosY >= 0) {
    storyPosY = storyContainer.style
      .getPropertyValue("top")
      .slice(0, storyContainer.style.getPropertyValue("top").length - 2);
    storyContainer.style.top = e.y - mouseStartPosY + "px";
  } else {
    storyContainer.style.top = "0px";
  }
});

storyFront.addEventListener("mousedown", function (e) {
  if (e.button == 0) {
    storyPosY = storyContainer.style
      .getPropertyValue("top")
      .slice(0, storyContainer.style.getPropertyValue("top").length - 2);
    leftMouse = true;
    mouseStartPosY = e.y;
  }
});
document.body.addEventListener("mouseup", function () {
  leftMouse = false;
  if (storyPosY >= 200) {
    storyContainer.style.display = "none";
  }
  storyContainer.style.top = "0px";
});

function bookMark() {
  const elem = document.getElementById("bookmark");
  switch (bmState) {
    case false:
      elem.className = "fa-solid fa-bookmark";
      bmState = true;
      break;
    case true:
      elem.className = "fa-regular fa-bookmark";
      bmState = false;
      break;
  }
}

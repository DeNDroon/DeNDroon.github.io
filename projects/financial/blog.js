const blogs = [];
class CreateBlog {
  constructor(category, news) {
    this.category = category;
    this.name = news;
  }
  static function() {
    blogs.push(this)
  }
}

var a = new CreateBlog("Apps", "Hello my friend");
var b = new CreateBlog("Products", "Hello my friend");
var c = new CreateBlog("Tutorial", "Hello my friend");

for (let i = 0; i < 15; i++) {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      blogs.push(a)
      break;
    case 1:
      blogs.push(b);
      break;
    case 2:
      blogs.push(c);
  }
}

var filter = "All";
function countPages() {
  $("#page-control").html(`
              <input type="radio" name="page" id="page-1" checked>
              <label for="page-1" class="page-1">1</label>
                      `)
  var pages = Math.ceil(blogs.filter(x => x.category == filter || filter == "All").length / 6);
  for (let i = 2; i <= pages; i++) {
    $("#page-control").append(`
    <input type="radio" name="page" id="page-${i}">
    <label for="page-${i}" class="page-${i}">${i}</label>
    `)
  }
  $("input[name='page']").on("click", () => {
    var selectedPage = $("input[name='page']:checked").attr("id").replace("page-", "");
    addPost(selectedPage);
  });
};
countPages();

function addPost(page = "1") {
  var filtered = blogs.filter(x => x.category == filter || filter == "All");
  var strt = 0, last = 6;
  if(page * 6 < Math.floor(filtered.length)) {
    strt = (page - 1) * 6;
    last = strt + 6;
  } else {
    strt = (page - 1) * 6;
    last = filtered.length;
  }
  $("#news-container").html("");
  for (let i = strt; i < last; i++) {
    if (filtered[i].category == filter || filter == "All") {
      $("#news-container").append(`
        <div class="news-blog news-blog-card">
          <img src="./assets/laptop-closed.png" alt="blog image laptop">
          <div class="top">
            <p class="featured">${filtered[i].category}</p>
            <h1>The Basics about Cryptocurrency</h1>
            <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
          </div>
          <div class="user-info">
            <img src="./assets/prof-pic.png" alt="Profile picture">
            <div>
              <p class="name-last">ALEX TURNER</p>
              <p class="date">AUGUST 2, 2021</p>
            </div>
          </div>
        </div>
      `);
    }
  }
}
addPost();

$("input[name='filter']").on("change", () => {
  filter = $("input[name='filter']:checked").attr("id").replace("rad-", "");
  switch ($("input[name='filter']:checked").index()) {
    case 0:
      addPost("1")
      break;
      case 2:
        addPost("1")
        break;
        case 4:
          addPost("1")
      break;
    case 6:
      addPost("1")
      break;
  };
  countPages()
})
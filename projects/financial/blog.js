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

$("input[name='page']").on("click", () => {
    const selectedPage = $("input[name='page']:checked").attr("id").replace("page-", "");
    addPost(selectedPage);
  });
  
  function addPost(page) {
    var strt = 0, last = 6;
    switch (page) {
      case "1":
        strt = 0;
        last = 6;
        break;
      case "2":
        strt = 6;
        last = 12;
        break;
      case "3":
        strt = 12;
        last = blogs.length;
        break;
    }
    $("#news-container").html("");
    for (let i = strt; i < last; i++) {
      $("#news-container").append(`
        <div class="news-blog news-blog-card">
          <img src="./assets/laptop-closed.png" alt="blog image laptop">
          <div class="top">
            <p class="featured">${blogs[i].category}</p>
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
  addPost(1);
function backup() {
    let arr = document.cookie.split(",").filter(x => x != "");
    arr.forEach((i) => {
        i = i.split("|");
        addHist(i[0], i[1]);
    })
}

let menuOpen = false;
const menu = {
    open: function() {
        document.getElementById("sub-menu").style.display = "flex";
        menuOpen = true;
    },
    close: function() {
        document.getElementById("sub-menu").style.display = "none";
        menuOpen = false;
    }
}

function menuBut() {
    if(menuOpen) {
        menu.close();
    } else {
        menu.open();
    }
}
document.getElementById("")
document.getElementsByTagName("main")[0].addEventListener("click", () => {
    menu.close();
})

backup()

function shortenUrl(longUrl) {

    return fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`, { method: 'GET' })
      .then(response => response.text())
      .then(responseText => {
        if (responseText.startsWith('http')) {
          return responseText.trim();
        } else {
          throw new Error('Failed to extract shortened URL from response body');
        }
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }


document.getElementById("shorten-btn").addEventListener("click", function (e) {
    let input = document.getElementById("link-in");
    let url;
    e.preventDefault();

    if (input.value.length > 3 && /.+\..+/.test(input.value) && !/\|/.test(input.value)) {
        shortenUrl(input.value)
        .then(shortenedUrl => {
            url = shortenedUrl;
            document.cookie += ["," + input.value + "|" + url];
            console.log(document.cookie)
            addHist(input.value, url);
            input.value = url;
            // Do something with the shortened URL
        })
        .catch(error => console.error(error));
    } else {
        input.classList.add("error");
        setTimeout(function () {
            input.classList.remove("error")
        }, 500)
    }
})


function addHist(old, newLink) {
    let nOld = document.createElement("span");
    nOld.classList.add("old-link");
    nOld.innerText = old;
    let nNew = document.createElement("a");
    nNew.classList.add("new-link");
    nNew.href = newLink;
    nNew.target = "_blank";
    nNew.innerText = newLink;
    let nBtn = document.createElement("input");
    nBtn.classList.add("btn");
    nBtn.type = "button";
    nBtn.value = "Copy";
    let nDiv = document.createElement("div");
    nDiv.classList.add("flex-row")
    nBtn.addEventListener("click", elementer);
    nDiv.append(nOld, nNew, nBtn);
    document.getElementById("history").append(nDiv);
}

document.querySelectorAll("#history .btn").forEach(elem => {
    elem.addEventListener("click", elementer);
});

function elementer() {
    link = this.parentElement.querySelector(".new-link").innerText;
    navigator.clipboard.writeText(link);
    document.querySelectorAll("#history .btn").forEach(tip => {
        tip.value = "Copy";
        tip.style.backgroundColor = "var(--clr4)"
    })
    this.value = "Copied!";
    this.style.backgroundColor = "var(--clr5)"
}
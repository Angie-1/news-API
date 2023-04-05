var articles = document.getElementById("articles")

fetch("https://newsapi.org/v2/everything?q=politics&from=2023-03-16&sortBy=publishedAt&apiKey=af05b0b02e074057ac8ac3f1f398637c")
  .then((x) => x.json())
  .then(function (y) {
    console.log(y);
     
    y.articles.forEach(function(y){
        var Div2 = document.createElement("div");
        var title = document.createElement("h2");
        var description = document.createElement("p");
        var author = document.createElement("p");
        var url = document.createElement("a");

        title.innerHTML = `
        <p>Title: ${y.title}</p>`
        description.innerHTML = y.description;
        author.innerHTML = `
        <p>Author: ${y.author}</p>
        `
        url.innerHTML = `
        <a href="${y.url}" target="_blank">Read More</a>
        `
        // Div2. setAttribute("id", "articles")

        console.log(y)

        articles.appendChild(Div2)
        Div2.appendChild(title);
        Div2.appendChild(description);
        Div2.appendChild(author);
        Div2.appendChild(url);


    }

  )}
  );
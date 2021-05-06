const url = "https://exam1.minadesign.one/wp-json/wp/v2/posts";

const resultsContainer = document.querySelector(".results");


async function getPosts() {

    

    try{

    const response = await fetch(url);

    const results = await response.json();

    const posts = results;

    resultsContainer.innerHTML = "";

    

    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].id);

        if (i === 15) {
            break;
        }

        const formatDate  = new Date(posts[i].date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer.innerHTML += `<a href="postspecificpage.html?id=${posts[i].id}" class="results"><h3>${posts[i].title.rendered}</h3> 
                                        <div class="date">Date: ${formatDate}</div>
                                        <div class="post">${posts[i].content.rendered}</div>
                                        
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </a>`;
    }
    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}



getPosts();


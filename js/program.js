let url = "https://exam1.minadesign.one/wp-json/wp/v2/posts/349";

const resultsContainer = document.querySelector(".program");



async function getPosts() {

    

    try{

    const response = await fetch(url);

    const results = await response.json();

    const posts = results;

    resultsContainer.innerHTML = "";

    

        

        resultsContainer.innerHTML += `<div class="program"><h3>${posts.title.rendered}</h3> 
                                        
                                        <div class="post">${posts.content.rendered}</div>
                                        
                                        <p class="readmore">Read More <i class="fas fa-chevron-right"></i></p>
                                        </div>`;
    
    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="program"><h2 class="red">an error occurred</h2></div>`;
    }
}



getPosts();
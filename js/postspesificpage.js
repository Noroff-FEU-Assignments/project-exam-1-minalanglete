const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id"); 

console.log(id);


const url = "https://exam1.minadesign.one/wp-json/wp/v2/posts/" +id;


const resultsContainer = document.querySelector(".resultspost");


async function getPost() {

    try{

    const response = await fetch(url);

    const results = await response.json();

    const product = results;

        
    const formatDate  = new Date(product.date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer.innerHTML += `<div class="resultspost">
                                        <h3>${product.title.rendered}</h3> 
                                        <div class="date">Date: ${formatDate}</div>
                                        <div class="post">${product.content.rendered}</div>
                                        <p class="comments">Comments</p>
                                        </div>`;   
                                        
                                        

    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}

getPost();



const img = document.querySelectorAll(".resultspost img");

const imgModal = document.querySelectorAll(".modal");

img.onclik = function () {
    imgModal.style.display = "block";
}

const close = document.querySelector("body")

close.onclik = function () {
    imgModal.style.display = "none";
}
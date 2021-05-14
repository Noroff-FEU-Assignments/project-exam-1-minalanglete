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

    const viewImg = document.querySelector(".modal");
    const view = document.querySelector(".resultspost");

    viewImg.style.display = "none";    

        
    const formatDate  = new Date(product.date).toLocaleString("en-GB", {day: "numeric",  month: "numeric", year: "numeric",});

        resultsContainer.innerHTML += `<div class="resultspost">
                                        <h3>${product.title.rendered}</h3> 
                                        <div class="date">Date: ${formatDate}</div>
                                        <div class="post">${product.content.rendered}</div>
                                        
                                        <p class="comments">Comments</p>
                                        </div>`;   
                                        
    view.onclick = function () {
      viewImg.innerHTML =   `<div class="modal">${product.content.rendered}</div>`;
      viewImg.style.display = "block";
}    

    function removeImg() {
      viewImg.innerHTML = "";
      viewImg.style.display = "none"; 
    }
        viewImg.addEventListener("click", removeImg);
  

    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}



getPost();

/*var modal = document.querySelector(".modal")
var img = document.querySelectorAll("img")


img.onclick = function () {
  modal.innerHTML = `<div class="modal">
                        <div class="modal-content">
                        <button class="closemodal"><i class="fal fa-times"></i></button>
                        <img src="${src}" class="imgmodal" alt="${alt}">
                        <span class="alttext">${caption}</span>
                        </div>
                    </div>`;
}


const modal = document.querySelector(".modal");
const img = document.querySelectorAll("img");

img.addEventListener("click", function () {
    
    modal.innerHTML = `<div class="modal">
                        <div class="modal-content">
                        <button class="closemodal"><i class="fal fa-times"></i></button>
                        <img src="${product.content.rendered}" class="imgmodal">
                        </div>
                        </div>`;

    modal.style.display = "block";
});

 

    const img = document.querySelectorAll("div .resultpost");
    const modal = document.querySelector(".modal");

    img.onclick = function () {
      modal.innerHTML = `<div class="modal"><p>hello</p></div>`;
      
    }



const viewImg = document.querySelector(".modal");
const view = document.querySelector(".resultspost");


view.onclick = function () {
      viewImg.innerHTML = `<div class="post">${product.content.rendered}</div>`;
}      
 */
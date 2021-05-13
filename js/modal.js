/*const modal = document.querySelector("#modal")
const imgModal = document.querySelector("#modal modalimg")
const modalText = document.querySelector("#modal .alttext")
/*const img = document.querySelectorAll("img")*/


/*const handleClick = (e) => {
    modal.style.display = "block"
    imgModal.src = e.target.src
    modalText.innerHTML = e.target.alt
}

const handleClose = (e) => {
    if (e.target.id === "modal") modal.style.display = "none"
    if (e.target.classList.contains("close")) modal.style.display = "none"
}

const addEvents = () => {
    const images = document.querySelectorAll("img")
    images.forEach(image => {
        if (!image.classList.contains(".modalimg")) {
            image.addEventListener("click", handleClick)
            image.classList.add("clickable")
        }
    })
    modal.addEventListener("click", handleClose)
}


/*
img.onclik = function () {
    modal.style.display = "block";
    imgModal.scr = e.target.scr;
    modalText.innerHTML = e.target.alt;

}

const span = document.getElementsByClassName("close")[0];

span.onclik = function () {
    modal.style.display = "none";
}
*/

const modal = document.querySelector("#modal")
const modalImg = document.querySelector("#modal img")
const modalCap = document.querySelector("#modal .caption")

const handleClick = (e) => {
    modal.style.display = "block"
    modalImg.src = e.target.src
    modalCap.innerHTML = e.target.alt
}

const handleClose = (e) => {
    if (e.target.id === "modal") modal.style.display = "none"
    if (e.target.classList.contains("close")) modal.style.display = "none"
}

const addEvents = () => {
    const images = document.querySelectorAll(".resultspost img")
    images.forEach(image => {
        if (!image.classList.contains("modal-image")) {
            image.addEventListener("click", handleClick)
            image.classList.add("clickable")
        }
    })
    modal.addEventListener("click", handleClose)
}
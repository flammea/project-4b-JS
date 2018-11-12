const header = document.querySelector("h1");

document.body.addEventListener("mousemove", (event => {
    header.textContent = `${event.clientX}, ${event.clientY}`;
    document.body.style.backgroundColor = `rgb(${event.clientX/3}, ${event.clientY/2}, 100)`
}))
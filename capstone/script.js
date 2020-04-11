const hamburger = document.getElementById('hamburger');
const linksWrapper = document.querySelector('.links-wrapper');

// hamburger.addEventListener('click', () => {
//     console.log('clicked')
//     if (linksWrapper.style.display === "none") {
//         linksWrapper.style.display = "block"
//     } else {
//         linksWrapper.style.display = "none"
//     }
// })

hamburger.addEventListener('click', () => {
    console.log('clicked')
    linksWrapper.classList.toggle('active')
})

window.addEventListener("resize", function() {
    if(window.innerWidth > 600) {
        linksWrapper.classList.remove('active')
    }
});
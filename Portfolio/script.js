document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const description = this.previousElementSibling;
            description.classList.toggle("show-more");
            this.textContent = description.classList.contains("show-more") ? "Read Less" : "Read More";
        });
    });
});

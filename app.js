(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })
})();

document.addEventListener("DOMContentLoaded", function () {
    // Get all divs with class 'blog'
    const blogDivs = document.querySelectorAll(".blog");

    // Attach click event to each div
    blogDivs.forEach((div) => {
        const link = div.getAttribute("data-link"); // Get the URL from the data-link attribute
        if (link) {
            div.addEventListener("click", () => {
                window.open(link, "_blank"); // Open the link in a new tab
            });
        }
    });
});
(function() {
  if (document.querySelector('.js-services-target')) {
    document.querySelectorAll(".js-services-target").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const selector = el.getAttribute("data-target")

        document.querySelector(selector).classList.add("services__image--active")
      })

      el.addEventListener("mouseleave", () => {
        const selector = el.getAttribute("data-target")

        document.querySelector(selector).classList.remove("services__image--active")
      })
    })
  }
})();

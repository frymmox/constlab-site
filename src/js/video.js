(function() {
  if (document.querySelectorAll(".video-box--vimeo"))
    document.querySelectorAll(".video-box--vimeo").forEach((el) => {
      window.addEventListener("load", () => {
        const positionTargetX = (el.offsetWidth / 2)
        const positionTargetY = (el.offsetHeight / 2)

        gsap.set(el.children[2], {
          x: positionTargetX,
          y: positionTargetY,
        })
      })

      el.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top
        let rightBorder = el.offsetWidth - 60
        let bottomBorder = el.offsetHeight - 60

        if (x < 60) {
          x = 60
        }

        if (x > rightBorder) {
          x = rightBorder
        }

        if (y < 60) {
          y = 60
        }

        if (y > bottomBorder) {
          y = bottomBorder
        }

        gsap.to(el.children[2], {
          x,
          y,
          duration: 0.3
        })
      })

      el.addEventListener('mouseleave', (e) => {
        let x = (el.offsetWidth / 2)
        let y = (el.offsetHeight / 2)

        gsap.to(el.children[2], {
          x,
          y,
          duration: 0.7
        })
      })

      el.addEventListener("click", (e) => {
        const video = el.children[1].children[0]
        const player = new Vimeo.Player(video)
        e.preventDefault()
        el.children[0].style.display = 'none'
        el.classList.toggle('video-box--active')
        if (el.classList.contains('video-box--active')) {
          player.play()
        } else {
          player.pause()
        }
      })
    })
})();

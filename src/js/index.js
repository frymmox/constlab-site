Pace.on('hide', () => {
  setTimeout(() => {
    gsap.set('.pace', {display: 'none'})
  }, 1000)
})

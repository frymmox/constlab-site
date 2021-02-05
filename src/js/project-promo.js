(function() {
  const header = document.querySelector('.header')
  let headerHeight = header.offsetHeight
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)

  window.addEventListener('resize', () => {
    headerHeight = header.offsetHeight
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
  })
})();

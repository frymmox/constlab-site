Draggable.create('.drag-text__text', {
  type: 'x',
  bounds: document.querySelector('.drag-text__wrap'),
  onPress: () => {
    gsap.to('.drag-text__wrap', {scale: 0.7, duration: 0.35})
  },
  onRelease: () => {
    gsap.to('.drag-text__wrap', {scale: 1, duration: 1})
  },
  onDrag: () => {
    gsap.to('.drag-text__wrap', {scale: 0.7})
  }
})

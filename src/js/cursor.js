(function() {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.follower');
  const showreel = document.querySelector('.showreel');
  const dragText = document.querySelector('.drag-text__content');

  document.addEventListener('mousemove', e => {
    gsap.to(cursor, {
      opacity: 1,
      x: e.clientX - 6,
      y: e.clientY - 6,
      duration: 0.1
    });

    gsap.to(follower, {
      opacity: 1,
      x: e.clientX - 28,
      y: e.clientY - 28,
      duration: 0.4
    });
  });

  document.querySelectorAll('a').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hover');
      follower.classList.add('follower--hover');
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hover');
      follower.classList.remove('follower--hover');
    });
  });

  showreel.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor--hidden');
    follower.classList.add('cursor--hidden');
  });

  showreel.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor--hidden');
    follower.classList.remove('cursor--hidden');
  });

  dragText.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor--hidden');
    follower.classList.add('cursor--hidden');
  });

  dragText.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor--hidden');
    follower.classList.remove('cursor--hidden');
  });
})();

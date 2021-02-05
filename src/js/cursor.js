const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.follower');

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
})

(function() {
  const pos = {x: 0, y: 0};
  const mouse = {x: pos.x, y: pos.y};
  const ratio = 0.15;
  let activeCursor = false;
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.follower');
  const showreel = document.querySelector('.showreel');

  gsap.set(cursor, {xPercent: -50, yPercent: -50});
  gsap.set(follower, {xPercent: -50, yPercent: -50});

  const xSetCursor = gsap.quickSetter(cursor, 'x', 'px');
  const ySetCursor = gsap.quickSetter(cursor, 'y', 'px');

  const xSetFollower = gsap.quickSetter(follower, 'x', 'px');
  const ySetFollower = gsap.quickSetter(follower, 'y', 'px');

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    gsap.set(cursor, {opacity: 1});
    gsap.set(follower, {opacity: 1});
  });

  gsap.ticker.add(() => {
    if (!activeCursor) {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;

      xSetCursor(mouse.x);
      ySetCursor(mouse.y);

      xSetFollower(pos.x);
      ySetFollower(pos.y);
    }
  });

  document.addEventListener('mouseleave', (e) => {
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.2
    });

    gsap.to(follower, {
      opacity: 0,
      duration: 0.2
    });
  });

  document.querySelectorAll('a').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(follower, 0.3, { scale: 0.8 });
      follower.classList.add('follower--hover');
      activeCursor = true;
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(follower, 0.3, { scale: 1 });
      follower.classList.remove('follower--hover');
      activeCursor = false;
    });

    el.addEventListener('mousemove', (e) => {
      var rect = el.getBoundingClientRect();
      var relX = e.pageX - rect.left;
      var relY = e.pageY - rect.top;
      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / 6;
      pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / 6;
      mouse.x = rect.left + rect.width / 2 + (relX - rect.width / 2);
      mouse.y = rect.top + rect.height / 2 + (relY - rect.height / 2);
      gsap.to(cursor, 0.3, { x: mouse.x, y: mouse.y });
      gsap.to(follower, 0.9, { x: pos.x, y: pos.y, ease: "expo.out" });
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
})();

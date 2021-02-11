gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('.page');

const scrollbar = Scrollbar.init(scroller, { delegateTo: document });

ScrollTrigger.scrollerProxy(scroller, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value;
    }
    return scrollbar.scrollTop;
  }
});

scrollbar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });

gsap.fromTo('.parallax-image', {
    yPercent: -20,
    scale: 1,
  },
  {
    duration: 2,
    scale: 1.1,
    yPercent: 0,
    scrollTrigger: {
      trigger: '.works',
      start: 'top center',
      // markers: true,
      end: 'bottom bottom',
      scrub: true,
  }
});

if (document.querySelector('.gsap-marker-scroller-start')) {
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

  scrollbar.addListener(({ offset }) => {
    gsap.set(markers, { marginTop: -offset.y })
  });
}

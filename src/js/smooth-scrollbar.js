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

gsap.to('.gradient-title__item--first', {
  y: -200,
  scrollTrigger: {
    trigger: '.gradient-title',
    endTrigger: '.showreel',
    start: 'top top',
    // markers: true,
    end: 'bottom bottom',
    scrub: true,
  }
});

gsap.to('.gradient-title__item--last', {
  y: -125,
  scrollTrigger: {
    trigger: '.gradient-title',
    endTrigger: '.showreel',
    start: 'top top',
    // markers: true,
    end: 'bottom bottom',
    scrub: true,
  }
});

gsap.to('.drag-text__text', {
  xPercent: -100,
  scrollTrigger: {
    trigger: '.drag-text',
    endTrigger: '.works',
    start: 'top 55%',
    // markers: true,
    end: 'center bottom',
    scrub: 1.5,
  }
});

gsap.from(".stat__number h3", {
	ease: "none",
	innerText: 0,
	roundProps: "innerText",
  onUpdate: function() {
    this.targets().forEach(target => {
      const val = gsap.getProperty(target, "innerText");
      target.innerText = val;
    });
  },
  scrollTrigger: {
    trigger: '.about',
    start: 'top+=200px center',
    end: 'bottom bottom',
    // markers: true,
    scrub: true,
    once: true
  }
}, "<");

if (document.querySelector('.gsap-marker-scroller-start')) {
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

  scrollbar.addListener(({ offset }) => {
    gsap.set(markers, { marginTop: -offset.y })
  });
}

 // GSAP Animations
    gsap.from('.content h1', { y: 50, opacity: 0, duration: 1 });
    gsap.from('.content p', { y: 50, opacity: 0, delay: 0.5, duration: 1 });
    gsap.from('.cta', { scale: 0.8, opacity: 0, delay: 1, duration: 0.5 });
    gsap.from('.phone-img', { x: 100, opacity: 0, delay: 0.5, duration: 1 });
    gsap.from('.tag', { y: -20, opacity: 0, stagger: 0.3, delay: 1.5 });

     gsap.from(".img1", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".connection-section",
      start: "top 80%",
    }
  });

  gsap.from(".img2", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".connection-section",
      start: "top 80%",
    }
  });

  gsap.from(".connection-content", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".connection-content",
      start: "top 90%",
    }
  });
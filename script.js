// Hero Section Animation
gsap.from(".hero .content h1", {
  y: -60,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  delay: 0.2,
});

gsap.from(".hero .content p", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.5,
});

gsap.from(".hero .cta", {
  scale: 0,
  opacity: 0,
  duration: 0.7,
  ease: "back.out(1.7)",
  delay: 0.9,
});

gsap.from(".phone-img", {
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.5,
});

// Features Section Animation
gsap.from(".features-title", {
  scrollTrigger: ".features-title",
  y: 50,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".feature-card", {
  scrollTrigger: ".features-grid",
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Connection Section Animation
gsap.from(".connection-left img", {
  scrollTrigger: ".connection-section",
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
});

gsap.from(".connection-right h2", {
  scrollTrigger: ".connection-right h2",
  x: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".feature-item", {
  scrollTrigger: ".connection-section",
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});

// Install Section Animation
gsap.from(".install-section h2", {
  scrollTrigger: ".install-section",
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".step", {
  scrollTrigger: ".steps",
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Donate Section Animation
gsap.from(".donate-content h2", {
  scrollTrigger: ".donate-section",
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".donate-content p", {
  scrollTrigger: ".donate-section",
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.3,
});

gsap.from(".donate-btn", {
  scrollTrigger: ".donate-btn",
  scale: 0,
  opacity: 0,
  duration: 0.6,
  delay: 0.6,
  ease: "back.out(1.7)",
});

gsap.from(".donate-phone", {
  scrollTrigger: ".donate-phones",
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
});


// Download Section Animation
gsap.from(".download-content h2", {
  scrollTrigger: ".download-wrapper",
  x: -60,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".download-btn", {
  scrollTrigger: ".download-btn",
  scale: 0,
  opacity: 0,
  duration: 0.6,
  delay: 0.3,
  ease: "back.out(1.5)",
});

gsap.from(".download-image img", {
  scrollTrigger: ".download-image",
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});





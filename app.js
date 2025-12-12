gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const section1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "bottom top+=300",
    scrub: true,
  }
});

section1Timeline.from(".section1 h1 span:first-child", {x: -150, opacity: 0, duration: 1.2});
section1Timeline.from(".section1 h1 span:last-child", {x: 150, opacity: 0, duration: 1.2}, "<");
section1Timeline.from(".section1 p", {y: 40, opacity: 0, duration: 1.2}, "<");
section1Timeline.from(".section1 img", {y: 150, opacity: 0, duration: 1.2}, "<");
section1Timeline.to("body", {backgroundColor: "#e74c3c", duration: 1}, "<");


const section2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top center",
    toggleActions: "play reverse play reverse"
  }
});

section2Timeline.from(".section2 h2 span", {y: -80, opacity: 0, stagger: 0.25, duration: 0.9});
section2Timeline.from(".section2 p", {scale: 0.9, opacity: 0, duration: 0.9}, "<");
section2Timeline.to("body", {backgroundColor: "#2ecc71", duration: 1}, "<");


gsap.to(".horizontal-sections", {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});


const section3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top center",
    toggleActions: "play reverse play reverse"
  }
});

section3Timeline.from(".section3 h2", {x: 200, opacity: 0, duration: 1.2});
section3Timeline.from(".section3 p span", {y: 30, opacity: 0, stagger: 0.25, duration: 1}, "<");


const section4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    start: "top center",
    toggleActions: "play reverse play reverse"
  }
});

section4Timeline.to("body", {backgroundColor: "#9b59b6", duration: 1});
document.querySelectorAll(".portfolio-item").forEach((item, i) => {
  section4Timeline.from(item, {x: 200, opacity: 0, duration: 1}, i * 0.4);
});


const contactHeading = document.querySelector(".section5 h2");
const headingText = contactHeading.textContent;
contactHeading.textContent = "";

headingText.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  contactHeading.appendChild(span);
});

gsap.from(".section5 h2 span", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top center",
    end: "bottom center+=150",
    scrub: true,
    pin: true
  },
  y: 50,
  opacity: 0,
  stagger: 0.09,
  duration: 0.6
});

gsap.from(".section5 p", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top center",
    end: "bottom center+=150",
    scrub: true
  },
  y: 30,
  opacity: 0,
  duration: 0.9
});

gsap.from(".section5 .contact-btn", {
  scrollTrigger: {
    trigger: ".section5",
    start: "top center",
    end: "bottom center+=150",
    scrub: true
  },
  y: 30,
  opacity: 0,
  duration: 0.9
});

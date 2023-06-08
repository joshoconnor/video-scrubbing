import { scroll, animate, ScrollOffset } from "motion";

const video = document.querySelector("video");

video.pause();

const items = document.querySelectorAll(".overlay-text > span");
console.log(items);

// Scrub through the video on scroll
scroll(
  ({ y }) => {
    if (!video.readyState) return;
    video.currentTime = video.duration * y.progress;
  },
  {
    target: document.querySelector("article"),
  }
);
items.forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["80% 80%", "20% 20%"],
  });
});

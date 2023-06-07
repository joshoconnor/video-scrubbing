import { scroll } from "motion";

const video = document.querySelector("video");
video.pause();

// Scrub through the video on scroll
scroll(
  ({ y }) => {
    if (!video.readyState) return;
    video.currentTime = video.duration * y.progress;
  },
  {
    target: document.querySelector("article"),
    offset: ["-200px", "end end"],
  }
);

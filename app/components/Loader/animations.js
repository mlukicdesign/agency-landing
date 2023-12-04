
import gsap from "gsap";


export const introAnimation = (wordsGroupRef) => {
  const tl = gsap.timeline();
  tl.to(wordsGroupRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });


    return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {


const tl = gsap.timeline()
tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  }).to(progressNumberRef.current, {
    x: '100vh',
    duration: 5,
    ease: "power3.inOut",
  },
  "<"
  ).to(progressNumberRef.current, {
    textContent: "100",
    duration: 5,
    roundProps: "textContent",
  }, "<").to(progressRef.current, {
    y: 24,
    autoAlpha: 0,
  });

  return tl;

};


export const collapseWords = (wordsGroupRef) => {
    const tl = gsap.timeline();
    tl.to(wordsGroupRef.current, {
      "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      duration: 3,
      ease: "expo.inOut",
    });
  
    return tl;
  };
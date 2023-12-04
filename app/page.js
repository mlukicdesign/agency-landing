"use client";


import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";


import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

const Home = () => {

  // loader is not finished by default
  const [loadingFinished, setLoadingFinished] = useState(false);

  // timeline for the loader component
  const [ timeline, setTimeline ] = useState(null);


// once components 

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
          onComplete: () => {
            setLoadingFinished(true);
          }
        })

        setTimeline(tl);

    })

    return () => context.revert();

  }, []);



  return (
    <main>
      {loadingFinished ? <Hero /> : <Loader timeline={timeline}/>}
    
      {/* <Loader timeline={timeline}/> */}
    </main>
  );
};

export default Home;

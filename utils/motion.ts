// Fade In Animation
export function fadeInContainer(delay: number) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: delay * 0.3 },
      },
    };
  }
  
  export const fadeInChild = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  // Fade In Up Animation
  export const fadeInUpContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  
  export const fadeInUpChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  // Pop In Animation
  export const popInContainer = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };
  
  export const popInChild = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: { type: "spring", damping: 15, stiffness: 400 },
    },
  };
  
  // Calm In Up Animation
  export function calmInUpContainer(delay: number) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * delay },
      },
    };
  }
  
  export const calmInUpChild = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.125, 0.92, 0.69, 0.975],
        duration: 0.75,
      },
    },
  };
  
  // Shift In Up Animation
  export function shiftInUpContainer(delay: number) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * delay },
      },
    };
  }
  
  export const shiftInUpChild = {
    hidden: {
      y: "100%",
      transition: { ease: [0.75, 0, 0.25, 1], duration: 0.6 },
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  
  // Whip In Up Animation
  export function whipInUpContainer(delay: number) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * delay },
      },
    };
  }
  
  export const whipInUpChild = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.5, -0.15, 0.25, 1.05],
        duration: 0.75,
      },
    },
  };
  
  // Roll In Animation
  export const rollInChild = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.65,
        ease: [0.65, 0, 0.75, 1],
      },
    },
  };
  
  // Whip In Animation
  export const whipInChild = {
    hidden: { opacity: 0, y: `0.35em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.45,
        ease: [0.85, 0.1, 0.9, 1.2],
      },
    },
  };
  




  // import {
  //   fadeInContainer,
  //   fadeInChild,
  //   fadeInUpContainer,
  //   fadeInUpChild,
  //   popInContainer,
  //   popInChild,
  //   calmInUpContainer,
  //   calmInUpChild,
  //   shiftInUpContainer,
  //   shiftInUpChild,
  //   whipInUpContainer,
  //   whipInUpChild,
  //   rollInChild,
  //   whipInChild,
  // } from "@/utils/motion";
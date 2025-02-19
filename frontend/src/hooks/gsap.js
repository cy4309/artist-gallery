import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGSAP = () => {
  const animateElements = () => {
    // console.log('useEffect triggered');
    // const leftElements = gsap.utils.toArray('.animate-left');
    // const rightElements = gsap.utils.toArray('.animate-right');
    // console.log('Left elements:', leftElements);
    // console.log('Right elements:', rightElements);
    // 新增動畫邏輯
    gsap.utils.toArray(".animate-left").forEach((element) => {
      gsap.fromTo(
        element,
        { x: "-10%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 90%", // 當滾動到視窗的 90% 高度時觸發動畫
            end: "bottom 40%", // 當滾動到視窗的 40% 高度時結束動畫
            scrub: 0.5, // 滾動時的速度，scrub: true 表示動畫會根據滾動的速度同步進行
          },
        },
      );
    });

    gsap.utils.toArray(".animate-right").forEach((element) => {
      gsap.fromTo(
        element,
        { x: "10%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 40%",
            scrub: 0.5,
          },
        },
      );
    });
  };

  useEffect(() => {
    // 1. 將動畫中的位置從固定的像素值改為百分比值。
    // 2. 新增 handleResize 函數來處理視窗大小變化事件，並在視窗大小變化時重新計算動畫參數。
    // 3. 在 useEffect 中新增事件監聽器來監聽視窗大小變化事件，並在組件卸載時移除事件監聽器。
    animateElements();
    const handleResize = () => {
      ScrollTrigger.refresh();
      animateElements();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useGSAP;

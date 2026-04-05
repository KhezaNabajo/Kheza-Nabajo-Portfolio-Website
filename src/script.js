import { useState, useEffect } from "react";
// useReveal for fadein animations, less repeatation
export function useReveal(id) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(function() {

      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

      observer.observe(el);

    }, 100);

    return function() {
      clearTimeout(timer);
    };

  }, [id]);

  
  return visible;
}

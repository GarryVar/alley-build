import { useEffect, useRef, useState } from "react";

export const AnimateOnScroll = ({
  children,
  className = "",
  animationClass,
  threshold = 0.1,
  rootMargin = "0px",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: isVisible ? "opacity 0.3s ease-out" : "none",
        willChange: "opacity", // подсказка браузеру для оптимизации
      }}
    >
      {children}
    </div>
  );
};

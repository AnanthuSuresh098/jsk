import "./Home.css";
import { useSpring, animated } from "react-spring";

export const Home=()=>{
    const [springProps, setSpring] = useSpring(() => ({
      transform: "translateX(80%)",
    }));

      const handleScroll = () => {
    const scrollY = window.scrollY;
    const transformValue = `translateX(-${scrollY}px)`;
    setSpring({ transform: transformValue });
  };

  window.addEventListener("scroll", handleScroll);

    return (
      <div id="homepage-main-wrapper">
        <div id="homepage-banner-section-wrap">
          <animated.div
            className="homepage-banner-section-image-wrap"
            style={springProps}
          >
            <img
              src="./images/Home-img/banner.png"
              alt="banner"
              id="homepage-banner-section-image"
            />
          </animated.div>
        </div>
      </div>
    );
}
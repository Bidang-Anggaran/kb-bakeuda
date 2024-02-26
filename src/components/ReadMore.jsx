import { useState, useEffect } from "react";

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {windowWidth > 1024 ? (
        <p className="text-sm">{text}</p>
      ) : (
        <p className="text-sm">
          {isReadMore ? text.slice(0, 150) : text}

          {text.length > 150 ? (
            <span
              onClick={toggleReadMore}
              className="text-sm font-bold cursor-pointer"
            >
              {isReadMore ? "...Lebih banyak" : " Lebih sedikit"}
            </span>
          ) : null}
        </p>
      )}
    </>
  );
};

export default ReadMore;

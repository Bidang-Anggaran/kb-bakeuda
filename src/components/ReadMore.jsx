import { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text-sm">
      {isReadMore ? text.slice(0, 150) : text}

      {text.length > 150 ? (
        <span onClick={toggleReadMore} className="text-sm font-bold cursor-pointer">
          {isReadMore ? "...Lebih banyak" : " Lebih sedikit"}
        </span>
      ) : null}
    </p>
  );
};

export default ReadMore;

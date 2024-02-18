import { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    console.log(text.length);
  };
  return (
    <p className="">
      {isReadMore ? text.slice(0, 150) : text}

      {text.length > 150 ? (
        <span onClick={toggleReadMore} className="font-bold">
          {isReadMore ? "...Lebih banyak" : " Lebih sedikit"}
        </span>
      ) : null}
    </p>
  );
};

export default ReadMore;

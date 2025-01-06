import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setIsLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      //   console.log(data);

      if (data && data.products && data.products.length) {
        setData(data.products);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  }

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolledHeight / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);
  return (
    <div className="flex flex-col items-center text-center ">
      <div className="fixed top-0 left-0 z-50 w-full h-2 bg-gray-300">
        <div
          className="h-full bg-gray-500"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      <div>
        {data && data.length > 0
          ? data.map((dataItem) => <p className="text-xl">{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

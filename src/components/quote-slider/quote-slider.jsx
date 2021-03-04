import React from 'react'
import { useState, useEffect } from "react";
import Slider from 'react-animated-slider'

import 'react-animated-slider/build/horizontal.css';

import './quote-slider.css'
const QuoteSlider = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url = "https://api.aleph.dev/graphql";
    const post = `
    {
      post(postName:"doubt-is-one-of-the-names-of-intelligence"){
          postContentFiltered
      }
  }`;

    const opts = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: post }),
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then(({ data }) => {
        const { postContentFiltered } = data.post;
        setData(postContentFiltered);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Slider className="slider">
      {data.map((quote, index) => <div key={index} className="quote">
        {quote.innerHTML}
      </div>)}
    </Slider>
  )
}

export default QuoteSlider

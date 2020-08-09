import React from "react";
import Banner from "./Banner";
import { useDispatch } from "react-redux";
import { homePage } from "../actions/allActions";
const mainFeaturedPost = {
  title: "Welcome to our website !",
  description: "Check our new offers.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export const Home = () => {
  const dispatch = useDispatch();
  dispatch(homePage());

  return (
    <div>
      <Banner bannerProp={mainFeaturedPost} />
    </div>
  );
};

import React from "react";
import Alert from "@material-ui/lab/Alert";
import Banner from "./Banner";
const mainFeaturedPost = {
  title: "Welcome to our website !",
  description: "Check our new offers.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};
export const Home = () => {
  return (
    <div>
      <Banner bannerProp={mainFeaturedPost} />
    </div>
  );
};

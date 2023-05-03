import React from "react";
import SimpleBanner from "../../shared/SimpleBanner";
import banner from "../../assets/about_us_banner.jpg";

const About = () => {
  return (
    <div className="bg-[#002C41]">
      <div className="min-w-[1632px] bg-[#002C41] h-full">
        <SimpleBanner>About Us</SimpleBanner>
      </div>
      <div className="py-12 w-[800px] mx-auto flex gap-14 relative">
        <img className="h-[645px]" src={banner} alt="" />
        <div className="w-56 top-24 h-0.5 left-72 bg-white absolute"></div>
        <div className="text-white">
          <h4 className="text-2xl font-semibold">Our Goal</h4>
          <p className="w-96 pt-12 leading-6 tracking-wide">
            We are a team of passionate food enthusiasts who love to experiment with new flavors,
            techniques, and ingredients to create delicious and healthy recipes. Our mission is to
            inspire and educate home cooks by sharing our favorite recipes, cooking tips, and
            food-related stories. <br />
            <br /> We believe that food is not just fuel for our bodies, but also a way to connect
            with others and explore different cultures. That's why our recipes are inspired by a
            variety of cuisines from around the world.
            <br /> <br /> Our recipes are easy to follow and use simple, wholesome ingredients that
            are easy to find at your local grocery store. We also provide step-by-step instructions
            and helpful tips to ensure that your dishes turn out perfectly every time. At Food Lab,
            we are committed to creating a community of food lovers who share our passion for
            cooking and eating. So, join us on this culinary journey and let's explore the world of
            food together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

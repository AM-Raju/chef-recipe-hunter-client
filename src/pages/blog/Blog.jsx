import React from "react";
import SimpleBanner from "../../shared/SimpleBanner";
import Footer from "../../shared/Footer";

const Blog = () => {
  return (
    <div className="bg-[#002C41]">
      <div className="w-[1615px] bg-[#002C41] h-full">
        <SimpleBanner>Blog</SimpleBanner>
      </div>
      <div className="my-container mt-32 relative -top-10">
        <div className="w-[800px] bg-gray-400 mx-auto p-8 border rounded-md my-10 hover:border-purple-400 relative right-36">
          <h3 className="text-2xl font-semibold">
            Question: Tell us the differences between uncontrolled and controlled components.
          </h3>
          <p className="mt-5">
            In React controlled component means it is controlled by React itself. And uncontrolled
            component is controlled by the DOM. Controlled component is much easier to handle. It
            gives us predictable data. Whereas, on uncontrolled data you can't predict the data of
            an input form.
          </p>
        </div>
        <div className="w-[800px] bg-gray-400  mx-auto p-8 border rounded-md my-10 hover:border-purple-400 relative left-36">
          <h3 className="text-2xl font-semibold">
            Question: How to validate React props using PropTypes?
          </h3>
          <p className="mt-5">
            You can validate React props by installing propTypes package. It will help you to
            determine the types of props. It protects component to receive any wrong data through
            props. It will block the wrong props and give you an warning.
          </p>
        </div>
        <div className="w-[800px] bg-gray-400  mx-auto p-8 border rounded-md my-10 hover:border-purple-400 relative right-36">
          <h3 className="text-2xl font-semibold">
            Question: Tell us the difference between nodejs and express js.
          </h3>
          <p className="mt-5">
            Node.js is a cross-platform open-source server environment. It is used to provide
            back-end service. It helps to run JavaScript code outside the browser. On the other hand
            express.js is a framework of node.js. It helps to perform the backend task most easiest
            and efficient way.
          </p>
        </div>
        <div className="w-[800px] bg-gray-400  mx-auto p-8 border rounded-md my-10 hover:border-purple-400 relative left-36">
          <h3 className="text-2xl font-semibold">
            Question: What is a custom hook, and why will you create a custom hook??
          </h3>
          <p className="mt-5">
            Custom hook is a kind of reusable function used for unique functionality. It is created
            to do repeated complex task with an ease. It can be reused as per requirement. It also
            helps to make the code clean and reuseable.
          </p>
        </div>
      </div>
      <div className=" pt-16 pb-16 bg-gradient-to-b from-[#011D29] opacity-95">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;

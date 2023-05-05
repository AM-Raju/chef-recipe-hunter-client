import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const TestBlog = () => {
  const componentRef = useRef();
  return (
    <div className="print">
      <div className="sss">
        <div ref={componentRef} className="a">
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
        </div>
      </div>
      <ReactToPrint
        trigger={() => <button>Print this</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default TestBlog;

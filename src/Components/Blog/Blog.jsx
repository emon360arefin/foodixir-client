import React from 'react';

const Blog = () => {
    return (
        <div className='bg-[#FFFAFA]'>
            <div className='max-w-7xl mx-auto px-2 py-16 '>
                {/* Question 1 */}
                <div className="item-box bg-slate-100 p-0 rounded-lg mt-2">
                    <h1 className="text-2xl  font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">1. Tell us the differences between uncontrolled and controlled components.
                    </h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600">In React, a controlled component is a component where its state is controlled by React and all changes to the state are propagated through props. On the other hand, an uncontrolled component is a component where the state is maintained by the component itself and changes to the state are not controlled by React.

                            To summarize, a controlled component has its state controlled by React while an uncontrolled component has its state controlled by the component itself.

                        </p>

                    </div>
                </div>

                {/* Question 2 */}
                <div className="item-box bg-slate-100 p-0 rounded-lg mt-4">
                    <h1 className="text-2xl font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">2. How to validate React props using PropTypes?</h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600">PropTypes in React allows you to validate the expected types and requirements of props in your components. By defining prop types using PropTypes, you can ensure that the correct data is passed to your components, helping to catch errors and provide better debugging capabilities.
                        </p>


                    </div>
                </div>

                {/* Question 3 */}
                <div className="item-box  bg-slate-100 p-0 rounded-lg mt-4">
                    <h1 className="text-2xl font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">3. Tell us the difference between nodejs and express js.?</h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600"> Node.js is a runtime environment that allows server-side JavaScript execution, while Express.js is a web application framework built on top of Node.js. Node.js provides the platform, and Express.js simplifies building web applications and APIs using Node.js.
                        </p>

                    </div>
                </div>

                {/* Question 4 */}
                <div className="item-box bg-slate-100 p-0 rounded-lg mt-4">
                    <h1 className="text-2xl font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">4. What is a custom hook, and why will you create a custom hook?</h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600">A custom hook in React is a reusable JavaScript function that allows you to extract and share stateful logic across components. It promotes code reusability and maintainability by encapsulating complex functionality.

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import HomeBlog from '../Home/Blog/HomeBlog';
import Heading from '../Shared/Heading/Heading';
import BlogCard from '../Home/Blog/BlogCard';
import Loader from '../Shared/Loader';

const Blog = () => {
    const [blogs, setBlogs] = useState(null)
    const [tags, setTags] = useState([])
    const [newtag, setNewtag] = useState([])
    const [selectedTag, setSelectedTag] = useState('All')

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/api/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    const allTags = blogs && tags.concat(...blogs.map(blog => blog.category));

    allTags && allTags.map(tag => {
        if (!newtag.includes(tag)) {
            newtag.push(tag)
        }
    })


    let filteredBlog = blogs && blogs.filter(blog => blog.category.includes(selectedTag))

    if (selectedTag === "All") {
        filteredBlog = blogs;
        console.log("selectedTag1", selectedTag);
    }


    // console.log("selectedTag", selectedTag);


    return (
        <div className='bg-[#FFFAFA] py-16 md:py-20'>
            {
                blogs ?
                    <div className='max-w-7xl mx-auto px-2'>
                        <Heading
                            heading="Discover the Culinary Chronicles"
                            subheading="Embark on an Epic Gastronomic Journey: A Collection of Captivating Blogs on Food, Flavors, and Culinary Adventures"
                        ></Heading>


                        {/* Card Container */}


                        <div className='grid grid-cols-1 md:grid-cols-4  md:gap-8'>

                            <div className='col-span-1 w-full h-min   bg-slate-100 p-4 rounded-md flex md:flex-col flex-wrap sticky top-16 md:top-24 z-10'>
                                <h2 className='mb-4 text-lg w-full font-semibold'>Filter By Category</h2>
                                <h2
                                    onClick={() => setSelectedTag("All")}
                                    className={`inline px-4 py-1 md:py-0 md:w-full h-10 md:flex items-center md:pl-8 rounded mr-2 md:mt-0 mt-2 cursor-pointer hover:shadow-md  transition-all duration-200 ease-in-out select-none ${selectedTag === "All" ? 'bg-[#EA1D35] text-white shadow-md' : 'bg-white hover:bg-red-100'} `}
                                >All</h2>
                                {
                                    newtag && newtag.map(tag => <h2
                                        onClick={() => setSelectedTag(tag)}
                                        className={`md:w-full h-10 inline px-4 py-1 md:flex items-center md:pl-8 rounded mr-2 mt-2 cursor-pointer hover:shadow-md  transition-all duration-200 ease-in-out select-none  ${tag === selectedTag ? 'bg-[#EA1D35] text-white shadow-md' : 'bg-white hover:bg-red-100'} `}
                                    >{tag}</h2>)
                                }

                            </div>


                            <div className='col-span-3 w-full md:pr-4 mt-6 md:mt-0'>

                                <p className=' mb-2'>Total Results: {filteredBlog?.length}</p>
                                {
                                    filteredBlog && filteredBlog.map(blog => <BlogCard key={blog.id} blog={blog} setBlogs={setBlogs}></BlogCard>)
                                }
                            </div>
                        </div>


                    </div> : <Loader></Loader>
            }
        </div>
    );
};

export default Blog;
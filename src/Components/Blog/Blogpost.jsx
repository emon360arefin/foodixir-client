import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

const Blogpost = () => {

    const { id } = useParams()
    const [singleblog, setSingleblog] = useState(null)

    const { title, author, author_img, published_date, category, tags, content, image_url, comments } = { singleblog }

    const paragraphs = singleblog?.content.split('\n\n');

    // Render each paragraph within <p> tags
    const renderedParagraphs = paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));


    useEffect(() => {
        fetch(`https://assignment-10-chef-server.vercel.app/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => setSingleblog(data))
    }, [])

    console.log("Singleblog", singleblog);
    return (
        <div className='bg-white py-16 md:py-20'>
            <div className='max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8'>

                {/* Blog Content */}
                <div className='flex flex-col gap-4 md:col-span-5 '>
                    <h2 className='text-4xl font-semibold'>{singleblog?.title}</h2>

                    <img className='rounded-md' src={singleblog?.image_url} alt="" />

                    <div className='flex gap-4'>
                        <img className='rounded-full w-[56px] h-[56px] border-2' src={singleblog?.author_img} alt="" />
                        <div>
                            <h2 className='text-xl font-semibold'>{singleblog?.author}</h2>

                            {
                                moment(singleblog?.published_date).format("MMM Do YY")
                            }
                        </div>
                    </div>

                    <p className='text-lg'>
                        {renderedParagraphs}
                    </p>
                </div>

                {/* Content */}
                <div className='md:col-span-2'>
                    <h2 className='text-xl font-semibold mb-4'>Comments</h2>

                    {
                        singleblog?.comments.map(comment =>
                            <div className='flex gap-2 mb-4'>

                                <img className='w-8 h-8 rounded-full border' src={comment?.user_img} alt="" />
                                <div className='bg-slate-100 rounded-md py-2 px-4'>
                                    <h2 className='text-lg font-semibold'>{comment.user}</h2>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogpost;
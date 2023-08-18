import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';

const BlogCard = (props) => {

    const { _id, title, author, author_img, published_date, category, tags, content, image_url, comments } = props.blog

    const paragraphs = content.split('\n\n');
    const renderedParagraphs = paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));


    const words = content.split(' ');
    const truncatedWords = words.slice(0, 50);
    const truncatedText = truncatedWords.join(' ');

    return (
        <div className='rounded-xl bg-slate-100 overflow-hidden  mb-4 p-2'>
            <div className='bg-white p-4 rounded-md'>
                <div className=''>
                    <div>
                        <div className='flex gap-4'>
                            <img className='rounded-full w-16 h-16 border-2' src={author_img} alt="" />
                            <div>
                                <h2 className='text-xl font-semibold'>{author}</h2>

                                {
                                    moment(published_date).format("MMM Do YY")
                                }
                            </div>
                        </div>

                        <div className='flex flex-wrap'>
                            {tags && tags.map((tag, index) => <p className='inline bg-red-100 mr-4 mt-2 py-[2px] px-4' key={index}>{tag}</p>)}
                        </div>


                    </div>



                </div>

                <div className='pt-4 flex flex-col gap-2'>
                    <h2 className='text-3xl font-semibold'>{title}</h2>

                    <p>{truncatedText} ...
                        <span className='pl-1 text-red-600 text-lg'>
                            <Link to={`/blogpost/${_id}`}>
                                Read More
                            </Link>
                        </span>
                    </p>

                    <h2 className='text-xl font-semibold'>Comments</h2>

                    {
                        comments && comments.map(comment =>
                            <div className='flex gap-2'>

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

export default BlogCard;
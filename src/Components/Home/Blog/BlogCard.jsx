import moment from 'moment/moment';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';

const BlogCard = (props) => {

    const { user } = useContext(AuthContext)

    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

    const { _id, title, author, author_img, published_date, category, tags, content, image_url, comments } = props.blog

    const setBlogs = props.setBlogs;

    const paragraphs = content.split('\n\n');
    const renderedParagraphs = paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));


    const words = content.split(' ');
    const truncatedWords = words.slice(0, 20);
    const truncatedText = truncatedWords.join(' ');


    const handleComment = (e, displayName, photoURL, _id) => {

        e.preventDefault();
        console.log("Comment hit");

        if (!displayName) {
            toast.error("Please Login First ")
            return
        }

        const user = displayName;
        const user_img = photoURL;
        const text = e.target.comment.value;

        const newComment = {
            user, user_img, text
        }

        console.log(newComment, _id);


        fetch(`https://assignment-10-chef-server.vercel.app/api/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response Data", data)
                fetch(`https://assignment-10-chef-server.vercel.app/api/blogs`)
                    .then(res => res.json())
                    .then(data => setBlogs(data))
                e.target.reset()
            })

    }

    return (
        <div className='rounded-xl bg-[#EB1C3E] overflow-hidden  mb-4 p-[2px]'>
            <div className='bg-white p-4 rounded-[10px] grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8'>
                <div className='flex flex-col gap-4 md:col-span-4 '>
                    <h2 className='text-4xl font-semibold'>{title}</h2>
                    <div className='flex gap-4'>
                        <img className='rounded-full w-[56px] h-[56px] border-2' src={author_img} alt="" />
                        <div>
                            <h2 className='text-xl font-semibold'>{author}</h2>

                            {
                                moment(published_date).format("MMM Do YY")
                            }
                        </div>
                    </div>

                    <img className='rounded-md' src={image_url} alt="" />



                    <p className='text-lg'>
                        {truncatedText} ...
                        <span className='pl-1 font-semibold text-red-600 text-lg'>
                            <Link to={`/blogpost/${_id}`}>
                                Read More
                            </Link>
                        </span>
                    </p>
                </div>

                {/* Comment*/}

                <div className='md:col-span-3 w-full '>
                    <div className='sticky top-24'>
                        <h2 className='text-xl font-semibold mb-4'>Comments</h2>


                        <div className='h-[35vh] overflow-auto pr-2'>
                            {
                                comments.map(comment =>
                                    <div className='flex gap-2 mb-4 '>

                                        <img className='w-8 h-8 rounded-full border' src={comment?.user_img} alt="" />
                                        <div className='bg-slate-100 rounded-md py-2 px-4'>
                                            <h2 className='text-lg font-semibold'>{comment.user}</h2>
                                            <p>{comment.text}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>


                        <div className='w-full pt-4'>

                            <div className='flex gap-2 mb-4'>

                                <div className='w-8 h-8'>
                                    {
                                        !user ? <BiSolidUserCircle className='text-4xl'></BiSolidUserCircle> :

                                            <img className=' rounded-full border' src={user?.photoURL} alt="" />
                                    }



                                </div>

                                <form
                                    onSubmit={(e) => handleComment(e, displayName, photoURL, _id)}
                                    className='w-full' action="">
                                    <input
                                        name='comment'
                                        required
                                        placeholder='Write your comment'
                                        className='w-full h-16 border border-slate-300  rounded-md px-4' type="text" />
                                    <div className='flex justify-end pt-2'>

                                        <button type='submit' className='flex items-center justify-center h-8  bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded w-24'>Comment</button>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
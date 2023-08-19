import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import Button from '../Shared/Button/Button';
import { AuthContext } from '../Authentication/AuthProvider';
import { BiSolidUserCircle } from 'react-icons/bi';
import Loader from '../Shared/Loader';
import { toast } from 'react-hot-toast';

const Blogpost = () => {

    const { user } = useContext(AuthContext)

    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

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


    const handleCommentSubmit = (e, displayName, photoURL, id) => {

        e.preventDefault();

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

        console.log("new Comment", newComment);

        fetch(`https://assignment-10-chef-server.vercel.app/api/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response Data", data)
                fetch(`https://assignment-10-chef-server.vercel.app/api/blogs/${id}`)
                    .then(res => res.json())
                    .then(data => setSingleblog(data))
                e.target.reset()
            })

    }





    return (
        <div className='bg-white py-16 md:py-20'>
            {
                singleblog ?
                    <div className='max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8'>

                        {/* Blog Content */}
                        <div className='flex flex-col gap-4 md:col-span-5 '>
                            <h2 className='text-4xl font-semibold'>{singleblog?.title}</h2>
                            <div className='flex gap-4'>
                                <img className='rounded-full w-[56px] h-[56px] border-2' src={singleblog?.author_img} alt="" />
                                <div>
                                    <h2 className='text-xl font-semibold'>{singleblog?.author}</h2>

                                    {
                                        moment(singleblog?.published_date).format("MMM Do YY")
                                    }
                                </div>
                            </div>

                            <img className='rounded-md' src={singleblog?.image_url} alt="" />



                            <p className='text-lg'>
                                {renderedParagraphs}
                            </p>
                        </div>

                        {/* Comment*/}

                        <div className='md:col-span-2 w-full'>
                            <div className='sticky top-24'>
                                <h2 className='text-xl font-semibold mb-4'>Comments</h2>

                                <div className='h-[90vh] overflow-auto pr-2'>
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

                                <div className='w-full pt-4'>

                                    <div className='flex gap-2 mb-4'>

                                        <div className='w-8 h-8'>
                                            {
                                                !user ? <BiSolidUserCircle className='text-4xl'></BiSolidUserCircle> :

                                                    <img className=' rounded-full border' src={user?.photoURL} alt="" />
                                            }



                                        </div>

                                        <form onSubmit={(e) => handleCommentSubmit(e, displayName, photoURL, id)} className='w-full' action="">
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

                    </div> :
                    <Loader></Loader>


            }
        </div>


    );
};

export default Blogpost;
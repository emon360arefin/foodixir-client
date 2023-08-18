import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blogpost = () => {

    const { id } = useParams()
    const [singleblog, setSingleblog] = useState(null)

    useEffect(() => {
        fetch(`https://assignment-10-chef-server.vercel.app/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => setSingleblog(data))
    }, [])

    console.log("Singleblog", singleblog);
    return (
        <div className='p-4'>
            <h2>{singleblog?.title}</h2>
        </div>
    );
};

export default Blogpost;
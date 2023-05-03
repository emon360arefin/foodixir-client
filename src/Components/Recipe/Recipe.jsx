import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePage from './RecipePage';

const Recipe = () => {
    const { id } = useParams();

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    const chef = chefs.find(chef => chef.id === parseInt(id)  )

    return (
        <div>
            {
                chef && <RecipePage key={chef.id} chef={chef}></RecipePage>
            }
        </div>
    );
};

export default Recipe;
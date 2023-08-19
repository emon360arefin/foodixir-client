import React from 'react';
import Chefpage from './Chefpage';
import HomeCook from './HomeCook';
import Loader from '../Shared/Loader';

const OurChefs = () => {
    return (
        <div>
            {
                Chefpage ?
                    <div>
                        < Chefpage ></Chefpage >
                        <HomeCook></HomeCook>
                    </div > : <Loader></Loader>
            }
        </div>
    );
};

export default OurChefs;
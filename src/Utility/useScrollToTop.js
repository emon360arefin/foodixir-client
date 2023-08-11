// useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop(excludePaths = []) {
    const location = useLocation();

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };

        if (!excludePaths.includes(location.pathname)) {
            scrollToTop();
        }
    }, [location, excludePaths]);
}

export default useScrollToTop;

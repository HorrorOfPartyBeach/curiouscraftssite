import React from 'react';
//import NotFound from '../assets/images/NotFound.jpg';

const NotFound = (props) => {
    console.log(props)
    return (
        <div className="main">
        <h1>Page Not Found</h1>
        <img src={require('../assets/images/NotFound.jpg')} alt="404: Page Not Found"/>
        <p>Image by <a href="https://pixabay.com/users/aitoff-388338/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2129569">Andrew Martin</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2129569">Pixabay</a></p>
        </div>
    )
}

export default NotFound;
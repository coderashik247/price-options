import React from 'react';

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <li className='mr-6 px-6 hover:bg-yellow-500'>
            <a href={route.path}>{route.name}</a>
        </li>
        // <li key={route.id} className='mr-6'><a href={route.path}>{route.name}</a></li> >
    );
};

export default Link;
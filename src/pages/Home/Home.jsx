import React from 'react';
import Banner from './Banner';
import Posts from './posts/Posts';

export default function Home() {
    console.log('test');

    return (
        <div>
            <Banner />
            <div className="container-sm">
                <Posts />
            </div>
        </div>
    );
}

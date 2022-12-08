import React from 'react';
import banner from '../../assets/images/banner.png';

const Banner = () => (
    <div>
        <div className="card text-bg-dark ">
            <img src={banner} className="card-img " alt="..." />
            <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </div>
    </div>
);

export default Banner;

import React from 'react';
import { Outlet } from 'react-router-dom';
import PostNav from './PostNav';

const Posts = () => (
    <div className="container-sm">
        <div>
            <PostNav />
        </div>
        <div>
            <div className="row">
                <div className="col-9">
                    <Outlet />
                </div>
                <div className="col-3">Variable width contents</div>
            </div>
        </div>
    </div>
);

export default Posts;

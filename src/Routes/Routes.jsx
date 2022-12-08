import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home/Home';

import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';

import AllPosts from '../pages/Home/posts/AllPosts';
import PostCategory from '../pages/Home/posts/PostCategory';
import Root from './Root';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route path="/" element={<Home />}>
                <Route path="/" element={<AllPosts />} />
                <Route
                    path="/category/:id"
                    element={<PostCategory />}
                    // loader={async ({ params }) =>
                    //     fetch(`https://self-mentor-server.vercel.app/category/${params.id}`)
                    // }
                />
            </Route>

            {/* <Route
                path="/category/:id"
                element={
                    <ProtectedRoute>
                        <Hello />
                    </ProtectedRoute>
                }
            /> */}

            <Route path="/Signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
        </Route>
    )
);

export default router;

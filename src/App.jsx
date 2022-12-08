import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

const App = () => {
    console.log('app');
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });
    // card animator
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <QueryClientProvider client={client}>
                <Suspense fallback={<div>Loading</div>}>
                    <RouterProvider router={router} />

                    <Toaster />
                </Suspense>
            </QueryClientProvider>
        </div>
    );
};
export default App;

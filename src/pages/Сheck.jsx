import React from 'react';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';

const Check = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />

            <main className="grow">
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
            </main>
        </div>
    )
}

export default Check;

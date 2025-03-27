import React from 'react';
import { Link } from '@inertiajs/react';

export default function NewsListDashboard({ news, onDelete }) {
    if (!news || news.length === 0) {
        return <p>Belum Menerbitkan Berita!</p>;
    }

    return (
        <div>
            {news.map((item) => (
                <NewsItem 
                    key={item.id} 
                    news={item} 
                    onDelete={() => onDelete(item)} 
                />
            ))}
        </div>
    );
}

function NewsItem({ news, onDelete }) {
    return (
        <div className="mb-9 items-center justify-center md:flex text-left p-3 w-11/12 font-sans text-black">
            <div className="md:w-3/4">
                <div className="md:w-3/4 items-center justify-center">
                    <div className="mr-3">
                        <h1 className="font-serif font-extrabold text-2xl md:text-4xl">
                            {news.title}
                        </h1>
                        <p className="h-12 md:h-28 md:overflow-auto md:mt-5 overflow-auto">
                            {news.description}
                        </p>
                        <span className="flex justify-between font-semibold mt-4">
                            <p className="md:mt-6 mt-2 mb-4 md:mb-0">
                                Category: {news.category}
                            </p>
                            <div className="flex">
                                <Link 
                                    href={route("Edit")} 
                                    method="get" 
                                    data={{id: news.id}}
                                >
                                    <p className="mx-3 hover:underline hover:cursor-pointer md:mt-6 mt-2 mb-4 md:mb-0">
                                        Edit
                                    </p>
                                </Link>
                                <button onClick={onDelete}>
                                    <p className="hover:text-red-600 hover:underline hover:cursor-pointer md:mt-6 mt-2 mb-4 md:mb-0">
                                        Delete
                                    </p>
                                </button>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:w-2/6">
                <img 
                    src={news.image ? `/storage/${news.image}` : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}  
                    alt={news.title} 
                    className="w-80 items-stretch"
                />
            </div>
        </div>
    );
}
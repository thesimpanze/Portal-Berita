import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NewsForm from "@/Components/NewsForm";
import NewsListDashboard from "@/Components/NewsListDashboard";
import DeleteModal from "@/Components/DeleteModal";

export default function Dashboard({ auth, flash, myNews }) {
    const [selectedNews, setSelectedNews] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        if (!myNews) {
            Inertia.get("/news");
        }
    }, []);

    const handleNewsSubmit = (newsData) => {
        const formData = new FormData();
        Object.entries(newsData).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });

        Inertia.post("/news", formData);
    };

    const handleDeleteNews = (newsId) => {
        Inertia.post(route("DeleteNews"), { id: newsId });
        setIsDeleteModalOpen(false);
    };

    const openDeleteModal = (news) => {
        setSelectedNews(news);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setSelectedNews(null);
        setIsDeleteModalOpen(false);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <NewsForm onSubmit={handleNewsSubmit} />

                    <div className="flex mt-8">
                        <div className="m-auto w-full">
                            <NewsListDashboard 
                                news={myNews} 
                                onDelete={openDeleteModal} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isDeleteModalOpen && (
                <DeleteModal 
                    news={selectedNews}
                    onConfirm={() => handleDeleteNews(selectedNews.id)}
                    onCancel={closeDeleteModal}
                />
            )}
        </AuthenticatedLayout>
    );
}
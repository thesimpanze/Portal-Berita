import React, { useState } from 'react';

export default function NewsForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        onSubmit({ title, description, category, image });
    };

    return (
        <div className="bg-white overflow-hidden text-black text-base shadow-sm sm:rounded-sm border-2 border-black">
            <h1 className="ml-4 mt-3 text-2xl font-bold">
                Tulis Berita Kamu
            </h1>
            <div className="font-semibold">
                <div className="w-full p-3">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="input input-bordered bg-white mr-2 w-full border-black border focus:border-black focus:outline-none focus:border-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="p-3">
                    <textarea 
                        placeholder="Deskripsi" 
                        rows={4} 
                        className="textarea text-base border focus:border-black focus:outline-none focus:border-2 border-black mr-2 w-full max-w-full bg-white"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="w-1/4 input input-bordered bg-white ml-3 border border-black focus:border-black focus:outline-none focus:border-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input 
                        type="file" 
                        className="ml-3" 
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                </div>
                <div className="flex justify-end mt-2">
                    <button
                        className="text-lg rounded-lg px-2 mb-3 mr-3 border-2 border-black hover:text-white hover:bg-black"
                        onClick={handleSubmit}
                    >
                        KIRIM
                    </button>
                </div>
            </div>
        </div>
    );
}
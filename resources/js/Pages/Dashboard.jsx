import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";

export default function Dashboard({ auth, flash, myNews }) {
    const [title, setTitle] = useState("");
    const [description, setDescrption] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [isNotif, setIsNotif] = useState(false);
    const [open, setOpen] = useState(false);
    console.log("flash", flash);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        if (image) {
            formData.append('image', image);
        }
        Inertia.post("/news", formData);
        setIsNotif(true);
        console.log("flash", flash);
    };
    const closeModal = () =>{
        setOpen(false);
    }

    useEffect(() => {
        if (!myNews) {
            Inertia.get("/news");
        }

        return;
    }, []);
    console.log("data wdwa:", myNews);
    return (
        <div className="">
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />
                {/* START FLASH BERITA INPUT */}
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        {isNotif && (
                            <div className="flex justify-center">
                                <div
                                    role="alert"
                                    className="mt-10 font-bold text-lg absolute border-black border-2 alert alert-success w-11/12"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Berita berhasil di publish</span>
                                </div>
                            </div>
                        )}
                        {/* END FLASH BERITA INPUT */}

                        {/* START INPUT BERITA */}
                        <div className="bg-white overflow-hidden text-black text-base shadow-sm sm:rounded-sm border-2 border-black">
                            <h1 className="ml-4 mt-3 text-2xl font-bold">
                                Tulis Berita Kamu
                            </h1>
                            <div className=" font-semibold">
                                <div className=" w-full p-3">
                                    <input
                                        type="text"
                                        placeholder="Judul"
                                        className="input input-bordered bg-white mr-2 w-full border-black border focus:border-black focus:outline-none focus:border-2"
                                        onChange={(title) =>
                                            setTitle(title.target.value)
                                        }
                                    />
                                </div>
                                <div className=" p-3">
                                    <textarea placeholder="Deskripsi"rows={4} cols={20} className="textarea text-base border focus:border-black focus:outline-none focus:border-2 border-black mr-2 w-full max-w-full bg-white"onChange={(description) =>setDescrption(description.target.value)}></textarea>
                                </div>
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Kategori"
                                        className=" w-1/4 input input-bordered bg-white ml-3 border border-black focus:border-black focus:outline-none focus:border-2"
                                        onChange={(category) =>
                                            setCategory(category.target.value)
                                        }
                                    />
                                    <input type="file" className="ml-3" encType="multipart/form-data"  onChange={(event) => setImage(event.target.files[0])} />
                                </div>
                                <div className="flex justify-end mt-2">
                                    <button
                                        className=" text-lg rounded-lg px-2 mb-3 mr-3 border-2 border-black hover:text-white hover:bg-black"
                                        onClick={() => handleSubmit()}
                                    >
                                        KIRIM
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END INPUT BERITA */}

                    {/* MENAMPILKAN MYNEWS */}
                    <div className="flex mt-8">
                        <div className=" m-auto">
                            {myNews && myNews.length > 0 ? (
                                myNews.map((news, i) => {
                                    return (
                                        <div key={i} className=" flex md:full justify-center items-center text-black full  ">
                                            {/* Open Modal */}
                                            {open && (
                                                <div className="fixed bg-black/35 top-0 flex justify-center w-full h-screen items-center z-40" onClick={() =>setOpen(false)}>
                                                    <div className="bg-white border-2 border-black rounded-sm w-2/4 h-3/5 text-center text-black justify-center items-center flex" onClick={(e) =>e.stopPropagation()}>
                                                        <div className=" gap-11 flex flex-col">
                                                            <div className="">
                                                                <h1 className=" font-extrabold text-3xl">Apakah anda yakin ingin menghapus?</h1>
                                                            </div>
                                                            <div className="">
                                                                
                                                            <div className="flex justify-center">
                                                                    <span className="bg-red-600 py-2 w-72 font-bold  rounded-full cursor-pointer" >
                                                                <Link href={route("DeleteNews")}method="post"data={{id: news.id,}} onClick={() => closeModal()}>
                                                                        <button className=" text-white">Yeah, Sure</button>
                                                                </Link>
                                                                    </span>
                                                            </div>
                                                            <div className="flex justify-center mt-3">
                                                                <span className="border-red-500 py-2 w-72 border-2 font-bold bg-white  rounded-full cursor-pointer" onClick={() =>setOpen(false)}>
                                                                    <button className="">Nope, I don't</button>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* Close Modal */}
                                            <div className=" mb-9  items-center justify-center    md:flex text-left p-3 w-11/12 ">
                                                <div className="md:w-3/4">
                                                    <div className=" md:w-3/4 items-center justify-center">
                                                        <div className=" mr-3">
                                                            <h1 className=" font-serif font-extrabold text-2xl md:text-4xl">
                                                                {news.title}
                                                            </h1>
                                                            <p className=" h-12 md:h-28 md:overflow-auto md:mt-5 overflow-auto">
                                                                {
                                                                    news.description
                                                                }
                                                            </p>
                                                            <span className="flex justify-between font-semibold mt-4">
                                                                <p className=" md:mt-6 mt-2 mb-4 md:mb-0">
                                                                    Category:{" "}
                                                                    {
                                                                        news.category
                                                                    }
                                                                </p>
                                                                <div className="flex ">
                                                                    <Link href={route("Edit")} method="get" data={{id: news.id,}}>
                                                                        <p className=" mx-3 hover:underline hover:cursor-pointer md:mt-6 mt-2 mb-4 md:mb-0">
                                                                            Edit
                                                                        </p>
                                                                    </Link>
                                                                    <button onClick={() =>setOpen(true)}className="">
                                                                            <p className=" hover:text-red-600 hover:underline hover:cursor-pointer md:mt-6 mt-2 mb-4 md:mb-0">
                                                                                Delete
                                                                            </p>
                                                                        
                                                                    </button>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:w-2/6  ">
                                                    <img src={news.image ? `/storage/${news.image}` : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}  alt="" className=" w-80 items-stretch"
                                                    />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    );
                                })
                            ) : (
                                <p>Belum Menerbitkan Berita!</p>
                            )}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}

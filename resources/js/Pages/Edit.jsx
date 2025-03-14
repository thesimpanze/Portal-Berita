import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";




export default function Edit(props) {
    console.log("data dari Edit News", props);
    const [title, setTitle] = useState("");
    const [description, setDescrption] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = { id: props.myNews.id, title, description, category };
        Inertia.post("/news/update", data);
    };
    return (
        <>
            <div className=" bg-white  min-h-screen flex justify-center items-center  ">
            <div className="bg-white w-10/12 h-2/3 overflow-hidden text-black text-base shadow-sm sm:rounded-sm border-2 border-black">
                        <h1 className="ml-4 mt-3 text-2xl font-bold">
                            Update Berita Kamu
                        </h1>
                        <div className=" font-semibold">
                        <div className=" w-full p-3">
                            <input
                                type="text"
                                defaultValue={props.myNews.title}
                                className="input input-bordered bg-white mr-2 w-full border-black border focus:border-black focus:outline-none focus:border-2"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                            />
                        </div>
                        <div className=" p-3">
                            <textarea
                                placeholder="Deskripsi"
                                rows={4}
                                cols={20}
                                defaultValue={props.myNews.description}
                                className="textarea text-base border focus:border-black focus:outline-none focus:border-2 border-black mr-2 w-full max-w-full bg-white"
                                onChange={(description) =>
                                    setDescrption(description.target.value)
                                }
                            ></textarea>
                        </div>
                        <div className="">
                            <input
                                type="text"
                                placeholder="Kategori"
                                defaultValue={props.myNews.category}
                                className=" w-1/4 input input-bordered bg-white ml-3 border border-black focus:border-black focus:outline-none focus:border-2"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                            />
                        </div>
                        <div className="flex justify-end mt-2">
                            <Link href={route("dashboard")}>
                            <button
                                className=" text-lg rounded-lg px-2 mb-3 mr-3 border-2 border-black  hover:bg-red-500"
                                >
                                BATAL
                            </button>
                                </Link>
                            <button
                                className=" text-lg rounded-lg px-2 mb-3 mr-3 border-2 border-black hover:text-white hover:bg-black"
                                onClick={() => handleSubmit()}
                            >
                                UPDATE
                            </button>
                        </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

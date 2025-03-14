import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";




export default function View(props) {
    console.log("data dari View", props);
    return (
        <>
            <div className=" bg-white  min-h-screen  ">
                <Navbar className="fixed " />
                <div className="pt-20 text-center justify-center flex">
                    <div className=" w-11/12 text-black justify-center items-center">
                        <h1 className="capitalize  text-2xl md:text-5xl font-extrabold font-serif md:mb-5 md:mt-3 text-left ">
                            {props.News.title}
                        </h1>

                        <div className="p-3  flex justify-center items-center">
                            <img
                                src={props.News.image ? `/storage/${props.News.image}` : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}
                                alt=""
                                className=" w-9/12 outline items-stretch  "
                            />
                        </div>
                        <p className="mt-4 text-left font-semibold">{props.News.description}</p>
                        <div className="flex justify-evenly mt-10 mb-10">
                        <span className=" font-semibold">Author by <p className=" font-medium">{props.News.author}</p> </span>
                        <span className="font-semibold">
                            Category:
                        <p className=" font-medium">{props.News.category}</p>
                        </span>
                        

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

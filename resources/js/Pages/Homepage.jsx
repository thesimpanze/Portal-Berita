import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Typewriter from "typewriter-effect";

export default function Homepage(props) {
    console.log("data dari", props);
    return (
        <>
            <div className=" bg-white  min-h-screen  ">
                <Head title={props.title} />
                <Navbar className=" fixed" user={props.auth.user} />
                <div className=" pt-20 flex-col flex  text-center justify-center items-center">
                    <div className="mt-3 flex w-11/12 justify-center items-center  text-black full">
                        <div className="w-3/4 text-left     ">
                            <div className="w-3/4 mb-5  ">
                                <span className="text-5xl mb-5 font-extrabold">
                                    <Typewriter
                                        options={{
                                            strings: ["Welcome to Pens News"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>

                                <span className=" bg-[#ffff08] px-1 text-xl">
                                    Your must-reads on important topics.
                                </span>
                            </div>
                        </div>
                    </div>

                    <NewsList className=" " news={props.news.data} />
                </div>
                <div className=" flex justify-center items-center ">
                    <Paginator meta={props.news.meta} />
                </div>
            </div>
        </>
    );
}

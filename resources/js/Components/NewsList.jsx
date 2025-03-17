import { Link } from "@inertiajs/react";
import moment from "moment";

const isNews = (news) => {
    console.log("data dari isNews", news);
    return news.map((data, i) => {
        return (
            <div
                className=" flex md:w-3/4 justify-center items-center text-black full  "
                key={i}
            >
                <div className=" mb-9 outline outline-2 rounded-sm shadow-lg items-center justify-center md:flex text-left p-3 w-11/12 ">
                    <div className="md:w-3/4">
                        <div className=" md:w-3/4 items-center justify-center">
                            <Link
                                href={route("View")}
                                method="get"
                                data={{ id: data.id }}
                            >
                                <div className=" mr-3">
                                    <h1 className=" hover:underline font-serif font-bold text-xl md:text-3xl ">
                                        {data.title}
                                    </h1>
                                    <div className="relative">
                                        <p className=" h-12 md:h-28 hover:text-clip md:mt-3 overflow-auto md:overflow-hidden">
                                            {data.description}
                                        </p>
                                       
                                    </div>
                                    <span className="flex justify-between mt-0 font-semibold">
                                        <p className="capitalize md:mt-6 mt-2 mb-4 md:mb-0">
                                            {data.author}
                                        </p>
                                        <p className="md:mt-6 mt-2 mb-4 md:mb-0 md:text-right ">
                                            {moment(data.created_at).format(
                                                " DD MMMM YYYY"
                                            )}
                                        </p>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-3/6 bg-red-400  ">
                        <img
                            src={data.image ? `/storage/${data.image}` : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}
                            alt=""
                            className=" w-full items-stretch"
                        />
                    </div>
                    <hr />
                </div>
            </div>
        );
    });
};
const noNews = () => {
    <div className="">
        <p>belum ada berita</p>
    </div>;
};
const NewsList = ({ news }) => {
    return !isNews ? noNews() : isNews(news);
    console.log("data dari newslist", news);
};

export default NewsList;

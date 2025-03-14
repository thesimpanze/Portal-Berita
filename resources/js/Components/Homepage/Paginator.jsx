import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join mt-5 mb-5 flex justify-center items-center text-black font-semibold ">
            {prev && (
                <Link href={prev} className="join-item   text-xs md:text-base">
                    {current - 1}
                </Link>
            )}
            <button className="join-item  px-4 text-xl md:text-2xl ">
                {current}
            </button>
            {next && (
                <Link href={next} className="join-item  md:text-base text-xs">
                    {current + 1}
                </Link>
            )}
        </div>
    );
};

export default Paginator;

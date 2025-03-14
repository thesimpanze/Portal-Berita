import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar fixed bg-white shadow-sm font-sans z-50 ">
                <Link href="/">
                    <p className=" cursor-pointer ml-5 md:ml-9 font-extrabold hover:bg-[#ffff08] p-1 text-xl text-black">
                        Pens News.
                    </p>
                </Link>
            <div className="flex-1 justify-center mr-4">
                <div className="bg-blue-400 flex justify-end items-center ">
                    <div className="form-control outline-none border-transparent ">
                        <input
                            type="text"
                            placeholder="Search"
                            className=" bg-white outline-none w-24 md:w-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end ">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="foto"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black  w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")}>Login</Link>
                                </li>
                                <li>
                                    <Link href={route("register")}>
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        className="justify-between"
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("dashboard")}>
                                        dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("logout")} method="post">
                                        logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

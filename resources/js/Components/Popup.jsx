const Popup = ({open, onClose}) => {
    return (
        <div className=" bg-black/20 flex justify-center w-full h-screen items-center">
            <div className="bg-white border-2 border-black rounded-sm w-1/4 h-2/4 text-center text-black justify-center items-center flex">
                <div className="">
                    <div className="">
                        <h1 className="mb-9 font-extrabold text-xl">
                            Apakah anda yakin ingin menghapus?
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <span className="bg-red-500 w-11/12 border-2 font-bold border-black rounded-full">
                            <button className="text-lg">yeah, Sure</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Popup;

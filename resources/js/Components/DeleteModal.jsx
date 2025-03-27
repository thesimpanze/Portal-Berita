import React from 'react';

export default function DeleteModal({ news, onConfirm, onCancel }) {
    return (
        <div className="fixed bg-black/35 top-0 flex justify-center w-full h-screen items-center z-40" onClick={onCancel}>
            <div 
                className="bg-white border-2 border-black rounded-sm w-2/4 h-3/5 text-center text-black justify-center items-center flex" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="gap-11 flex flex-col">
                    <div>
                        <h1 className="font-extrabold text-3xl">
                            Apakah anda yakin ingin menghapus?
                        </h1>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <button 
                                className="bg-red-600 py-2 w-72 font-bold rounded-full text-white"
                                onClick={onConfirm}
                            >
                                Yeah, Sure
                            </button>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button 
                                className="border-red-500 py-2 w-72 border-2 font-bold bg-white rounded-full"
                                onClick={onCancel}
                            >
                                Nope, I don't
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
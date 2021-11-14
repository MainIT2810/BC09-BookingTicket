import React from 'react'
import './Flim_Flip.css'
import { history } from "../../App";
import moment from "moment";


export default function Film_Flip(props) {

    const { item } = props;

    return (


        // <div className="wrapper">
        //     <div className="card">
        //         <img src={item.hinhAnh} alt='FlimImg' />
        //         <div className="badge absolute top-0 left-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">Hot</div>
        //         <div className="badge absolute top-0 right-0 bg-gray-900 m-1  text-green-500 p-1 px-2 text-xs font-bold rounded text-center">
        //             {item.danhGia}
        //             <div className="rating">
        //                 <i className="fa fa-star" aria-hidden="true" />
        //                 <i className="fa fa-star" aria-hidden="true" />
        //                 <i className="fa fa-star" aria-hidden="true" />
        //                 <i className="fa fa-star" aria-hidden="true" />
        //             </div>
        //         </div>

        //         <div className="descriptions">
        //             <h1>John Wick 3</h1>
        //             <p>
        //                 {item.moTa}
        //             </p>
        //             <button onClick={() => {
        //                 history.push(`detail/${item.maPhim}`);
        //             }}>

        //                 Đặt Vé
        //             </button>
        //         </div>
        //     </div>
        // </div>




        <div className='wrapper'>
            <div className='card'>
                <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                    <div className="w-2 bg-gray-800" />
                    <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card" data-movie-id={438631}>
                        <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent" />
                        <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
                            <div className="poster__info align-self-end w-full">
                                <div className="h-32" />
                                <div className="space-y-6 detail_info">
                                    <div className="flex flex-col space-y-2 inner">
                                        <a className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700" data-unsp-sanitized="clean" href={item.trailer} target={"_blank"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">Trailer</div>
                                        </a>
                                        <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">{item.tenPhim}</h3>
                                        <div className="mb-0 text-lg text-gray-400">{item.biDanh}</div>
                                    </div>
                                    <div className="flex flex-row justify-between datos">
                                        <div className="flex flex-col datos_col">
                                            <div className="popularity">440.052</div>
                                            <div className="text-sm text-gray-400">Popularity:</div>
                                        </div>
                                        <div className="flex flex-col datos_col">
                                            <div className="release">{moment(item.ngayKhoiChieu).format("DD-MM-yyyy")}</div>
                                            <div className="text-sm text-gray-400">Release date:</div>
                                        </div>
                                        <div className="flex flex-col datos_col">
                                            <div className="release">{item.maPhim}</div>
                                            <div className="text-sm text-gray-400">Id Film:</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col overview">
                                        <div className="flex flex-col" />
                                        <div className="text-xs text-gray-400 mb-2">Overview:</div>
                                        <p className="text-xs text-gray-100 mb-6">
                                            {item.moTa.length > 200
                                                ? item.moTa.substr(0, 150) + "..."
                                                : item.moTa}
                                        </p>
                                    </div>
                                </div>
                                <div className="badge absolute top-0 left-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">Hot</div>
                                <div className="badge absolute top-0 right-0 bg-gray-900 m-1  text-green-500 p-1 px-2 text-xs font-bold rounded text-center">
                                    {item.danhGia}
                                    <div className="rating">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="absolute inset-0 transform w-full -translate-y-4" src={item.hinhAnh} style={{ filter: 'grayscale(0)' }} alt='FilmImg' />
                        <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                            <button className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700 " onClick={() => {
                                history.push(`detail/${item.maPhim}`);
                            }} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-sm text-white ml-2">Đặt Vé</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>















    )
}

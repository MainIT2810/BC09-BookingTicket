import React, { useEffect, useState } from "react";
import moment from "moment";
import "./BookingTab.css"
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions"
const BookingTab = (props) => {
    const dispatch = useDispatch();
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    let [maPhim, setMaPhim] = useState({});
    let [maLichChieu, setMaLichChieu] = useState();
    let [maCumRap, setMaCumRap] = useState();
    let [ngayChieu, setNgayChieu] = useState();


    return (
        <div>

        </div>
    )
}
export default BookingTab;

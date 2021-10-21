import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "../../redux/actions/QuanLyDatVeActions";
import style from "./Checkout.module.css";
export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      const action = layChiTietPhongVeAction(props.match.params.id);
      dispatch(action);
  }, []);
  return (
    <div className=" min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Màn Hình</h3>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-center text-2xl text-green-800"> 0đ</h3>
          <hr />
          <h3 className="text-xl">Lật mặt 48h</h3>
          <p>Địa điểm: BHD Star - Vicomn 3/2</p>
          <p>Ngày chiếu: 25/04/2021 - 12:05 Rạp 5</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">0đ</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Họ Tên</i> <br />
            {userLogin.hoTen}
          </div>
          <hr />

          <div
            className="mb-0 h-full flex flex-col justify-end items-center"
            style={{ marginBottom: 0 }}
          >
            <div className="bg-green-500 text-white w-full text-center py-3 text-2xl font-bold">
              Đặt vé
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

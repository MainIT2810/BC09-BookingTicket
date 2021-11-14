import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
    DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import swal from "sweetalert";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        swal({
          title: "Đăng nhập thành công",
          icon: "success",
          button: "OK",
        });
        //Chuyển hướng đăng nhập về trang trước đó
        history.push('/home');
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangNhap: result.data.content,
        });
        swal({
          title: "Đăng ký thành công",
          icon: "success",
          button: "OK",
        });
        history.push('/login');
        
      }
    } catch (error) {
      console.log(error?.response.data);
      swal({
        title: "Đăng ký thất bại",
        text: error?.response.data.content,
        icon: "warning",
        button: "OK",
      });
    }
  };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

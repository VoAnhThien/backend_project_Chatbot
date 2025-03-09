import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Kiểm tra trạng thái đăng nhập hoặc quên mật khẩu

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="asset/stulogo.jpg" alt="STU Logo" className="logo" />
          <h2>STU - Thời khóa biểu</h2>
        </div>

        {/* quên mật khẩu */}
        {isForgotPassword ? (
          <>
            <h3 className="headerQMK">Tìm tài khoản</h3>
            <p className="crossbar">_____________________________________________</p>
            <p className="notify"> <b>Vui lòng nhập email/tên đăng nhập để tìm tài khoản và đặt lại mật khẩu.</b></p>
            <form>
              <div className="input-group">
                <input type="text" placeholder="Tên đăng nhập/Email" required />
              </div>
              <button type="submit" className="btn">Gửi yêu cầu</button>
            </form>
            <div className="links">
              <button onClick={() => setIsForgotPassword(false)} className="btn-link">Quay lại Đăng nhập</button>
            </div>
          </>
        ) : (
          // đăng nhập
          <>
            <form>
              <div className="input-group">
                <input type="text" placeholder="Tên đăng nhập/Email" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Mật khẩu" required />
              </div>
              <button type="submit" className="btn">Đăng nhập</button>
            </form>
            <div className="links">
              <button onClick={() => setIsForgotPassword(true)} className="btn-link">Quên mật khẩu?</button> 
              {/* <a href="#">Kích hoạt tài khoản</a> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

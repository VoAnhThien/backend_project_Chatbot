import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
      <div className="login-header"> 
        <img src="asset/stulogo.jpg" alt="STU Logo" className ="imglogo" />
        <h2>STU - Thời khóa biểu</h2>
      </div>
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
          <a href="#">Quên mật khẩu?</a> / <a href="#">Kích hoạt tài khoản</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

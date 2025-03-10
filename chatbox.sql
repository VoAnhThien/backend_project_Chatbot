-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 10, 2025 lúc 05:03 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `chatbox`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichhoc`
--

CREATE TABLE `lichhoc` (
  `STT` int(11) NOT NULL,
  `Thu` int(8) NOT NULL,
  `Ca` int(4) NOT NULL,
  `masv` varchar(50) NOT NULL,
  `mamh` varchar(50) NOT NULL,
  `ngaybatdau` date NOT NULL,
  `ngayketthuc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `lichhoc`
--

INSERT INTO `lichhoc` (`STT`, `Thu`, `Ca`, `masv`, `mamh`, `ngaybatdau`, `ngayketthuc`) VALUES
(1, 2, 1, 'DH52201286', '001', '2025-03-09', '2025-03-27'),
(2, 3, 3, 'DH52201105', '002', '2025-03-09', '2025-03-30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `mamh` varchar(50) NOT NULL,
  `tenmh` varchar(50) NOT NULL,
  `giangvien` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`mamh`, `tenmh`, `giangvien`) VALUES
('001', 'HTML', 'Quan Le Huu Minh'),
('002', 'JavaScript', 'QuanDepTrai');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sinhvien`
--

CREATE TABLE `sinhvien` (
  `masv` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tensv` varchar(50) NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` varchar(10) NOT NULL,
  `lop` varchar(10) NOT NULL,
  `chuyennganh` varchar(50) NOT NULL,
  `sdt` int(10) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sinhvien`
--

INSERT INTO `sinhvien` (`masv`, `password`, `tensv`, `ngaysinh`, `gioitinh`, `lop`, `chuyennganh`, `sdt`, `email`) VALUES
('DH52201105', 'yenngoc0102', 'Đinh Dương Yến Ngọc', '2004-02-01', 'Nu', 'D22_TH15', 'CNTT', 379261508, 'dinhduongyenngoc@gmail.com'),
('DH52201286', 'quanle2004', 'Lê Hữu Minh Quân', '2004-04-26', 'Nam', 'D22_TH15', 'CNTT', 328421191, 'lehuuminhquan2004@gmail.com'),
('DH52201287', 'quanle2004', 'Viễn Anh Tho', '2004-03-12', 'nu', 'D22_TH14', 'QTKD', 372482218, 'voanhthien@gmail.com'),
('DH52201288', 'quanle2004', 'Viễn Anh Thôn', '2003-02-11', 'nu', 'D22_TH15', 'CNTT', 372482218, 'voanht2222hien@gmail.com');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `lichhoc`
--
ALTER TABLE `lichhoc`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `fk_sinhvien` (`masv`),
  ADD KEY `fk_monhoc` (`mamh`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`mamh`);

--
-- Chỉ mục cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`masv`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `lichhoc`
--
ALTER TABLE `lichhoc`
  ADD CONSTRAINT `fk_monhoc` FOREIGN KEY (`mamh`) REFERENCES `monhoc` (`mamh`),
  ADD CONSTRAINT `fk_sinhvien` FOREIGN KEY (`masv`) REFERENCES `sinhvien` (`masv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

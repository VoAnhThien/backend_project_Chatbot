const express = require('express');
const connection = require('../connectData');
const router = express.Router();


// API thêm môn học
router.post('/addMonHoc', (req, res) => {
    const { mamh, tenmh, giangvien } = req.body;

    if (!mamh || !tenmh || !giangvien) {
        return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin!' });
    }

    const sql = 'INSERT INTO monhoc (mamh, tenmh, giangvien) VALUES (?, ?, ?)';
    connection.query(sql, [mamh, tenmh, giangvien], (err, result) => {
        if (err) {
            console.error('Lỗi khi thêm môn học:', err);
            return res.status(500).json({ error: 'Lỗi khi thêm môn học vào database!' });
        }
        res.json({ message: 'Thêm môn học thành công!', data: result });
    });
});


module.exports = router;

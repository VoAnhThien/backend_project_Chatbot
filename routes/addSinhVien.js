const connection = require('../connectData.js');

module.exports = (app) => {
    app.post('/addsinhvien', (req, res) => {
        const {masv, password, tensv, ngaysinh, gioitinh, lop, chuyennganh, sdt, email} = req.body;
        if(!masv || !password || !tensv || !ngaysinh || !gioitinh || !lop || !chuyennganh || !sdt || !email){
            return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
        }
        const sql = 'INSERT INTO sinhvien (masv, password, tensv, ngaysinh, gioitinh, lop,chuyennganh, sdt, email) VALUES (?,?,?,?,?,?,?,?,?)';
        connection.query(sql, [masv, password, tensv, ngaysinh, gioitinh, lop, chuyennganh, sdt, email], (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn database:', err);
                res.status(500).json({ error: 'Sinh viên đã tồn tại' });
            }
            else{
                
                res.json({success: true, message: 'Thêm sinh viên thành công'});
            }
        });
    });
};

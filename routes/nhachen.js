const connection = require('../connectData.js');

module.exports = (app) => {
    app.post('/nhachen', (req, res) => {
        const {STT, tennh, ngaybatdau, ngayketthuc, masv} = req.body;
        const sql = 'INSERT INTO nhachen (STT, tennh, ngaybatdau, ngayketthuc, masv) VALUES (?,?,?,?,?)';
        connection.query(sql, [STT, tennh, ngaybatdau, ngayketthuc, masv], (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn database:', err);
                res.status(500).json({ error: 'Lỗi server' });
            }
            else{
                
                res.json({success: true, message: 'Thêm nhắc hẹn thành công'});
            }
        });
    });
};

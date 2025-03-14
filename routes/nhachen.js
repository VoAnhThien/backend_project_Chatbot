const connection = require('../connectData.js');

module.exports = (app) => {
    app.post('/nhachen', (req, res) => {
        const {tennh, ngaybatdau, ngayketthuc, masv} = req.body;
        if(!tennh || !ngaybatdau || !ngayketthuc || !masv){
            return res.status(400).json({error:'Vui lòng điền đầy đủ thông tin'});
        }
        const sql = 'INSERT INTO nhachen (tennh, ngaybatdau, ngayketthuc, masv) VALUES (?,?,?,?)';
        connection.query(sql, [tennh, ngaybatdau, ngayketthuc, masv], (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn database:', err);
                res.status(500).json({ error: 'Không thể thêm nhắc hẹn' });
            }
            else{
                
                res.json({success: true, message: 'Thêm nhắc hẹn thành công'});
            }
        });
    });
};

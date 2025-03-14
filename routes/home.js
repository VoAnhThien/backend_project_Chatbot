const path = require('path');
const connection = require('../connectData.js');
const svLogin = require('./login.js');

module.exports = (app) => {
    const login = svLogin(app);

    app.get('/api/home', (req, res) => {
        const masv = login.getMaSVLogin();
        if (!masv) {
            return res.status(401).json({ error: 'Chưa đăng nhập' });
        }
        
        connection.query('SELECT * FROM sinhvien WHERE masv = ?', [masv], (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn database:', err);
                res.status(500).json({ error: 'Lỗi server' });
                return;
            }
            if (results.length > 0) {
                const sinhvien = results[0];
                res.json({
                    tensv: sinhvien.tensv,
                    lop: sinhvien.lop,
                    masv: sinhvien.masv
                });
            }
        });
    });

    
}; 
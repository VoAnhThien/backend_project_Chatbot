const connection = require('../connectData.js');
module.exports = (app) => {
    // API để lấy danh sách nhắc hẹn
    app.get('/api/nhachen', (req, res) => {
        const sql = 'SELECT * FROM nhachen';
        connection.query(sql, (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn database:', err);
                res.status(500).json({ error: 'Lỗi server' });
            } else {
                res.json(results);
            }
        });
    });
};
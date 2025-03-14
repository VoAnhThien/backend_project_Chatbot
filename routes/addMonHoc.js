const connection = require('../connectData');


// API thêm môn học
module.exports = (app) => {
    app.post('/addMonHoc', async (req, res) => {
        try {
            const { mamh, tenmh, giangvien } = req.body;

            // Kiểm tra dữ liệu đầu vào
            if (!mamh || !tenmh || !giangvien) {
                return res.status(400).json({ 
                    success: false,
                    error: 'Vui lòng nhập đầy đủ thông tin!' 
                });
            }

            // Kiểm tra mã môn học đã tồn tại chưa
            const checkSql = 'SELECT * FROM monhoc WHERE mamh = ?';
            connection.query(checkSql, [mamh], (checkErr, checkResult) => {
                if (checkErr) {
                    console.error('Lỗi kiểm tra môn học:', checkErr);
                    return res.status(500).json({ 
                        success: false,
                        error: 'Lỗi hệ thống!' 
                    });
                }

                if (checkResult.length > 0) {
                    return res.status(400).json({ 
                        success: false,
                        error: 'Mã môn học đã tồn tại!' 
                    });
                }

                // Thêm môn học mới
                const insertSql = 'INSERT INTO monhoc (mamh, tenmh, giangvien) VALUES (?, ?, ?)';
                connection.query(insertSql, [mamh, tenmh, giangvien], (err, result) => {
                    if (err) {
                        console.error('Lỗi khi thêm môn học:', err);
                        return res.status(500).json({ 
                            success: false,
                            error: 'Lỗi khi thêm môn học vào database!' 
                        });
                    }
                    
                    res.status(201).json({ 
                        success: true,
                        message: 'Thêm môn học thành công!',
                        data: {
                            mamh,
                            tenmh,
                            giangvien
                        }
                    });
                });
            });
        } catch (error) {
            console.error('Lỗi server:', error);
            res.status(500).json({ 
                success: false,
                error: 'Lỗi hệ thống!' 
            });
        }
    });
};



const express = require('express');
const path = require('path');
const app = express();

// Cho phép truy cập vào tất cả file trong thư mục gốc (html, css, js, images)
app.use(express.static(path.join(__dirname, './')));

// Khi vào link web, nó sẽ tự động mở file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Render sẽ tự cấp Port qua biến môi trường, nếu không có thì chạy port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server dang chay tai port ${PORT}`);
});
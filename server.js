
// ติดตั้ง package
const express = require('express');
const path = require('path');

const app = express();

// ตั้งให้มีโฟลเดอร์เป็นที่เข้าถึงได้ผ่านเว็บไซต์
app.use(express.static(path.join(__dirname, 'public')));

// ถ้าเข้ามาที่ root ให้เปิดหน้าไหน ในที่นี้คือ 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ตั้ง port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

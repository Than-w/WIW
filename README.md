# wiw

เว็บชุมชนแนะนำ หนังสือ / เกม / หนัง (ไฟล์เดียว ไม่ต้องติดตั้งแพ็กเกจเพิ่ม)

## รันบน Google Antigravity
1. เปิด Antigravity แล้วเลือก File > Open Folder... เลือกโฟลเดอร์ `wiw-project`
2. เปิด Terminal ในตัว IDE แล้วรัน: `npm start` (หรือ `node server.js`)
3. เปิด http://localhost:3000 ในเบราว์เซอร์ หรือ Browser Preview ของ Antigravity

หรือพิมพ์ในช่อง Agent: "รัน dev server ของโปรเจกต์นี้แล้วเปิดดูใน browser"

## โครงสร้าง
- `index.html` : ตัวเว็บทั้งหมด (HTML + CSS + JS)
- `server.js`  : เซิร์ฟเวอร์ static (ไม่ต้อง npm install)
- ข้อมูลโพสต์/ไลก์/คอมเมนต์/ธีมถูกเก็บใน localStorage ของเบราว์เซอร์

// ============================================================
// Buổi 12 - Bài 1: theme.js — nhúng vào CẢ 3 TRANG

// Vì localStorage dùng chung cho mọi trang cùng 1 thư mục,
// người dùng chọn dark mode ở 1 trang thì chuyển qua trang khác
// vẫn giữ đúng theme đã chọn.
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
const btnToggle = document.getElementById('btnToggleTheme');
const body = document.body;
if (!btnToggle) return;
// Khi trang load: đọc theme đã lưu trước đó và áp dụng ngay
const themeDaLuu = localStorage.getItem('theme');
if (themeDaLuu === 'dark') {
body.classList.add('dark');
btnToggle.textContent = '☀️ Sáng';
}
btnToggle.addEventListener('click', function () {
body.classList.toggle('dark');
if (body.classList.contains('dark')) {
localStorage.setItem('theme', 'dark');
btnToggle.textContent = '☀️ Sáng';
} else {
localStorage.setItem('theme', 'light');
btnToggle.textContent = '🌙 Tối';
}
});
});
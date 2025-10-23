function login() {
  const id = document.getElementById('employeeId').value.trim();
  if (id === '') return alert('กรุณาแตะบัตรหรือกรอกรหัสพนักงาน');
  localStorage.setItem('employeeId', id);
  localStorage.setItem('loginTime', new Date().toLocaleTimeString());
  window.location.href = 'plaza.html';
}
function selectPlaza(name) {
  localStorage.setItem('plaza', name);
  window.location.href = 'booth.html';
}
function collectToll() {
  alert('รับเงินเรียบร้อย');
}
function issueReceipt() {
  alert('ออกใบเสร็จเรียบร้อย');
}
function endShift() {
  alert('สิ้นสุดรอบการทำงาน');
  window.location.href = 'hq.html';
}
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.includes('booth.html')) {
    const emp = localStorage.getItem('employeeId');
    const plaza = localStorage.getItem('plaza');
    const time = localStorage.getItem('loginTime');
    document.getElementById('boothInfo').innerText = `พนักงาน ${emp} | ด่าน ${plaza} | เวลาเข้า ${time}`;
  }
  if (path.includes('hq.html')) {
    const tbody = document.querySelector('#hqTable tbody');
    const emp = localStorage.getItem('employeeId');
    const plaza = localStorage.getItem('plaza');
    const time = localStorage.getItem('loginTime');
    const row = `<tr><td>${plaza}</td><td>ช่อง 3</td><td>${emp}</td><td>${time}</td><td>ปฏิบัติงาน</td></tr>`;
    tbody.innerHTML = row;
  }
});
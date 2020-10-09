function tong() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let tong = soThuNhat + soThuHai
    let phatNgon = "Tổng hai số là: " + tong
    document.getElementById("phatNgon").innerText = phatNgon
}
function hieu() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let hieu = soThuNhat - soThuHai
    let phatNgon = "Hiệu hai số là: " + hieu
    document.getElementById("phatNgon").innerText = phatNgon
}
function tich() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let tich = soThuNhat * soThuHai
    let phatNgon = "Tích hai số là: " + tich
    document.getElementById("phatNgon").innerText = phatNgon
}
function thuong() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let thuong = soThuNhat / soThuHai
    let phatNgon = "Thương hai số là: " + thuong
    document.getElementById("phatNgon").innerText = phatNgon
}
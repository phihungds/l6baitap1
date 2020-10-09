function tong() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let tong = soThuNhat + soThuHai
    let phatNgon = soThuNhat +  " + " + soThuHai + "= " + tong
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("ketQua").value = tong
}
function hieu() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let hieu = soThuNhat - soThuHai
    let phatNgon = soThuNhat +  " - " + soThuHai + "= " + hieu
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("ketQua").value = hieu
}
function tich() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let tich = soThuNhat * soThuHai
    let phatNgon = soThuNhat +  " x " + soThuHai + "= " + tich
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("ketQua").value = tich
}
function thuong() {
    let soThuNhat = Number(document.getElementById("soThuNhat").value)
    let soThuHai = Number(document.getElementById("soThuHai").value)
    let thuong = soThuNhat / soThuHai
    let phatNgon = soThuNhat +  " : " + soThuHai + "= " + thuong
    document.getElementById("phatNgon").innerText = phatNgon
    document.getElementById("ketQua").value = thuong
}
function use() {
    document.getElementById("soThuNhat").value = document.getElementById("ketQua").value
    document.getElementById("soThuHai").value = ""
    document.getElementById("soThuHai").focus()
}
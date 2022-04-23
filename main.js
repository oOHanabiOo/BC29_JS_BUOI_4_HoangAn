/** ***********
 * BÀI TẬP 1 **
 **************/

/**
 * Mô hình 3 khối
 * - Đầu vào
 *      - Nhập vào 3 số tự nhiên a, b, c
 * - Xử lý
 *      - Tạo biến number1 = a, number2 = b, number3 = c, king
 *      - Nếu number1 < number2 && number2 < number3 ==> a<b<c
 *      - Nếu number1 < number3 && number2 > number3 ==> a<c<b
 *      - Nếu number2 < number1 && number1 < number3 ==> b<a<c
 *      - Nếu number2 < number3 && number1 > number3 ==> b<c<a
 *      - Nếu number3 < number1 && number1 < number2 ==> c<a<b
 *      - Nếu number3 < number2 && number1 > number2 ==> c<b<a
 * - Xuất ra
 *      - 3 số tự nhiên tăng dần
 */

// Code
document.getElementById("sapXep").onclick = function() {
    // Lấy thông tin người dùng
    var number1 = document.getElementById("so1").value;
    var number2 = document.getElementById("so2").value;
    var number3 = document.getElementById("so3").value;
    var king = "";
    // Sắp xếp
    if (number1 < number2 && number2 < number3) {
        king = number1 + ", " + number2 + ", " + number3;
    } else if (number1 < number3 && number2 > number3) {
        king = number1 + ", " + number3 + ", " + number2;
    } else if (number2 < number1 && number1 < number3) {
        king = number2 + ", " + number1 + ", " + number3;
    } else if (number2 < number3 && number1 > number3) {
        king = number2 + ", " + number3 + ", " + number1;
    } else if (number3 < number1 && number1 < number2) {
        king = number3 + ", " + number1 + ", " + number2;
    } else {
        king = number3 + ", " + number2 + ", " + number1;
    }
    // Xuất ra
    document.getElementById("ft1").innerHTML = king;
};

// --------------------------------------------------------

/** ***********
 * BÀI TẬP 2 **
 **************/

/**
 * Mô hình 3 khối
 * - Đầu vào
 *      - Nhập vào ai đang sử dụng máy (B or M or A or E)
 * - Xử lý
 *      - Tạo biến who, pink
 *      - who = B ==> "Bố"
 *      - who = M ==> "Mẹ"
 *      - who = A ==> "Anh trai"
 *      - who = E ==> "Em gái"
 * - Show kết quả
 *      - Chào người đang sử dụng máy
 */

// Code
document.getElementById("chaoHoi").onclick = function() {
    // Lấy thông tin người dùng
    var who = document.getElementById("who").value;
    var pink = "";
    // Xử lý
    if (who === "B") {
        pink = "Chào Bố";
    } else if (who === "M") {
        pink = "Chào Mẹ";
    } else if (who === "A") {
        pink = "Chào Anh trai";
    } else if (who === "E") {
        pink = "Chào Em gái";
    }
    // Show kết quả
    document.getElementById("ft2").innerHTML = pink;
};

// -----------------------------------------------------

/** ***********
 * BÀI TẬP 3 **
 **************/

/**
 * Mô hình 3 khôi
 * - Đầu vào
 *      - Nhập vào 3 số nguyên
 * - Xử lý
 *      - Tạo biến a, b, c, soChan, soLe
 *      - Tạo hàm kiemmTraSoChanLe() để kiểm tra
 *      - soChan = 0
 *      - soLe = 3
 *      - Kiểm tra a, b và c nếu là sô chẵn thì cộng thêm vào soChan và ngược lại
 * - Đầu ra
 *      - Show kết quả
 */
// Hàm kiểm tra chẵn lẻ
function kiemmTraSoChanLe(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

// Code
document.getElementById("phanLoai").onclick = function() {
    // Lấy dữ liệu người dùng
    var a = document.getElementById("a1").value * 1;
    var b = document.getElementById("a2").value * 1;
    var c = document.getElementById("a3").value * 1;
    // Xử lý
    var soChan = 0;
    var soLe = 3;
    if (kiemmTraSoChanLe(a)) {
        soChan++;
        soLe--;
    }
    if (kiemmTraSoChanLe(b)) {
        soChan++;
        soLe--;
    }
    if (kiemmTraSoChanLe(c)) {
        soChan++;
        soLe--;
    }
    // Show kết quả
    document.getElementById("ft3").innerHTML = "Có " + soChan + " số chẵn và có " + soLe + " số lẻ";
}

/** ***********
 * BÀI TẬP 4 **
 **************/
/**
 * Mô hình ba khối
 * - Đầu vào
 *      - Nhập vào 3 cạnh của tam giác
 * - Xử lý
 *      - tạo biến d, e, f
 *      - Tam giác đều: 3 cạnh bằng nhau
 *      - Tam giác cân: có 2 cạnh bằng nhau
 *      - Tam giác vuông: áp dụng định lý pytago
 * - Đầu ra
 *      - Show kết quả
 */
// Code

function pytago(d, e, f) {
    if (d * 2 == e * 2 + f * 2) {
        return true;
    } else if (e * 2 == d * 2 + f * 2) {
        return true;
    } else if (f * 2 == d * 2 + e * 2) {
        return true;
    }
    return false;
}

document.getElementById("loai").onclick = function() {
    var d = document.getElementById("c1").value;
    var e = document.getElementById("c2").value;
    var f = document.getElementById("c3").value;
    var ten = "";

    if (d == e && e == f) {
        ten = "Tam giác đều";
    } else if (d == e || e == f || d == f) {
        ten = "Tam giác cân";
    } else if (pytago(d, e, f)) {
        ten = "Tam giác vuông";
    } else {
        ten = "Tam giác thường";
    }

    document.getElementById("ft4").innerHTML = ten;
}
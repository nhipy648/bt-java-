


const passfaillEl = document.getElementById("passfaill")
passfaillEl.onclick = function (evt) {
    console.log(evt.target);

    const DT1El = document.getElementById("DT1");
    const DT2El = document.getElementById("DT2");
    const DT3El = document.getElementById("DT3");
    const KV1El = document.getElementById("KV1");
    const KV2El = document.getElementById("KV2");
    const KV3El = document.getElementById("KV3");

    const diem1El = +document.getElementById("diem1").value;
    const diem2El = +document.getElementById("diem2").value;
    const diem3El = +document.getElementById("diem3").value;
    const diemChuanEl = +document.getElementById("diemChuan").value;
    const diemXet = (diem1El + diem2El + diem3El) / 3;
    if (diem1El>0, diem2El > 0, diem3El > 0) {

        if (DT1El.checked) {
            const diemUuTien = 2.5;
            const tongDiem = diemXet + diemUuTien;
            if (tongDiem >= diemChuanEl) {
                alert("Đậu" +""+ tongDiem);
            } else {
                alert("rớt" +""+tongDiem);
            }
        } else if (DT2El.checked) {
            const diemUuTien = 1.5;
            const tongDiem = diemXet + diemUuTien;
            if (tongDiem >= diemChuanEl) {
                alert("Đậu" +""+tongDiem);
            } else {
                alert("rớt"  +""+tongDiem);
            }
        }
        else if (DT3El.checked) {
            const diemUuTien = 1;
            const tongDiem = diemXet + diemUuTien;
            if (tongDiem >= diemChuanEl) {
                alert("Đậu"  +""+ tongDiem);
            } else {
                alert("rớt" +""+ tongDiem);
            }
        } else if (KV1El.checked) {
            const diemUuTien = 2;
            const tongDiem = diemXet + diemUuTien;
            if (tongDiem >= diemChuanEl) {
                alert("Đậu" +""+ tongDiem);
            } else {
                alert("rớt"  +""+tongDiem);
            }
        } else if (KV2El.checked) {
            const diemUuTien = 1;
            const tongDiem = diemXet + diemUuTien;
            if (tongDiem >= diemChuanEl) {
                alert("Đậu" +""+ tongDiem);
            } else {
                alert("rớt"  +""+ tongDiem);
            }
        } else if (KV3El.checked) {
            const diemUuTien = 0.5;
            const tongDiem = diemXet + diemUuTien;
            if (tongDiem >= diemChuanEl) {
                alert("Đậu" +""+ tongDiem);
            } else {
                alert("rớt" +""+ tongDiem);
            }
        }

    } else   {
        alert('không đủ tiêu chuẩn' + tongDiem);
    } 
}
const Kw_50_1 = 500;
const Kw_50 = 650;
const Kw_100_1 = 850;
const Kw_150 = 1100;
const Kw_next = 1300;

const payEl = document.getElementById("pay")
payEl.onclick = function (evt) {
    console.log(evt.target);
    const soKwEl = +document.getElementById("soKw").value;



    const ThanhToan = Kw_50_1 * 50;


    const CalKm1 = Kw_50 * 50;

    const CalKm2 = ThanhToan + CalKm1;

    const CalKm3 = CalKm2 + Kw_100_1 * 100;

    const CalKm4 = CalKm3 + Kw_150 * 150;


    if (soKwEl <= 50) {
        const thanhTien = Kw_50_1 * soKwEl;
        console.log("tổng tiền là", thanhTien);
        const wrapperEl = document.getElementById("divThanhTien");
        const resultEl = document.getElementById("xuatTien");

        wrapperEl.style.display = "block";
        resultEl.innerHTML = thanhTien;
    }
    else if (soKwEl - 50 >= 1 && soKwEl - 50 <= 50) {
        const thanhTien = CalKm1;
        console.log("tổng tiền là", thanhTien);
        baypill
    } else if (soKwEl - 100 >= 1 && soKwEl - 100 <= 100) {
        const thanhTien = CalKm2 + Kw_100_1 * (soKwEl - 100);
        console.log("tổng tiền là", thanhTien);
        baypill
    } else if (soKwEl - 200 >= 1 && soKwEl - 200 <= 150) {
        const thanhTien = CalKm3 + Kw_150 * (soKwEl - 200);
        console.log("tổng tiền là", thanhTien);
        baypill
    } else {
        const thanhTien = CalKm4 + Kw_next * (soKwEl - 350);
        console.log("tổng tiền là", thanhTien);
        baypill
    }
}

function baypill() {
    const wrapperEl = document.getElementById("divThanhTien");
    const resultEl = document.getElementById("xuatTien");

    wrapperEl.style.display = "block";
    resultEl.innerHTML = thanhTien;
}



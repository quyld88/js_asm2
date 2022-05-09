var arrPeople = [];
// Xóa dữ liệu nhập từ form 
function clearform() {
    document.getElementById('ten').value = "";
    document.getElementById('toan').value = "";
    document.getElementById('ly').value = "";
    document.getElementById('hoa').value = "";
}
// ham viewdata
    function viewdata(){
        var ten = document.getElementById('ten').value;
        var toan = document.getElementById('toan').value;
        var hoa = document.getElementById('hoa').value;
        var ly = document.getElementById('ly').value;

        // create obj
        var testScore = { 
            ten: ten,
            toan: toan,
            ly: ly,
            hoa: hoa
        };
        arrPeople.push(testScore);
        console.log("ds :", arrPeople);

         // get the html table
        // 0 = the first table
        var table = document.getElementsByTagName('tbody')[0];
        // add new empty row to the table
        // table.rows.length = the end
        var newRow = table.insertRow(table.rows.length);
                  
        // add cells to the row
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
                  
        // add values to the cells
        for (i = 0; i < table.rows.length; i++){
                var stt = i + 1 ;
            cel1.innerHTML = stt;
            cel2.innerHTML = ten;
            cel3.innerHTML = toan;
            cel4.innerHTML = ly;
            cel5.innerHTML = hoa;
            cel6.innerHTML = "";
        }
        clearform()
    }

function dtb() {
    var table = document.getElementsByTagName('tbody')[0];
    for (i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[5].innerText =
        ((parseFloat(table.rows[i].cells[2].innerText) + parseFloat(table.rows[i].cells[3].innerText) + parseFloat(table.rows[i].cells[4].innerText))/3).toFixed(1);
    }
}

function xepLoai() {
    var table = document.getElementsByTagName('tbody')[0];
    for (i = 0; i < table.rows.length; i++) {
        var dtb = table.rows[i].cells[5].innerText;
        if( dtb >=8){
            table.rows[i].style.color = "red";
        }
    }
}
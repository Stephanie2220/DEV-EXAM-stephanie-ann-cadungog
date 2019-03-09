var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FN"] = document.getElementById("FN").value;
    formData["LN"] = document.getElementById("LN").value;
    formData["MN"] = document.getElementById("MN").value;
    formData["BD"] = document.getElementById("BD").value;
    formData["G"] = document.getElementById("G").value;
    formData["MS"] = document.getElementById("MS").value;
    formData["P"] = document.getElementById("P").value;
    formData["DH"] = document.getElementById("DH").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.city;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("FN").value = "";
    document.getElementById("LN").value = "";
    document.getElementById("MN").value = "";
    document.getElementById("BD").value = "";
    document.getElementById("G").value = "";
    document.getElementById("MS").value = "";
    document.getElementById("P").value = "";
    document.getElementById("DH").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FL").value = selectedRow.cells[0].innerHTML;
    document.getElementById("LN").value = selectedRow.cells[1].innerHTML;
    document.getElementById("MN").value = selectedRow.cells[2].innerHTML;
    document.getElementById("BD").value = selectedRow.cells[3].innerHTML;
    document.getElementById("G").value = selectedRow.cells[4].innerHTML;
    document.getElementById("MS").value = selectedRow.cells[5].innerHTML;
    document.getElementById("P").value = selectedRow.cells[6].innerHTML;
    document.getElementById("DH").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FL;
    selectedRow.cells[1].innerHTML = formData.LN;
    selectedRow.cells[2].innerHTML = formData.MN;
    selectedRow.cells[3].innerHTML = formData.BD;
    selectedRow.cells[4].innerHTML = formData.G;
    selectedRow.cells[5].innerHTML = formData.MS;
    selectedRow.cells[6].innerHTML = formData.P;
    selectedRow.cells[7].innerHTML = formData.DH;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FN").value == "") {
        isValid = false;
        document.getElementById("FNValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FNValidationError").classList.contains("hide"))
            document.getElementById("FNValidationError").classList.add("hide");
    }

    return isValid;
}

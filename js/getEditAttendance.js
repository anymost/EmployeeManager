/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var editAttendance = $('#editAttendance');
    var editAttendanceForm = $("#editAttendanceForm");
    var name = editAttendanceForm.children('.employeeName');
    editAttendance.click(function (event) {
        event.preventDefault();
        jQuery.get("../php/getModifyEmployee.php", function (returnData, status) {
            if (status == "success") {
                var allInfo = [];
                var subInfo = {};

                returnData = JSON.parse(returnData);
                for (var i in returnData) {
                    for (var x in returnData[i]) {

                        if (x == "EmployeeID") {
                            subInfo["EmployeeID"] = returnData[i][x];
                        }
                        if (x == "EmployeeName") {
                            subInfo["EmployeeName"] = returnData[i][x];
                        }
                    }
                    allInfo.push(subInfo);
                    subInfo = {};
                }
                name.html("");
                for (var z = 0; z < allInfo.length; z++) {
                    name.append("<option value=" + allInfo[z]["EmployeeID"] + ">" + allInfo[z]["EmployeeID"] + "-" + allInfo[z]["EmployeeName"] + "</option>");
                }
            } else {
                alert("获取信息失败");
            }
        });
    });
});
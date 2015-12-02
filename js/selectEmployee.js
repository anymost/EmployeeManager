/**
 * Created by lenovo on 2015/11/16.
 */
$(function () {
    var selectEmployeeForm = $('#selectEmployeeForm');
    var selectEmployeeContent = $("#selectEmployeeContent");
    var subInformationContent = selectEmployeeContent.children(".subInformationContent");
    selectEmployeeForm.submit(function (event) {
        event.preventDefault();
        var employeeName = selectEmployeeForm.children('.employeeName').val();
        var sex = selectEmployeeForm.children('.sex').val();
        var department = selectEmployeeForm.children('.department').val();
        var title = selectEmployeeForm.children('.title').val();
        var employeeType = selectEmployeeForm.children('.employeeType').val();
        if (employeeName && filterSqlStr(employeeName)) {
            alert("姓名中包含特殊字符，请重新输入！");
            return;
        }
        if (title && filterSqlStr(title)) {
            alert("职位中包含特殊字符，请重新输入");
            return;
        }
        var data = {
            employeeName: employeeName,
            sex: sex,
            departmentID: NameTransferID('department', department),
            title: title,
            employeeTypeID: NameTransferID('employeeType', employeeType),
        };
        jQuery.post('../php/selectEmployee.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    var allInfo = [];
                    var subInfo = {};
                    for (var i in returnData) {
                        for (var x in returnData[i]) {
                            if (x == 1) {
                                subInfo[1] = returnData[i][x];
                            }
                            if (x == 2) {
                                subInfo[2] = returnData[i][x];
                            }
                            if (x == 3) {
                                subInfo[3] = returnData[i][x];
                            }
                            if (x == 4) {
                                subInfo[4] = returnData[i][x];
                            }
                            if (x == 5) {
                                subInfo[5] = returnData[i][x];
                            }
                            if (x == 6) {
                                subInfo[6] = returnData[i][x];
                            }
                            if (x == 7) {
                                subInfo[7] = returnData[i][x];
                            }
                            if (x == 8) {
                                subInfo[8] = returnData[i][x];
                            }
                            if (x == 9) {
                                subInfo[9] = returnData[i][x];
                            }
                            if (x == 10) {
                                subInfo[10] = returnData[i][x];
                            }
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }
                    subInformationContent.html(" ");
                    for (var z = 0; z < allInfo.length; z++) {
                        subInformationContent.append("<div class='row-fluid'><div class='span1 barColor'>" + allInfo[z][1] +
                            "</div><div class='span1 barColor'>" + allInfo[z][2] +
                            "</div><div class='span1 barColor'>" + allInfo[z][3] +
                            "</div><div class='span1 barColor'>" + handleAge(allInfo[z][3]) +
                            "</div><div class='span1 barColor'>" + handleAge(allInfo[z][4]) +
                            "</div><div class='span1 barColor'>" + IDTransferName('degree', allInfo[z][5]) +
                            "</div><div class='span1 barColor'>" + allInfo[z][6] +
                            "</div><div class='span1 barColor'>" + IDTransferName('employeeType', allInfo[z][7]) +
                            "</div><div class='span1 barColor'>" + IDTransferName('department', allInfo[z][8]) +
                            "</div><div class='span1 barColor'>" + allInfo[z][9] +
                            "</div><div class='span1 barColor'>" + allInfo[z][10] + "</div></div>");
                    }
                } else {
                    subInformationContent.html("");
                    subInformationContent.append("<h2 style='text-align: center'>未获取到相关信息</h2>");
                }
            }
            else {
                alert('获取信息失败！');
            }
        });
    });


});
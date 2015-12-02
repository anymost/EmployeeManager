/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var editAttendanceForm = $("#editAttendanceForm");
    var changeAttendance = $("#changeAttendance");
    editAttendanceForm.submit(function (event) {
        event.preventDefault();
        var userID = editAttendanceForm.children(".employeeName").val();
        var year = editAttendanceForm.children(".year").val();
        var month = editAttendanceForm.children(".month").val();
        var data = {
            userID: userID,
            year: year,
            month: month
        }
        setCookie('selectAttendance', userID);
        jQuery.post("../php/checkEditAttendance.php", data, function (returnData, status) {
            var allInfo = [];
            var subInfo = {};
            if (status == 'success') {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    for (var i in returnData) {
                        for (var x in returnData[i]) {
                            if (x == "2") {
                                subInfo[2] = returnData[i][x];

                            }
                            if (x == 'StatusID') {
                                subInfo['StatusID'] = IDTransferName('attendance', returnData[i][x]);
                            }
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }

                    for (var z = 0; z < allInfo.length; z++) {
                        changeAttendance.prepend("<div class='row-fluid'><div class='date span6 barColor'>" + allInfo[z]['2'] + "</div><input type='text' class='span6 barColor status' value=" +
                            allInfo[z]['StatusID'] + "></div>");
                    }
                } else {
                    alert("暂未获取相关信息！");
                }
            } else {
                alert("获取信息失败！");
            }
        })
    });
})
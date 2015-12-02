/**
 * Created by lenovo on 2015/11/16.
 */
$(function () {
    var attendanceInformationForm = $("#attendanceInformationForm");
    var attendanceInformationContent = $("#attendanceInformationContent");
    var subInformationContent = attendanceInformationContent.children(".subInformationContent");
    attendanceInformationForm.submit(function (event) {
        event.preventDefault();
        var year = attendanceInformationForm.children(".year").val();
        var month = attendanceInformationForm.children(".month").val();
        var data = {
            userID: getCookie("userID"),
            year: year,
            month: month
        };

        jQuery.post("../php/getAttendanceInformation.php", data, function (returnData, status) {
            var allInfo = [];
            var subInfo = {};
            if (status == "success") {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    for (var i in returnData) {
                        for (var x in returnData[i]) {

                            if (x == 1) {
                                subInfo[1] = IDTransferName("attendance", returnData[i][x]);
                            }
                            if (x == 2) {
                                subInfo[2] = returnData[i][x];
                            }
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }

                    subInformationContent.html("");
                    for (var z = 0; z < allInfo.length; z++) {
                        subInformationContent.append("<div class='row-fluid'><div class='span6 barColor'>"
                            + allInfo[z][2] + "</div><div class='span6 barColor'>" + allInfo[z][1] + "</div></div>");
                    }
                } else {
                    subInformationContent.html("");
                    subInformationContent.append("<h2 style='text-align: center'>未获取到相关信息！</h2>");
                }

            } else {
                alert("获取培训信息失败");
            }
        });

    });
})
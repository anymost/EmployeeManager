/**
 * Created by lenovo on 2015/11/16.
 */
$(function () {
    var checkInformationForm = $("#checkInformationForm");
    var checkInformationContent = $("#checkInformationContent");
    var subInformationContent = checkInformationContent.children(".subInformationContent");
    checkInformationForm.submit(function (event) {
        event.preventDefault();
        var year = checkInformationForm.children(".year").val();
        var month = checkInformationForm.children(".month").val();
        var data = {
            userID: getCookie("userID"),
            year: year,
            month: month
        };
        jQuery.post("../php/getCheckInformation.php", data, function (returnData, status) {
            var allInfo = [];
            var subInfo = {};
            if (status == "success") {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    for (var i in returnData) {
                        for (var x in returnData[i]) {
                            if (x == 2) {
                                subInfo[2] = IDTransferName('check', returnData[i][x]);
                            }
                            if (x == 3) {
                                subInfo[3] = returnData[i][x];
                            }
                            if (x == 4) {
                                subInfo[4] = returnData[i][x];
                            }
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }

                    subInformationContent.html("");
                    for (var z = 0; z < allInfo.length; z++) {
                        subInformationContent.append("<class='row-fluid'><div class='span4 barColor'>" + allInfo[z][3] + "</div><div class='span4 barColor'>" + allInfo[z][2]
                            + "</div><div class='span4 barColor'>" + allInfo[z][4] + "</div></div>");
                    }
                }
                else {
                    subInformationContent.html("");
                    subInformationContent.append("<h2 style='text-align: center'>未获取到相关信息！</h2>");
                }

            } else {
                alert("获取培训信息失败");
            }
        });

    });
})
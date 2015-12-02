$(function () {
    var trainInformationForm = $("#trainInformationForm");
    var trainInformationContent = $("#trainInformationContent");
    var subInformationContent = trainInformationContent.children(".subInformationContent");
    trainInformationForm.submit(function (event) {
        event.preventDefault();
        var year = trainInformationForm.children(".year").val();
        var month = trainInformationForm.children(".month").val();
        var data = {
            userID: getCookie("userID"),
            year: year,
            month: month
        };
        jQuery.post("../php/getTrainInformation.php", data, function (returnData, status) {
            var allInfo = [];
            var subInfo = {};
            if (status == "success") {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
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
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }
                    subInformationContent.html("");
                    for (var z = 0; z < allInfo.length; z++) {
                        subInformationContent.append("<div class='row-fluid'><div class='span2 barColor'>"
                            + allInfo[z][1] + "</div><div class='span2 barColor'>" + allInfo[z][2] + "</div><div class='span4 barColor'>" + allInfo[z][3]
                            + "</div><div class='span4 barColor'>" + allInfo[z][4] + "</div></div>");
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
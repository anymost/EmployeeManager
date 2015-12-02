/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var selectTrainContent = $('#selectTrainContent');
    var subInformationContent = selectTrainContent.children('.subInformationContent');
    var selectTrain = $('#selectTrain');

    selectTrain.click(function (event) {
        event.preventDefault();
        var selectTrain = $('#selectTrain');
        var allInfo = [];
        var subInfo = {};
        jQuery.get("../php/selectTrain.php", function (returnData, status) {
            if (status == 'success') {
                if (returnData) {
                    returnData = JSON.parse(returnData);
                    for (var i in returnData) {
                        for (var x in returnData[i]) {
                            if (x == 0) {
                                subInfo[0] = returnData[i][x];
                            }
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
                            if (x == 'count')
                                subInfo['count'] = returnData[i][x];
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }
                    subInformationContent.html("");
                    for (var z = 0; z < allInfo.length; z++) {
                        subInformationContent.append("<div class='row-fluid'><div class='span1 barColor'>" +
                            allInfo[z][0] + "</div><div class='span2 barColor'>" +
                            allInfo[z][1] + "</div><div class='span2 barColor'>" +
                            allInfo[z][2] + "</div><div class='span2 barColor'>" +
                            allInfo[z][3] + "</div><div class='span4 barColor'>" +
                            allInfo[z][4] + "</div><div class='span1 barColor'>" +
                            allInfo[z]['count'] + "</div></div >")
                    }

                }
            } else {
                alert("获取培训信息失败！");
            }
        });
    });
})
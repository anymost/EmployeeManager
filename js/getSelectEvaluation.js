/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var selectEvaluationForm = $('#selectEvaluationForm');
    var subInformationContent = $('.subInformationContent');
    selectEvaluationForm.submit(function (event) {
        event.preventDefault();
        var year = selectEvaluationForm.children('.year').val();
        var month = selectEvaluationForm.children('.month').val();
        var data = {
            year: year,
            month: month
        }
        jQuery.post('../php/getSelectEvaluation.php', data, function (returnData, status) {
            if (status == 'success') {
                var allInfo = [];
                var subInfo = {};

                if (returnData) {
                    returnData = JSON.parse(returnData);
                    for (var i in returnData) {
                        for (var x in returnData[i]) {
                            if (x == 1) {
                                subInfo[1] = returnData[i][x];
                            }
                            if (x == 3) {
                                subInfo[3] = returnData[i][x];
                            }
                            if (x == 4) {
                                subInfo[4] = returnData[i][x];
                            }
                            if (x == 'employeeName') {
                                subInfo['employeeName'] = returnData[i][x];
                            }
                            if (x == 'projectName') {
                                subInfo['projectName'] = returnData[i][x];
                            }
                        }
                        allInfo.push(subInfo);
                        subInfo = {};
                    }
                }
                subInformationContent.html("");
                for (var z = 0; z < allInfo.length; z++) {
                    subInformationContent.append("<div class='row-fluid'><div class='span2 barColor'>"
                        + allInfo[z][1] + "</div><div class='span3 barColor'>"
                        + allInfo[z]['employeeName'] + "</div><div class='span3 barColor'>"
                        + allInfo[z][3] + "</div><div class='span3 barColor'>"
                        + allInfo[z]['projectName'] + "</div><div class='span1 barColor'>"
                        + allInfo[z]['4'] + "</div></div>");
                }
            } else {
                alert('获取考核信息失败！');
            }
        });
    });
})
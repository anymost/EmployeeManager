/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var addEvaluationForm = $('#addEvaluationForm');
    var addEvaluation = $("#addEvaluation");
    var projectType = addEvaluationForm.children(".projectType");
    var employee = addEvaluationForm.children(".employee");
    addEvaluation.click(function () {
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
                employee.html("");
                for (var z = 0; z < allInfo.length; z++) {
                    employee.append("<option value=" + allInfo[z]["EmployeeID"] + ">" + allInfo[z]["EmployeeID"] + "-" + allInfo[z]["EmployeeName"] + "</option>");
                }
            } else {
                alert("获取信息失败");
            }
        });
        jQuery.get('../php/getEditEvaluation.php', function (returnData, status) {
            if (status == 'success') {
                var allInfo = [];
                var subInfo = {};
                returnData = JSON.parse(returnData);
                for (var i in returnData) {
                    for (var x in returnData[i]) {
                        if (x == 'EP_ID')
                            subInfo[x] = returnData[i][x];
                        if (x == 'ProjectName')
                            subInfo[x] = returnData[i][x];
                    }
                    allInfo.push(subInfo);
                    subInfo = {};

                }
                projectType.html("");
                for (var z = 0; z < allInfo.length; z++) {
                    projectType.append("<option value=" + allInfo[z]['EP_ID'] + ">" + allInfo[z]["ProjectName"] + "</option>");
                }

            } else {
                alert("获取考核项目失败！");
            }
        });
    });

});
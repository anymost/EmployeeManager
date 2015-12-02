/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var addTrain = $('#addTrain');
    var addTrainFrom = $('#addTrainForm');
    var type = addTrainFrom.children(".type");
    var employee = addTrainFrom.children(".employee");
    addTrain.click(function (event) {
        event.preventDefault();
        jQuery.get("../php/selectTrain.php", function (returnData, status) {
            var subInfo = {};
            var allInfo = [];
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
                    type.html("");
                    for (var z = 0; z < allInfo.length; z++) {
                        type.append("<option value=" + allInfo[z][0] + ">" + allInfo[z][1] + "-" +
                            allInfo[z][2] + "-" + allInfo[z][3] + "-" + allInfo[z][4] + "</option>");
                    }
                }
            } else {
                alert("获取培训信息失败！");
            }
        });
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
    });
});
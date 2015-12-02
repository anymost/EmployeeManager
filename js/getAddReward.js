/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var addRewardForm = $('#addRewardForm');
    var addReward = $('#addReward');
    var employee = addRewardForm.children(".employee");
    addReward.click(function (event) {
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
    })


})
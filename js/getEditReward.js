/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var editReward = $('#editReward');
    var editRewardForm = $('#editRewardForm');
    editReward.click(function (event) {
        event.preventDefault();
        jQuery.get('../php/getEditReward.php', function (returnData, status) {
            if (status == 'success') {
                returnData = JSON.parse(returnData);
                var allInfo = [];
                var subInfo = {};
                for (var i in returnData) {
                    for (var x in returnData[i]) {
                        if (x == "0") {
                            subInfo['0'] = returnData[i][x];
                        }
                        if (x == '1') {
                            subInfo['1'] = returnData[i][x];
                        }
                        if (x == '2') {
                            subInfo['2'] = returnData[i][x];
                        }
                        if (x == '3') {
                            subInfo['3'] = returnData[i][x];
                        }

                    }
                    allInfo.push(subInfo);
                    subInfo = {};
                }
                for (var z = 0; z < allInfo.length; z++) {
                    editRewardForm.prepend("<input type='text'  class='RP_ID' readonly value="
                        + allInfo[z]['0'] + "><input type='text' class='employeeID' value="
                        + allInfo[z]['1'] + "><input type='text' class='type' value="
                        + allInfo[z]['2'] + "><input type='text' class='date' value="
                        + allInfo[z]['3'] + "><br>");
                }
            } else {
                alert("获取奖惩信息失败！");
            }
        });

    });

});
/**
 * Created by lenovo on 2015/11/20.
 */
$(function () {
    var addRewardForm = $("#addRewardForm");

    addRewardForm.submit(function (event) {
        event.preventDefault();

        var employee = addRewardForm.children('.employee').val();
        var date = addRewardForm.children('.date').val();
        var result = addRewardForm.children('.result').val();
        if (!date) {
            alert("日期不能为空，请重新输入！");
            return;
        }
        if (!result || filterSqlStr(result)) {
            alert("奖惩信息为空或包含非法字符,请重新输入！");
        }
        var data = {
            employee: employee,
            date: date,
            result: result
        };
        jQuery.post("../php/setAddReward.php", data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("添加奖惩信息成功！");
                } else {
                    alert("已存在相关奖惩信息，请勿重复添加！");
                }

            } else {
                alert("添加奖惩信息失败！");
            }


        });
    })
})
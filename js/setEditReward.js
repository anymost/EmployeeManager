/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var editRewardForm = $('#editRewardForm');

    editRewardForm.submit(function (event) {
        event.preventDefault();
        var RP_ID = editRewardForm.children(".RP_ID");
        var employeeID = editRewardForm.children(".employeeID");
        var type = editRewardForm.children(".type");
        var date = editRewardForm.children(".date");
        var RP_IDs=[];
        var employeeIDs=[];
        var types=[];
        var dates=[];
        for(var i=0;i<RP_ID.length;i++){
            RP_IDs.push($(RP_ID[i]).val());
            employeeIDs.push($(employeeID[i]).val());
            types.push($(type[i]).val());
            dates.push($(date[i]).val());
        }
        console.log(dates.length);
        var data = {
            RP_ID: RP_IDs,
            employeeID: employeeIDs,
            type: types,
            date: dates
        };

        jQuery.post("../php/setEditReward.php", data, function (returnData, status) {
            if (status == 'success') {
                console.log(returnData);
                /*if (returnData == 'success') {
                    alert("编辑奖惩信息成功！");
                } else {
                    alert("编辑奖惩信息失败！");
                }*/
            } else {
                alert("修改奖惩信息失败！");
            }
        });
    });
});
/**
 * Created by lenovo on 2015/11/20.
 */
$(function () {
    var addTrainForm = $("#addTrainForm");
    addTrainForm.submit(function (event) {
        event.preventDefault();
        var type = addTrainForm.children(".type").val();
        var employee = addTrainForm.children(".employee").val();
        var data = {
            type: type,
            employee: employee
        };
        jQuery.post("../php/setAddTrain.php", data, function (returnData, status) {
            if (status == "success") {
                if (returnData == "success") {
                    alert("修改信息成功！");
                } else {
                    alert("已存在该培训项，请勿重复添加！");
                }

            } else {
                alert("修改信息失败！");
            }


        });

    });
})
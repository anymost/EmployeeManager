/**
 * Created by lenovo on 2015/11/20.
 */
$(function () {
    var addEvaluationForm = $("#addEvaluationForm");


    addEvaluationForm.submit(function (event) {
        event.preventDefault();
        var projectType = addEvaluationForm.children(".projectType").val();
        var employee = addEvaluationForm.children(".employee").val();
        var checkDate = addEvaluationForm.children(".checkDate").val();
        var result = addEvaluationForm.children(".result").val();
        if (!checkDate) {
            alert("日期不能为空，请重新输入！");
            return;
        }
        if (!result || filterSqlStr(result)) {
            alert("结果格式为空，请重新输入！");
        }
        var data = {
            type: projectType,
            employee: employee,
            date: checkDate,
            result: result
        };
        jQuery.post("../php/setAddEvaluation.php", data, function (returnData, status) {
            if (status == "success") {
                if (returnData == 'success') {
                    alert("添加考核信息成功！");
                } else {
                    alert("已存在相关信息，请勿重复添加！");
                }
            } else {
                alert("添加考核信息失败！");
            }


        });
    });

});
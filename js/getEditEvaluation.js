/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var editEvaluation = $('#editEvaluation');
    var editEvaluationContent = $('#editEvaluationContent');
    var subInformationContent = editEvaluationContent.children('.subInformationContent');

    editEvaluation.click(function () {

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
                subInformationContent.html("");
                for (var z = 0; z < allInfo.length; z++) {
                    subInformationContent.prepend(
                        "<input type='text' readonly class='barColor projectID' value=" +
                        allInfo[z]['EP_ID'] + ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "&nbsp;<input type='text' class='barColor projectName' value=" +
                        allInfo[z]['ProjectName'] + "><br>");
                }

            } else {
                alert("获取考核项目失败！");
            }
        });
    });
})
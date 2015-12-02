/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var editEvaluationContent = $('#editEvaluationContent');
    var subInformationContent = editEvaluationContent.children('.subInformationContent');
    var submitEditEvaluation=$('#submitEditEvaluation');

    submitEditEvaluation.click(function (event) {

        event.preventDefault();

        var projectID = $(".projectID");
        var projectName = $(".projectName");
        var projectIDs=[],projectNames=[];
        for(var i=0;i<projectID.length;i++){
            projectIDs[i]=$(projectID[i]).val();
            projectNames[i]=$(projectName[i]).val();
        }

        var allInfo = [];
        var subInfo = {};
        for (var i = 0; i < projectIDs.length; i++) {
            subInfo['projectID'] = projectIDs[i];
            subInfo['projectName'] = projectNames[i];
            allInfo.push(subInfo);
            subInfo ={};
        }
        var data = {
            allInfo: allInfo
        };
        jQuery.post("../php/setEditEvaluation.php", data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("编辑考核信息成功！");

                } else {
                    alert("编辑考核信息失败！");
                }
            } else {
                alert("编辑培训信息失败！");
            }
        });
    });
})
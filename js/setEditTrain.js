/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var editTrainContent = $('#editTrainContent');
    var trainDate = editTrainContent.children('.trainDate');
    var getTrain = editTrainContent.children('.getTrain');
    var editTrainForm = $('#editTrainForm');

    var editTrain = $('#editTrain');
    editTrainForm.submit(function (event) {
        event.preventDefault();
        var startDate = editTrainForm.children('.startDate').val();
        var endDate = editTrainForm.children('.endDate').val();
        var trainType = editTrainForm.children('.trainType').val();
        var trainDescription = editTrainForm.children('.trainDescription').val();
        var trainingID = trainDate.val();
        if (!trainType || filterSqlStr(trainType)) {
            alert("培训类型未添加或者包含非法字符，请重新输入！");
            return;
        }
        if (!trainDescription || filterSqlStr(trainDescription)) {
            alert("培训描述未添加或包含非法字符，请重新输入！");
            return;
        }
        var data = {
            trainingID: trainingID,
            startDate: startDate,
            endDate: endDate,
            trainType: trainType,
            trainDescription: trainDescription
        };
        jQuery.post('../php/editTrain.php', data, function (returnData, status) {
            if (status == 'success') {
                if(returnData=='success'){
                 alert("编辑培训信息成功！");

                 }else{
                 alert("编辑培训信息失败！");
                 }
            } else {
                alert('编辑培训信息失败');
            }
        })

    });
})
/**
 * Created by lenovo on 2015/11/18.
 */
/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var editTrainContent = $('#editTrainContent');
    var trainDate = editTrainContent.children('.trainDate');
    var getTrain = editTrainContent.children('.getTrain');
    var editTrainForm = $('#editTrainForm');
    var startDate = editTrainForm.children('.startDate');
    var endDate = editTrainForm.children('.endDate');
    var trainType = editTrainForm.children('.trainType');
    var trainDescription = editTrainForm.children('.trainDescription');
    var editTrain = $('#editTrain');


    var allInfo = [];
    var subInfo = {};
    editTrain.click(function (event) {
        event.preventDefault();
        subInfo = {};
        allInfo = [];
        jQuery.get("../php/selectTrain.php", function (returnData, status) {
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
                    trainDate.html("");
                    for (var z = 0; z < allInfo.length; z++) {
                        trainDate.append("<option value=" + allInfo[z][0] + ">" + allInfo[z][1] + "-" +
                            allInfo[z][2] + "-" + allInfo[z][3] + "-" + allInfo[z][4] + "</option>");
                    }
                }
            } else {
                alert("获取培训信息失败！");
            }
        });
    });
    getTrain.click(function (event) {
        event.preventDefault();
        var date = trainDate.val();
        for (var x = 0; x < allInfo.length; x++) {
            if (allInfo[x][0] == date) {
                startDate.val(allInfo[x][1]);
                endDate.val(allInfo[x][2]);
                trainType.val(allInfo[x][3]);
                trainDescription.val(allInfo[x][4]);
            }
        }
    })
});

/**
 * Created by lenovo on 2015/11/17.
 */
$(function () {
    var changeAttendance = $('#changeAttendance');

    changeAttendance.submit(function (event) {
        event.preventDefault();
        var dateArray = [];
        var statusArray = [];
        var datas = [];
        var data = [];
        var dateAndStatus = changeAttendance.children('.row-fluid');
        jQuery.map(dateAndStatus, function (item) {

            var date = $(item).children('.date').text();
            var status = NameTransferID('attendance', $(item).children('.status').val());
            dateArray.push(date);
            statusArray.push(status);
        });
        for (var i = 0; i < dateArray.length; i++) {
            data.push(dateArray[i]);
            data.push(statusArray[i]);
            datas.push(data);
            data = [];
        }
        var sendData = {
            userID: getCookie('selectAttendance'),
            data: datas
        }
        jQuery.post("../php/setEditAttendance.php", sendData, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("修改信息成功！");
                } else {
                    alert("修改信息成功！");
                }
            } else {
                alert("修改信息失败");
            }
        });
    });
});
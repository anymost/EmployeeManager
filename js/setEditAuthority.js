/**
 * Created by lenovo on 2015/11/25.
 */
$(function(){
    var editEmployeeAuthority=$('.editEmployeeAuthority');
    var roleName=editEmployeeAuthority.children('.roleName');
    var submitEditAuthority=$('.submitEditAuthority');
    submitEditAuthority.click(function(event){
        event.preventDefault();
        var inputData=roleName.children('input');
        var authorityData=[];
        for(var i=0;i<inputData.length;i++)
        {
            if($(inputData[i]).val()=='yes'){
                authorityData[i]={
                    roleID:$(inputData[i]).attr('text'),
                    value:1
                }
            }else if($(inputData[i]).val()=='no'){
                authorityData[i]={
                    roleID:$(inputData[i]).attr('text'),
                    value:0
                }
            }
            var data={
                employeeID:getCookie('authorityHost'),
                data:authorityData
            }

            jQuery.post("../php/setEditAuthority.php",data,function(returnData,status){
               if(status=='success'){
                   console.log(returnData);
               } else{
                   alert("编辑权限失败，请重试！");
               }
            });

        }
    })

})
/**
 * Created by lenovo on 2015/11/25.
 */
$(function(){
    var editAuthorityForm=$('#editAuthorityForm');
    var editEmployeeAuthority=$('.editEmployeeAuthority');
    var roleName=editEmployeeAuthority.children('.roleName');
    editAuthorityForm.submit(function(event){
       event.preventDefault();
        var editAuthorityItem=$('.editAuthorityItem');
        var employeeName=editAuthorityForm.children(".employeeName").val();
        var data={
            employeeName:employeeName
        };
        setCookie('authorityHost',employeeName);
        var roleID=[];
        var employeeAuthority=new Array(9);
        jQuery.post("../php/checkEditAuthority.php",data,function(returnData,status){
           if(status=='success'){
               returnData=JSON.parse(returnData);
               var authority=returnData[returnData.length-1];
               for(var i=0;i<authority.length;i++){
                   roleID.push(authority[i]['RoleID']);
                   for(var x=0;x<9;x++){
                       if(authority[i][x+2]==1){
                           employeeAuthority[x]=1;
                       }else{
                           employeeAuthority[x]=0;
                       }
                   }
               }
            for(var i=0;i<9;i++){
                if(employeeAuthority[i]==1){
                    $(editAuthorityItem[i]).text('yes');
                }else{
                    $(editAuthorityItem[i]).text('no');
                }
            }




               roleName.empty();
               for(var i=0;i<returnData.length-1;i++){
                       if((returnData[i]['RoleID'] in roleID)){
                           roleName.append("<div class='span5 barColor'>"+returnData[i]['RoleName']+"</div><input  class='span5 barColor' type='text' value='yes' text="+returnData[i]['RoleID']+">");
                       }else{
                           roleName.append("<div class='span5 barColor'>"+returnData[i]['RoleName']+"</div><input class='span5 barColor' type='text' value='no'  text="+returnData[i]['RoleID']+">")
                       }



               }

           }else{
               alert("获取信息失败！");
           }


        });
    });
})
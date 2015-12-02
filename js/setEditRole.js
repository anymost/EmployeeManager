/**
 * Created by lenovo on 2015/11/22.
 */

$(function(){

    var editRoleContent=$('#editRoleContent');

    var editRoleForm=$('#editRoleForm');

    editRoleForm.submit(function(event){
        event.preventDefault();
        var roleName=editRoleContent.children('.roleName');
        var roleID=roleName.val();
        var arrays=new Array(9);
        var editRoleItem=$('.editRoleItem');

        for(var i=0;i<10;i++){
            editRoleItem[i]=$(editRoleItem[i]);
        }
        for(var i=1;i<10;i++){
            if(editRoleItem[i].val()=='yes'){
                arrays[i-1]=1;
            }else if(editRoleItem[i].val()=='no'){
                arrays[i-1]=0;
            }

        }
        for(var i=0;i<arrays.length;i++){
            console.log(arrays[i]);
        }
        var data={
            roleID:roleID,
            authority:arrays
        };
        jQuery.post("../php/setEditRole.php",data,function(returnData,status){
           if(status=='success'){
               if(returnData=='success'){
                   alert("修改角色信息成功！");
               }else{
                   console.log(returnData);
               }

           } else{
               alert('编辑角色信息失败，请重试!');
           }
        });

    })

});
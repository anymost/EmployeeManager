/**
 * Created by lenovo on 2015/11/25.
 */
$(function(){

        $(document).on('click','input.handleAuthority',function(){

           event.preventDefault();
            var authorityID=$(this).attr('text');
            var presentAuthority=getCookie('presentAuthority');
            var data={
                authorityID:authorityID,
                presentAuthority:presentAuthority
            };
            jQuery.post("../php/setSelectAuthority.php",data,function(returnData,status){
               if(status=='success'){
                   console.log(returnData);
               } else{
                   console.log("编辑失败，请重试！");
               }

            });
        });



});
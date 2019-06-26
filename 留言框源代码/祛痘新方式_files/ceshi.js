
// 微信号：<span class="wx_h"></span>
// 祛痘师姓名：<span class="wx_name"></span>
// <img src="" alt="" class="wx_img">
//  var myKey="5a14e3330f03471c"; 
    var wx_h=[],wx_name=[],wx_img=[];
    var nowDateHours = new Date().getHours();
    $.ajax({
        url:"http://zx.server.douboshi.cn/index.php?s=Extend/WXConfig/getJson",
        success:function(data) {
            var jsonData = JSON.parse(data),
                myJsonData = jsonData[myKey];
            if (myJsonData != undefined) {
                for (var i = 0; i < myJsonData.length; i++) {
                    if (nowDateHours >= 0 && nowDateHours < 17) {
                        if (myJsonData[i].fd == 1 || myJsonData[i].fd == 0) {
                            wx_h.push(myJsonData[i].wx);
                            wx_name.push(myJsonData[i].name);
                            wx_img.push(myJsonData[i].head);
                        }
                    } else {
                        if (myJsonData[i].fd == 2 || myJsonData[i].fd == 0) {
                            wx_h.push(myJsonData[i].wx);
                            wx_name.push(myJsonData[i].name);
                            wx_img.push(myJsonData[i].head);
                        }
                    }
                }
                var wx_index = Math.floor((Math.random() * wx_h.length)),
                    wx_h_index = wx_h[wx_index],
                    wx_name_index = wx_name[wx_index],
                    wx_img_index = wx_img[wx_index];

                $(".wx_h").text(wx_h_index);
                $(".wx_name").text(wx_name_index);
                if(wx_img_index==""){
                    $(".wx_img").hide();  
                }else{
                    $(".wx_img").attr("src", wx_img_index);
                }
            }
        }
    });


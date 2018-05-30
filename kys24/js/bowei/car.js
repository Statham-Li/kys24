/**
 * Created by asus on 2017/5/23.
 */
let commodityid = 77;

url = "http://demoncirno.cn/kys24";
function min1(obj){
    "use strict";
    let parent = obj.parentNode;
    let value =parseInt(parent.children[1].value);
    value -= 1;
    if(value<1){
        value = 1;
    }
    parent.children[1].value = value;
    total(parent);
    checkout_sum();
    $.ajax({
        type: "put",
        url: "/kys24/cart/commodities",
        data: 'commodityid=100,num=5',

    });
}
function add1(obj){
    "use strict";
    let parent = obj.parentNode;
    let value =parseInt(parent.children[1].value);
    value+=1;
    parent.children[1].value = value;
    total(parent);
    checkout_sum();

}
function total(obj) {
    if(!obj.children[1].value){
        obj.children[1].value = 1;
    }
    obj.nextSibling.innerHTML = (parseFloat(obj.previousSibling.innerHTML)*parseFloat(obj.children[1].value)).toFixed(2);
    checkout_sum();

}

function deleteElement(obj){
    let r = confirm("确定删除该商品？");
    if(r){
        obj.parentNode.parentNode.parentNode.remove();
    }
    
}

function checkout_sum() {

    let checked = $('.goods_item .checked');
    let n;
    let totals=0;
    for(n=0;n<checked.length;n++){
        if(checked[n].checked === true){
            totals += parseFloat(checked[n].parentNode.lastChild.lastChild.previousSibling.innerHTML);
        }
    }
    $('.checkout_sum')[0].innerHTML = totals;
}

$(".allchecked").click(function () {    
    if($(this).attr("checked")){
        $(".checked").each(function () {
            $(this).attr("checked", true);
            // $(this).next().css({ "background-color": "#3366cc", "color": "#ffffff" });
        });
        checkout_sum();     

    }
    else
    {
        $(".checked").each(function () {
            if ($(this).attr("checked")) {
                $(this).attr("checked", false);
                //$(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
            } else {
                $(this).attr("checked", true);
                //$(this).next().css({ "background-color": "#3366cc", "color": "#000000" });
            }
        });
        checkout_sum();
    }
});





let idlist;
$.ajax({
    type: "post",
    url: '/kys24/userController/login?userPhone=152010&userPassword=123456789',
    data: '',
    dataType: "json",
    // crossDomain: true,
    success: function (result) {
        // console.log(result);
        if(result.info === 1){
            $.ajax({
                type:"get",
                url:"/kys24/cart/show",
                dataType:"json",
                success:function(msg){
                    // console.log(msg);
                    let list = msg.data;//拿到list数组
                    // console.log(list);
                    if(list === null){
                        let text = '购物车为空';
                        $(text).appendTo(".goods_item");
                    }   
                    else{
                        for(let i=0;i<list.length;i++){
                            let numArray = list[i];
                            numArray.price = (numArray.price).toFixed(2);
                            let text = "<li><input type='checkbox' class='checked' onclick='checkout_sum()' />"+
                                "<img src='"+ numArray.commodityPicture +"' class=''>"+
                                    "<span class='goods_title'>"+numArray.commodityname+"</span>"+
                                    "<ul>"+
                                        "<li>"+numArray.price+"</li><li>"+
                                        "<input type='button' class='min1' onclick='min1(this)' value='-'/><input onchange='total(this.parentNode)' type='text' value='1'><input onclick='add1(this)' type='button' class='add1' value='+'/>"+
                                    "</li><li class='total'>1</li><li><a onclick='deleteElement(this)'>删除</a></li></ul></li>"
                                console.log(list[i]);
                                // idlist[i] = list[i].commodityid;    
                                $(text).appendTo(".goods_item");
                                let a = $('.goods_item')[0].children[i].lastChild.children[0].innerHTML;
                                $('.goods_item')[0].children[i].lastChild.children[2].innerHTML = a;
                            }
                        }
                    },
                error:function(){
                    console.log("调用数据失败！");
                }
            });
        }
        else{
            alert('please sign in before!');
        }
    },
    error: function () {
        "use strict";

    }
});
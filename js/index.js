/**
 * Created by admin on 17/5/11.
 */
$(function() {



//     var getContent = function(url, callback) {
// //                $.ajax({
// //                    type: "GET",
// //                    url: url,
// //                    dataType: "html",
// //                    success: function(data) {
// //                        var main = $(data);
//
//         window.location.href=url;
        var main = $('.main_content');
        $('.third-catalog').parent().remove();
        $('.four-catalog').parent().remove();
        $('.first_catalog').html(main.data('first-catalog'));
        $('.second_catalog').html(main.data('second-catalog'));
        if (main.data('third-catalog')) {
            $('.breadcrumb').append('<li><a href="#" class="third-catalog">' + main.data('third-catalog') + '</a><span class="divider"></span> </li>');
        }
        if (main.data('four-catalog')) {
            $('.breadcrumb').append('<li><a href="#" class="third-catalog">' + main.data('four-catalog') + '</a><span class="divider"></span> </li>');
        }
        $('title').html(main.data('title'));
        // $(".main_content").replaceWith(main);
        $('.datepicker-here').datepicker({
            language: 'en'
        });

        $('#gj_add .checks').click(function() {//选框
            $(this).parent().find('.checks').not(this).removeClass('active');
            $(this).toggleClass('active');
        });
        $('.actionlist .btn').click(function() {//按钮颜色
            $(this).toggleClass('btnactive')
        });
        //互斥
        $('#gdcl .actionlist .btn').off().on('click',function() {
            $(this).parent().find('.btn').removeClass('btnactive');
            $(this).addClass('btnactive')
        });
        $('#zyywfp .modal').on('click','.btn-default',function () {
            $(this).toggleClass('btnactive')
        })
        $('.ximg').click(function() {//删除按钮
            $(this).parents('.main_content7_elem').remove()
        });
        $('#gj_add .item_sel li img').click(function() {//删除按钮
            $(this).parent().remove()
        });
        $('.fujian i').click(function() {//删除按钮
            $(this).parents('.fujian').remove()
        });
        $('#switch li img,#switch .item-footer img').click(function() {//proxy开关
            // alert($(this).parents('.switch1').index());
            $('.modal button:first-child').attr('data-switch',$(this).parents('.switch1').index());
        });
        var ron=0;
        $('.modal button:first-child').off().on('click',function () {
            ron++;
            var n=$(this).attr('data-switch');
            $('#switch>div').eq(n).find('img:last').css({'transform': 'rotateY('+180*ron+'deg)'});
        });
//
        $('.dropdown-menu li').click(function() {//下拉菜单
            $(this).parents('.btn-group').find('button:first').html($(this).text());
        });

        //tooltip
        $('.index6 .fuwuqi_list .btn').tooltip({
            container:'body',
            title:function () {
                 return $(this).text()
            }
        });
        //xnzb
        $('.guize span').click(function () {
            if($(this).text()==='性能指标告警规则'){
                if($('.xnzb').length>0){
                    $('.xnzb').removeClass('xnzb')
                }else{
                    $('.biaoge ').addClass('xnzb')
                }
            }else{
                $('.biaoge ').addClass('xnzb')
            }

        })

    // deleteBtn
    var $m_btn = $('.btn:contains(删除)');//$("p:contains(is)")
    var $modal = $('.modal');
    $m_btn.on('click', function(){
        $modal.modal({backdrop: 'static'});
    });


//                        callback && callback();
//                    },
//                    error: function(error) {
//                        alert(error.message);
//                    }
//                });
//     };
//     $('.nav>li a').click(function(e) {
//         e.preventDefault();
//         var href = $(this).attr('href');
//
//         if (!(href.indexOf('#') > -1 || !href)) {} else {
//             alert("未添加");
//             return;
//         }
//         getContent(href);
//
//     });
    // getContent('Proxy.html');
})

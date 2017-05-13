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
        $('.ximg').click(function() {//删除按钮
            $(this).parents('.main_content7_elem').remove()
        });
        $('#gj_add .item_sel img').click(function() {//删除按钮
            $(this).parent().remove()
        });
        $('.fujian i').click(function() {//删除按钮
            $(this).parents('.fujian').remove()
        });
//                        $('header .headright span').mousemove(function() {//删除按钮
//                            debugger
//                            $(this).find('img').attr('src',($(this).find('img').attr('src').split('.')[0]+1)+'.png')
//                        });
        $('.dropdown-menu li').click(function() {//下拉菜单
            $(this).parents('.btn-group').find('button:first').html($(this).text());
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

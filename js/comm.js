//查詢結果，核取方塊選取後整列顯示綠色
$(document).ready(function(){
$(".checkedgreen").click(function(){
    if($(this).is(":checked"))
    $(this).parents('tr').addClass("myStrong");
    else
    $(this).parents('tr').removeClass("myStrong");

})

//按一下上方核取方塊全選

     $("#selectAll").click(function(){
      if($("#selectAll").prop("checked")){//如果全選按鈕有被選擇的話（被選擇是true）
       $(".checkedgreen").prop("checked",true);//把所有的核取方框的property都變成勾選
       $(".checkedgreen").parents('tr').addClass("myStrong");
      }else{
       $(".checkedgreen").prop("checked",false);//把所有的核取方框的property都取消勾選
       $(".checkedgreen").parents('tr').removeClass("myStrong");
      }
     })
   

//dataTable轉中文設定
$.extend($.fn.dataTable.defaults, {
    dom: "<'pagination'pli>t",
    autoWidth: false,
    searching: false,
    pagingType: "input",
    ordering:"true",


    pageLength: 2,

    language: {
      processing: "處理中...",
      loadingRecords: "載入中...",
      lengthMenu: "_MENU_ ",
      zeroRecords: "無資料",
      info: " 第 _START_ - _END_ 筆，共 _TOTAL_ 筆",
      infoEmpty: "第 0 到 0 筆，共 0 筆",
      infoFiltered: "(從 _MAX_ 項結果中過濾)",
      infoPostFix: "",
      search: "搜尋:",
      paginate: {
        first: "<i class='fas fa-step-backward'></i>",
        previous: "<i class='fas fa-backward'></i>",
        next: "<i class='fas fa-forward'></i>",
        last: "<i class='fas fa-step-forward'></i>",
        info: "第 _INPUT_ 頁/共 _TOTAL_ 頁",
      },
      aria: {
        sortAscending: ": 升冪排列",
        sortDescending: ": 降冪排列",
      },
    },
  });

//遮罩

    $("#openWall").click(function(){
        $("div.wall").toggle();
        $("div.wallMsg").toggle();
    })


//訊息區點一下長高

    $(".footer").click(function(){
        $(".infoarea").toggleClass("newheight");
       })
  

//左邊選單跳出
$(function () {
    $(".sidenav .tree").on("click", ".caret", function () {
      $(this)
        .toggleClass("caret-down")
        .siblings(".nested")
        .toggleClass("active");
    });
    $(".sidenav-button").click(function () {
      $(".sidenav").animate({ width: "toggle" }, 100);
    });
  })
})


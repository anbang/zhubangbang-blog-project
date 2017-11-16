var $Header=$("#header");
var $Bodyer=$("#bodyer");

var pageUtility={
    init:function () {
        this.header();
        this.catalogLink();
    },
    header:function () {
        var $link=$Header.find(".j-header-main-link");
        var colorAry=["#418bca","#5bb85d","#5bc0de","#efad4d","#d9544f","#ec6941","#32b16c"];
        $link.each(function (index, val) {
            var randomIndex = Math.floor(Math.random() * colorAry.length);
            $(this).css("backgroundColor",colorAry[randomIndex])
        });
    },
    catalogLink:function () {
        /*var fixedLeft=$Header.find(".j-header-left").offset().left;
        $Bodyer.find(".j-bodyer-left-menu").css({left:fixedLeft});
        $(window).resize(function(){
            fixedLeft=$Header.find(".j-header-left").offset().left;
            $Bodyer.find(".j-bodyer-left-menu").css({left:fixedLeft});
        });*/
    }
};
pageUtility.init();

var $Header=$("#header");
var $Bodyer=$("#bodyer");

var $headerMain=$Header.find(".j-header-main");
var $headerLeft=$Header.find(".j-header-left");
var $BodyerLeft=$Bodyer.find(".j-bodyer-left-menu");

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
        var fixedLeft=$headerMain.offset().left;
        $BodyerLeft.css({left:fixedLeft});
        $headerLeft.css({left:fixedLeft});
        $(window).resize(function(){
            fixedLeft=$headerMain.offset().left;
            $BodyerLeft.css({left:fixedLeft});
            $headerLeft.css({left:fixedLeft});
        });
    }
};
pageUtility.init();

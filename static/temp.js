$(document).ready(function(){
    $(".explore").click(function(){
        //var id = "#" + $(this).attr("title");
        var item = $(this).parent().next();
        $(item).toggle();
    });
    
    $("#trend-nav li").click(function(){
        var content = $(this).text();
        if (content === 'Artist'){
            $("#artist-trend").show();
            $("#track-trend").hide();           
        }
        else if (content === "Song"){
            $("#artist-trend").hide();
            $("#track-trend").show();
            
        };
        $(this).css({"font-weight": "bold",
                     "border-bottom": "3px red solid"});
        $(this).siblings().css({"font-weight":"normal",
                                "border-bottom":"0px"});
    });
    
    $(".trend-row").hover(
        function(){
            $(this).css({"border-top": "1px solid",
                         "border-bottom": "1px solid",
                         "background": "grey" });
            $(this).find(".track-name a").css({"text-decoration":"underline"});
            $(this).find(".artist-name a").css({"text-decoration":"underline"});
        },
        function(){
            $(this).css({"border-top": "0px",
                         "border-bottom": "1px solid #eaeaea",
                         "background": "none"});
            $(this).find(".track-name a").css({"text-decoration": "none"});
            $(this).find(".artist-name a").css({"text-decoration":"none"});
        }
    );
    
    $(".table-title").hover(
        function(){
            $(this).find(".explore").css({"text-decoration": "underline"});
        },
        function(){
            $(this).find(".explore").css({"text-decoration": "none"});
        }
    
    );
    
});


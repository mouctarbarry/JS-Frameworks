$(document).ready(function (){

    let $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        init = function (){
            bindEvent();
            if (validIndex(openedIndex)){
                animatedItem($mainMenuItems.eq(openedIndex), true, 700);
            }
        };
        let bindEvent = function (){
            $mainMenuItems.children(".images").click(function (){
                let newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
            });
        };
        let $buttons = $(".button");
        $buttons.hover(
            function(){
                $(this).addClass("hovered")
            },
            function (){
                $(this).removeClass("hovered")
            }
            );
        $buttons.click(function (){
            let newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
        let validIndex = function (indexToCheck){
            return (indexToCheck >= 0 ) && (indexToCheck < totalMainMenuItems);
        }
        let animatedItem = function ($item, toOpen, speed){
            let $colorImage = $item.find(".color"),
                itemParam = toOpen ? {width: "420px"}: {width: "140px"},
                colorImageParam = toOpen ? {left:"0px"}: {left: "140px"};

            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        };

        let checkAndAnimateItem = function (indexToCheckAndAnimate){
            if (openedIndex===indexToCheckAndAnimate){
                animatedItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            }else {
                if (validIndex(indexToCheckAndAnimate)){
                    animatedItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animatedItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
        };

    init();
});







































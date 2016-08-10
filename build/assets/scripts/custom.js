
var navClassSelector=".mainMenu";var labelClassSelector=".menuTitle";var toggleChildrenClass="toggleChildren";var responsiveMenu=function(a){$(navClassSelector+"> ul").css({"max-height":"100%",display:"none"});$(labelClassSelector).click(function(){$(navClassSelector+"> ul").slideToggle()})};var forceUncheck=function(){$(navClassSelector+" ul a").click(function(){$("#toggleMenu").prop("checked",false)})};var toggleChildren=function(){$(navClassSelector+"> ul > li").each(function(){if($(this).children("ul").length>0){$(this).prepend('<a class="'+toggleChildrenClass+'" href="#"></a>')}else{}});$(navClassSelector+"> ul ul").hide();$(navClassSelector+" ."+toggleChildrenClass).click(function(){$(this).toggleClass("contract");$(this).siblings("ul").toggle();return false})};

var preventOrphans = function(element) {
	//Would suggest this is used for title text mainly
	$(element).each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});
}

function beeC(){
  console.log(
    "%c🍌🐝 %c© Copyright BananaBee 2016",
      "font-size:50pt;",
      "font-size: 20pt; background:darkgreen; color:limegreen; border-radius:5px; padding: 5px; line-height: 80px;"
  )
};



(function() {

	beeC();

})();
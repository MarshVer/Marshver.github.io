$(function(){let t=function(){let t="animated pulse";$("article .article").hover(function(){$(this).addClass(t)},function(){$(this).removeClass(t)})};t();$(".sidenav").sidenav();let e=function(t,e){let i=$("#"+t);if(i.length===0){return}let n=i.width();if(n>=450){n=n+21}else if(n>=350&&n<450){n=n+18}else if(n>=300&&n<350){n=n+16}else{n=n+14}$("#"+e).width(n)};let i=function(){$(".content").css("min-height",window.innerHeight-165)};let n=function(){e("navContainer");e("artDetail","prenext-posts");i()};n();$(window).resize(function(){n()});$("#articles").masonry({itemSelector:".article"});AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});let l=function(){$("#articleContent a").attr("target","_blank");$("#articleContent img").each(function(){let t=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+t+'" data-sub-html=".caption"></div>');$(this).addClass("img-shadow img-margin");let e=$(this).attr("alt");let i=$(this).attr("title");let n="";if(e===undefined||e===""){if(i!==undefined&&i!==""){n=i}}else{n=e}if(n!==""){let t=document.createElement("div");t.className="caption";let e=document.createElement("b");e.className="center-caption";e.innerText=n;t.appendChild(e);this.insertAdjacentElement("afterend",t)}});$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:true});$(document).find("img[data-original]").each(function(){$(this).parent().attr("href",$(this).attr("data-original"))});const i=window.document.querySelector(".progress-bar");if(i){new ScrollProgress((t,e)=>{i.style.width=e*100+"%"})}};l();$(".modal").modal();$("#backTop").click(function(){$("body,html").animate({scrollTop:0},400);return false});let a=$("#headNav");let s=$(".top-scroll");o($(window).scrollTop());$(window).scroll(function(){let t=$(window).scrollTop();o(t)});function o(t){let e=100;if(t<e){a.addClass("nav-transparent");s.slideUp(300)}else{a.removeClass("nav-transparent");s.slideDown(300)}}$(".nav-menu>li").hover(function(){$(this).children("ul").stop(true,true).show();$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(true,true).hide();$(".nav-item.nav-show").removeClass("nav-show")});$(".m-nav-item>a").on("click",function(){if($(this).next("ul").css("display")=="none"){$(".m-nav-item").children("ul").slideUp(300);$(this).next("ul").slideDown(100);$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")}else{$(this).next("ul").slideUp(100);$(".m-nav-item.m-nav-show").removeClass("m-nav-show")}});$(".tooltipped").tooltip()});
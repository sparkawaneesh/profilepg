/***************************************************
		FORM VALIDATION JAVASCRIPT
***************************************************/
$(document).ready(function() {
    $('form#contact_form').submit(function() {
        $('form#contact_form .error').remove();
        var hasError = false;
        $('.requiredField').each(function() {
            if (jQuery.trim($(this).val()) == '') {
                var labelText = $(this).prev('label').text();
                $(this).parent().append('<span class="error">Please enter your ' + labelText + '</span>');
                $(this).addClass('inputError');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">Please a valid ' + labelText + '</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            $('form#contact_form input.submit').fadeOut('normal', function() {
                $(this).parent().append('');
            });
            var formInput = $(this).serialize();
            $.post($(this).attr('action'), formInput, function(data) {
                $('form#contact_form').slideUp("fast", function() {
                    $(this).before('<p class="success">Thank you!<br/>Your email was sent successfully.<br/>I will contact you as soon as possible.</p>');
                });
            });
        }

        return false;
    });
});

/***************************************************
		SMOOTH SCROLL
***************************************************/

$(function() {
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });
});

/***************************************************
		EASING
***************************************************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ¨© 2008 George McGinley Smith
 * All rights reserved.
 */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/***************************************************
		ENLARGED IMAGES
***************************************************/
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
! function(e) {
    function t() {
        var e = location.href;
        return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function p() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + e + "=([^&#]*)",
            p = new RegExp(i),
            o = p.exec(t);
        return null == o ? "" : o[1]
    }
    e.prettyPhoto = {
        version: "3.1.6"
    }, e.fn.prettyPhoto = function(a) {
        function s() {
            e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: f.contentHeight,
                width: f.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
                width: f.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
            }), m(), a.ajaxcallback()
        }

        function n(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show(), t()
            })
        }

        function r(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function l(e, t) {
            if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
                for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
                (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(b),
                containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(y),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function d(t, i) {
            t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
        }

        function h(e) {
            return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function _() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function g() {
            I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function u() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                settings.modal || e.prettyPhoto.close()
            }), e("a.pp_close").bind("click", function() {
                return e.prettyPhoto.close(), !1
            }), settings.allow_expand && e("a.pp_expand").bind("click", function() {
                return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function() {
                    e.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        a = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, a);
        var f, v, y, w, b, k, P, x = this,
            $ = !1,
            I = e(window).height(),
            j = e(window).width();
        return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), g()
        }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault()
            }
        }), e.prettyPhoto.initialize = function() {
            return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
            }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
            }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function(t) {
                return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
            }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function() {
                c()
            }), e.prettyPhoto.open(), !1
        }, e.prettyPhoto.open = function(t) {
            return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            f = l(imgPreloader.width, imgPreloader.height), s()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        f = l(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            i = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
                        });
                        break;
                    case "custom":
                        f = l(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
            }), !1
        }, e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function() {
                e.prettyPhoto.open()
            })
        }, e.prettyPhoto.changeGalleryPage = function(e) {
            "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, e.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return e.prettyPhoto.stopSlideshow(), !1
            }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
        }, e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            }), clearInterval(P), P = void 0
        }, e.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
            }))
        }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;

/***************************************************
		PORTFOLIO PAGINATION
***************************************************/
/* 	Easy Paginate 1.0 - jQuery plugin written by Alen Grakalic http://cssglobe.com/
 *	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com) Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
 */
(function($) {
    $.fn.easyPaginate = function(_1) {
        var _2 = {
            step: 4,
            delay: 100,
            numeric: true,
            nextprev: true,
            controls: "pagination",
            current: "current"
        };
        var _1 = $.extend(_2, _1);
        var _3 = _1.step;
        var _4, _5;
        var _6 = $(this).children();
        var _7 = _6.length;
        var _8, _9, _a;
        var _b = 1;

        function _c() {
            _4 = ((_b - 1) * _3);
            _5 = _4 + _3;
            $(_6).each(function(i) {
                var _d = $(this);
                _d.hide();
                if (i >= _4 && i < _5) {
                    setTimeout(function() {
                        _d.fadeIn("fast");
                    }, (i - (Math.floor(i / _3) * _3)) * _1.delay);
                }
                if (_1.nextprev) {
                    if (_5 >= _7) {
                        _9.fadeOut("fast");
                    } else {
                        _9.fadeIn("fast");
                    }
                    if (_4 >= 1) {
                        _a.fadeIn("fast");
                    } else {
                        _a.fadeOut("fast");
                    }
                }
            });
            $("li", "#" + _1.controls).removeClass(_1.current);
            $("li[data-index=\"" + _b + "\"]", "#" + _1.controls).addClass(_1.current);
        };
        this.each(function() {
            _8 = this;
            if (_7 > _3) {
                var _e = Math.floor(_7 / _3);
                if ((_7 / _3) > _e) {
                    _e++;
                }
                var ol = $("<ol id=\"" + _1.controls + "\"></ol>").insertAfter(_8);
                if (_1.nextprev) {
                    _a = $("<li class=\"prev\">Previous</li>").hide().appendTo(ol).click(function() {
                        _b--;
                        _c();
                    });
                }
                if (_1.numeric) {
                    for (var i = 1; i <= _e; i++) {
                        $("<li data-index=\"" + i + "\">" + i + "</li>").appendTo(ol).click(function() {
                            _b = $(this).attr("data-index");
                            _c();
                        });
                    }
                }
                if (_1.nextprev) {
                    _9 = $("<li class=\"next\">Next</li>").hide().appendTo(ol).click(function() {
                        _b++;
                        _c();
                    });
                }
                _c();
            }
        });
    };
})(jQuery);

/***************************************************
		BACK TO TOP LINK
***************************************************/
$(document).ready(function() {
    $('#to-top').hide();

    var offset = $(document).scrollTop();
    var offsetBottom = offset + ($(window).height() - 70);

    $('#to-top').css({
        'top': offsetBottom
    });
    if (offset > 10) {
        $('#to-top').fadeIn(900);
    }
    $(window).scroll(function() {

        var offset = $(document).scrollTop();
        offsetBottom = offset + ($(window).height() - 70);

        if (offset > 1) {
            $('#to-top').fadeIn(900);
        } else {
            $('#to-top').fadeOut(900);
        }

        $('#to-top').animate({
            top: offsetBottom
        }, {
            duration: 500,
            queue: false
        });
    });
});


/***************************************************
		TOOLTIPS
***************************************************/
/*
 * TipTip - Copyright 2010 Drew Wilson -  www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 * Version 1.3   -   Updated: Mar. 23, 2010
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    $.fn.tipTip = function(options) {
        var defaults = {
            activation: "hover",
            keepAlive: false,
            maxWidth: "200px",
            edgeOffset: 3,
            defaultPosition: "bottom",
            delay: 400,
            fadeIn: 200,
            fadeOut: 200,
            attribute: "title",
            content: false,
            enter: function() {},
            exit: function() {}
        };
        var opts = $.extend(defaults, options);
        if ($("#tiptip_holder").length <= 0) {
            var tiptip_holder = $('<div id="tiptip_holder" style="max-width:' + opts.maxWidth + ';"></div>');
            var tiptip_content = $('<div id="tiptip_content"></div>');
            var tiptip_arrow = $('<div id="tiptip_arrow"></div>');
            $("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))
        } else {
            var tiptip_holder = $("#tiptip_holder");
            var tiptip_content = $("#tiptip_content");
            var tiptip_arrow = $("#tiptip_arrow")
        }
        return this.each(function() {
            var org_elem = $(this);
            if (opts.content) {
                var org_title = opts.content
            } else {
                var org_title = org_elem.attr(opts.attribute)
            }
            if (org_title != "") {
                if (!opts.content) {
                    org_elem.removeAttr(opts.attribute)
                }
                var timeout = false;
                if (opts.activation == "hover") {
                    org_elem.hover(function() {
                        active_tiptip()
                    }, function() {
                        if (!opts.keepAlive) {
                            deactive_tiptip()
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function() {}, function() {
                            deactive_tiptip()
                        })
                    }
                } else if (opts.activation == "focus") {
                    org_elem.focus(function() {
                        active_tiptip()
                    }).blur(function() {
                        deactive_tiptip()
                    })
                } else if (opts.activation == "click") {
                    org_elem.click(function() {
                        active_tiptip();
                        return false
                    }).hover(function() {}, function() {
                        if (!opts.keepAlive) {
                            deactive_tiptip()
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function() {}, function() {
                            deactive_tiptip()
                        })
                    }
                }

                function active_tiptip() {
                    opts.enter.call(this);
                    tiptip_content.html(org_title);
                    tiptip_holder.hide().removeAttr("class").css("margin", "0");
                    tiptip_arrow.removeAttr("style");
                    var top = parseInt(org_elem.offset()['top']);
                    var left = parseInt(org_elem.offset()['left']);
                    var org_width = parseInt(org_elem.outerWidth());
                    var org_height = parseInt(org_elem.outerHeight());
                    var tip_w = tiptip_holder.outerWidth();
                    var tip_h = tiptip_holder.outerHeight();
                    var w_compare = Math.round((org_width - tip_w) / 2);
                    var h_compare = Math.round((org_height - tip_h) / 2);
                    var marg_left = Math.round(left + w_compare);
                    var marg_top = Math.round(top + org_height + opts.edgeOffset);
                    var t_class = "";
                    var arrow_top = "";
                    var arrow_left = Math.round(tip_w - 12) / 2;
                    if (opts.defaultPosition == "bottom") {
                        t_class = "_bottom"
                    } else if (opts.defaultPosition == "top") {
                        t_class = "_top"
                    } else if (opts.defaultPosition == "left") {
                        t_class = "_left"
                    } else if (opts.defaultPosition == "right") {
                        t_class = "_right"
                    }
                    var right_compare = (w_compare + left) < parseInt($(window).scrollLeft());
                    var left_compare = (tip_w + left) > parseInt($(window).width());
                    if ((right_compare && w_compare < 0) || (t_class == "_right" && !left_compare) || (t_class == "_left" && left < (tip_w + opts.edgeOffset + 5))) {
                        t_class = "_right";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = -12;
                        marg_left = Math.round(left + org_width + opts.edgeOffset);
                        marg_top = Math.round(top + h_compare)
                    } else if ((left_compare && w_compare < 0) || (t_class == "_left" && !right_compare)) {
                        t_class = "_left";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = Math.round(tip_w);
                        marg_left = Math.round(left - (tip_w + opts.edgeOffset + 5));
                        marg_top = Math.round(top + h_compare)
                    }
                    var top_compare = (top + org_height + opts.edgeOffset + tip_h + 8) > parseInt($(window).height() + $(window).scrollTop());
                    var bottom_compare = ((top + org_height) - (opts.edgeOffset + tip_h + 8)) < 0;
                    if (top_compare || (t_class == "_bottom" && top_compare) || (t_class == "_top" && !bottom_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_top"
                        } else {
                            t_class = t_class + "_top"
                        }
                        arrow_top = tip_h;
                        marg_top = Math.round(top - (tip_h + 5 + opts.edgeOffset))
                    } else if (bottom_compare | (t_class == "_top" && bottom_compare) || (t_class == "_bottom" && !top_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_bottom"
                        } else {
                            t_class = t_class + "_bottom"
                        }
                        arrow_top = -12;
                        marg_top = Math.round(top + org_height + opts.edgeOffset)
                    }
                    if (t_class == "_right_top" || t_class == "_left_top") {
                        marg_top = marg_top + 5
                    } else if (t_class == "_right_bottom" || t_class == "_left_bottom") {
                        marg_top = marg_top - 5
                    }
                    if (t_class == "_left_top" || t_class == "_left_bottom") {
                        marg_left = marg_left + 5
                    }
                    tiptip_arrow.css({
                        "margin-left": arrow_left + "px",
                        "margin-top": arrow_top + "px"
                    });
                    tiptip_holder.css({
                        "margin-left": marg_left + "px",
                        "margin-top": marg_top + "px"
                    }).attr("class", "tip" + t_class);
                    if (timeout) {
                        clearTimeout(timeout)
                    }
                    timeout = setTimeout(function() {
                        tiptip_holder.stop(true, true).fadeIn(opts.fadeIn)
                    }, opts.delay)
                }

                function deactive_tiptip() {
                    opts.exit.call(this);
                    if (timeout) {
                        clearTimeout(timeout)
                    }
                    tiptip_holder.fadeOut(opts.fadeOut)
                }
            }
        })
    }
})(jQuery);

$(function() {
    $(".tooltip").tipTip({
        maxWidth: "auto",
        edgeOffset: 5,
        defaultPosition: "top"
    });
});

/***************************************************
		TABS & ACCORDIAN
***************************************************/
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * http://flowplayer.org/tools/
 */
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    }, a.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialEffect: !1,
            initialIndex: 0,
            event: "click",
            rotate: !1,
            slideUpSpeed: 400,
            slideDownSpeed: 400,
            history: !1
        },
        addEffect: function(a, c) {
            b[a] = c
        }
    };
    var b = {
            "default": function(a, b) {
                this.getPanes().hide().eq(a).show(), b.call()
            },
            fade: function(a, b) {
                var c = this.getConf(),
                    d = c.fadeOutSpeed,
                    e = this.getPanes();
                d ? e.fadeOut(d) : e.hide(), e.eq(a).fadeIn(c.fadeInSpeed, b)
            },
            slide: function(a, b) {
                var c = this.getConf();
                this.getPanes().slideUp(c.slideUpSpeed), this.getPanes().eq(a).slideDown(c.slideDownSpeed, b)
            },
            ajax: function(a, b) {
                this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b)
            }
        },
        c, d;
    a.tools.tabs.addEffect("horizontal", function(b, e) {
        if (!c) {
            var f = this.getPanes().eq(b),
                g = this.getCurrentPane();
            d || (d = this.getPanes().eq(0).width()), c = !0, f.show(), g.animate({
                width: 0
            }, {
                step: function(a) {
                    f.css("width", d - a)
                },
                complete: function() {
                    a(this).hide(), e.call(), c = !1
                }
            }), g.length || (e.call(), c = !1)
        }
    });

    function e(c, d, e) {
        var f = this,
            g = c.add(this),
            h = c.find(e.tabs),
            i = d.jquery ? d : c.children(d),
            j;
        h.length || (h = c.children()), i.length || (i = c.parent().find(d)), i.length || (i = a(d)), a.extend(this, {
            click: function(d, i) {
                var k = h.eq(d),
                    l = !c.data("tabs");
                typeof d == "string" && d.replace("#", "") && (k = h.filter("[href*=\"" + d.replace("#", "") + "\"]"), d = Math.max(h.index(k), 0));
                if (e.rotate) {
                    var m = h.length - 1;
                    if (d < 0) return f.click(m, i);
                    if (d > m) return f.click(0, i)
                }
                if (!k.length) {
                    if (j >= 0) return f;
                    d = e.initialIndex, k = h.eq(d)
                }
                if (d === j) return f;
                i = i || a.Event(), i.type = "onBeforeClick", g.trigger(i, [d]);
                if (!i.isDefaultPrevented()) {
                    var n = l ? e.initialEffect && e.effect || "default" : e.effect;
                    b[n].call(f, d, function() {
                        j = d, i.type = "onClick", g.trigger(i, [d])
                    }), h.removeClass(e.current), k.addClass(e.current);
                    return f
                }
            },
            getConf: function() {
                return e
            },
            getTabs: function() {
                return h
            },
            getPanes: function() {
                return i
            },
            getCurrentPane: function() {
                return i.eq(j)
            },
            getCurrentTab: function() {
                return h.eq(j)
            },
            getIndex: function() {
                return j
            },
            next: function() {
                return f.click(j + 1)
            },
            prev: function() {
                return f.click(j - 1)
            },
            destroy: function() {
                h.off(e.event).removeClass(e.current), i.find("a[href^=\"#\"]").off("click.T");
                return f
            }
        }), a.each("onBeforeClick,onClick".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]), f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        }), e.history && a.fn.history && (a.tools.history.init(h), e.event = "history"), h.each(function(b) {
            a(this).on(e.event, function(a) {
                f.click(b, a);
                return a.preventDefault()
            })
        }), i.find("a[href^=\"#\"]").on("click.T", function(b) {
            f.click(a(this).attr("href"), b)
        }), location.hash && e.tabs == "a" && c.find("[href=\"" + location.hash + "\"]").length ? f.click(location.hash) : (e.initialIndex === 0 || e.initialIndex > 0) && f.click(e.initialIndex)
    }
    a.fn.tabs = function(b, c) {
        var d = this.data("tabs");
        d && (d.destroy(), this.removeData("tabs")), a.isFunction(c) && (c = {
            onBeforeClick: c
        }), c = a.extend({}, a.tools.tabs.conf, c), this.each(function() {
            d = new e(a(this), b, c), a(this).data("tabs", d)
        });
        return c.api ? d : this
    }
})(jQuery);


/***************************************************
		SLIDING BOXES
***************************************************/
/*
	Mosaic - Sliding Boxes and Captions jQuery Plugin
	Version 1.0.1
	www.buildinternet.com/project/mosaic
	
	By Sam Dunn / One Mighty Roar (www.onemightyroar.com)
	Released under MIT License / GPL License
*/
(function(a) {
    if (!a.omr) {
        a.omr = new Object()
    }
    a.omr.mosaic = function(c, b) {
        var d = this;
        d.$el = a(c);
        d.el = c;
        d.$el.data("omr.mosaic", d);
        d.init = function() {
            d.options = a.extend({}, a.omr.mosaic.defaultOptions, b);
            d.load_box()
        };
        d.load_box = function() {
            if (d.options.preload) {
                a(d.options.backdrop, d.el).hide();
                a(d.options.overlay, d.el).hide();
                a(window).load(function() {
                    if (d.options.options.animation == "fade" && a(d.options.overlay, d.el).css("opacity") == 0) {
                        a(d.options.overlay, d.el).css("filter", "alpha(opacity=0)")
                    }
                    a(d.options.overlay, d.el).fadeIn(200, function() {
                        a(d.options.backdrop, d.el).fadeIn(200)
                    });
                    d.allow_hover()
                })
            } else {
                a(d.options.backdrop, d.el).show();
                a(d.options.overlay, d.el).show();
                d.allow_hover()
            }
        };
        d.allow_hover = function() {
            switch (d.options.animation) {
                case "fade":
                    a(d.el).hover(function() {
                        a(d.options.overlay, d.el).stop().fadeTo(d.options.speed, d.options.opacity)
                    }, function() {
                        a(d.options.overlay, d.el).stop().fadeTo(d.options.speed, 0)
                    });
                    break;
                case "slide":
                    startX = a(d.options.overlay, d.el).css(d.options.anchor_x) != "auto" ? a(d.options.overlay, d.el).css(d.options.anchor_x) : "0px";
                    startY = a(d.options.overlay, d.el).css(d.options.anchor_y) != "auto" ? a(d.options.overlay, d.el).css(d.options.anchor_y) : "0px";
                    var f = {};
                    f[d.options.anchor_x] = d.options.hover_x;
                    f[d.options.anchor_y] = d.options.hover_y;
                    var e = {};
                    e[d.options.anchor_x] = startX;
                    e[d.options.anchor_y] = startY;
                    a(d.el).hover(function() {
                        a(d.options.overlay, d.el).stop().animate(f, d.options.speed)
                    }, function() {
                        a(d.options.overlay, d.el).stop().animate(e, d.options.speed)
                    });
                    break
            }
        };
        d.init()
    };
    a.omr.mosaic.defaultOptions = {
        animation: "fade",
        speed: 150,
        opacity: 1,
        preload: 0,
        anchor_x: "left",
        anchor_y: "bottom",
        hover_x: "0px",
        hover_y: "0px",
        overlay: ".mosaic-overlay",
        backdrop: ".mosaic-backdrop"
    };
    a.fn.mosaic = function(b) {
        return this.each(function() {
            (new a.omr.mosaic(this, b))
        })
    }
})(jQuery);

jQuery(function($) {
    $('.fade').mosaic();
});


/***************************************************
		BX SLDER
***************************************************/
/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(a) {
    a.fn.bxSlider = function(b) {
        function Z(b, c, d, e) {
            var f = [];
            var g = d;
            var h = false;
            if (e == "backward") {
                b = a.makeArray(b);
                b.reverse()
            }
            while (g > 0) {
                a.each(b, function(b, d) {
                    if (g > 0) {
                        if (!h) {
                            if (b == c) {
                                h = true;
                                f.push(a(this).clone());
                                g--
                            }
                        } else {
                            f.push(a(this).clone());
                            g--
                        }
                    } else {
                        return false
                    }
                })
            }
            return f
        }

        function Y() {
            var a = i.outerHeight() * b.displaySlideQty;
            return a
        }

        function X() {
            var a = i.outerWidth() * b.displaySlideQty;
            return a
        }

        function W(b, c) {
            if (c == "left") {
                var d = a(".pager", h).eq(b).position().left
            } else if (c == "top") {
                var d = a(".pager", h).eq(b).position().top
            }
            return d
        }

        function V() {
            if (!b.infiniteLoop && b.hideControlOnEnd) {
                if (x == F) {
                    a(".bx-prev", h).hide()
                } else {
                    a(".bx-prev", h).show()
                }
                if (x == G) {
                    a(".bx-next", h).hide()
                } else {
                    a(".bx-next", h).show()
                }
            }
        }

        function U(c, e, f, g) {
            p = a('<a href="" class="bx-start"></a>');
            if (c == "text") {
                r = e
            } else {
                r = '<img src="' + e + '" />'
            }
            if (f == "text") {
                s = g
            } else {
                s = '<img src="' + g + '" />'
            }
            if (b.autoControlsSelector) {
                a(b.autoControlsSelector).append(p)
            } else {
                h.append('<div class="bx-auto"></div>');
                a(".bx-auto", h).html(p)
            }
            p.click(function() {
                if (b.ticker) {
                    if (a(this).hasClass("stop")) {
                        d.stopTicker()
                    } else if (a(this).hasClass("start")) {
                        d.startTicker()
                    }
                } else {
                    if (a(this).hasClass("stop")) {
                        d.stopShow(true)
                    } else if (a(this).hasClass("start")) {
                        d.startShow(true)
                    }
                }
                return false
            })
        }

        function T() {
            var c = a("img", g.eq(x)).attr("title");
            if (c != "") {
                if (b.captionsSelector) {
                    a(b.captionsSelector).html(c)
                } else {
                    a(".bx-captions", h).html(c)
                }
            } else {
                if (b.captionsSelector) {
                    a(b.captionsSelector).html("¨›")
                } else {
                    a(".bx-captions", h).html("¨›")
                }
            }
        }

        function S(c) {
            var e = g.length;
            if (b.moveSlideQty > 1) {
                if (g.length % b.moveSlideQty != 0) {
                    e = Math.ceil(g.length / b.moveSlideQty)
                } else {
                    e = g.length / b.moveSlideQty
                }
            }
            var f = "";
            if (b.buildPager) {
                for (var i = 0; i < e; i++) {
                    f += b.buildPager(i, g.eq(i * b.moveSlideQty))
                }
            } else if (c == "full") {
                for (var i = 1; i <= e; i++) {
                    f += '<a href="" class="pager-link pager-' + i + '">' + i + "</a>"
                }
            } else if (c == "short") {
                f = '<span class="bx-pager-current">' + (b.startingSlide + 1) + "</span> " + b.pagerShortSeparator + ' <span class="bx-pager-total">' + g.length + "</span>"
            }
            if (b.pagerSelector) {
                a(b.pagerSelector).append(f);
                n = a(b.pagerSelector)
            } else {
                var j = a('<div class="bx-pager"></div>');
                j.append(f);
                if (b.pagerLocation == "top") {
                    h.prepend(j)
                } else if (b.pagerLocation == "bottom") {
                    h.append(j)
                }
                n = a(".bx-pager", h)
            }
            n.children().click(function() {
                if (b.pagerType == "full") {
                    var a = n.children().index(this);
                    if (b.moveSlideQty > 1) {
                        a *= b.moveSlideQty
                    }
                    d.goToSlide(a)
                }
                return false
            })
        }

        function R(c, e, f, g) {
            var i = a('<a href="" class="bx-next"></a>');
            var j = a('<a href="" class="bx-prev"></a>');
            if (c == "text") {
                i.html(e)
            } else {
                i.html('<img src="' + e + '" />')
            }
            if (f == "text") {
                j.html(g)
            } else {
                j.html('<img src="' + g + '" />')
            }
            if (b.prevSelector) {
                a(b.prevSelector).append(j)
            } else {
                h.append(j)
            }
            if (b.nextSelector) {
                a(b.nextSelector).append(i)
            } else {
                h.append(i)
            }
            i.click(function() {
                d.goToNextSlide();
                return false
            });
            j.click(function() {
                d.goToPreviousSlide();
                return false
            })
        }

        function Q(c) {
            if (b.pagerType == "full" && b.pager) {
                a("a", n).removeClass(b.pagerActiveClass);
                a("a", n).eq(c).addClass(b.pagerActiveClass)
            } else if (b.pagerType == "short" && b.pager) {
                a(".bx-pager-current", n).html(x + 1)
            }
        }

        function P() {
            g.not(":eq(" + x + ")").fadeTo(b.speed, 0).css("zIndex", 98);
            g.eq(x).css("zIndex", 99).fadeTo(b.speed, 1, function() {
                E = false;
                if (jQuery.browser.msie) {
                    g.eq(x).get(0).style.removeAttribute("filter")
                }
                b.onAfterSlide(x, g.length, g.eq(x))
            })
        }

        function O() {
            e.hover(function() {
                if (t) {
                    d.stopTicker(false)
                }
            }, function() {
                if (t) {
                    d.startTicker(false)
                }
            })
        }

        function N() {
            h.find(".bx-window").hover(function() {
                if (t) {
                    d.stopShow(false)
                }
            }, function() {
                if (t) {
                    d.startShow(false)
                }
            })
        }

        function M() {
            if (b.startImage != "") {
                startContent = b.startImage;
                startType = "image"
            } else {
                startContent = b.startText;
                startType = "text"
            }
            if (b.stopImage != "") {
                stopContent = b.stopImage;
                stopType = "image"
            } else {
                stopContent = b.stopText;
                stopType = "text"
            }
            U(startType, startContent, stopType, stopContent)
        }

        function L(a, c, d) {
            if (b.mode == "horizontal") {
                if (b.tickerDirection == "next") {
                    e.animate({
                        left: "-=" + c + "px"
                    }, d, "linear", function() {
                        e.css("left", a);
                        L(a, A, b.tickerSpeed)
                    })
                } else if (b.tickerDirection == "prev") {
                    e.animate({
                        left: "+=" + c + "px"
                    }, d, "linear", function() {
                        e.css("left", a);
                        L(a, A, b.tickerSpeed)
                    })
                }
            } else if (b.mode == "vertical") {
                if (b.tickerDirection == "next") {
                    e.animate({
                        top: "-=" + c + "px"
                    }, d, "linear", function() {
                        e.css("top", a);
                        L(a, B, b.tickerSpeed)
                    })
                } else if (b.tickerDirection == "prev") {
                    e.animate({
                        top: "+=" + c + "px"
                    }, d, "linear", function() {
                        e.css("top", a);
                        L(a, B, b.tickerSpeed)
                    })
                }
            }
        }

        function K() {
            if (b.auto) {
                if (!b.infiniteLoop) {
                    if (b.autoDirection == "next") {
                        o = setInterval(function() {
                            x += b.moveSlideQty;
                            if (x > G) {
                                x = x % g.length
                            }
                            d.goToSlide(x, false)
                        }, b.pause)
                    } else if (b.autoDirection == "prev") {
                        o = setInterval(function() {
                            x -= b.moveSlideQty;
                            if (x < 0) {
                                negativeOffset = x % g.length;
                                if (negativeOffset == 0) {
                                    x = 0
                                } else {
                                    x = g.length + negativeOffset
                                }
                            }
                            d.goToSlide(x, false)
                        }, b.pause)
                    }
                } else {
                    if (b.autoDirection == "next") {
                        o = setInterval(function() {
                            d.goToNextSlide(false)
                        }, b.pause)
                    } else if (b.autoDirection == "prev") {
                        o = setInterval(function() {
                            d.goToPreviousSlide(false)
                        }, b.pause)
                    }
                }
            } else if (b.ticker) {
                b.tickerSpeed *= 10;
                a(".pager", h).each(function(b) {
                    A += a(this).width();
                    B += a(this).height()
                });
                if (b.tickerDirection == "prev" && b.mode == "horizontal") {
                    e.css("left", "-" + (A + y) + "px")
                } else if (b.tickerDirection == "prev" && b.mode == "vertical") {
                    e.css("top", "-" + (B + z) + "px")
                }
                if (b.mode == "horizontal") {
                    C = parseInt(e.css("left"));
                    L(C, A, b.tickerSpeed)
                } else if (b.mode == "vertical") {
                    D = parseInt(e.css("top"));
                    L(D, B, b.tickerSpeed)
                }
                if (b.tickerHover) {
                    O()
                }
            }
        }

        function J() {
            if (b.nextImage != "") {
                nextContent = b.nextImage;
                nextType = "image"
            } else {
                nextContent = b.nextText;
                nextType = "text"
            }
            if (b.prevImage != "") {
                prevContent = b.prevImage;
                prevType = "image"
            } else {
                prevContent = b.prevText;
                prevType = "text"
            }
            R(nextType, nextContent, prevType, prevContent)
        }

        function I() {
            if (b.mode == "horizontal" || b.mode == "vertical") {
                var c = Z(g, 0, b.moveSlideQty, "backward");
                a.each(c, function(b) {
                    e.prepend(a(this))
                });
                var d = g.length + b.moveSlideQty - 1;
                var f = g.length - b.displaySlideQty;
                var h = d - f;
                var i = Z(g, 0, h, "forward");
                if (b.infiniteLoop) {
                    a.each(i, function(b) {
                        e.append(a(this))
                    })
                }
            }
        }

        function H() {
            I(b.startingSlide);
            if (b.mode == "horizontal") {
                e.wrap('<div class="' + b.wrapperClass + '" style="width:' + l + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:' + l + 'px;"></div>').css({
                    width: "999999px",
                    position: "relative",
                    left: "-" + y + "px"
                });
                e.children().css({
                    width: j,
                    "float": "left",
                    listStyle: "none"
                });
                h = e.parent().parent();
                g.addClass("pager")
            } else if (b.mode == "vertical") {
                e.wrap('<div class="' + b.wrapperClass + '" style="width:' + v + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:' + v + "px; height:" + m + 'px; position:relative; overflow:hidden;"></div>').css({
                    height: "999999px",
                    position: "relative",
                    top: "-" + z + "px"
                });
                e.children().css({
                    listStyle: "none",
                    height: w
                });
                h = e.parent().parent();
                g.addClass("pager")
            } else if (b.mode == "fade") {
                e.wrap('<div class="' + b.wrapperClass + '" style="width:' + v + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:' + w + "px; width:" + v + 'px; position:relative; overflow:hidden;"></div>');
                e.children().css({
                    listStyle: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 98
                });
                h = e.parent().parent();
                g.not(":eq(" + x + ")").fadeTo(0, 0);
                g.eq(x).css("zIndex", 99)
            }
            if (b.captions && b.captionsSelector == null) {
                h.append('<div class="bx-captions"></div>')
            }
        }
        var c = {
            mode: "horizontal",
            infiniteLoop: true,
            hideControlOnEnd: false,
            controls: true,
            speed: 500,
            easing: "swing",
            pager: false,
            pagerSelector: null,
            pagerType: "full",
            pagerLocation: "bottom",
            pagerShortSeparator: "/",
            pagerActiveClass: "pager-active",
            nextText: "next",
            nextImage: "",
            nextSelector: null,
            prevText: "prev",
            prevImage: "",
            prevSelector: null,
            captions: false,
            captionsSelector: null,
            auto: false,
            autoDirection: "next",
            autoControls: false,
            autoControlsSelector: null,
            autoStart: true,
            autoHover: false,
            autoDelay: 0,
            pause: 3e3,
            startText: "start",
            startImage: "",
            stopText: "stop",
            stopImage: "",
            ticker: false,
            tickerSpeed: 5e3,
            tickerDirection: "next",
            tickerHover: false,
            wrapperClass: "bx-wrapper",
            startingSlide: 0,
            displaySlideQty: 1,
            moveSlideQty: 1,
            randomStart: false,
            onBeforeSlide: function() {},
            onAfterSlide: function() {},
            onLastSlide: function() {},
            onFirstSlide: function() {},
            onNextSlide: function() {},
            onPrevSlide: function() {},
            buildPager: null
        };
        var b = a.extend(c, b);
        var d = this;
        var e = "";
        var f = "";
        var g = "";
        var h = "";
        var i = "";
        var j = "";
        var k = "";
        var l = "";
        var m = "";
        var n = "";
        var o = "";
        var p = "";
        var q = "";
        var r = "";
        var s = "";
        var t = true;
        var u = false;
        var v = 0;
        var w = 0;
        var x = 0;
        var y = 0;
        var z = 0;
        var A = 0;
        var B = 0;
        var C = 0;
        var D = 0;
        var E = false;
        var F = 0;
        var G = g.length - 1;
        this.goToSlide = function(a, c) {
            if (!E) {
                E = true;
                x = a;
                b.onBeforeSlide(x, g.length, g.eq(x));
                if (typeof c == "undefined") {
                    var c = true
                }
                if (c) {
                    if (b.auto) {
                        d.stopShow(true)
                    }
                }
                slide = a;
                if (slide == F) {
                    b.onFirstSlide(x, g.length, g.eq(x))
                }
                if (slide == G) {
                    b.onLastSlide(x, g.length, g.eq(x))
                }
                if (b.mode == "horizontal") {
                    e.animate({
                        left: "-" + W(slide, "left") + "px"
                    }, b.speed, b.easing, function() {
                        E = false;
                        b.onAfterSlide(x, g.length, g.eq(x))
                    })
                } else if (b.mode == "vertical") {
                    e.animate({
                        top: "-" + W(slide, "top") + "px"
                    }, b.speed, b.easing, function() {
                        E = false;
                        b.onAfterSlide(x, g.length, g.eq(x))
                    })
                } else if (b.mode == "fade") {
                    P()
                }
                V();
                if (b.moveSlideQty > 1) {
                    a = Math.floor(a / b.moveSlideQty)
                }
                Q(a);
                T()
            }
        };
        this.goToNextSlide = function(a) {
            if (typeof a == "undefined") {
                var a = true
            }
            if (a) {
                if (b.auto) {
                    d.stopShow(true)
                }
            }
            if (!b.infiniteLoop) {
                if (!E) {
                    var c = false;
                    x = x + b.moveSlideQty;
                    if (x <= G) {
                        V();
                        b.onNextSlide(x, g.length, g.eq(x));
                        d.goToSlide(x)
                    } else {
                        x -= b.moveSlideQty
                    }
                }
            } else {
                if (!E) {
                    E = true;
                    var c = false;
                    x = x + b.moveSlideQty;
                    if (x > G) {
                        x = x % g.length;
                        c = true
                    }
                    b.onNextSlide(x, g.length, g.eq(x));
                    b.onBeforeSlide(x, g.length, g.eq(x));
                    if (b.mode == "horizontal") {
                        var f = b.moveSlideQty * k;
                        e.animate({
                            left: "-=" + f + "px"
                        }, b.speed, b.easing, function() {
                            E = false;
                            if (c) {
                                e.css("left", "-" + W(x, "left") + "px")
                            }
                            b.onAfterSlide(x, g.length, g.eq(x))
                        })
                    } else if (b.mode == "vertical") {
                        var h = b.moveSlideQty * w;
                        e.animate({
                            top: "-=" + h + "px"
                        }, b.speed, b.easing, function() {
                            E = false;
                            if (c) {
                                e.css("top", "-" + W(x, "top") + "px")
                            }
                            b.onAfterSlide(x, g.length, g.eq(x))
                        })
                    } else if (b.mode == "fade") {
                        P()
                    }
                    if (b.moveSlideQty > 1) {
                        Q(Math.ceil(x / b.moveSlideQty))
                    } else {
                        Q(x)
                    }
                    T()
                }
            }
        };
        this.goToPreviousSlide = function(c) {
            if (typeof c == "undefined") {
                var c = true
            }
            if (c) {
                if (b.auto) {
                    d.stopShow(true)
                }
            }
            if (!b.infiniteLoop) {
                if (!E) {
                    var f = false;
                    x = x - b.moveSlideQty;
                    if (x < 0) {
                        x = 0;
                        if (b.hideControlOnEnd) {
                            a(".bx-prev", h).hide()
                        }
                    }
                    V();
                    b.onPrevSlide(x, g.length, g.eq(x));
                    d.goToSlide(x)
                }
            } else {
                if (!E) {
                    E = true;
                    var f = false;
                    x = x - b.moveSlideQty;
                    if (x < 0) {
                        negativeOffset = x % g.length;
                        if (negativeOffset == 0) {
                            x = 0
                        } else {
                            x = g.length + negativeOffset
                        }
                        f = true
                    }
                    b.onPrevSlide(x, g.length, g.eq(x));
                    b.onBeforeSlide(x, g.length, g.eq(x));
                    if (b.mode == "horizontal") {
                        var i = b.moveSlideQty * k;
                        e.animate({
                            left: "+=" + i + "px"
                        }, b.speed, b.easing, function() {
                            E = false;
                            if (f) {
                                e.css("left", "-" + W(x, "left") + "px")
                            }
                            b.onAfterSlide(x, g.length, g.eq(x))
                        })
                    } else if (b.mode == "vertical") {
                        var j = b.moveSlideQty * w;
                        e.animate({
                            top: "+=" + j + "px"
                        }, b.speed, b.easing, function() {
                            E = false;
                            if (f) {
                                e.css("top", "-" + W(x, "top") + "px")
                            }
                            b.onAfterSlide(x, g.length, g.eq(x))
                        })
                    } else if (b.mode == "fade") {
                        P()
                    }
                    if (b.moveSlideQty > 1) {
                        Q(Math.ceil(x / b.moveSlideQty))
                    } else {
                        Q(x)
                    }
                    T()
                }
            }
        };
        this.goToFirstSlide = function(a) {
            if (typeof a == "undefined") {
                var a = true
            }
            d.goToSlide(F, a)
        };
        this.goToLastSlide = function() {
            if (typeof a == "undefined") {
                var a = true
            }
            d.goToSlide(G, a)
        };
        this.getCurrentSlide = function() {
            return x
        };
        this.getSlideCount = function() {
            return g.length
        };
        this.stopShow = function(a) {
            clearInterval(o);
            if (typeof a == "undefined") {
                var a = true
            }
            if (a && b.autoControls) {
                p.html(r).removeClass("stop").addClass("start");
                t = false
            }
        };
        this.startShow = function(a) {
            if (typeof a == "undefined") {
                var a = true
            }
            K();
            if (a && b.autoControls) {
                p.html(s).removeClass("start").addClass("stop");
                t = true
            }
        };
        this.stopTicker = function(a) {
            e.stop();
            if (typeof a == "undefined") {
                var a = true
            }
            if (a && b.ticker) {
                p.html(r).removeClass("stop").addClass("start");
                t = false
            }
        };
        this.startTicker = function(a) {
            if (b.mode == "horizontal") {
                if (b.tickerDirection == "next") {
                    var c = parseInt(e.css("left"));
                    var d = A + c + g.eq(0).width()
                } else if (b.tickerDirection == "prev") {
                    var c = -parseInt(e.css("left"));
                    var d = c - g.eq(0).width()
                }
                var f = d * b.tickerSpeed / A;
                L(C, d, f)
            } else if (b.mode == "vertical") {
                if (b.tickerDirection == "next") {
                    var h = parseInt(e.css("top"));
                    var d = B + h + g.eq(0).height()
                } else if (b.tickerDirection == "prev") {
                    var h = -parseInt(e.css("top"));
                    var d = h - g.eq(0).height()
                }
                var f = d * b.tickerSpeed / B;
                L(D, d, f);
                if (typeof a == "undefined") {
                    var a = true
                }
                if (a && b.ticker) {
                    p.html(s).removeClass("start").addClass("stop");
                    t = true
                }
            }
        };
        this.initShow = function() {
            e = a(this);
            f = e.clone();
            g = e.children();
            h = "";
            i = e.children(":first");
            j = i.width();
            v = 0;
            k = i.outerWidth();
            w = 0;
            l = X();
            m = Y();
            E = false;
            n = "";
            x = 0;
            y = 0;
            z = 0;
            o = "";
            p = "";
            q = "";
            r = "";
            s = "";
            t = true;
            u = false;
            A = 0;
            B = 0;
            C = 0;
            D = 0;
            F = 0;
            G = g.length - 1;
            g.each(function(b) {
                if (a(this).outerHeight() > w) {
                    w = a(this).outerHeight()
                }
                if (a(this).outerWidth() > v) {
                    v = a(this).outerWidth()
                }
            });
            if (b.randomStart) {
                var c = Math.floor(Math.random() * g.length);
                x = c;
                y = k * (b.moveSlideQty + c);
                z = w * (b.moveSlideQty + c)
            } else {
                x = b.startingSlide;
                y = k * (b.moveSlideQty + b.startingSlide);
                z = w * (b.moveSlideQty + b.startingSlide)
            }
            H();
            if (b.pager && !b.ticker) {
                if (b.pagerType == "full") {
                    S("full")
                } else if (b.pagerType == "short") {
                    S("short")
                }
            }
            if (b.controls && !b.ticker) {
                J()
            }
            if (b.auto || b.ticker) {
                if (b.autoControls) {
                    M()
                }
                if (b.autoStart) {
                    setTimeout(function() {
                        d.startShow(true)
                    }, b.autoDelay)
                } else {
                    d.stopShow(true)
                }
                if (b.autoHover && !b.ticker) {
                    N()
                }
            }
            if (b.moveSlideQty > 1) {
                Q(Math.ceil(x / b.moveSlideQty))
            } else {
                Q(x)
            }
            V();
            if (b.captions) {
                T()
            }
            b.onAfterSlide(x, g.length, g.eq(x))
        };
        this.destroyShow = function() {
            clearInterval(o);
            a(".bx-next, .bx-prev, .bx-pager, .bx-auto", h).remove();
            e.unwrap().unwrap().removeAttr("style");
            e.children().removeAttr("style").not(".pager").remove();
            g.removeClass("pager")
        };
        this.reloadShow = function() {
            d.destroyShow();
            d.initShow()
        };
        this.each(function() {
            if (a(this).children().length > 0) {
                d.initShow()
            }
        });
        return this
    };
    jQuery.fx.prototype.cur = function() {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
            return this.elem[this.prop]
        }
        var a = parseFloat(jQuery.css(this.elem, this.prop));
        return a
    }
})(jQuery)
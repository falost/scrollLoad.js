/**
 * Created by Falost on 2017/3/29.
 * Name:jQuery.scrollLoad.js
 * 滚动响应加载页面图片
 */
(function ($) {
    $.fn.scrollLoad= function (options) {
        var defaults = {
            src:'data-src',
            time:300,
            t: this //默认参数请勿修改，除非你已知他的用处
        };

        var ops = $.extend(defaults, options);

        var _fn = {
            _init : function(){
                var t = ops.t;
                //console.log(t)
                if(t == null)return false;
                var offsetPage = window.pageYOffset ? window.pageYOffset : window.document.documentElement.scrollTop,
                    offsetWindow = offsetPage + Number(window.innerHeight ? window.innerHeight : document.documentElement.clientHeight),
                    docImg = t.find("img"),			//获取页面图片列表
                    _len = docImg.length;
                if (!_len) return false;
                for (var i = 0; i < _len; i++) {
                    var attrSrc = docImg[i].getAttribute(defaults.src),
                        o = docImg[i], tag = o.nodeName.toLowerCase();
                    if (o) {
                        postPage = o.getBoundingClientRect().top + window.document.documentElement.scrollTop + window.document.body.scrollTop; postWindow = postPage + Number(_fn._getStyle(o, 'height').replace('px', ''));
                        if ((postPage > offsetPage && postPage < offsetWindow) || (postWindow > offsetPage && postWindow < offsetWindow)) {
                            if (tag === "img" && attrSrc !== null) {
                                o.setAttribute("src", attrSrc);
                            }
                            o = null;
                        }
                    }
                }
            },
            _camelize : function (s) {
                return s.replace(/-(\w)/g, function (strMatch, p1) {
                    return p1.toUpperCase();
                });
            },
            _getStyle : function (element, property) {
                if (arguments.length != 2) return false;
                var value = element.style[_fn._camelize(property)];
                if (!value) {
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        var css = document.defaultView.getComputedStyle(element, null);
                        value = css ? css.getPropertyValue(property) : null;
                    } else if (element.currentStyle) {
                        value = element.currentStyle[_fn._camelize(property)];
                    }
                }
                return value == 'auto' ? '' : value;
            }
        }

        window.onscroll = function () {
            setTimeout(function () {_fn._init()}, defaults.time);
        }

        return _fn._init();
    };
})(jQuery);
(function (el) {
    'use strict';
    var perspectiveStart = 1024,
        perspectiveDirection = 'Y';//'X' or ' '
    window.onresize = function () {
        var windowSize = window.innerWidth;
        for (var i = 0; i < el.length; i++) {
            var currentEl = el[i],
                wrapperEl = wrap(currentEl, document.createElement('div'));
            currentEl.setAttribute("style", "transition : 1s; transform : " + dynoRotate(windowSize) + "");
            wrapperEl.setAttribute("style", "perspective : 400px; width : 200px;");
        }
    };
    function dynoRotate(windowSize) {
        var degree = windowSize < perspectiveStart ? Math.round(Math.abs((windowSize - perspectiveStart) / 10)) : 0;

        return 'rotate' + perspectiveDirection + '(' + degree + 'deg)';
    }

    function wrap(el, wrapper) {
        var wrapperEl = el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        return wrapperEl;
    }
})(document.getElementsByClassName('perspectiveMe'));






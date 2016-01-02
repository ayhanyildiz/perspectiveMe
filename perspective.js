(function (el) {
    var perspectiveStart = 1024;
    window.onresize = function () {
        for (var i = 0; i < el.length; i++) {
            var currentEl = el[i],
                wrapperEl = wrap(currentEl, document.createElement('div'));
                wrapperEl.style.perspective = '400px';
                wrapperEl.style.width = '1px';
                currentEl.style.transition = '1s';
                currentEl.style.transform = dynoRotate(perspectiveStart);
        }
    };
    function dynoRotate(perspectiveStart) {
        var degree = 0;
        if (window.innerWidth < perspectiveStart) {
            degree = Math.round(Math.abs((window.innerWidth - perspectiveStart) / 10));
        }
        return 'rotateY(' + degree + 'deg)';
    }

    function wrap(el, wrapper) {
        wrapperEl = el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        return wrapperEl;
    }
})(document.getElementsByClassName('perspectiveMe'));

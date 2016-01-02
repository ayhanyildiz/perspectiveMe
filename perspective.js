(function (el) {
    var perspectiveStart = 1024,
        perspectiveDirection = 'X';//'X' or ''
  
    window.onresize = function () {
        for (var i = 0; i < el.length; i++) {
            var currentEl = el[i],
                wrapperEl = wrap(currentEl, document.createElement('div'));
                wrapperEl.style.perspective = '400px';
                wrapperEl.style.width = '200px';
                currentEl.style.transition = '1s';
                currentEl.style.transform = dynoRotate(perspectiveStart,perspectiveDirection);
        }
    };
    function dynoRotate(perspectiveStart,perspectiveDirection) {
        var degree = window.innerWidth < perspectiveStart ? Math.round(Math.abs((window.innerWidth - perspectiveStart) / 10)) : 0 ;      
        
      return 'rotate' + perspectiveDirection +'(' + degree + 'deg)';
    }

    function wrap(el, wrapper) {
        wrapperEl = el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        return wrapperEl;
    }
})(document.getElementsByClassName('perspectiveMe'));

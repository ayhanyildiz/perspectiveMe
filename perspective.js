var el = document.getElementsByClassName('perspectiveMe'),
    perspectiveSize = '400px',
    wrapperType = 'div',
    wrapperSize = '1px',
    perspectiveTransition = '1s',
    perspectiveStart = 1024;

for (var i = 0; i < el.length; i++) {
    var currentEl = el[i];
    wrap(currentEl, document.createElement(wrapperType));
    var wrapper = currentEl.parentElement;
    var style = getComputedStyle(currentEl);
    wrapper.style.perspective = perspectiveSize;
    wrapper.style.width = wrapperSize;
    currentEl.style.transition = perspectiveTransition;
}

window.onresize = function () {
    var degree = Math.round(Math.abs((window.innerWidth - perspectiveStart) / 10));

    for (var i = 0; i < el.length; i++) {
        if (window.innerWidth < perspectiveStart) {
            el[i].style.transform = dynoRotate(degree);
        }
        else {
            el[i].style.transform = dynoRotate(0);
        }
    }
};

function dynoRotate(deg) {
    return 'rotateY(' + deg + 'deg)';
}

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

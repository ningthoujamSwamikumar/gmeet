const MyApp = (function () {
    const init = function (mid, uid) {
        alert(`mid:${mid}&uid:${uid} from myApp`);
    }

    return ({
        _init: init,
    });
})();
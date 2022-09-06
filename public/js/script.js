(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Planet = /** @class */ (function () {
    function Planet(param1, param2) {
        this.color = param1;
        this.size = param2;
    }
    Planet.prototype.draw = function () {
        console.log("I want to draw a planet with these properties: color-".concat(this.color, ", size-").concat(this.size));
    };
    return Planet;
}());
document.addEventListener('DOMContentLoaded', function () {
    var planetElement = document.getElementById('planet');
    if (planetElement) {
        var data = planetElement.dataset;
        var planet = new Planet(data.color, Number(data.size));
        planet.draw();
    }
});

},{}]},{},[1]);

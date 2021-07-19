"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(ncity) {
        this.city = "Default City";
        this.secret = "mission";
        this.city = ncity;
    }
    Person.prototype.saycity = function () {
        return this.city;
    };
    return Person;
}());
exports["default"] = Person;
var person = new Person("abc");
console.log(person.saycity());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(firstname, lastname, cty) {
        var _this = _super.call(this, cty) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this._secret = "My secret mission";
        return _this;
    }
    Hero.superPower = function () {
        return "I can Fly";
    };
    Hero.prototype.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
    Object.defineProperty(Hero.prototype, "secret", {
        get: function () {
            return this._secret;
        },
        set: function (nsecret) {
            this._secret = nsecret;
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}(Person));
;

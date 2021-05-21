"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Onix = /** @class */ (function () {
    function Onix(onixJson, _a) {
        var _b = _a.mode, mode = _b === void 0 ? "strict" : _b;
    }
    Onix.parse = function (xmlText) {
        var onixJson = {}; // Parse the xml
        return new Onix(onixJson, {});
    };
    return Onix;
}());
exports.default = Onix;
//# sourceMappingURL=Onix.js.map
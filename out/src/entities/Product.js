"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["EarlyNotification"] = 1] = "EarlyNotification";
    NotificationType[NotificationType["AdvanceNotification"] = 2] = "AdvanceNotification";
    NotificationType[NotificationType["NotificationConfirmedOnPublication"] = 3] = "NotificationConfirmedOnPublication";
    NotificationType[NotificationType["Update"] = 4] = "Update";
    NotificationType[NotificationType["Delete"] = 5] = "Delete";
    NotificationType[NotificationType["NoticeOfSale"] = 8] = "NoticeOfSale";
    NotificationType[NotificationType["NoticeOfAcquisition"] = 9] = "NoticeOfAcquisition";
    NotificationType[NotificationType["TestUpdate"] = 88] = "TestUpdate";
    NotificationType[NotificationType["TestRecord"] = 89] = "TestRecord";
})(NotificationType || (NotificationType = {}));
var Product = /** @class */ (function () {
    function Product(productJson) {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map
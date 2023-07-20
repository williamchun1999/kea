"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
exports.authMiddleware = {
    ensureAuth: function (req, res, next) {
        console.log('is authenticated: ', req.isAuthenticated());
        if (req.isAuthenticated()) {
            return next();
        }
        else {
            return res.send({ message: "User not a match" });
        }
    }
};
//# sourceMappingURL=auth.js.map
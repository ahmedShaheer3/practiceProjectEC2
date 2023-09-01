"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 **Validating jwt token
 */
exports.authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // if token not found in cookies, check if header contains Auth field
    let token;
    if (req.header("Authorization")) {
        if (!((_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.match("Bearer "))) {
            // checking if bearer is there in token
            return res.status(401).json({
                error: true,
                message: "Invalid token format",
            });
        }
        token = (_b = req.header("Authorization")) === null || _b === void 0 ? void 0 : _b.replace("Bearer ", "");
    }
    // checking if token is there in api
    if (!token) {
        return res.status(401).json({
            error: true,
            message: "token required",
        });
    }
});

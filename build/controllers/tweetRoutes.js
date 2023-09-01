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
exports.deleteTweet = exports.updateTweet = exports.getTweet = exports.getTweets = exports.createTweet = void 0;
const createTweet = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("createTweet is called");
});
exports.createTweet = createTweet;
const getTweets = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getTweets is called");
});
exports.getTweets = getTweets;
const getTweet = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getTweet is called");
});
exports.getTweet = getTweet;
const updateTweet = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("updateTweet is called");
});
exports.updateTweet = updateTweet;
const deleteTweet = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("deleteTweet is called");
});
exports.deleteTweet = deleteTweet;

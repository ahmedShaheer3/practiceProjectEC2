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
exports.sendEmail = void 0;
const client_ses_1 = require("@aws-sdk/client-ses");
const ses = new client_ses_1.SESClient({});
/*
 ** Send email by SES
 */
const sendEmail = ({ senderEmail, revieverEmail, message, }) => __awaiter(void 0, void 0, void 0, function* () {
    // creating ses instance for sending email
    let sesInstance = new client_ses_1.SendEmailCommand({
        Destination: {
            ToAddresses: [revieverEmail],
        },
        Source: senderEmail,
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: "Your one-time password",
            },
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: message,
                },
            },
        },
    });
    try {
        // sending ses email
        const response = yield ses.send(sesInstance);
        console.log("RESPONSE", response);
    }
    catch (error) {
        console.log("unable to send email", error);
        throw new Error("Unable to send email");
    }
});
exports.sendEmail = sendEmail;

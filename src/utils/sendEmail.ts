import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { sendEmailType } from "./types";
const ses = new SESClient({});
/*
 ** Send email by SES
 */
export const sendEmail = async ({
  senderEmail,
  revieverEmail,
  message,
}: sendEmailType): Promise<void> => {
  // creating ses instance for sending email
  let sesInstance = new SendEmailCommand({
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
    const response = await ses.send(sesInstance);
    console.log("RESPONSE", response);
  } catch (error) {
    console.log("unable to send email", error);
    throw new Error("Unable to send email");
  }
};

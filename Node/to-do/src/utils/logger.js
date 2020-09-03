//with code chain hamlay manually logger file banayou
//logging kai lagi dedicated library is winston

// import { text } from "body-parser";

// export function info(text) {
//   console.log(`[${new Date().toISOString()}] [ INFO ] ${text}\n`);
// }

// //try catch block ma kunai error aako case ma error(err) bhanera yo error function call hunchha
// export function error(text, err) {
//   if (err) {
//     console.log(`[${new Date().toISOString()}] [ ERROR ] ${err.toSting()}\n`);
//   } else {
//     console.log(`[${new Date().toISOString()}] [ ERROR ] ${text}`);
//   }
// }

// export function debug(text, params) {
//   console.log(
//     `[${new Date().toISOString()}] [ DEBUG ] ${text}\n ${JSON.stringify(
//       params
//     )}\n`
//   );
// }

import winston, { format } from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "combind.log",
    }),
  ],
});

export default logger;

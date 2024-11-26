import { createServer, IncomingMessage } from "http";

const server = createServer((request: IncomingMessage, response) => {
  request
    .on("error", (error) => {
      console.error(`Response error: ${error}`);
      response.writeHead(500, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ message: "Something when wrong" }));
      response.end();
    })
    .on("data", (chunk) => {
      request["body"] = chunk.toString();
      request["hasBody"] = !!request["body"];
    })
    .on("end", async () => {
      const { url, method } = request;
      const word = url.split("?")[1].split("=")[1];
      console.log(`Request: ${method} ${url} - word: ${word}`);

      if (!word) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.write("You were wrong");
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ word }));
        response.end();
      }
    });
});

server.listen(8080, () => {
  console.log(
    `Dev server ready on localhost:8080/api`,
  );
});

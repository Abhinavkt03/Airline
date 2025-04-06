const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();
const port = ServerConfig.PORT;
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  // Logger.info("Successfully Started the Server",{});
});

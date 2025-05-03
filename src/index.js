const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api", apiRoutes);
const port = ServerConfig.PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  // Logger.info("Successfully Started the Server",{});
});

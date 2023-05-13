import "./loadEnvironments.js";
import chalk from "chalk";
import createDebug from "debug";
import app from "./server/index.js";

const debug = createDebug("robotsdb-api:root");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(`${chalk.red("Missing enviroment variable. Exiting...")}`);
  process.exit(1);
}

app.listen(port, () => {
  debug(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
});

debug(chalk.blue(`Connnected to database`));

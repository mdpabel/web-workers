// eslint-disable-next-line import/no-webpack-loader-syntax
import worker from "workerize-loader!./expensiveTask";

const { expensive } = new worker();

export { expensive };

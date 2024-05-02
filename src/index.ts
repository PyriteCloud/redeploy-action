import { getInput } from "@actions/core";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "./constants";

function main() {
  const apiKey = getInput("api-key");
  const deploymentId = getInput("deployment-id");

  if (!apiKey) {
    throw new Error("api-key is required");
  }

  if (!deploymentId) {
    throw new Error("deployment-id is required");
  }

  axios
    .post(
      `${BASE_URL}/deployments/${deploymentId}/redeploy`,
      {},
      { headers: { "api-key": apiKey } }
    )
    .then((res) => console.log(res.data))
    .catch((error: AxiosError) => {
      console.error(error.message, error.response?.data);
      throw Error(error.message);
    });
}

main();

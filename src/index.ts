import { getInput } from "@actions/core";
import axios, { type AxiosError } from "axios";
import { BASE_URL } from "./constants";

async function main() {
	const token = getInput("token");

	if (token.trim().length === 0) {
		throw new Error("Required token");
	}

	const [apiKey, serviceId] = await new Promise<string[]>((resolve, _) =>
		resolve(atob(token).split(":")),
	).catch((_) => {
		throw new Error("Invalid token: Token must be base64 encoded");
	});

	if (!apiKey || !serviceId) {
		throw new Error("Invalid token: Parsing token failed");
	}

	axios
		.post(
			`${BASE_URL}/services/${serviceId}/redeploy`,
			{},
			{ headers: { "api-key": apiKey } },
		)
		.then((res) => {
			const serviceId = res.data?.id;
			const serviceName = res.data?.name;
			console.log(
				`Service ${serviceName}(${serviceId}) redeployed successfully`,
			);
		})
		.catch((error: AxiosError) => {
			console.error(error.message, error.response?.data);
			throw Error(error.message);
		});
}

main();

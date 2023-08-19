# gcp-get-env

> Providing a simple way to retrieve the default `process.env` variables provided by GCP for Node.js [cloud functions](https://cloud.google.com/functions) and [app engine](https://cloud.google.com/appengine) services.

This project contains a simple function/service for retrieving the default `proces.env` variables provided by Google Cloud Platform (GCP) in Node.js for the following services:

- App Engine
- Cloud Functions (Gen1 & Gen2)

Currently, the followoing Node.js runtimes are supported:

- Node.js 16
- Node.js 18
- Node.js 20

## Prerequisites

To follow, along, you'll need:

- An active GCP account
- The `gcloud` CLI installed and configured. See [here](https://cloud.google.com/sdk/docs/install) for help.

Alternatively, use the [endpoints provided by this project](#provided-endpoints) to get the environment variables.

## Deploy and run

The project ships with `npm run` scripts to deploy publicly available endpoints in cloud functions and app engine to retrieve the default environment variables by calling with a simple HTTP `GET` in your browser.

|script name|deploys|function/service name|
|-----------|-------|---------------------|
|`npm run deploy-node16-func`| cloud function with runtime Node.js 16 Gen 1|`node16-get-env`|
|`npm run deploy-node16-func-gen2`| cloud function with runtime Node.js 16 Gen 2|`node16-gen2-get-env`|
|`npm run deploy-node18-func`| cloud function with runtime Node.js 18 Gen 1|`node18-get-env`|
|`npm run deploy-node18-func-gen2`| cloud function with runtime Node.js 18 Gen 2|`node18-gen2-get-env`|
|`npm run deploy-node20-func`| cloud function with runtime Node.js 20 Gen 1|`node20-get-env`|
|`npm run deploy-node20-func-gen2`| cloud function with runtime Node.js 20 Gen 2|`node20-gen2-get-env`|
|`npm run deploy-node16-gae`| app engine service  with runtime Node.js 16 Gen 1|`node16-get-env`|
|`npm run deploy-node18-gae`| cloud function with runtime Node.js 16 Gen 1|`node18-get-env`|
|`npm run deploy-node20-gae`| cloud function with runtime Node.js 16 Gen 1|`node20-get-env`|

The output of the gcloud command will show you the URL of the deployed function/service to be called.

## Provided endpoints

If you don't want to install in your own GCP account, feel free to call the provided endpoints to get the default environment variables for different services and runtimes*.

|GCP service|Runtime|Environment variables|
|-----------|-------|---------------------|
|Cloud Functions|Node.js 16 Gen1| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node16-get-env)|
|Cloud Functions|Node.js 16 Gen2| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node16-gen2-get-env)|
|Cloud Functions|Node.js 18 Gen1| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node18-get-env)|
|Cloud Functions|Node.js 18 Gen2| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node18-gen2-get-env)|
|Cloud Functions|Node.js 20 Gen1| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node20-get-env)|
|Cloud Functions|Node.js 20 Gen2| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node20-gen2-get-env)|
|App Engine|Node.js 16| [Get env vars](https://node16-get-env-dot-tsmx-gcp.ey.r.appspot.com/)|
|App Engine|Node.js 18| [Get env vars](https://node18-get-env-dot-tsmx-gcp.ey.r.appspot.com/)|
|App Engine|Node.js 20| [Get env vars](https://node20-get-env-dot-tsmx-gcp.ey.r.appspot.com/)|

Note that the environment variables may contain entries specific to your account/project, like `GOOGLE_CLOUD_PROJECT`.

*Without any warranty/guarantee and subject to discontinuation of services.


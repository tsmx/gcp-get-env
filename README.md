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

Alternatively, use the [services provided by this project](#provided-services) to get the environment variables.

## Provided services

If you don't want to install the functions/services in your own account, feel free to call the ones provided*.

|GCP service|Runtime|Environment variables|
|-----------|-------|---------------------|
|Cloud Functions|Node.js 16 Gen1| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node16-get-env)|
|Cloud Functions|Node.js 16 Gen2| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node16-gen2-get-env)|
|Cloud Functions|Node.js 18 Gen1| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node18-get-env)|
|Cloud Functions|Node.js 18 Gen2| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node18-gen2-get-env)|
|Cloud Functions|Node.js 20 Gen1| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node20-get-env)|
|Cloud Functions|Node.js 20 Gen2| [Get env vars](https://europe-west3-tsmx-gcp.cloudfunctions.net/node20-gen2-get-env)|
|App Engine|Node.js 16| [Get env vars](https://node16-dot-tsmx-gcp.ey.r.appspot.com/)|
|App Engine|Node.js 18| [Get env vars](https://node18-dot-tsmx-gcp.ey.r.appspot.com/)|
|App Engine|Node.js 20| [Get env vars](https://node20-dot-tsmx-gcp.ey.r.appspot.com/)|

Note that the environment variables may contain entries specific to your account/project, like `GOOGLE_CLOUD_PROJECT`.

*Without any warranty/guarantee and subject to discontinuation of services.


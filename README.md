# Healthcare NLP Visualizer Demo

The demo application is a Node.js and React.js system to visualize the Google Cloud [Healthcare Natural Language API](https://cloud.google.com/healthcare/docs/how-tos/nlp).

You can upload your own sample medical text to visualize the output such as medical dictionaries, entity extraction and relationships, context assessment and more. We have also provided sample texts for a a medical record, research paper and lab form.

![screencast](screencast-short.gif)

## Prerequisites

1. A GCP Project with billing enabled
1. Familiarity with Google Cloud Functions and Vue.js.

## Set Up Instructions to Run in GCP Cloud Functions

### Backend

The HTTP Cloud Function can be found in the `/visualizer` directory. Please note, this code is NOT meant for production use.

1. Download the service account key for your project and paste the contents into visualizer/key.json (search for REPLACE_ME)
1. Set the GCP Project ID in `visualizer/index.js` (search for REPLACE_ME)
1. Deploy the Cloud Function, you can follow the instructions [here](https://cloud.google.com/functions/docs/deploying).

```bash
GOOGLE_CLOUD_PROJECT=<gcp-project-id>
cd visualizer/
gcloud services enable healthcare.googleapis.com
gcloud config set project $GOOGLE_CLOUD_PROJECT
gcloud functions deploy nlp --entry-point analyzeDocument --runtime nodejs14 --trigger-http
gcloud alpha functions add-iam-policy-binding nlp --region=us-central1 --member=allUsers --role=roles/cloudfunctions.invoker
```

1. Copy the endpoint for your Cloud Function.

### Frontend

The Vue.js app is found in the `/app` directory.

1. ```cd app/```
1. Paste your Cloud Function endpoint in to the placeholder in index.html and script.js (search for REPLACE_ME)
1. Start a local server of your choice and open the application in your browser.

```bash
serve
```

## Set Up Instructions to Run Locally

### Local Backend

The HTTP Cloud Function can be found in the `/visualizer` directory. Please note, this code is NOT meant for production use.

1. Download the service account key for your project and paste the contents into visualizer/key.json (search for REPLACE_ME)
1. Set the GCP Project ID in `visualizer/index.js` (search for REPLACE_ME)
1. Open a terminal window with access to the gcloud SDK utility, and make sure you are logged in and have access to a valid GCP Project.

```bash
# GOOGLE_CLOUD_PROJECT=<gcp-project-id>
GOOGLE_CLOUD_PROJECT=davemorris-ai-day-202200615
gcloud config set project $GOOGLE_CLOUD_PROJECT

SERVICE_ACCOUNT_NAME=nlp-api

gcloud services enable healthcare.googleapis.com

gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
  --display-name "Healthcare NLP API Service Account" \
  --project=$GOOGLE_CLOUD_PROJECT

SERVICE_ACCOUNT_EMAIL="$SERVICE_ACCOUNT_NAME@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com"
POLICY_ACCOUNT="serviceAccount:$SERVICE_ACCOUNT_EMAIL"

gcloud projects add-iam-policy-binding $GOOGLE_CLOUD_PROJECT \
    --member $POLICY_ACCOUNT \
    --role roles/healthcare.nlpServiceViewer

cd visualizer

gcloud iam service-accounts keys create key.json \
    --iam-account $SERVICE_ACCOUNT_EMAIL \
    --project=$GOOGLE_CLOUD_PROJECT

npm install

# This technique uses Cloud Functions Framework for NodeJS: <https://cloud.google.com/functions/docs/functions-framework>
npx @google-cloud/functions-framework --target=analyzeDocument
# Serving function...
# Function: analyzeDocument
# Signature type: http
# URL: http://localhost:8080/
```

### Local Frontend

Open a second terminal window to run the frontend

```bash
# Paste your Local backend endpoint <http://localhost:8080> in to the placeholder in index.html and script.js (search for REPLACE_ME)
# Start a local server of your choice (this example uses serve <https://www.npmjs.com/package/serve>, but you could also use http-server <https://www.npmjs.com/package/http-server>) and open the application in your browser.

cd app
npm install
sudo npm install -g serve
serve
# 
#    ┌────────────────────────────────────────────────────┐
#    │                                                    │
#    │   Serving!                                         │
#    │                                                    │
#    │   - Local:            http://localhost:3000        │
#    │   - On Your Network:  http://192.168.86.147:3000   │
#    │                                                    │
#    │   Copied local address to clipboard!               │
#    │                                                    │
#    └────────────────────────────────────────────────────┘
# 
# Open <http://localhost:3000> and test out the web interface

```

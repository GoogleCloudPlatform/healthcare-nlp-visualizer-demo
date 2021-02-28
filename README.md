# Healthcare NLP Visualizer Demo

The demo application is a Node.js and React.js system to visualize the 
Google Cloud [Healthcare Natural Language API](https://cloud.google.com/healthcare/docs/how-tos/nlp).
You can upload your own sample medical text to visualize the output such as medical dictionaries,
entity extraction and relationships, context assessment and more. We have also provided sample
texts for a a medical record, research paper and lab form. 

![screencast](screencast-short.gif)

## Prerequisites 

1. A GCP Project with billing and the Healthcare NLP API enabled.
1. Complete the Healthcare NLP [How-to Guide](https://cloud.google.com/healthcare/docs/how-tos/nlp).
1. Familiarity with Google Cloud Functions and Vue.js.

## Set Up Instructions

### Backend

The HTTP Cloud Function can be found in the `/visualizer` directory. Please note, this code is NOT
meant for production use.

1. Download the service account key for your project.
1. Deploy the Cloud Function, you can follow the instructions [here](https://cloud.google.com/functions/docs/deploying).
1. Copy the endpoint for your Cloud Function.

### Frontend

The Vue.js app is found in the `/app` directory.

1. ```cd app/```
1. Paste your Cloud Function endpoint in to the placeholder in index.html. 
1. Start a local server of your choice and open the application in your 
browser.

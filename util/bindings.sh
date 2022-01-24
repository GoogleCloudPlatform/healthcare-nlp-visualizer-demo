#!/bin/sh

################################################################################
# Copyright Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
################################################################################

# How to assign the healthcare.nlpServiceViewer role to you service account
# on the command line.

gcloud projects add-iam-policy-binding REPLACE_YOUR_PROJECT_NAME_HERE \
    --member REPLACE_YOUR_SERVICE_ACCOUNT_HERE \
    --role roles/healthcare.nlpServiceViewer

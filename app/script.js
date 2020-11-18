/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MEDICAL_RECORD = 'Most Responsible Diagnosis: COPD Exacerbation  Active Issues Managed in Hospital:  Pulmonary edema Microcytic anemia Gout Purpuric rash NYD  Course in Hospital:  Mr. Johnson arrived in the ER from nursing home with a three-day history of worsening shortness of breath, yellow-green sputum, and increased sputum production. He was subsequently diagnosed with a COPD exacerbation and was satting at 84% on 4L O2 by nasal prongs. He was stepped up to BiPAP for 24 hours and prednisone, ciprofloxacin, and around the clock puffers were initiated. By day 2 of admission he was stepped down to oxygen by nasal prongs and QID puffers.  In terms of respiratory complications, Mr. Johnson had a sudden hypoxic resp failure on day 3 of admission. CCOT was involved, but ICU was avoided. He was found to be in pulmonary edema that responded to diuresis. Last documented echo was completed 15 years ago and a repeat echo was ordered to be completed as an outpatient.    Unfortunately on day 4 of admission Mr. Johnson also developed gout in the left MTP. This limited his mobility and contributed to deconditioning for which PT was involved. Also, by day 6 of admission a purpuric rash was noted on the upper and lower extremities, cause was unknown and punch biopsy was performed. The results are still pending. Lastly, upon admission Mr. Johnson was found to have a microcytic anemia. On history Mr. Johnson states he no longer eats much red meat or leafy greens, preferring tea and toast for most of his meals. There was no history of bleeding and previous FOBT testing was normal. Further testing revealed iron deficiency anemia and therapy with ferrous fumarate was initiated.   On day of discharge, Ms. Johnson was on room air but continued to be on Lasix.  Continued Home Medications: Albuterol 2 puffs q 4-6 hours daily Atrovent 2 puffs q 6h ASA 325 mg daily Metoprolol 25 mg BID Atorvastatin 40 mg daily Ramipril 10 mg daily Amlodipine 5 mg daily Metformin 1000 mg BID Terazosin 5 mg qhs Tylenol 325 mg qhs Lactulose 15cc qhs prn Citalopram 20 mg daily Multivitamin  Medications Changes: Ramipril was STOPPED Lasix was STARTED at 20mg PO BID Amlodipine was INCREASED to 10mg daily Ferrous fumarate 325 mg QHS was STARTED  Important Test Results:  CXR completed April 20th 2019 revealed pulmonary edema and enlarged cardiac silhouette Sputum culture collected April 18th 2019 was positive for pseudomonas aeruginosa  Pending Tests or Results: Echo ordered as outpatient Skin biopsy results pending  Follow-up Plans:  We asked the patient to make an appointment with their family MD next week. The patient will follow up in urgent resp clinic in 2-4 weeks time. Since moving to London the patient is not currently followed by a respirologist and since this is the third exacerbation this year a goals of care discussion may be warranted. The patient was also seen by our COPD Navigator Team and arrangements have been made to be seen as an outpatient. ';
const RESEARCH_PAPER = 'Low-grade gliomas in adults have an incidence of 0.8 to 1.2 per 100 000, and their causes are unknown. Despite their histological classification as low-grade, they cannot be cured by any current treatment mode, and no class I evidence exists to guide initial treatment of these tumors. Median survival ranges between 7.5 years and 10 years, with a 5-year survival probability between 55% and 86%. The prognosis depends on age, World Health Organization (WHO) tumor grade, Karnofsky performance score, cytological type (oligodendroglioma vs astrocytoma), and, potentially, the extent of resection. Oligodendrogliomas with loss of heterozygosity on chromosomes 1p and 19q have a distinctly more favorable prognosis and therapeutic response rate. Low-grade tumors progress to high-grade gliomas with aggressive biological behavior at increasing frequency with advancing age. Ms P is a young woman with a previously treated oligodendroglioma, WHO grade II, with loss of heterozygosity on chromosomes 1p and 19q, which at a third resection had transformed into an oligodendroglioma of WHO grade III. She wants to know her current and future therapeutic options.';
const LAB_FORM = 'H. pylori DNA Analysis\n3\nDiagnostic\nSolutions\nlaboratory\n5895 Shiloh Rd, Ste 101\nAlpharetta GA 30005\n877-485-5336\nPatient: Ima Sample\nCollected: 2/10/2018\nDOB: 7/11/1981\nAccession: 20180212-0001\nReceived: 2/12/2018\nCompleted: 2/12/2018\nOrdered by: Diane Farhi, MD\nH. pylori\nResult\nNormal\n2.9e3\nHigh\n<1.0e3\nHelicobacter pylori\nVirulence Factor, babA\nPositive\nPositive\nVirulence Factor, cagA\nVirulence Factor, dupa\nVirulence Factor, iceA\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nNegative\nPositive\nPositive\nVirulence Factor, oipA\nVirulence Factor, vacA\nVirulence Factor, virB\nVirulence Factor, virD\nAntibiotic Resistance Genes, phenotypes\nHelicobacter\nResult\nClarithromycin\nPositive\nExpected Result\nAbsent\nA21420\nAbsent\nA2142G\nAbsent\nA2143G\nPresent\nFluoroquinolones\nNegative\nAbsent\ngyrA N87K\nAbsent\ngyrA D91N\nAbsent\ngyrA D91G\nAbsent\nAbsent\nAbsent\ngyrB S479N\nTetracycline\ngyrB R484K\nPositive\nAbsent\nPBP1A S414R\nPresent\nPBP1A T556S\nAbsent\nPBP1A N562Y\nAbsent\nAmoxicillin\nNegative\nAbsent\nA926G\nAbsent\nAGA926-928TTC Absent\nThe assays were developed and the perfomance characteristics\ndetermined by Diagnostic Solutions Laboratory.\nCLIA# 11D-2097795\nMedical Director - Diane Farhi, MD\n1\n';
const SAMPLE_TEXTS = [MEDICAL_RECORD, RESEARCH_PAPER, LAB_FORM];

const HIGHLIGHT_ENTITIES = new Set(['PROBLEM', 'PROCEDURE', 'MEDICINE', 'ANATOMICAL_STRUCTURE', 'LABORATORY_DATA', 'BODY_MEASUREMENT', 'MEDICAL_DEVICE', 'BODY_FUNCTION', 'SUBSTANCE_ABUSE']);
const CLOUD_FUNCTION_ENDPOINT = "";

var app = new Vue({
  el: '#app',
  data: {
    medical_object: null,
    loading: false,
    using_sample_text: true,
    text_option: '0',
    custom_text: '',
    input_text: MEDICAL_RECORD,
    last_submitted_text: MEDICAL_RECORD,
    response_body: {},
  },
  watch: {
    input_text: function() {
      // save text if it is custom
      if (this.text_option == 'custom') {
        this.custom_text = this.input_text;
      }
    },
    text_option: function() {
      if (this.text_option == 'custom') {
        this.using_sample_text = false;
        this.input_text = this.custom_text;
      } else {
        this.using_sample_text = true;
        this.input_text = SAMPLE_TEXTS[parseInt(this.text_option)];
      }
    },
  },

  updated: function() {
    const tab_container = document.getElementById('tabs');
    if (tab_container) {
      componentHandler.upgradeElement(tab_container);
    }

    const loading_bar = document.getElementById('loading-bar');
    if (loading_bar) {
      componentHandler.upgradeElement(loading_bar);
    }
  },

  computed: {

    relationship_list: function() {
      const relationships = {};

      if (this.medical_object.relationships) {
        this.medical_object.relationships.forEach(function(relationship) {
          if (relationship.subjectId in relationships) {
            relationships[relationship.subjectId].objects.push(app.medical_object.entityMentions[relationship.objectId - 1].text.content);
          } else {
            relationships[relationship.subjectId] = {
              'text': app.medical_object.entityMentions[relationship.subjectId - 1].text.content,
              'objects': [app.medical_object.entityMentions[relationship.objectId - 1].text.content],
            };
          }
        });
      }

      return relationships;
    },

    parsed_text_parts: function() {
      const text_parts = [];

      if (this.medical_object == null) {
        return text_parts;
      }

      if (this.medical_object.entityMentions == null) {
        return text_parts;
      }

      let cursor = 0;

      this.medical_object.entityMentions.forEach(function(enitity_mention) {
        const text = enitity_mention.text.content;
        const offset = enitity_mention.text.beginOffset || 0;

        const text_before = app.medical_object.text.slice(cursor, offset);

        text_parts.push({'text': text_before, 'offset': offset, 'normal_text': true, 'type': null});
        text_parts.push({'text': text, 'offset': offset, 'normal_text': false, 'type': enitity_mention.type});

        cursor = offset + text.length;
      });

      const remaining_text = app.medical_object.text.slice(cursor, app.medical_object.text.length);
      text_parts.push({'text': remaining_text, 'offset': cursor, 'normal_text': true, 'type': null});

      return text_parts;
    },
  },
  methods: {
    get_css_class_for_type: function(entity_type) {
      // type of "special" entities
      // {'PROBLEM', 'PROCEDURE', 'MEDICINE', 'ANATOMICAL_STRUCTURE', 'LABORATORY_DATA', 'BODY_MEASUREMENT', 'MEDICAL_DEVICE', 'BODY_FUNCTION', 'SUBSTANCE_ABUSE'}3

      if (HIGHLIGHT_ENTITIES.has(entity_type)) {
        return 'blue-highlighting';
      } else if (entity_type) {
        return 'blue-text';
      } else {
        return '';
      }
    },
  },
});


function analyse_text() {
  // get text
  const text = app.input_text;
  console.log('input text: ' + text);

  $.ajax({
    url: 'https://us-central1 YOUR FUNCTION HERE.cloudfunctions.net/visualizer',
    type: 'POST',
    data: {'text': text},
    dataType: 'JSON',
    success: function(data) {
      console.log(data);
      app.medical_object = data;
      app.response_body['entities'] = data.entities;
      app.response_body['entityMentions'] = data.entityMentions;
      app.response_body['relationships'] = data.relationships;
    },
    beforeSend: function() {
      // start loading
      app.loading = true;
      app.medical_object = null;
    },
  })
      .done(function(data) {
        // stop loading
        app.last_submitted_text = text;
        app.loading = false;
      })
      .fail(function(data) {

      });
}

function downloadResponse() {
  const link = document.createElement('a');
  link.download = 'response.json';
  const blob = new Blob([JSON.stringify(app.response_body, null, 2)], {type: 'text/plain'});
  link.href = window.URL.createObjectURL(blob);
  link.click();
}

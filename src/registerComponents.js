import Vue from 'vue'

Vue.component('loading', require("@/components/LoadingSpinner").default);
Vue.component('btn-search', require("@/components/buttons/ButtonSearch").default);
Vue.component('btn-back', require("@/components/buttons/ButtonBack").default);
Vue.component('btn-download-csv', require("@/components/buttons/ButtonDownloadCsv").default);
Vue.component('btn-download-json', require("@/components/buttons/ButtonDownloadJson").default);
Vue.component('btn-download-visualization-csv', require("@/components/buttons/ButtonDownloadVisualizationCsv").default);
Vue.component('btn-download-visualization-json', require("@/components/buttons/ButtonDownloadVisualizationJson").default);
Vue.component('btn-download-dataset-csv', require("@/components/buttons/ButtonDownloadDatasetCsv").default);
Vue.component('btn-download-dataset-json', require("@/components/buttons/ButtonDownloadDatasetJson").default);
Vue.component('select-category', require("@/components/form/CategorySelect").default);

Vue.component('card-reference', require("@/components/cards/CardReference").default);

import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'
Vue.component('model-select', ModelSelect);
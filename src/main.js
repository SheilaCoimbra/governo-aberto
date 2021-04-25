import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faBook, faUserShield, faBus, faDollarSign, 
  faBuilding, faAmbulance, faSearch, faQuestionCircle,
  faFileAlt, faClock, faArrowLeft, faFileCsv, faFileCode, 
  faTable, faEdit, faLightbulb, faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGtag from "vue-gtag"

library.add(faBook, faUserShield, faBus, 
  faDollarSign, faBuilding, faAmbulance,
  faSearch, faQuestionCircle, faFileAlt, faClock,
  faArrowLeft, faFileCsv, faFileCode, faTable, faEdit,
  faLightbulb, faThumbsUp);
Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(VueGtag, {
  config: { 
    id: "G-13QKBTZWY7",
    params: {
      send_page_view: false
    }
  },
  pageTrackerScreenviewEnabled: true,
  pageTrackerTemplate(to) {
    return {
      page_title: to.meta.title,
      page_path: to.path
    }
  }
});

import VueSocialSharing from 'vue-social-sharing';
Vue.use(VueSocialSharing);

require("./registerComponents");
require("./registerPlugins");

new Vue({
  router,
  render: function (h) { return h(App) },
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

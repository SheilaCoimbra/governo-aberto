import axios from 'axios'

export default class ApiService {

  getClient() {
    return axios.create({
      baseURL: process.env.VUE_APP_API_URL
    })
  }

  async getStates() {
    let result = await this.getClient().get("states");
    return result.data;
  }

  async getCities(id) {
    let result = await this.getClient().get("state/" + id + "/cities");
    return result.data;
  }

  async getCityInfo(state, city) {
    let result = await this.getClient().get("city-info/" + state + "/" + city);
    return result.data;
  }

  async getVisualizations(params) {
    let result = await this.getClient().get("visualizations", {
      params: params
    });
    return result.data;
  }

  async loadTableByVisualization(alias, params) {
    let result = await this.getClient().get("visualization/" + alias + "/table", {
      params: params
    });
    return result.data;
  }

  async loadDatasetTable(name, params) {
    let result = await this.getClient().get("dataset/" + name, {
      params: params
    });
    return result.data;
  }

  async loadVisualization(id, params) {
    let result = await this.getClient().get("visualization/" + id, {
      params: params
    });
    return result.data;
  }

  async loadVisualizationByAlias(alias, params) {
    let result = await this.getClient().get("visualization/" + alias, {
      params: params
    });
    return result.data;
  }

  async getCategories() {
    let result = await this.getClient().get("categories");
    return result.data;
  }

  getDownloadTableRoute(alias, type, city) {
    return process.env.VUE_APP_API_URL + `/visualization/${alias}/download/${type}?city=` + city;
  }

  getDownloadDatasetRoute(name, type, city) {
    return process.env.VUE_APP_API_URL + `/dataset/${name}/download/${type}?city=` + city;
  }
}
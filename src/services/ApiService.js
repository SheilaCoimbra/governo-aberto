import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

export default class ApiService {
  
  constructor() {
    this.http = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      adapter: cache.adapter
    });
  }

  async getStates() {
    let result = await this.http.get("states");
    return result.data;
  }

  async getCities(id) {
    let result = await this.http.get("state/" + id + "/cities");
    return result.data;
  }

  async getCityInfo(state, city) {
    let result = await this.http.get("city-info/" + state + "/" + city);
    return result.data;
  }

  async getVisualizations(params) {
    let result = await this.http.get("visualizations", {
      params: params
    });
    return result.data;
  }

  async loadTableByVisualization(alias, params) {
    let result = await this.http.get("visualization/" + alias + "/table", {
      params: params
    });
    return result.data;
  }

  async loadDataset(name, params) {
    let result = await this.http.get("dataset/" + name, {
      params: params
    });
    return result.data;
  }

  async loadDatasetTable(name, params) {
    let result = await this.http.get("dataset/" + name + "/table", {
      params: params
    });
    return result.data;
  }

  async loadVisualization(id, params) {
    let result = await this.http.get("visualization/" + id, {
      params: params
    });
    return result.data;
  }

  async loadVisualizationByAlias(alias, params) {
    let result = await this.http.get("visualization/" + alias, {
      params: params
    });
    return result.data;
  }

  async getCategories() {
    let result = await this.http.get("categories");
    return result.data;
  }

  getDownloadTableRoute(alias, type, city) {
    return process.env.VUE_APP_API_URL + `/visualization/${alias}/download/${type}?city=` + city;
  }

  getDownloadDatasetRoute(name, type, city) {
    return process.env.VUE_APP_API_URL + `/dataset/${name}/download/${type}?city=` + city;
  }
}
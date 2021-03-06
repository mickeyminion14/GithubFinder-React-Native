import axios from 'axios';
import {
  GITHUB_USERS_GET,
  GITHUB_USERS_SEARCH_GET,
} from '../../../constants/url';

class HomeService {
  constructor() {}

  async getUsers(): Promise<any> {
    return axios.get(GITHUB_USERS_GET);
  }

  async searchUsers(searchParams: any): Promise<any> {
    return axios.get(GITHUB_USERS_SEARCH_GET, {params: searchParams});
  }
}

export const homeService = new HomeService();

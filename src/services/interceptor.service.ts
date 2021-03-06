import Axios from 'axios';
import {loaderService} from './loader.service';
import {utilityService} from './utility.service';
// import { LoaderService } from "./Loader.service";

export const InterceptorService = {
  intercept: () => {
    Axios.interceptors.request.use((config) => {
      loaderService.showLoader(true);

      return config;
    });

    Axios.interceptors.response.use(
      (data) => {
        loaderService.showLoader(false);
        return data;
      },
      (err) => {
        const {
          response: {
            data: {message},
          },
        } = err;
        utilityService.showToast(message, 'warning');
        loaderService.showLoader(false);
        return Promise.reject(err);
      },
    );
  },
};

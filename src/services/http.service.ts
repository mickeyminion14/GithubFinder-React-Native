import axios, {AxiosPromise} from 'axios';

class HttpService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = 'http://localhost:8080/';
  }

  post<T>(url: string, data: any): AxiosPromise<any> {
    return axios.post(this.apiUrl + url, data);
  }

  put<T>(url: string, data: any): AxiosPromise<any> {
    return axios.put(this.apiUrl + url, data);
  }

  patch<T>(url: string, data: any): AxiosPromise<any> {
    return axios.patch(this.apiUrl + url, data);
  }
  delete<T>(url: string): AxiosPromise<any> {
    return axios.delete(this.apiUrl + url);
  }

  get<T>(url: string, httpParams?: any): AxiosPromise<any> {
    const updatedParams = this.parseDateToTimeStamp(httpParams);
    for (const item in httpParams) {
      if (
        httpParams[item] === '' ||
        httpParams[item] === undefined ||
        httpParams[item] === null
      ) {
        delete httpParams[item];
      }
    }
    let finalParams: any;
    if (httpParams) {
      finalParams = updatedParams;
    }
    return axios.get(this.apiUrl + url, {params: finalParams});
  }

  parseDateToTimeStamp(obj: any) {
    const newValueInstance = Object.assign({}, obj);
    (function isEmpty(data: any): boolean {
      if (typeof data === 'object' && data !== null) {
        if (Array.isArray(data)) {
          data.forEach((item: any, index: number) => {
            if (isEmpty(item)) {
              data.splice(index, 1);
            }
          });
        } else {
          Object.keys(data).map((key, index) => {
            if (data[key] instanceof Date) {
              data[key] = new Date(data[key]).toISOString();
            }
            // if (data[key] instanceof _moment) {
            //   data[key] = data[key].toDate().toISOString();
            // }
          });
        }
      }
      return data;
    })(newValueInstance);
    return newValueInstance;
  }
}

export const httpService = new HttpService();

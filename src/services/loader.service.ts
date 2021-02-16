import {BehaviorSubject} from 'rxjs';

class LoaderService {
  $loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  showLoader(state: boolean): void {
    this.$loader.next(state);
  }
}

export const loaderService = new LoaderService();

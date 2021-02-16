import {BehaviorSubject} from 'rxjs';

class LoaderService {
  $loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
}

export const loaderService = new LoaderService();

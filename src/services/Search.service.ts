import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

const searchSubject = new Subject();
export const searchService = {
  sendSearchText: (searchText: string) =>
    searchSubject.next({searchText: searchText.trim().toLowerCase()}),
  getSearchText: () => searchSubject.asObservable().pipe(debounceTime(500)),
};

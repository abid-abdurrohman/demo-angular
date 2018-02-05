import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private url2: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getAll2() {
    return this.http.get(this.url2)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .map(response => response.json())
      .catch(this.handleError)
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, resource)
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()))
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {
  constructor(http: Http) {
    super('http://5a1bf77dc3630f0012b24264.mockapi.io/api/client', 'http://5a1bf77dc3630f0012b24264.mockapi.io/api/testimoni', http)
  }
}

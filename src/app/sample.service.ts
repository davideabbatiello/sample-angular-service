import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {

  constructor () {

  }

  myMethod() {
	console.log('my service method')
  }



}

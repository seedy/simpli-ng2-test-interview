import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * pokemon api related service
 */
@Injectable()
export class PokemonService {
 constructor(
   private http: Http
 ) {}

 get(): Observable<string[]> {
   return this.http.get('http://pokeapi.co/api/v2/pokemon')
     .map((response: Response) => response.json())
     .catch((err: any) => {
      let errMsg = (err.message) ? err.message :
        err.status ? `${err.status} - ${err.statusText}` : 'Server error';
      return Observable.throw(errMsg);
   });
 }
}

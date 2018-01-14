import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesUrl = 'https://heroesapp-65cce.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-65cce.firebaseio.com/heroes/';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers ({
      'Content-Type': 'aplication/json'
    });

    return this.http.post(this.heroesUrl, body, {headers})
      .map( res => {
          console.log(res.json());
          return res.json();
      });
  }
  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new Headers ({
      'Content-Type': 'aplication/json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;

    return this.http.put(url, body, {headers})
      .map( res => {
          console.log(res.json());
          return res.json();
      });
  }

}

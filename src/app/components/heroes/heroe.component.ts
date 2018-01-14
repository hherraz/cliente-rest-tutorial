import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../providers/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: ''
  };

  nuevo = false;
  id: string;

  constructor(private _heroeServices: HeroesService, private router: Router,
              private route: ActivatedRoute) {

    this.route.params.subscribe( parametros => this.id = parametros['id'] );
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    if (this.id === 'nuevo') {
      /** Insertando */
      this._heroeServices.nuevoHeroe(this.heroe)
      .subscribe(data => {
        this.router.navigate([ '/heroe', data.name ]);
      },
      error => console.error(error));
    }else {
      /** Actualizando */
      this._heroeServices.actualizarHeroe(this.heroe, this.id)
      .subscribe(data => {
        console.log(data);
      },
      error => console.error(error));
    }
  }
}

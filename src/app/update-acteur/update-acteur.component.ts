import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/film.model';
import { Acteur } from '../model/acteur.model';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-update-acteur',
  templateUrl: './update-acteur.component.html',
  styles: []
})
export class UpdateActeurComponent implements OnInit {

  currentActeur = new Acteur();
  films! : Film[];
  updatedFilmId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private acteurService: ActeurService) { }

  ngOnInit(): void {
    this.acteurService.listeFilms().
    subscribe(films => {this.films = films._embedded.films;
    console.log(films);
    });


    this.acteurService.consulterActeur(this.activatedRoute.snapshot.params['id']).
    subscribe( act =>{ this.currentActeur = act; 
      this.updatedFilmId =   this.currentActeur.film.idFilm;
    
    } ) ;
    }
    

  updateActeur() {
    this.currentActeur.film = this.films.find(film => film.idFilm == this.updatedFilmId)!;
         this.acteurService.updateActeur(this.currentActeur).subscribe(act => {
      this.router.navigate(['acteurs']); }
      );
  }

}

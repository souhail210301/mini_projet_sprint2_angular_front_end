import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../model/film.model';
import { Acteur } from '../model/acteur.model';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html'
})
export class AddActeurComponent implements OnInit {

  newActeur = new Acteur();
  films! : Film[];
  newIdFilm! : number;
  newFilm! : Film;
  
  constructor(private acteurService: ActeurService,
              private router : Router) { }

  ngOnInit(): void {

    this.acteurService.listeFilms().
          subscribe(films => {this.films = films._embedded.films;
            console.log(films);
        });
 
  }

 
  addActeur(){
    this.newActeur.film = this.films.find(film => film.idFilm == this.newIdFilm)!;
    this.acteurService.ajouterActeur(this.newActeur)
                      .subscribe(acts => {
                      console.log(acts);
                      this.router.navigate(['acteurs']);
                      }); 
    }




}

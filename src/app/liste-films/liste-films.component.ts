import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { ActeurService } from '../services/acteur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent implements OnInit {


films! : Film[];
updatedFilm:Film = {"idFilm":0,"nomFilm":""};
ajout:boolean=true;


  constructor(private acteurService : ActeurService,
    public authService : AuthService) { }

  ngOnInit(): void {
    this.acteurService.listeFilms().
    subscribe(films => {this.films = films._embedded.films;})
// console.log(films);
}
chargerFilms(){
  this.acteurService.listeFilms().
  subscribe(films => {this.films = films._embedded.films;
  console.log(films);
  });
  }
filmUpdated(film:Film){
  console.log("Film updated event",film);
  this.acteurService.ajouterFilm(film).subscribe( ()=> this.chargerFilms());
  }

  updateFilm(film:Film) {
    this.updatedFilm=film;
    this.ajout=false;
    }

    supprimerFilm(a: Film)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.acteurService.supprimerFilm(a.idFilm).subscribe(() => {
            console.log("film supprimé");
            this.chargerFilms();     
          
    });
    }

  

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  @Output()
filmUpdated = new EventEmitter<Film>();
  @Input()
  film! : Film;
  @Input()
  ajout!:boolean;


  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.film);

  }

  
  saveFilm(){
    this.filmUpdated.emit(this.film);
  }
}

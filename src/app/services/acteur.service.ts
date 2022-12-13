import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Acteur } from '../model/acteur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilmWrapper } from '../model/filmWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ActeurService {
  apiURL: string = 'http://localhost:9999/acteurs/api';
  apiURLFilm: string = 'http://localhost:9999/acteurs/film';
  acteurs: Acteur[]; //un tableau de acteurs
  //films : Film[];

  constructor(private http: HttpClient,
              private authService: AuthService) {
    /* this.films = [
      { idFilm: 1, nomFilm: 'Goodfellas' },
      { idFilm: 2, nomFilm: 'The Sopranos' },
    ]; */
    this.acteurs = [
      /* {
        idActeur: 1,
        nomActeur: 'Joe Pesci ',
        salaireActeur: 100000,
        dateNaissance: new Date('02/09/1943'),
        film: { idFilm: 1, nomFilm: 'Goodfellas' },
      },

      {
        idActeur: 2,
        nomActeur: 'Robert de Niro',
        salaireActeur: 250000,
        dateNaissance: new Date('08/17/1943'),
        film: { idFilm: 1, nomFilm: 'Goodfellas' },
      },

      {
        idActeur: 3,
        nomActeur: 'Ray Liotta',
        salaireActeur: 150000,
        dateNaissance: new Date('12/18/1954'),
        film: { idFilm: 2, nomFilm: 'The Sopranos' },
      },*/
    ];
  }

  listeActeur(): Observable<Acteur[]> {
return this.http.get<Acteur[]>(this.apiURL+"/all");

  }

  ajouterActeur(act: Acteur): Observable<Acteur> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Acteur>(this.apiURL, act, {headers:httpHeaders});
  }

  supprimerActeur(id: number) {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
  }

  consulterActeur(id: number): Observable<Acteur> {
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Acteur>(url,{headers:httpHeaders});
  }

  trierActeurs() {
    this.acteurs = this.acteurs.sort((n1, n2) => {
      if (n1.idActeur > n2.idActeur) {
        return 1;
      }
      if (n1.idActeur < n2.idActeur) {
        return -1;
      }
      return 0;
    });
  }

  updateActeur(act: Acteur): Observable<Acteur> {
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.put<Acteur>(this.apiURL, act, {headers:httpHeaders});
  }

  /*listeFilms():Observable<Film[]>{
            return this.http.get<Film[]>(this.apiURL+"/film");
            }*/

  listeFilms(): Observable<FilmWrapper> {
  
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<FilmWrapper>(this.apiURLFilm,{headers:httpHeaders});
  }

  rechercherParFilm(idFilm: number): Observable<Acteur[]> {
    const url = `${this.apiURL}/actsfilm/${idFilm}`;
    return this.http.get<Acteur[]>(url);
  }

  rechercherParNom(nom: string):Observable< Acteur[]> {
    const url = `${this.apiURL}/actsByName/${nom}`;
    return this.http.get<Acteur[]>(url);
    }
    ajouterFilm( film: Film):Observable<Film>{
      return this.http.post<Film>(this.apiURLFilm, film, httpOptions);
      }

      supprimerFilm(id:number){
        const url =` ${this.apiURLFilm}/${id}`;
        return this.http.delete(url, httpOptions);
      }
      




  /*  consulterFilm(id:number): Film{
            return this.films.find(film => film.idFilm == id)!;
            
        
         }*/
}

import { Component, OnInit } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import { ActeurService } from '../services/acteur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomActeur! : string;
  allActeurs! : Acteur[];
searchTerm!: string;

  acteurs! : Acteur[];
 
  constructor(private acteurService : ActeurService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.acteurService.listeActeur().subscribe(acts => {
      console.log(acts);
      this.acteurs = acts;
      });
  }

  rechercherActs(){
    this.acteurService.rechercherParNom(this.nomActeur).
subscribe(acts => {
this.acteurs = acts;
console.log(acts)});
  }

  onKeyUp(filterText : string){
    this.acteurs = this.allActeurs.filter(item =>
    item.nomActeur.toLowerCase().includes(filterText));}


    chargerActeurs(){
      this.acteurService.listeActeur().subscribe(act => {
        console.log(act);
        this.acteurs = act;
        });
    }

    supprimerActeur(a: Acteur)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.acteurService.supprimerActeur(a.idActeur).subscribe(() => {
            console.log("acteur supprimé");
            this.chargerActeurs();     
          
    });
    }

}

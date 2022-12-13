import { Component, OnInit } from '@angular/core';
import { Acteur } from '../model/acteur.model';
import { ActeurService } from '../services/acteur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html'
})
export class ActeursComponent implements OnInit {

    acteurs? : Acteur[]; //un tableau de acteurs

  constructor(private acteurService: ActeurService,
              public authService: AuthService) {
   //this.acteurs=[];
     }

  ngOnInit(): void {

    this.chargerActeurs();
  }

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

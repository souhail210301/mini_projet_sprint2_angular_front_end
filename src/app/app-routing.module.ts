import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActeurComponent } from './add-acteur/add-acteur.component';
import { ActeursComponent } from './acteurs/acteurs.component';
import { UpdateActeurComponent } from './update-acteur/update-acteur.component';
import { RechercheParFilmComponent } from './recherche-par-film/recherche-par-film.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ActeurGuard } from './acteur.guard';



const routes: Routes = [
  {path: "acteurs", component : ActeursComponent},
  {path: "add-acteur", component : AddActeurComponent},
  {path: "updateActeur/:id", component: UpdateActeurComponent},
  {path: "", redirectTo: "acteurs", pathMatch: "full" },
  {path: "rechercheParFilm", component : RechercheParFilmComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeFilms", component : ListeFilmsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-produit", component : AddActeurComponent, canActivate:[ActeurGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

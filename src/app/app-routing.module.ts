import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MiProyetoTemplateFormComponent } from './mi-proyeto-template-form/mi-proyeto-template-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PieComponent } from './pie/pie.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Cabecera', component: CabeceraComponent},
  { path: 'Pie', component: PieComponent},
  { path: 'Usuarios', component: UsuariosComponent},
  { path: 'Reporte', component: MiProyetoTemplateFormComponent},
  { path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

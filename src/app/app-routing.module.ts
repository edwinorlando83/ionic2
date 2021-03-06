import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./usuario/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./usuario/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./usuario/login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'tabprincipal',
    loadChildren: () => import('./tabprincipal/tabprincipal.module').then( m => m.TabprincipalPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./usuario/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'listarol',
    loadChildren: () => import('./usuario/listarol/listarol.module').then( m => m.ListarolPageModule)
  },
  {
    path: 'agregarusuario',
    loadChildren: () => import('./usuario/agregarusuario/agregarusuario.module').then( m => m.AgregarusuarioPageModule)
  },
  {
    path: 'editarusuario/:correo',
    loadChildren: () => import('./usuario/editarusuario/editarusuario.module').then( m => m.EditarusuarioPageModule)
  },   {
    path: 'editarimagen/:correo',
    loadChildren: () => import('./usuario/editarimagen/editarimagen.module').then( m => m.EditarimagenPageModule)
  }


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

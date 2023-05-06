import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DescProductoComponent } from './components/desc-producto/desc-producto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MiembroequipoComponent } from './components/miembroequipo/miembroequipo.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'index',component: IndexComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'catalogo',component: CatalogoComponent},
  {path:'footer',component: FooterComponent},
  {path:'checkout',component: CarritoComponent},
  {path:'checkout',component: CarritoComponent},
  {path:'descripcionproducto',component: DescProductoComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'about-me',component: AboutMeComponent},
  {path:'header',component: HeaderComponent},
  {path:'producto',component: ProductoComponent},
  {path:'miembroequipo',component: MiembroequipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

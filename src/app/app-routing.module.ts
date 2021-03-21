import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { MobileComponent } from './mobile/mobile.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'men', component:MenComponent},
  {path:'women', component:WomenComponent},
  {path:'mobile', component:MobileComponent},
  {path:'electronic', component:ElectronicComponent},
  {path:'cart', component:CartComponent},
  {path:'footer', component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const  RoutingComponents =[ FooterComponent,
  HeaderComponent,
  HomeComponent,
  MenComponent,
  WomenComponent,
  MobileComponent,
  ElectronicComponent,
  CartComponent]
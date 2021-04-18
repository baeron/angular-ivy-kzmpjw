import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./loginView/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
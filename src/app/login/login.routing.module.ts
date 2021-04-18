import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as fromCotainers from "./container";

const routes: Routes = [
  {
    path: "",
    component: fromCotainers.LoginPageComponent
  }
];

@NgModule({
  declarations: [...fromCotainers.loginPageContainer],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}

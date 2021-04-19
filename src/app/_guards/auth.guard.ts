import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { Router, CanLoad } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route) {
    // if (localStorage.getItem("currentUser")) {
    //   return true;
    // }
    // this.router.navigate(["/login"]);
    return false;
  }
}
/**
 checkTokenExpiration() {
      // checking whether your token has expired
      ... implementation here
      return false || true
  }

  canLoad() {
    return this.checkTokenExpiration()
  }
 */

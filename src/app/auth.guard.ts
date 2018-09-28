import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private auth: AuthService, private route: Router) {}

  canActivate() {
     const auth = this.auth.getAuth();
    
     if(auth) {
       return true;
     }else{
       this.route.navigate(['/login']);
       return false;
     }

  }
}

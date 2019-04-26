import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, AuthProvider, AuthOptions } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null));
  }

  authenticate({isSignIn, provider, user}: AuthOptions): Promise<void | auth.UserCredential> {
    let operation: Promise<void | auth.UserCredential>;
    if (provider !== AuthProvider.Email) {
      operation = this.signInWithPopup(provider);
    } else {
      operation = isSignIn ? this.signInWithEmailAndPassword(user) : this.signUpWithEmail(user);
    }
    return operation;
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private signInWithEmailAndPassword({ email, password }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({ name, email, password }: User): Promise<void | auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credentials => {
      credentials.user.updateProfile({ displayName: name, photoURL: null }).then(() => credentials);
    });
  }

  private signInWithPopup(provider: AuthProvider): Promise<auth.UserCredential> {
    let signInProvider = null;
    switch (provider) {
      case AuthProvider.Facebook:
        signInProvider = new auth.FacebookAuthProvider();
        break;
    }
    return this.afAuth.auth.signInWithPopup(signInProvider);
  }
}

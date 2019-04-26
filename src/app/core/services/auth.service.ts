import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  private signInWithEmailAndPassword({ email, password }): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({ name, email, password }): Promise<void | auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credentials => {
      credentials.user.updateProfile({ displayName: name, photoURL: null }).then(() => credentials);
    });
  }

  private signInWithPopup(provider: string): Promise<auth.UserCredential> {
    let signInProvider = null;
    switch (provider) {
      case 'facebook':
        signInProvider = new auth.FacebookAuthProvider();
        break;
    }
    return this.afAuth.auth.signInWithPopup(signInProvider);
  }
}

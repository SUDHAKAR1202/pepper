import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCIOFAJ6uLCGnXGKDOQEixLFczcyOLS02U",
  authDomain: "pepper-4002a.firebaseapp.com",
  projectId: "pepper-4002a",
  storageBucket: "pepper-4002a.appspot.com",
  messagingSenderId: "110336910832",
  databaseURL: "https://pepper-f7bf2-default-rtdb.firebaseio.com",
  appId: "1:110336910832:web:d528df0c4dfa2a36a16935",
  measurementId: "G-E7P3FRKCXR"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

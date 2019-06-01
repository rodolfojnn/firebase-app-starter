import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database'; 
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular 5';

  ngOnInit() {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyAgbxlvgfEcWYxgE5gqYjOMGnniqnsTc6M",
      authDomain: "piloto-5a556.firebaseapp.com",
      databaseURL: "https://piloto-5a556.firebaseio.com",
      projectId: "piloto-5a556",
      storageBucket: "piloto-5a556.appspot.com",
      messagingSenderId: "831670952550",
      appId: "1:831670952550:web:b5275a12db993e03"
    });   
    const db = app.database();
    const ref = db.ref('teste');
    console.log(ref);
    ref.push(Date.now());    
    ref.on('child_added', (childSnapshot) => {      
      console.log(childSnapshot); 
    });
  } 
  

}

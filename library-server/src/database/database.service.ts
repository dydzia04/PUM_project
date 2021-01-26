import { Injectable } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import firebase from 'firebase-admin';
import { GoogleData } from '../google-data';

@Injectable()
export class DatabaseService {
  /**
   * Database reference
   * @private
   */
  private _database: Firestore;

  /**
   * Getter for database
   */
  get database(): FirebaseFirestore.Firestore {
    return this._database;
  }

  /**
   * Creates connection to firebase
   */
  constructor() {
    if (!firebase) {
      firebase.initializeApp({
        credential: firebase.credential.cert(GoogleData.keyJsonFirestore),
      });

      this._database = firebase.firestore();
    }
  }
}

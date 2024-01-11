/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as functions from 'firebase-functions';


export const generateSitemap = functions.https.onRequest((req, res) => {
    const inicio = fetch('https://www.neuronica.co/');

    let sitemap = '';

    Promise.all([
        inicio.then(result =>result.json)
    ])

    .then(jsonData =>)
});
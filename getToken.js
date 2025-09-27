// getToken.js
import { GoogleAuth } from 'google-auth-library';

async function getIdentityToken() {
  // La URL base de tu servicio Cloud Run es la audiencia del token.
  const targetAudience = 'https://pagina-neuronica-backend-490354620288.us-central1.run.app'; 

  // 1. Crea una instancia de GoogleAuth
  const auth = new GoogleAuth();
  
  // 2. Obtiene el token de identidad (JWT) para la audiencia objetivo.
  // Usamos .getCredentials() para obtener el token, que es el método más directo.
  // NOTA: 'client' aquí es una instancia del cliente JWT.
  const client = await auth.getIdTokenClient(targetAudience);

  // 3. El token de identidad se encuentra en la propiedad del token retornado
  const idToken = await client.idTokenProvider.fetchIdToken(targetAudience);

  if (idToken) {
    console.log('CLOUDRUN_TOKEN (Bearer format):');
    // Imprime el token solo, sin el prefijo "Bearer"
    console.log(idToken); 
  } else {
    console.error('ERROR: No se pudo obtener el token de identidad. Revisa la variable GOOGLE_APPLICATION_CREDENTIALS y el rol de Invocador de Cloud Run.');
  }
}

getIdentityToken().catch(console.error);
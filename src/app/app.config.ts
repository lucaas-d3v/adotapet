import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//Importa o provideHttpClient e o withInterceptors
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
// 2. Importa o seu interceptor
import { authInterceptor } from './interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    
    // 3. Configura o provideHttpClient para usar o interceptor
    provideHttpClient(withInterceptors([authInterceptor])) 
  ]
};
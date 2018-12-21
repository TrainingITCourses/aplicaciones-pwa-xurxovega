import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ApiService } from './store/services/api.service';
import { DisplaySearcherComponent } from './display-searcher/display-searcher.component';
import { DisplayListLauncherComponent } from './display-list-launcher/display-list-launcher.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StatusEffects } from './store/reducers/status/status.effects';
import { AgencyEffects } from './store/reducers/agency/agency.effects';
import { MissionEffects } from './store/reducers/mission/mission.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LaunchEffects } from './store/reducers//launch/launch.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    DisplaySearcherComponent,
    DisplayListLauncherComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([StatusEffects, AgencyEffects, MissionEffects, LaunchEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

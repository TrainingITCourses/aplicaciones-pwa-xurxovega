import { Component, OnInit } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciceReduxPWA';
  public AppVersionProd = '0.0.0';

  constructor(private swUpdate: SwUpdate) { 
    if (this.swUpdate.isEnabled) {
      // swUpdate.checkForUpdate().then() // Para forzar comprobación de versión cada x tiempo
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const msg =
          'current:' + event.current.hash +
          '. Load new: ' + event.available.hash + '?';

        if( confirm(msg)) window.location.reload();
      });
    }
   }

  ngOnInit() {
  }

}


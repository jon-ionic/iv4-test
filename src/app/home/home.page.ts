import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IdentityService } from '../services/identity-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private readonly vaultService = inject(IdentityService);
  constructor() {}

  async ngOnInit() {
    await this.vaultService.unlock();
  }
}

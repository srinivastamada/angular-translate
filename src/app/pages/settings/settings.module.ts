import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SettingsRoutes } from './settings.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    TranslateModule,
  ],
})
export class SettingsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthGuard } from './guards/authguard.guard';
import { ToastModule } from './toast/toast.module';

@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent],
  imports: [CommonModule, RouterModule, ToastModule],
  exports: [HeaderComponent, ProgressBarComponent, ToastModule],
  providers: [AuthGuard],
})
export class CoreModule { }

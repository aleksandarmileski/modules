import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';

import { CrisisService } from './crisis.service';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';

@NgModule({
  imports: [
    CommonModule,
    CrisisRoutingModule,
  ],
  declarations: [CrisisDetailComponent, CrisisListComponent],
  providers: [CrisisService],
})
export class CrisisModule { }

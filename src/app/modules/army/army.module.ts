import { ArmyRoutingModule } from './army-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { ArmyComponent } from './army.component';
import { ArmyCreationComponent } from './pages/army-creation/army-creation.component';
import { ArmyEditionComponent } from './pages/army-edition/army-edition.component';

import { FactionService } from 'src/app/services/faction.service';

@NgModule({
  imports: [
    ArmyRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArmyComponent,
    ArmyCreationComponent,
    ArmyEditionComponent
  ],
  providers: [
    FactionService
  ]
})
export class ArmyModule { }

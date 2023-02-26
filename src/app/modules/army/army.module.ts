import { ArmyRoutingModule } from './army-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { ArmyComponent } from './army.component';
import { ArmyCreationComponent } from './pages/army-creation/army-creation.component';
import { ArmyEditionComponent } from './pages/army-edition/army-edition.component';
import { TroupAdditionDialogComponent } from './components/troup-addition-dialog/troup-addition-dialog.component';
import { TroupEditionComponent } from './components/troup/troup.component';
import { TroupsComponent } from './components/troups/troups.component';

import { FactionService } from 'src/app/services/faction.service';
import { HeroService } from 'src/app/services/hero.service';
import { WarriorService } from 'src/app/services/warrior.service';
import { UnitFormComponent } from './components/troup-unit/troup-unit.component';

@NgModule({
  imports: [
    ArmyRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArmyComponent,
    ArmyCreationComponent,
    ArmyEditionComponent,
    TroupAdditionDialogComponent,
    TroupEditionComponent,
    TroupsComponent,
    UnitFormComponent
  ],
  providers: [
    FactionService,
    HeroService,
    WarriorService
  ]
})
export class ArmyModule { }

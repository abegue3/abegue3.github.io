import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from 'src/app/models/entities/unit/hero';
import { Warrior } from 'src/app/models/entities/unit/warrior';
import { Troup } from 'src/app/models/view/troup';
import { HeroService } from 'src/app/services/hero.service';
import { WarriorService } from 'src/app/services/warrior.service';
import { TroupAdditionDialogComponent } from '../troup-addition-dialog/troup-addition-dialog.component';

@Component({
  selector: 'pb-troups',
  templateUrl: './troups.component.html',
  styleUrls: ['./troups.component.scss']
})
export class TroupsComponent implements OnInit {
  @Input()
  public factionId !: number;

  public heroes = new Array<Hero>();
  public troups = new Array<Troup>();
  public warriors = new Array<Warrior>();

  public constructor(
    private readonly _dialog: MatDialog,
    private readonly _heroService: HeroService,
    private readonly _warriorService: WarriorService
  ) { }

  /**
   * Suppression d'une troupe.
   * @param index Index de la troupe à supprimer.
   */
  public async deleteTroup(index: number) {
    this.troups.splice(index, 1);
  }

  /** Ouvertre de la modale d'ajout de troupe. */
  public async onAddTroup() {
    this._dialog
      .open(TroupAdditionDialogComponent, { data: this.heroes })
      .afterClosed()
      .subscribe(
        heroId => {
          if (!heroId) return;

          const hero = this.heroes.find(h => h.id == heroId)!;
          this.troups.push(new Troup(hero));
        }
      );
  }

  public ngOnInit(): void {
    this._heroService
      .fetchHeroesByFaction(this.factionId)
      .subscribe(heroes => this.heroes.push(...heroes))

    this._warriorService
      .fetchWarriorsByFaction(this.factionId)
      .subscribe(warriors => this.warriors.push(...warriors))
  }

}

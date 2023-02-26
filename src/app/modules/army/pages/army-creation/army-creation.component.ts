import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AllianceType } from 'src/app/enums/alliance-type.enum';
import { Faction } from 'src/app/models/entities/faction';
import { FactionService } from 'src/app/services/faction.service';

@Component({
  templateUrl: './army-creation.component.html',
  styleUrls: ['./army-creation.component.scss']
})
export class ArmyCreationComponent implements OnInit {

  public readonly allegianceCtrl: FormControl;
  private _allianceType?: AllianceType | null;
  public readonly factionCtrl: FormControl;
  public readonly nameCtrl: FormControl;

  public factions = new Array<Faction>();

  public constructor(
    private readonly _factionService: FactionService
  ) {
    this.nameCtrl = new FormControl(''/*, Validators.required*/);
    this.allegianceCtrl = new FormControl(undefined, Validators.required);
    this.factionCtrl = new FormControl([], Validators.minLength(1));
  }

  public get factionHintClass(): string {
    switch (this._allianceType) {
      case AllianceType.Green:
        return 'text-alliance-green';
      case AllianceType.Orange:
        return 'text-alliance-orange';
      case AllianceType.Red:
        return 'text-alliance-red';
      default:
        return '';
    }
  }

  public get factionHintText(): string {
    return this._allianceType
      ? this._factionService.getAllianceLabel(this._allianceType)
      : 'Aucune alliance';
  }

  private get factionSelection(): number[] {
    return this.factionCtrl.value as number[];
  }

  private get isGood(): boolean {
    return this.allegianceCtrl.value as boolean;
  }

  public get selectedFactions(): Faction[] {
    return this.factions.filter(f => this.factionSelection.includes(f.id));
  }

  ngOnInit() {
  }

  /** Récupération des factions. */
  public async onAllegianceChange() {
    this._allianceType = undefined;
    this.factionSelection.splice(0, this.factionSelection.length);
    this.factions = await firstValueFrom(this._factionService.fetchFactions(this.isGood), { defaultValue: [] });
  }

  public async updateAlliance() {
    this._allianceType = await firstValueFrom(this._factionService.fetchAllianceType(this.factionSelection))
  }

  /** Mise en forme du nom de l'armée. */
  public trimName(): void {
    const trimmedValue = this.nameCtrl.value.trim();
    this.nameCtrl.setValue(trimmedValue)
  }

}

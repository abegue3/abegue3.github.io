import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { UnitOption } from 'src/app/models/entities/unit-option';
import { Unit } from 'src/app/models/entities/unit/unit';
import { HeroService } from 'src/app/services/hero.service';
import { WarriorService } from 'src/app/services/warrior.service';

@Component({
  selector: 'pb-troup-unit',
  templateUrl: './troup-unit.component.html',
  styleUrls: ['./troup-unit.component.scss']
})
export class UnitFormComponent implements OnInit {
  @Input('isHero')
  public isHero: boolean = false;

  @Input('unit')
  public unit !: Unit;

  public optionRows = new Array<OptionRow>();

  public constructor(
    private readonly _heroService: HeroService,
    private readonly _warriorService: WarriorService
  ) {
  }

  public get title(): string {
    return this.unit.name;
  }

  public get totalCost(): number {
    return 0;
  }

  private async buildOptionsRows(opts$: Observable<UnitOption[]>) {
    var opts = await firstValueFrom(opts$);
    this.optionRows = opts.map(opt => new OptionRow(opt))
  }

  public ngOnInit(): void {
    const opts$ = this.isHero
      ? this._heroService.fechtHeroOptions(this.unit.id)
      : this._warriorService.fechtWarriorOptions(this.unit.id)
    this.buildOptionsRows(opts$);
  }

}

class OptionRow {
  private option: UnitOption;
  public isChecked: boolean;

  public constructor(opt: UnitOption, isChecked: boolean = false) {
    this.option = opt;
    this.isChecked = isChecked;
  }

  public get cost(): number {
    return this.option.cost;
  }

  public get label(): string {
    return this.option.name;
  }
}
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/models/entities/unit/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  templateUrl: './troup-addition-dialog.component.html',
  styleUrls: ['./troup-addition-dialog.component.scss']
})
export class TroupAdditionDialogComponent {
  public heroId?: number;

  public constructor(
    public dialogRef: MatDialogRef<TroupAdditionDialogComponent>,
    private _heroService: HeroService,
    @Inject(MAT_DIALOG_DATA) public heroes: Hero[],
  ) { }

  public get heroHintText(): string {
    if (!this.heroId) return '';

    const heroicRank = this.heroes.find(h => h.id == this.heroId)!.rank;
    let hint = this._heroService.getRankLabel(heroicRank);
    const followers = this._heroService.getRankFollowers(heroicRank);
    if (followers > 0) hint += ` - ${followers} suivants`

    return hint;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Troup } from 'src/app/models/view/troup';
import { HeroService } from 'src/app/services/hero.service';
import { WarriorService } from 'src/app/services/warrior.service';

@Component({
  selector: 'pb-troup',
  templateUrl: './troup.component.html',
  styleUrls: ['./troup.component.scss']
})
export class TroupEditionComponent implements OnInit {
  @Input('label')
  public label: string = '';

  @Input('troup')
  public troup!: Troup;

  @Output('delete')
  public readonly deletion = new EventEmitter<void>();

  public constructor(
    private readonly _dialog: MatDialog,
    private readonly _heroService: HeroService,
    private readonly _warriorService: WarriorService
  ) { }

  public ngOnInit(): void {
  }

}

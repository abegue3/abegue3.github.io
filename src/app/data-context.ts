import { AllianceType } from './enums/alliance-type.enum';
import { Alliance } from './models/alliance';
import { Faction } from './models/faction';

export class DataContext {

  public static readonly alliances = [
    new Alliance(Faction.Thror, Faction.LaketownArmy, AllianceType.Red),

    new Alliance(Faction.Arnor, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Arnor, Faction.Thror, AllianceType.Red),

    new Alliance(Faction.Dunharrow, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Dunharrow, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Dunharrow, Faction.Arnor, AllianceType.Red),

    new Alliance(Faction.Erebor, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.Erebor, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Erebor, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Erebor, Faction.Dunharrow, AllianceType.Red),

    new Alliance(Faction.Fangorn, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.Fangorn, Faction.Thror, AllianceType.Orange),
    new Alliance(Faction.Fangorn, Faction.Arnor, AllianceType.Orange),
    new Alliance(Faction.Fangorn, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Fangorn, Faction.Erebor, AllianceType.Orange),

    new Alliance(Faction.Fellowship, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Fellowship, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Fellowship, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Fellowship, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Fellowship, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Fellowship, Faction.Fangorn, AllianceType.Orange),

    new Alliance(Faction.Fiefs, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Fiefs, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Fiefs, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Fiefs, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Fiefs, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Fiefs, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Fiefs, Faction.Fellowship, AllianceType.Orange),

    new Alliance(Faction.Dale, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Dale, Faction.Thror, AllianceType.Green),
    new Alliance(Faction.Dale, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Dale, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.Dale, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Dale, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Dale, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.Dale, Faction.Fiefs, AllianceType.Red),

    new Alliance(Faction.Thranduil, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Thror, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Arnor, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Erebor, AllianceType.Green),
    new Alliance(Faction.Thranduil, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.Thranduil, Faction.Dale, AllianceType.Orange),

    new Alliance(Faction.IronMountains, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.IronMountains, Faction.Thror, AllianceType.Green),
    new Alliance(Faction.IronMountains, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.IronMountains, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.IronMountains, Faction.Erebor, AllianceType.Orange),
    new Alliance(Faction.IronMountains, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.IronMountains, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.IronMountains, Faction.Fiefs, AllianceType.Red),
    new Alliance(Faction.IronMountains, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.IronMountains, Faction.Thranduil, AllianceType.Green),

    new Alliance(Faction.KhazadDum, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Arnor, AllianceType.Orange),
    new Alliance(Faction.KhazadDum, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.KhazadDum, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Fiefs, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.KhazadDum, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.KhazadDum, Faction.IronMountains, AllianceType.Red),

    new Alliance(Faction.Lothlorien, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Thror, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Arnor, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Erebor, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Fellowship, AllianceType.Green),
    new Alliance(Faction.Lothlorien, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Dale, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.IronMountains, AllianceType.Orange),
    new Alliance(Faction.Lothlorien, Faction.KhazadDum, AllianceType.Orange),

    new Alliance(Faction.MinasTirith, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.Dunharrow, AllianceType.Green),
    new Alliance(Faction.MinasTirith, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.MinasTirith, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.MinasTirith, Faction.Fiefs, AllianceType.Green),
    new Alliance(Faction.MinasTirith, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.MinasTirith, Faction.IronMountains, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.MinasTirith, Faction.Lothlorien, AllianceType.Orange),

    new Alliance(Faction.MistyMountains, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Thror, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Arnor, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Erebor, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Fellowship, AllianceType.Green),
    new Alliance(Faction.MistyMountains, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Dale, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.IronMountains, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.KhazadDum, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.MistyMountains, Faction.MinasTirith, AllianceType.Orange),

    new Alliance(Faction.Numenor, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Numenor, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Fiefs, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Numenor, Faction.IronMountains, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.Numenor, Faction.MinasTirith, AllianceType.Red),
    new Alliance(Faction.Numenor, Faction.MistyMountains, AllianceType.Orange),

    new Alliance(Faction.Radagast, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.Erebor, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.Fiefs, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.Dale, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.IronMountains, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.Radagast, Faction.MinasTirith, AllianceType.Red),
    new Alliance(Faction.Radagast, Faction.MistyMountains, AllianceType.Green),
    new Alliance(Faction.Radagast, Faction.Numenor, AllianceType.Red),

    new Alliance(Faction.Rangers, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Dunharrow, AllianceType.Green),
    new Alliance(Faction.Rangers, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.IronMountains, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.MinasTirith, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.Rangers, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.Rangers, Faction.Radagast, AllianceType.Orange),

    new Alliance(Faction.Rivendell, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Thror, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Arnor, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Erebor, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Fellowship, AllianceType.Green),
    new Alliance(Faction.Rivendell, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Dale, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.IronMountains, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.KhazadDum, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Lothlorien, AllianceType.Green),
    new Alliance(Faction.Rivendell, Faction.MinasTirith, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Numenor, AllianceType.Green),
    new Alliance(Faction.Rivendell, Faction.Radagast, AllianceType.Orange),
    new Alliance(Faction.Rivendell, Faction.Rangers, AllianceType.Orange),

    new Alliance(Faction.Rohan, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Rohan, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Rohan, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.Rohan, Faction.Fiefs, AllianceType.Green),
    new Alliance(Faction.Rohan, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Rohan, Faction.IronMountains, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Lothlorien, AllianceType.Green),
    new Alliance(Faction.Rohan, Faction.MinasTirith, AllianceType.Green),
    new Alliance(Faction.Rohan, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.Rohan, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Radagast, AllianceType.Red),
    new Alliance(Faction.Rohan, Faction.Rangers, AllianceType.Orange),
    new Alliance(Faction.Rohan, Faction.Rivendell, AllianceType.Orange),

    new Alliance(Faction.Shire, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.IronMountains, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.MinasTirith, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Radagast, AllianceType.Red),
    new Alliance(Faction.Shire, Faction.Rangers, AllianceType.Green),
    new Alliance(Faction.Shire, Faction.Rivendell, AllianceType.Orange),
    new Alliance(Faction.Shire, Faction.Rohan, AllianceType.Orange),

    new Alliance(Faction.LaketownSurvivors, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Erebor, AllianceType.Green),
    new Alliance(Faction.LaketownSurvivors, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.LaketownSurvivors, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Fiefs, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Thranduil, AllianceType.Green),
    new Alliance(Faction.LaketownSurvivors, Faction.IronMountains, AllianceType.Green),
    new Alliance(Faction.LaketownSurvivors, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.LaketownSurvivors, Faction.MinasTirith, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.LaketownSurvivors, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Radagast, AllianceType.Orange),
    new Alliance(Faction.LaketownSurvivors, Faction.Rangers, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Rivendell, AllianceType.Orange),
    new Alliance(Faction.LaketownSurvivors, Faction.Rohan, AllianceType.Red),
    new Alliance(Faction.LaketownSurvivors, Faction.Shire, AllianceType.Red),

    new Alliance(Faction.Thorin, Faction.LaketownArmy, AllianceType.Green),
    new Alliance(Faction.Thorin, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Thorin, Faction.Fellowship, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Fiefs, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Thorin, Faction.IronMountains, AllianceType.Orange),
    new Alliance(Faction.Thorin, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.Thorin, Faction.MinasTirith, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.MistyMountains, AllianceType.Green),
    new Alliance(Faction.Thorin, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Radagast, AllianceType.Orange),
    new Alliance(Faction.Thorin, Faction.Rangers, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Rivendell, AllianceType.Orange),
    new Alliance(Faction.Thorin, Faction.Rohan, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.Shire, AllianceType.Red),
    new Alliance(Faction.Thorin, Faction.LaketownSurvivors, AllianceType.Orange),

    new Alliance(Faction.WhiteConcil, Faction.LaketownArmy, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Thror, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.WhiteConcil, Faction.Dunharrow, AllianceType.Red),
    new Alliance(Faction.WhiteConcil, Faction.Erebor, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Dale, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.IronMountains, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.KhazadDum, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.MinasTirith, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.WhiteConcil, Faction.Radagast, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Rangers, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Rivendell, AllianceType.Green),
    new Alliance(Faction.WhiteConcil, Faction.Rohan, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Shire, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.LaketownSurvivors, AllianceType.Orange),
    new Alliance(Faction.WhiteConcil, Faction.Thorin, AllianceType.Orange),

    new Alliance(Faction.Druadan, Faction.LaketownArmy, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Thror, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Arnor, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Dunharrow, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Erebor, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Fangorn, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Fellowship, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Fiefs, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Dale, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Thranduil, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.IronMountains, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.KhazadDum, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Lothlorien, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.MinasTirith, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.MistyMountains, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Numenor, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Radagast, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Rangers, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Rivendell, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.Rohan, AllianceType.Green),
    new Alliance(Faction.Druadan, Faction.Shire, AllianceType.Orange),
    new Alliance(Faction.Druadan, Faction.LaketownSurvivors, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.Thorin, AllianceType.Red),
    new Alliance(Faction.Druadan, Faction.WhiteConcil, AllianceType.Orange),

    new Alliance(Faction.AzogHunters, Faction.Angmar, AllianceType.Red),

    new Alliance(Faction.AzogLegion, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.AzogLegion, Faction.AzogHunters, AllianceType.Green),

    new Alliance(Faction.BaradDur, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.BaradDur, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.BaradDur, Faction.AzogLegion, AllianceType.Red),

    new Alliance(Faction.Umbar, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Umbar, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Umbar, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Umbar, Faction.BaradDur, AllianceType.Red),

    new Alliance(Faction.BlackForest, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.BlackForest, Faction.AzogHunters, AllianceType.Orange),
    new Alliance(Faction.BlackForest, Faction.AzogLegion, AllianceType.Orange),
    new Alliance(Faction.BlackForest, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.BlackForest, Faction.Umbar, AllianceType.Red),

    new Alliance(Faction.DolGuldur, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.DolGuldur, Faction.AzogHunters, AllianceType.Green),
    new Alliance(Faction.DolGuldur, Faction.AzogLegion, AllianceType.Green),
    new Alliance(Faction.DolGuldur, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.DolGuldur, Faction.Umbar, AllianceType.Red),
    new Alliance(Faction.DolGuldur, Faction.BlackForest, AllianceType.Orange),

    new Alliance(Faction.NorthCalamity, Faction.Angmar, AllianceType.Orange),
    new Alliance(Faction.NorthCalamity, Faction.AzogHunters, AllianceType.Orange),
    new Alliance(Faction.NorthCalamity, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.NorthCalamity, Faction.BaradDur, AllianceType.Orange),
    new Alliance(Faction.NorthCalamity, Faction.Umbar, AllianceType.Red),
    new Alliance(Faction.NorthCalamity, Faction.BlackForest, AllianceType.Orange),
    new Alliance(Faction.NorthCalamity, Faction.DolGuldur, AllianceType.Orange),

    new Alliance(Faction.Oriental, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Oriental, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Oriental, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Oriental, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Oriental, Faction.Umbar, AllianceType.Orange),
    new Alliance(Faction.Oriental, Faction.BlackForest, AllianceType.Red),
    new Alliance(Faction.Oriental, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.Oriental, Faction.NorthCalamity, AllianceType.Red),

    new Alliance(Faction.Harad, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.Umbar, AllianceType.Orange),
    new Alliance(Faction.Harad, Faction.BlackForest, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.NorthCalamity, AllianceType.Red),
    new Alliance(Faction.Harad, Faction.Oriental, AllianceType.Orange),

    new Alliance(Faction.GoblinTown, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.GoblinTown, Faction.AzogHunters, AllianceType.Orange),
    new Alliance(Faction.GoblinTown, Faction.AzogLegion, AllianceType.Orange),
    new Alliance(Faction.GoblinTown, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.GoblinTown, Faction.Umbar, AllianceType.Red),
    new Alliance(Faction.GoblinTown, Faction.BlackForest, AllianceType.Orange),
    new Alliance(Faction.GoblinTown, Faction.DolGuldur, AllianceType.Orange),
    new Alliance(Faction.GoblinTown, Faction.NorthCalamity, AllianceType.Orange),
    new Alliance(Faction.GoblinTown, Faction.Oriental, AllianceType.Red),
    new Alliance(Faction.GoblinTown, Faction.Harad, AllianceType.Red),

    new Alliance(Faction.Isengard, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.Umbar, AllianceType.Orange),
    new Alliance(Faction.Isengard, Faction.BlackForest, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.NorthCalamity, AllianceType.Red),
    new Alliance(Faction.Isengard, Faction.Oriental, AllianceType.Orange),
    new Alliance(Faction.Isengard, Faction.Harad, AllianceType.Orange),
    new Alliance(Faction.Isengard, Faction.GoblinTown, AllianceType.Red),

    new Alliance(Faction.Mordor, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.Umbar, AllianceType.Orange),
    new Alliance(Faction.Mordor, Faction.BlackForest, AllianceType.Orange),
    new Alliance(Faction.Mordor, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.NorthCalamity, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.Oriental, AllianceType.Green),
    new Alliance(Faction.Mordor, Faction.Harad, AllianceType.Orange),
    new Alliance(Faction.Mordor, Faction.GoblinTown, AllianceType.Red),
    new Alliance(Faction.Mordor, Faction.Isengard, AllianceType.Orange),

    new Alliance(Faction.Moria, Faction.Angmar, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.AzogHunters, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.AzogLegion, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Moria, Faction.Umbar, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.BlackForest, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.DolGuldur, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.NorthCalamity, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.Oriental, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.Harad, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.GoblinTown, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.Isengard, AllianceType.Orange),
    new Alliance(Faction.Moria, Faction.Mordor, AllianceType.Orange),

    new Alliance(Faction.SnakeHord, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.Umbar, AllianceType.Green),
    new Alliance(Faction.SnakeHord, Faction.BlackForest, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.NorthCalamity, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.Oriental, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.Harad, AllianceType.Green),
    new Alliance(Faction.SnakeHord, Faction.GoblinTown, AllianceType.Red),
    new Alliance(Faction.SnakeHord, Faction.Isengard, AllianceType.Orange),
    new Alliance(Faction.SnakeHord, Faction.Mordor, AllianceType.Green),
    new Alliance(Faction.SnakeHord, Faction.Moria, AllianceType.Orange),

    new Alliance(Faction.Sharcoux, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.Umbar, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.BlackForest, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.NorthCalamity, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.Oriental, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.Harad, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.GoblinTown, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.Isengard, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.Mordor, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.Moria, AllianceType.Red),
    new Alliance(Faction.Sharcoux, Faction.SnakeHord, AllianceType.Red),

    new Alliance(Faction.Trolls, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.AzogHunters, AllianceType.Orange),
    new Alliance(Faction.Trolls, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.Umbar, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.BlackForest, AllianceType.Orange),
    new Alliance(Faction.Trolls, Faction.DolGuldur, AllianceType.Orange),
    new Alliance(Faction.Trolls, Faction.NorthCalamity, AllianceType.Orange),
    new Alliance(Faction.Trolls, Faction.Oriental, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.Harad, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.GoblinTown, AllianceType.Orange),
    new Alliance(Faction.Trolls, Faction.Isengard, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.Mordor, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.Moria, AllianceType.Orange),
    new Alliance(Faction.Trolls, Faction.SnakeHord, AllianceType.Red),
    new Alliance(Faction.Trolls, Faction.Sharcoux, AllianceType.Red),

    new Alliance(Faction.Khand, Faction.Angmar, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.AzogHunters, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.AzogLegion, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.BaradDur, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.Umbar, AllianceType.Orange),
    new Alliance(Faction.Khand, Faction.BlackForest, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.DolGuldur, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.NorthCalamity, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.Oriental, AllianceType.Green),
    new Alliance(Faction.Khand, Faction.Harad, AllianceType.Orange),
    new Alliance(Faction.Khand, Faction.GoblinTown, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.Isengard, AllianceType.Orange),
    new Alliance(Faction.Khand, Faction.Mordor, AllianceType.Orange),
    new Alliance(Faction.Khand, Faction.Moria, AllianceType.Orange),
    new Alliance(Faction.Khand, Faction.SnakeHord, AllianceType.Red),
    new Alliance(Faction.Khand, Faction.Sharcoux, AllianceType.Red),
  ];

  public static readonly factions = [
    Faction.Angmar, Faction.Arnor, Faction.AzogHunters, Faction.AzogLegion, Faction.BaradDur, Faction.BlackForest,
    Faction.Dale, Faction.DolGuldur, Faction.Druadan, Faction.Dunharrow, Faction.Erebor, Faction.Fangorn, Faction.Fellowship, Faction.Fiefs,
    Faction.GoblinTown, Faction.Harad, Faction.IronMountains, Faction.Isengard,
    Faction.KhazadDum, Faction.LaketownArmy, Faction.LaketownSurvivors, Faction.Lothlorien,
    Faction.MinasTirith, Faction.MistyMountains, Faction.Mordor, Faction.Moria, Faction.NorthCalamity, Faction.Numenor, Faction.Oriental,
    Faction.Radagast, Faction.Rangers, Faction.Rivendell, Faction.Rohan, Faction.Sharcoux, Faction.Shire, Faction.SnakeHord,
    Faction.Thorin, Faction.Thranduil, Faction.Thror, Faction.Trolls, Faction.Umbar,
    Faction.WhiteConcil, Faction.WildLands
  ];

}
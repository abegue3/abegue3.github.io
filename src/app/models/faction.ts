/** Faction. */
export class Faction {

    /** Identifiant. */
    public readonly id: number;

    /** Si vrai : faction du bien, sinon : faction du mal. */
    public readonly isGood: boolean;

    /** Nom. */
    public readonly name: string;

    private constructor(id: number, name: string, isGood: boolean) {
        this.id = id;
        this.isGood = isGood;
        this.name = name;
    }

    public static readonly Numenor = new Faction(1, 'Númenor', true);
    public static readonly MinasTirith = new Faction(2, 'Minas Tirith', true);
    public static readonly Fiefs = new Faction(3, 'Fiefs', true);
    public static readonly Rohan = new Faction(4, 'Rohan', true);
    public static readonly Arnor = new Faction(5, 'Arnor', true);
    public static readonly Rangers = new Faction(6, 'Rangers', true);
    public static readonly Dale = new Faction(7, 'Garnison de Dale', true);
    public static readonly LaketownArmy = new Faction(8, 'Armée de Lacville', true);
    public static readonly LaketownSurvivors = new Faction(9, 'Survivants de Lacville', true);
    public static readonly Fellowship = new Faction(10, "Communauté de l'Anneau", true);
    public static readonly Thorin = new Faction(11, 'Compagnie de Thorïn', true);
    public static readonly WhiteConcil = new Faction(12, 'Conseil blanc', true);
    public static readonly Rivendell = new Faction(13, 'Foncombe', true);
    public static readonly Lothlorien = new Faction(14, 'Lothlórien', true);
    public static readonly Thranduil = new Faction(15, 'Domaine de Thranduil', true);
    public static readonly KhazadDum = new Faction(16, 'Khazad Dûm', true);
    public static readonly Thror = new Faction(17, 'Armée de Thrór', true);
    public static readonly IronMountains = new Faction(18, 'Monts de fer', true);
    public static readonly Erebor = new Faction(19, 'Erebor restauré', true);
    public static readonly Shire = new Faction(20, 'Comté', true);
    public static readonly Dunharrow = new Faction(21, 'Armée de Dunharrow', true);
    public static readonly Druadan = new Faction(22, 'Hommes sauvages de Druadan', true);
    public static readonly Fangorn = new Faction(23, 'Fangorn', true);
    public static readonly MistyMountains = new Faction(24, 'Monts brumeux', true);
    public static readonly Radagast = new Faction(25, 'Alliance de Radagast', true);
    public static readonly WildLands = new Faction(26, 'Vagabonds des terres sauvages', true);

    public static readonly BaradDur = new Faction(27, 'Barad-Dûr', false);
    public static readonly Mordor = new Faction(28, 'Mordor', false);
    public static readonly Angmar = new Faction(29, 'Angmar', false);
    public static readonly DolGuldur = new Faction(30, 'Puissances obscures de Dol Guldur', false);
    public static readonly AzogLegion = new Faction(31, "Légion d'Azog", false);
    public static readonly AzogHunters = new Faction(32, "Chasseurs d'Azog", false);
    public static readonly Oriental = new Faction(33, 'Orientaux', false);
    public static readonly SnakeHord = new Faction(34, 'Horde serpent', false);
    public static readonly Harad = new Faction(35, 'Extrême Harad', false);
    public static readonly Khand = new Faction(36, 'Khand', false);
    public static readonly Umbar = new Faction(37, "Corsaires d'Umbar", false);
    public static readonly Isengard = new Faction(38, 'Isengard', false);
    public static readonly Sharcoux = new Faction(39, 'Brigands de Sharcoux', false);
    public static readonly Moria = new Faction(40, 'Moria', false);
    public static readonly GoblinTown = new Faction(41, 'Gobelinville', false);
    public static readonly Trolls = new Faction(42, 'Trolls des montagnes', false);
    public static readonly BlackForest = new Faction(43, 'Sinistres habitants de la Forêt Noire', false);
    public static readonly NorthCalamity = new Faction(44, 'Calamité du Nord', false);
}

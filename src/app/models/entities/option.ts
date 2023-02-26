export class Opt {
    public readonly id: number;
    public readonly name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public static readonly HeavyArmor = new Opt(1, 'Armure lourde');
    public static readonly TwoHandedSword = new Opt(2, 'Épée à deux mains');
    public static readonly HelmHorn = new Opt(3, 'Cor de Helm');
    public static readonly Horse = new Opt(4, 'Cheval');
    public static readonly Armor = new Opt(5, 'Armure');

    public static readonly ArmoredHorse = new Opt(7, 'Cheval caparaçonné');
    public static readonly Shield = new Opt(8, 'Bouclier');
    public static readonly Sword = new Opt(9, 'Épée');
    public static readonly Javelin = new Opt(10, 'Javelots');
    public static readonly Dagger = new Opt(11, 'Dague');
    public static readonly Pony = new Opt(12, 'Poney');
    public static readonly ElvenCape = new Opt(13, 'Cape elfique');
    public static readonly Bow = new Opt(14, 'Arc');
    public static readonly RohanRoyalBanner = new Opt(15, 'Étendard royal du Rohan');
    public static readonly TwoHandedAxe = new Opt(16, 'Hache à deux mains');
    public static readonly ReplaceSwordWithAxe = new Opt(17, "Remplacer l'épée par une hache");

    public static readonly LongBow = new Opt(19, 'Arc long');
    public static readonly WarHorn = new Opt(20, 'Cor de guerre');
    public static readonly Banner = new Opt(21, 'Bannière');
}
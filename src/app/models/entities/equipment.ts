export class Equipment {
    public readonly id: number;
    public readonly name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public static readonly HeavyArmor = new Equipment(1, 'Armure lourde');
    public static readonly TwoHandedSword = new Equipment(2, 'Épée à deux mains');
    public static readonly HelmHorn = new Equipment(3, 'Cor de Helm');
    public static readonly Horse = new Equipment(4, 'Cheval');
    public static readonly Armor = new Equipment(5, 'Armure');
    public static readonly Herugrim = new Equipment(6, 'Herugrim');
    public static readonly ArmoredHorse = new Equipment(7, 'Cheval caparaçonné');
    public static readonly Shield = new Equipment(8, 'Bouclier');
    public static readonly Sword = new Equipment(9, 'Épée');
    public static readonly Javelin = new Equipment(10, 'Javelots');
    public static readonly Dagger = new Equipment(11, 'Dague');
    public static readonly Pony = new Equipment(12, 'Poney');
    public static readonly ElvenCape = new Equipment(13, 'Cape elfique');
    public static readonly Bow = new Equipment(14, 'Arc');
    public static readonly RohanRoyalBanner = new Equipment(15, 'Étendard royal du Rohan');
    public static readonly TwoHandedAxe = new Equipment(16, 'Hache à deux mains');
    public static readonly Axe = new Equipment(17, 'Hache');
    public static readonly Felarof = new Equipment(18, 'Felarof');
    public static readonly LongBow = new Equipment(19, 'Arc long');
    public static readonly WarHorn = new Equipment(20, 'Cor de guerre');
    public static readonly Banner = new Equipment(21, 'Bannière');
}
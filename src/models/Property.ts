export enum PropertyType {
    HOUSE = 'Villa',
    HOUSELAND = 'Helårsgrunde',
    HOLIDAYHOME = 'Fritidsgrund',
    HOLIDAYHOMELAND = 'Fritidshus',
    APPARTMENT = 'Ejerlejlighed',
    VILLAAPPARTMENT = 'Villalejlighed',
    HOUSINGCOOPERATIVE = 'Andelsbolig',
    TERRACEDHOUSE = 'Rækkehus',
    FARM = 'Landejendom',
    UNKNOWN = 'UNKNOWN',
}

export const getPropertyType: (a: string) => PropertyType = (a) => {
    switch(a) {
        case 'Villa':
            return PropertyType.HOUSE;
        case 'Helårsgrunde':
            return PropertyType.HOUSELAND;
        case 'Fritidsgrund':
            return PropertyType.HOLIDAYHOME;
        case 'Fritidshus':
            return PropertyType.HOLIDAYHOMELAND;
        case 'Ejerlejlighed':
            return PropertyType.APPARTMENT;
        case 'Villalejlighed':
            return PropertyType.VILLAAPPARTMENT;
        case 'Andelsbolig':
            return PropertyType.HOUSINGCOOPERATIVE;
        case 'Rækkehus':
            return PropertyType.TERRACEDHOUSE;
        case 'Landejendom':
            return PropertyType.FARM;
        default:
            console.log(a);
            return PropertyType.UNKNOWN;
    }
}

export class Property {
    public lastUpdate: string;
    public images: string[];
    public lat: number;
    public lng: number;
    public price: number;
    public typeOfHouse: PropertyType;
    public id: string;
    public originalId: string;
    public url: string;
    public address: string;
    public livingSpace?: number;
    public measuredArea?: number;
    public groundArea?: number;
    public rooms?: number;
    public bedrooms?: number;
    public antalPlan?: string;
    public rebuilt?: string;
    public yearBuilt?: number;
    public energyLabel?: string;
    public ownershipCostPerMonth?: string;
    public priceSquareMeter?: string;
    public soldInDays?: number;
    public cellar?: number;
    public description: string;
}


export interface PropertyResponse {
    getProperty(): Property;
}

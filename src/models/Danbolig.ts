import {getPropertyType, Property, PropertyResponse} from "@models/Property";
import {v4} from "uuid";
import {getNumber} from "@utils";

export interface FactsDesktop {
    label: string;
    name: string;
    value: string;
}

export interface FactsMobile {
    label: string;
    name: string;
    value: string;
}

export class DanboligAPIResponse implements PropertyResponse {
    address: string;
    addressId?: any;
    city: string;
    factsDesktop: FactsDesktop[];
    factsMobile: FactsMobile[];
    hasQuickTakeover?: any;
    images: string[];
    isDanbolig: boolean;
    isNew: boolean;
    openHouse: string;
    openHouseShort: string;
    openHouseSignupRequired: boolean;
    price: number;
    propertyId: string;
    propertySize: number;
    published: string;
    type: string;
    url: string;
    zipCode: number;
    fallbackImageUrl: string;
    spotText: string;


    constructor(o: any) {
        this.address = o.address;
        this.addressId = o.addressId;
        this.city = o.city;
        this.factsDesktop = o.factsDesktop;
        this.factsMobile = o.factsMobile;
        this.hasQuickTakeover = o.hasQuickTakeover;
        this.images = o.images;
        this.isDanbolig = o.isDanbolig;
        this.isNew = o.isNew;
        this.openHouse = o.openHouse;
        this.openHouseShort = o.openHouseShort;
        this.openHouseSignupRequired = o.openHouseSignupRequired;
        this.price = o.price;
        this.propertyId = o.propertyId;
        this.propertySize = o.propertySize;
        this.published = o.published;
        this.type = o.type;
        this.url = o.url;
        this.zipCode = o.zipCode;
        this.fallbackImageUrl = o.fallbackImageUrl;
        this.spotText = o.spotText;
    }

    public getProperty(): Property {
        const getFact: any = (facts, name) => {
            const fact = facts?.find(f => f.name === name);
            return fact?.value || "";
        }
        return ({
            lastUpdate: this.published,
            lat: 0,
            lng: 0,
            price: this.price,
            typeOfHouse: getPropertyType(this.type),
            id: v4(),
            originalId: this.propertyId,
            images: this.images,
            url: this.url,
            address: `${this.zipCode} ${this.city} ${this.address}`,
            livingSpace: getNumber(getFact(this.factsDesktop, "LivingAreaM2")),
            measuredArea: this.propertySize,
            groundArea: this.propertySize,
            rooms: getNumber(getFact(this.factsDesktop, "Rooms")),
            bedrooms: getNumber(getFact(this.factsDesktop, "Rooms")),
            antalPlan: "",
            rebuilt: (!this.isNew)?.toString(),
            yearBuilt: 0,
            energyLabel: getFact(this.factsDesktop, "EnergyLabel"),
            ownershipCostPerMonth: "0",
            priceSquareMeter: "0",// check is rental maybe ?
            soldInDays: 0,
            cellar: 0,
            description: "",
        })
    }
}

export interface DanboligPaginatedResponse<T> {
    redirect: boolean;
    results: T[];
    totalCount: number;
    url?: any;
    fallbackImageUrl: string;
}

import {getPropertyType, Property, PropertyResponse, PropertyType} from "./Property";
// import {v4} from "uuid";

export interface NyboligPaginatedResponse<T> {
    TotalAmountOfResults: number;
    Results: T[];
    QueryParameters: string;
    ContainsRentals: boolean;
}

export class NyboligAPIResponse implements PropertyResponse {
    Id: string;
    IdAsString: string;
    ClassicId: string;
    SiteName: string;
    Url: string;
    PropertyLink: string;
    IsOwnedCase: boolean;
    AddressSourceId: string;
    AddressDisplayName: string;
    StreetAddress: string;
    HouseNumber: string;
    FloorSide: string;
    City: string;
    SupplementaryCityName: string;
    PostCode: number;
    IsCooperative: boolean;
    OwnerExpensePrMonth: number;
    BrokerInfo: string;
    ShowSmartSale: boolean;
    EnergyClass: string;
    DaysInSale: number;
    HasNewPrice: boolean;
    IsNew: boolean;
    OpenHouseText: string;
    OpenHouseIntro: string;
    CaseType: string;
    Type: PropertyType;
    NumberOfLivingRooms: number;
    NumberOfRooms: number;
    TotalNumberOfRooms: number;
    ImageUrl: string;
    ImageAlt: null;
    CaseNumber: string;
    Price: string;
    CashPrice: number;
    OwnerExpensePrYear: number;
    CooperativeMonthlyRate: number;
    HousingSubsidy: number;
    Downpayment: number;
    DescriptionPlain: string;
    SOPHeadlinePlain: null;
    BulletPoint1: null;
    BulletPoint2: null;
    BulletPoint3: null;
    RentYearly: number;
    YieldPct: number;
    IsSale: boolean;
    IsRental: boolean;
    Rent: number;
    RentMonthly: string;
    IsLicitation: boolean;
    IsPublicOfffering: boolean;
    MunicipalityName: string;
    MunicipalityCode: string;
    PostalCode: number;
    LivingSpace: number;
    BasementSize: number;
    BuiltYear: number;
    BuiltYearMinimum: number;
    BuiltYearMaximum: number;
    PropertySize: number;
    PropertySizeHa: number;
    PropertyType: string;
    PropertyAdditionalType: null;
    PropertyTypeName: null;
    Floor: number;
    NumberOfFloors: number;
    FirstDateInSale: Date;
    NewPriceLabelEventEnd: Date;
    NewLabelEventEnd: Date;
    LastModified: Date;
    FirstDateInSaleWithOverride: Date;
    Longitude: number;
    Latitude: number;
    HasBalcony: boolean;
    EnergyNumber: number;
    EnergyClassification: null | string;
    StreetName: string;
    HouseNumberAndLetter: string;
    PostalDistrict: null;
    FullAddress: string;
    IsNyboligCase: number;
    IsEstateCase: number;
    IsSharedAgriculturalCase: boolean;
    ShopId: string;
    CaseId: null;
    CaseIdReplacedHyphen: null;
    GeoHash: null;
    GeoHash2: null;
    GeoHash3: null;
    GeoHash4: null;
    GeoHash5: null;
    GeoHash6: null;
    OpenHouse: null;
    OpenHouseDate: Date;
    HasActiveOpenHouse: boolean;
    HasBeenSold: boolean;
    ForeignChainId: string;
    IsExclusive: boolean;
    IsConcealedListing: boolean;
    IsSaleInProgress: boolean;
    ProjectCaseReserved: boolean;
    AvailableForMatchMail: Date;
    IsProjectCase: boolean;
    ProjectId: string;
    IsInvestment: boolean;
    FarmBuildingArea: number;
    BusinessArea: number;
    FloorArea: number;
    CashPriceSquareMeter: number;
    RentalPriceSquareMeters: number;
    SellerEmail: null;
    BuyerEmail: null;
    WktPoint: string;
    NoPhotoUrl: string;

    constructor(o: any) {
        this.Id = o.Id;
        this.IdAsString = o.IdAsString;
        this.ClassicId = o.ClassicId;
        this.SiteName = o.SiteName;
        this.Url = o.Url;
        this.PropertyLink = o.PropertyLink;
        this.IsOwnedCase = o.IsOwnedCase;
        this.AddressSourceId = o.AddressSourceId;
        this.AddressDisplayName = o.AddressDisplayName;
        this.StreetAddress = o.StreetAddress;
        this.HouseNumber = o.HouseNumber;
        this.FloorSide = o.FloorSide;
        this.City = o.City;
        this.SupplementaryCityName = o.SupplementaryCityName;
        this.PostCode = o.PostCode;
        this.IsCooperative = o.IsCooperative;
        this.OwnerExpensePrMonth = o.OwnerExpensePrMonth;
        this.BrokerInfo = o.BrokerInfo;
        this.ShowSmartSale = o.ShowSmartSale;
        this.EnergyClass = o.EnergyClass;
        this.DaysInSale = o.DaysInSale;
        this.HasNewPrice = o.HasNewPrice;
        this.IsNew = o.IsNew;
        this.OpenHouseText = o.OpenHouseText;
        this.OpenHouseIntro = o.OpenHouseIntro;
        this.CaseType = o.CaseType;
        this.Type = o.Type;
        this.NumberOfLivingRooms = o.NumberOfLivingRooms;
        this.NumberOfRooms = o.NumberOfRooms;
        this.TotalNumberOfRooms = o.TotalNumberOfRooms;
        this.ImageUrl = o.ImageUrl;
        this.ImageAlt = o.ImageAlt;
        this.CaseNumber = o.CaseNumber;
        this.Price = o.Price;
        this.CashPrice = o.CashPrice;
        this.OwnerExpensePrYear = o.OwnerExpensePrYear;
        this.CooperativeMonthlyRate = o.CooperativeMonthlyRate;
        this.HousingSubsidy = o.HousingSubsidy;
        this.Downpayment = o.Downpayment;
        this.DescriptionPlain = o.DescriptionPlain;
        this.SOPHeadlinePlain = o.SOPHeadlinePlain;
        this.BulletPoint1 = o.BulletPoint1;
        this.BulletPoint2 = o.BulletPoint2;
        this.BulletPoint3 = o.BulletPoint3;
        this.RentYearly = o.RentYearly;
        this.YieldPct = o.YieldPct;
        this.IsSale = o.IsSale;
        this.IsRental = o.IsRental;
        this.Rent = o.Rent;
        this.RentMonthly = o.RentMonthly;
        this.IsLicitation = o.IsLicitation;
        this.IsPublicOfffering = o.IsPublicOfffering;
        this.MunicipalityName = o.MunicipalityName;
        this.MunicipalityCode = o.MunicipalityCode;
        this.PostalCode = o.PostalCode;
        this.LivingSpace = o.LivingSpace;
        this.BasementSize = o.BasementSize;
        this.BuiltYear = o.BuiltYear;
        this.BuiltYearMinimum = o.BuiltYearMinimum;
        this.BuiltYearMaximum = o.BuiltYearMaximum;
        this.PropertySize = o.PropertySize;
        this.PropertySizeHa = o.PropertySizeHa;
        this.PropertyType = o.PropertyType;
        this.PropertyAdditionalType = o.PropertyAdditionalType;
        this.PropertyTypeName = o.PropertyTypeName;
        this.Floor = o.Floor;
        this.NumberOfFloors = o.NumberOfFloors;
        this.FirstDateInSale = o.FirstDateInSale;
        this.NewPriceLabelEventEnd = o.NewPriceLabelEventEnd;
        this.NewLabelEventEnd = o.NewLabelEventEnd;
        this.LastModified = o.LastModified;
        this.FirstDateInSaleWithOverride = o.FirstDateInSaleWithOverride;
        this.Longitude = o.Longitude;
        this.Latitude = o.Latitude;
        this.HasBalcony = o.HasBalcony;
        this.EnergyNumber = o.EnergyNumber;
        this.EnergyClassification = o.EnergyClassification;
        this.StreetName = o.StreetName;
        this.HouseNumberAndLetter = o.HouseNumberAndLetter;
        this.PostalDistrict = o.PostalDistrict;
        this.FullAddress = o.FullAddress;
        this.IsNyboligCase = o.IsNyboligCase;
        this.IsEstateCase = o.IsEstateCase;
        this.IsSharedAgriculturalCase = o.IsSharedAgriculturalCase;
        this.ShopId = o.ShopId;
        this.CaseId = o.CaseId;
        this.CaseIdReplacedHyphen = o.CaseIdReplacedHyphen;
        this.GeoHash = o.GeoHash;
        this.GeoHash2 = o.GeoHash2;
        this.GeoHash3 = o.GeoHash3;
        this.GeoHash4 = o.GeoHash4;
        this.GeoHash5 = o.GeoHash5;
        this.GeoHash6 = o.GeoHash6;
        this.OpenHouse = o.OpenHouse;
        this.OpenHouseDate = o.OpenHouseDate;
        this.HasActiveOpenHouse = o.HasActiveOpenHouse;
        this.HasBeenSold = o.HasBeenSold;
        this.ForeignChainId = o.ForeignChainId;
        this.IsExclusive = o.IsExclusive;
        this.IsConcealedListing = o.IsConcealedListing;
        this.IsSaleInProgress = o.IsSaleInProgress;
        this.ProjectCaseReserved = o.ProjectCaseReserved;
        this.AvailableForMatchMail = o.AvailableForMatchMail;
        this.IsProjectCase = o.IsProjectCase;
        this.ProjectId = o.ProjectId;
        this.IsInvestment = o.IsInvestment;
        this.FarmBuildingArea = o.FarmBuildingArea;
        this.BusinessArea = o.BusinessArea;
        this.FloorArea = o.FloorArea;
        this.CashPriceSquareMeter = o.CashPriceSquareMeter;
        this.RentalPriceSquareMeters = o.RentalPriceSquareMeters;
        this.SellerEmail = o.SellerEmail;
        this.BuyerEmail = o.BuyerEmail;
        this.WktPoint = o.WktPoint;
        this.NoPhotoUrl = o.NoPhotoUrl;
    }

    public getProperty(): Property {
            return ({
                lastUpdate: this.LastModified.toUTCString(),
                lat: this.Latitude,
                lng: this.Longitude,
                price: this.CashPrice,
                typeOfHouse: getPropertyType(this.Type),
                originalId: this.Id,
                id: this.Id,
                images: [this.ImageUrl],
                url: this.Url,
                address: this.FullAddress,
                livingSpace: this.LivingSpace,
                measuredArea: this.FloorArea,
                groundArea: this.FloorArea,
                rooms: this.TotalNumberOfRooms,
                bedrooms: this.NumberOfRooms,
                antalPlan: "",
                rebuilt: (!this.IsNew).toString(),
                yearBuilt: this.BuiltYear,
                energyLabel: this.EnergyClass,
                ownershipCostPerMonth: this.OwnerExpensePrMonth.toString(),
                priceSquareMeter: this.CashPriceSquareMeter.toString(),// check is rental maybe ?
                soldInDays: this.HasBeenSold ? this.DaysInSale :  0,
                cellar: 0,
                description: this.DescriptionPlain,
            })
    }
}

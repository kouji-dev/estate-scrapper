// import {DocumentClient} from "aws-sdk/clients/dynamodb";
import {DynamoDBClient, PutItemCommand} from "@aws-sdk/client-dynamodb";
import {BaseDynamoDBService} from "../../framework/dynamoDB/BaseDynamoDBService";
import {Property} from "@models/Property";
import {toString} from "@utils";

export default class PropertyService extends BaseDynamoDBService<Property> {

    // constructor(private dc: DocumentClient) {
    //
    // }

    constructor(dc: DynamoDBClient) {
        super("PropertyTable", dc);
    }

    getPutItemCommand({
                       id,
                       images,
                       lastUpdate,
                       lat,
                       lng,
                       price,
                       typeOfHouse,
                       url,
                       address,
                       livingSpace,
                       measuredArea,
                       groundArea,
                       rooms,
                       bedrooms,
                       antalPlan,
                       rebuilt,
                       yearBuilt,
                       energyLabel,
                       ownershipCostPerMonth,
                       priceSquareMeter,
                       soldInDays,
                       cellar,
                       description,
                   }: Property): PutItemCommand {
        const Item: any = {
            id: { S: id },
            lastUpdate: { S: lastUpdate },
            lat: { N: toString(lat) },
            lng: { N: toString(lng) },
            price: { N: toString(price) },
            typeOfHouse: { S: typeOfHouse },
            url: { S: url },
            address: { S: address },
            livingSpace: { N: toString(livingSpace) },
            measuredArea: { N: toString(measuredArea) },
            groundArea: { N: toString(groundArea) },
            rooms: { N: toString(rooms) },
            bedrooms: { N: toString(bedrooms) },
            antalPlan: { S: antalPlan },
            rebuilt: { S: rebuilt },
            yearBuilt: { N: toString(yearBuilt) },
            energyLabel: { S: energyLabel },
            ownershipCostPerMonth: { S: ownershipCostPerMonth },
            priceSquareMeter: { S: priceSquareMeter },
            soldInDays: { N: toString(soldInDays) },
            cellar: { N: toString(cellar) },
            description: { S: description },
        };

        if(images?.length) Item.images = { SS: images };

        return new PutItemCommand({
            TableName: this.tableName,
            Item
        })
    }

    // async create(property: Property): Promise<Property> {
    //     await this.dc.put({
    //         TableName: this.tableName,
    //         Item: property
    //     }).promise();
    //     return property;
    // }
    //
    // async update(property: Property): Promise<Property> {
    //     const result = await this.dc.update({
    //         TableName: this.tableName,
    //         Key: this.getUpdateKeys(property)
    //     }).promise();
    //
    //     return result.Attributes as Property;
    // }

    //max 100 items
    // async batchRead(properties: Property[]) {
    //     const results = await this.dc.batchGet({
    //         RequestItems: {
    //             [this.tableName]: {
    //                 Keys: this.mapToBatchReadRequest(properties)
    //             }
    //         }
    //     }).promise();
    //
    //     return results;
    // }
    //
    // //max 100 items
    // async batchWrite(properties: any[]) {
    //     const results = await this.dc.batchWrite({
    //         RequestItems: {
    //             [this.tableName]: this.mapToBatchPutRequest(properties)
    //         }
    //     }).promise();
    //
    //     return results.UnprocessedItems;
    // }
    //
    // async findOne(id: string): Promise<Property> {
    //     const {Item: property} = await this.dc.get({
    //         TableName: this.tableName,
    //         Key: {
    //             id
    //         }
    //     }).promise();
    //
    //     if(!property) {
    //         throw new Error(`Id:${id} not found`)
    //     }
    //
    //     return property as Property;
    // }
    //
    // async findAll(): Promise<Property[]> {
    //     const {Items: properties} = await this.dc.query({
    //         TableName: this.tableName,
    //
    //         Limit: 10
    //     }).promise();
    //
    //     return properties as Property[];
    // }
    //
    // private mapToBatchPutRequest(properties: any[]) {
    //     return properties.map((property) => ({
    //         PutRequest: {
    //             Item: this.getUpdateKeys(property)
    //         }
    //     }));
    // }
    //
    // private mapToBatchReadRequest(properties: Property[]) {
    //     return properties.map(({id}) => ({
    //         id: {N: id}
    //     }));
    // }


}

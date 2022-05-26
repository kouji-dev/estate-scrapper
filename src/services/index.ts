import {dynamoDBClient} from "@libs/dynamodb";
import PropertyService from "./PropertyService";
import {JobService} from "@services/JobService";

const dbClient = dynamoDBClient();

export const PropertyServiceInstance = new PropertyService(dbClient);
export const JobServiceInstance = new JobService(dbClient);

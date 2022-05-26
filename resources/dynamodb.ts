export default ({
    PropertyTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:provider.environment.PROPERTY_TABLE}',
            AttributeDefinitions: [
                {AttributeName: 'id', AttributeType: 'S'},
            ],
            KeySchema: [
                {AttributeName: 'id', KeyType: 'HASH'},
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: '${self:custom.table_throughput}',
                WriteCapacityUnits: '${self:custom.table_throughput}'
            }
        }
    },
    JobTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:provider.environment.JOB_TABLE}',
            AttributeDefinitions: [
                {AttributeName: 'id', AttributeType: 'S'},
            ],
            KeySchema: [
                {AttributeName: 'id', KeyType: 'HASH'},
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: '${self:custom.table_throughput}',
                WriteCapacityUnits: '${self:custom.table_throughput}'
            }
        }
    },
})

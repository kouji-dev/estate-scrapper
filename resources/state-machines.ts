const getStateMachine = (key: string) => ({
    [key]:  {
        events: {
            http: {
                path: 'crawler',
                method: 'GET'
            },
            schedule: {
                rate: "rate(30 seconds)",
                enabled: true,
                input: {
                    stageParams: {
                        stage: 'dev'
                    }
                }
            }
        },
        definition: {
            StartAt: "LaunchCrawler",
            States: {
                LaunchCrawler: {
                    Type: "Task",
                    Parameters: {
                        source: `${key}`
                    },
                    Resource: {
                        "Fn:GetAtt": ['crawl', 'Arn']
                    },
                    Next: "CheckResume"
                },
                CheckResume: {
                    Type: "Choice",
                    Choices: [
                        {Variable: "$.resume", BooleanEquals: true, Next: "LaunchCrawler"},
                        {Variable: "$.resume", BooleanEquals: false, Next: "EndJob"},
                    ]
                },
                EndJob: {
                    Type: "Task",
                    Resource: {
                        "Fn:GetAtt": ['endJob', 'Arn']
                    },
                    End: true
                }
            }
        }
    }
})

export default ({
    ...getStateMachine('DANBOLIG'),
    ...getStateMachine("NYBOLIG")
})

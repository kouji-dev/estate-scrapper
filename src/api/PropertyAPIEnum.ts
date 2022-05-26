export enum PropertyAPIEnum {
    DANBOLIG = 'DANBOLIG',
    NYBOLIG = "NYBOLIG"
}

export const getPropertyAPIEnum: (a: string) => PropertyAPIEnum = (a) => {
    switch(a) {
        case 'NYBOLIG':
            return PropertyAPIEnum.NYBOLIG;
        case 'DANBOLIG':
            return PropertyAPIEnum.DANBOLIG;
        default:
            throw new Error(`Couldn't find type ${a}`)
    }
}

export const getPageSize: (a: PropertyAPIEnum) => number = (a) => {
    switch(a) {
        case PropertyAPIEnum.DANBOLIG:
            return 30;
        case PropertyAPIEnum.NYBOLIG:
            return 20;
        default:
            throw new Error(`Couldn't find type ${a}`)
    }
}

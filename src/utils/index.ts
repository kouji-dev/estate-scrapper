export const toString: (input: any) => string = (input: any) => input?.toString();
export const getNumber: (input: string) => number = (input: string) => {
    if(!input) return 0;

    const match = input.match(/\d+/);
    if(match.length) return Number(input.match(/\d+/)[0]);

    return 0;
};

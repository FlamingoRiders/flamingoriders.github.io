export enum Country {
    France = "France",
    Belgium = "Belgique",
    Netherlands = "Pays-Bas",
    Germany = "Allemagne",
    Danmark = "Danemark",
    Norway = "Norvège",
    Finland = "Finlande",
    Sweden = "Suède",
}

export enum Flag {
    France = "🇫🇷",
    Belgium = "🇧🇪",
    Netherlands = "🇳🇱",
    Germany = "🇩🇪",
    Danmark = "🇩🇰",
    Norway = "🇳🇴",
    Finland = "🇫🇮",
    Sweden = "🇸🇪",
}

export const countryFlagMap: Record<Country, Flag> = {
    [Country.France]: Flag.France,
    [Country.Belgium]: Flag.Belgium,
    [Country.Netherlands]: Flag.Netherlands,
    [Country.Germany]: Flag.Germany,
    [Country.Danmark]: Flag.Danmark,
    [Country.Norway]: Flag.Norway,
    [Country.Finland]: Flag.Finland,
    [Country.Sweden]: Flag.Sweden,
};


export function isCountry(value: string): value is Country {
    return Object.values(Country).includes(value as Country);
}
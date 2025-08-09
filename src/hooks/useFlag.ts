import { Country, countryFlagMap, Flag, isCountry } from "models/countries";
import { useMemo } from "react";

export function useCountryFlag(countryName?: string): Flag | null {
    return useMemo(() => {
        if (countryName && isCountry(countryName)) {
            return countryFlagMap[countryName as Country];
        }
        return null;
    }, [countryName]);
}
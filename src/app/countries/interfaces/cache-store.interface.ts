import { Country } from "./country.interface"
import { Region } from "./region.type"

export interface CacheStore {
  byCapital: TermCountry,
  byCountry: TermCountry
  byRegion: RegionCountry
}

export interface TermCountry {
  term: string,
  countries: Country[]
}

export interface RegionCountry {
  region?: Region,
  countries: Country[]
}



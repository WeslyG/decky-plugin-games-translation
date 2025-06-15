export type ITransactionType = "text" | "audio" | "textures"
export type IReleaseStatus = "announced" | "inprogress" | "released" | "outdated" // broken/unsupported
export type IVendor = "mechanicsvoiceover" | "tolma4team" | "gamesvoice" | "cool-games" | "unknown"

export interface GameTranslation {
  steamId: string;
  pageId: string;
  title: string;
  translationPage: string;
  translationTypes: ITransactionType[];
  translationLinks: string[];
  version: string;
  status: IReleaseStatus;
  storeSize: string;
  vendor: IVendor;
}
export interface StoreInterface {
  id: string;
  name: string;
  logoURL: string;
  openingHours: OpenHoursInterface[];
  homePage: string;
  mail: string;
  phone: string;
  location: string;
}

export interface OpenHoursInterface {
  days: string;
  dailyOpeningHours: DailyOpenHours[]
}

export interface DailyOpenHours {
  from: string;
  to: string;
}


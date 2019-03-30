import {OpenHoursInterface} from './store';

export interface ShopppingCenterInterface {
  name: string;
  logoURL: string;
  banners: string[];
  openingHours: OpenHoursInterface[];
}
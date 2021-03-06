import {StoreInterface} from "../models/store";

export const storeData: StoreInterface[] = [{
  "id": "1",
  "name": "KFC Inc",
  "logoURL": "logo.me/kcf.png",
  "openingHours": [
    {
      "days":"1,2,3,4,5",
      "dailyOpeningHours":[{"from":"10:00","to":"21:00"}]
    },
    {
      "days":"6",
      "dailyOpeningHours":[{"from":"10:00","to":"19:00"}]
    },
    {
      "days" :"0",
      "dailyOpeningHours":[{"from":"12:00","to":"18:00"}]
    }
  ],
  "homePage": "https://www.kfc.com",
  "phone": "4830924834",
  "mail": "info@kfc.com",
  "location": "D1"
}];
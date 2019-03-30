import {ShopppingCenterInterface} from "../models/shoppingCenter";

export const shoppingCenterData: ShopppingCenterInterface = {
  "name": "Cool place",
  "logoURL": "https://logo.me/cool.png",
  "banners": ["https://logo.me/b1.png"],
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
  ]
};
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  public client_info:any = {
    "name": null,
    "age": null,
    "country": null,
    "height": null,
    "adjust_weight": null,
    "weight_unit":"lbs",
    "height_unit":"cm",
    "weight":null,
    "cardio": null,
    "message":null
  };

  // public client_info:any = {
  //   "name": "Rohit K",
  //   "age": 20,
  //   "country": "India",
  //   "height": 180,
  //   "adjust_weight": 176,
  //   "weight_unit":"kgs",
  //   "height_unit":"cm",
  //   "weight":80,
  //   "cardio":60,
  //   "message":"I am a rockstar Programmer"
  // };

  public is_client_info:boolean = false;
  // public is_client_info:boolean = true;

  public food_macros:any = {
    "program":null,
    "high":{
      "protein":null,
      "carb":null,
      "fat":null
    },
    "low":{
      "protein":null,
      "carb":null,
      "fat":null
    },
    "neutral":{
      "protein":null,
      "carb":null,
      "fat":null
    },
    "TDEE":null,
    "showNeutral":false,
    "exclusions":[]
  }

  public is_food_macros:boolean = false;
  // public is_food_macros:boolean = true;

  constructor() { }
}

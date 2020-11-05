import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food-macros',
  templateUrl: './food-macros.component.html',
  styleUrls: ['./food-macros.component.scss']
})
export class FoodMacrosComponent implements OnInit {

  disabled=false;
  showMacros=false;
  showNeutral=false;
  selected_no_meals=3;
  selected_no_shakes=0;
  no_meals_list = [3,4,5];
  no_shakes_list = [0,1,2];
  exclution_list = [
    "Fish", "Canned Tuna", "Chicken Breast", "Meat",
    "Whole Egg", "Egg Whites", "Avocado",
    "Natural Peanut Butter", "Walnuts", "Almonds",
    "Apple", "Salmon", "Turkey Breast", "Cottage Cheese", "Greek Yogurt"];
  selected_exclusions = [];
  selectedProgram="";
  programList=[
    "Carb Cycling (Fat Loss)", "Carb Cycling (light Bulk)", "Carb Cycling (Maintainance)", "Keto Cycling (Fat Loss)",
    "Skinny Fat Recomposition (Steady)", "Lean Mass", "Full Offseason Bulk"
  ];
  highCarbFormControl = new FormControl(null);
  highProteinFormControl = new FormControl(null);
  highfatFormControl = new FormControl(null);
  lowCarbFormControl = new FormControl(null);
  lowProteinFormControl = new FormControl(null);
  lowfatFormControl = new FormControl(null);
  neutralCarbFormControl = new FormControl(null);
  neutralProteinFormControl = new FormControl(null);
  neutralfatFormControl = new FormControl(null);

  TDEEFormControl = new FormControl(null);

  constructor(
    private router: Router,
    public sharedService:SharedService,
    private activeroute: ActivatedRoute,
    private toastr:ToastrService
  ) { }

  ngOnInit() { }

  onSubmit(){
    //check Validity
    let valid = true;
    console.log(this.selected_exclusions)
    console.log(typeof(this.selected_exclusions))
    let food_macros = {
      "program":this.selectedProgram,
      "high":{
        "protein":this.highProteinFormControl.value,
        "carb":this.highCarbFormControl.value,
        "fat":this.highfatFormControl.value
      },
      "low":{
        "protein":this.lowProteinFormControl.value,
        "carb":this.lowCarbFormControl.value,
        "fat":this.lowfatFormControl.value
      },
      "neutral":{
        "protein":this.neutralProteinFormControl.value,
        "carb":this.neutralCarbFormControl.value,
        "fat":this.neutralProteinFormControl.value
      },
      "TDEE":this.TDEEFormControl.value,
      "showNeutral":this.showNeutral,
      "exclusions":this.selected_exclusions
    };
    console.log(food_macros);

    if(this.selectedProgram === "Full Offseason Bulk") {
      for(let x in food_macros["neutral"]){
        if(food_macros["neutral"][x] === null) {
          valid = false;
        }
      }
    }
    else{
      for(let x in food_macros["high"]){
        if(food_macros["high"][x] === null) {
          valid = false;
        }
      }

      for(let x in food_macros["low"]){
        if(food_macros["low"][x] === null) {
          valid = false;
        }
      }

    }

    if(valid === true) {
      console.log("Form Valid");
      this.sharedService.food_macros = food_macros;
      this.sharedService.is_food_macros = true;
      this.router.navigate(['/meal-plan']);
    }
    else{
      this.toastr.error('Please fill all the required fields','Error');
    }

  }

  onContinue() {

    this.selected_no_meals=3;
    this.selected_no_shakes=0;
    this.selected_exclusions=[];

    let valid = true;
    if(this.TDEEFormControl.value === null || this.selectedProgram === ""){
      valid = false;
      this.toastr.error('Please fill all the required fields','Error');
      return;
    }

    this.showNeutral = false;
    //calculate macros
    if(this.selectedProgram === "Carb Cycling (Fat Loss)"){
      console.log("Carb Cycling (Fat Loss)");
      //High Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 0.9 * TDEE;
        let protein = this.sharedService.client_info["adjust_weight"];
        let carb = (0.5 *TDC)/4;
        let fat = (TDC - (protein*4) - (0.5*TDC) )/9;

        this.highProteinFormControl.setValue(protein);
        this.highCarbFormControl.setValue(carb);
        this.highfatFormControl.setValue(fat);
      }
      //Low Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 0.75 * TDEE;
        let protein = this.sharedService.client_info["adjust_weight"];
        let carb = (0.2*TDC)/4;
        let fat = (TDC - (protein*4) - (0.2*TDC) )/9;

        this.lowProteinFormControl.setValue(protein);
        this.lowCarbFormControl.setValue(carb);
        this.lowfatFormControl.setValue(fat);
      }
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }
    else if(this.selectedProgram === "Carb Cycling (light Bulk)"){
      //High Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 1.1 * TDEE;
        let protein = this.sharedService.client_info["adjust_weight"];
        let carb = (0.5 *TDC)/4;
        let fat = (TDC - (protein*4) - (0.5*TDC) )/9;

        this.highProteinFormControl.setValue(protein);
        this.highCarbFormControl.setValue(carb);
        this.highfatFormControl.setValue(fat);
      }
      //Low Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 1.1 * TDEE;
        let protein = this.sharedService.client_info["adjust_weight"];
        let carb = (0.25*TDC)/4;
        let fat = (TDC - (protein*4) - (0.25*TDC) )/9;

        this.lowProteinFormControl.setValue(protein);
        this.lowCarbFormControl.setValue(carb);
        this.lowfatFormControl.setValue(fat);
      }
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }
    else if(this.selectedProgram === "Carb Cycling (Maintainance)") {
      //High Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 1 * TDEE;
        let protein = this.sharedService.client_info["adjust_weight"];
        let carb = (0.5 *TDC)/4;
        let fat = (TDC - (protein*4) - (0.5*TDC) )/9;

        this.highProteinFormControl.setValue(protein);
        this.highCarbFormControl.setValue(carb);
        this.highfatFormControl.setValue(fat);
      }
      //Low Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 1 * TDEE;
        let protein = this.sharedService.client_info["adjust_weight"];
        let carb = (0.2*TDC)/4;
        let fat = (TDC - (protein*4) - (0.2*TDC) )/9;

        this.lowProteinFormControl.setValue(protein);
        this.lowCarbFormControl.setValue(carb);
        this.lowfatFormControl.setValue(fat);
      }
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }
    else if(this.selectedProgram === "Keto Cycling (Fat Loss)") {
      //High Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 0.8 * TDEE;
        let protein = 1.2*this.sharedService.client_info["adjust_weight"];
        let carb = (0.07 *TDC)/4;
        let fat = (TDC - (protein*4) - (0.07*TDC) )/9;

        this.highProteinFormControl.setValue(protein);
        this.highCarbFormControl.setValue(carb);
        this.highfatFormControl.setValue(fat);
      }
      //Low Day
      {
        let TDEE = this.TDEEFormControl.value
        let TDC = 0.8 * TDEE;
        let protein = 1.2*this.sharedService.client_info["adjust_weight"];
        let carb = (0.3*TDC)/4;
        let fat = (TDC - (protein*4) - (0.3*TDC) )/9;

        this.lowProteinFormControl.setValue(protein);
        this.lowCarbFormControl.setValue(carb);
        this.lowfatFormControl.setValue(fat);
      }
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }
    else if(this.selectedProgram === "Skinny Fat Recomposition (Steady)"){
      this.highProteinFormControl.setValue(null);
      this.highCarbFormControl.setValue(null);
      this.highfatFormControl.setValue(null);
      this.lowProteinFormControl.setValue(null);
      this.lowCarbFormControl.setValue(null);
      this.lowfatFormControl.setValue(null);
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }
    else if(this.selectedProgram === "Lean Mass") {
      this.highProteinFormControl.setValue(null);
      this.highCarbFormControl.setValue(null);
      this.highfatFormControl.setValue(null);
      this.lowProteinFormControl.setValue(null);
      this.lowCarbFormControl.setValue(null);
      this.lowfatFormControl.setValue(null);
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }
    else if(this.selectedProgram === "Full Offseason Bulk"){
      this.showNeutral = true;
      this.highProteinFormControl.setValue(null);
      this.highCarbFormControl.setValue(null);
      this.highfatFormControl.setValue(null);
      this.lowProteinFormControl.setValue(null);
      this.lowCarbFormControl.setValue(null);
      this.lowfatFormControl.setValue(null);
      this.neutralProteinFormControl.setValue(null);
      this.neutralCarbFormControl.setValue(null);
      this.neutralfatFormControl.setValue(null);
    }


    this.showMacros = true;
    this.disabled = true;


  }

  onBack(){
    this.showMacros = false;
    this.disabled = false;
  }

}

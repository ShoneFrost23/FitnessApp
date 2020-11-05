import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {

  disabled = true;
  weightUnitList:any = ["kgs","lbs"];
  heightUnitList:any = ["cm"]
  selectedWeightUnit:any = this.sharedService.client_info.weight_unit;
  selectedHeightUnit:any = this.sharedService.client_info.height_unit;
  nameFormControl = new FormControl(this.sharedService.client_info.name);
  ageFormControl = new FormControl(this.sharedService.client_info.age);
  countryFormControl = new FormControl(this.sharedService.client_info.country);
  heightFormControl = new FormControl(this.sharedService.client_info.height);
  weightFormControl = new FormControl(this.sharedService.client_info.weight);
  cardioFormControl = new FormControl(this.sharedService.client_info.cardio);
  messageFormControl = new FormControl(this.sharedService.client_info.message);

  constructor(
    private router: Router,
    public sharedService:SharedService,
    private activeroute: ActivatedRoute,
    private toastr:ToastrService
  ) { }

  ngOnInit() {}

  onSubmit(){

    let temp_weight = null;
    if(this.weightFormControl.value===null)
      temp_weight = null;
    else
      temp_weight = (this.selectedWeightUnit === "lbs")?this.weightFormControl.value:this.weightFormControl.value*2.2;

    let client_info = {
      "name": this.nameFormControl.value,
      "age": this.ageFormControl.value,
      "country": this.countryFormControl.value,
      "height": this.heightFormControl.value,
      "adjust_weight": temp_weight,
      "height_unit":this.selectedHeightUnit,
      "weight_unit":this.selectedWeightUnit,
      "weight":this.weightFormControl.value,
      "cardio": this.cardioFormControl.value,
      "message":this.messageFormControl.value
    };

    let valid = true;

    for(let x in client_info) {
      if(client_info[x] === null){
        valid = false;
      }
    }

    if(valid === true) {
      console.log("Form Valid");
      this.sharedService.client_info = client_info;
      this.sharedService.is_client_info = true;
      this.router.navigate(['/food-macros']);
    }
    else{
      console.log("Form Invalid");
      this.toastr.error('Please fill all the required fields','Error');
    }
    console.log(client_info);
    //route
  }




}

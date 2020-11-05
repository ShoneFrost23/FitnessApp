import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  constructor(
    private router: Router,
    public sharedService:SharedService,
    private activeroute: ActivatedRoute,
    private toastr:ToastrService
  ) { }

  ngOnInit() {  }

}

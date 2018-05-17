import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  testValue: number = 4;

  goals: any; 

  constructor(private route: ActivatedRoute
            , private router: Router
            , private _data: DataService) {
    
    //this.route.params.subscribe(res => this.testValue = res.id);
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome()
  {
    this.router.navigate(['']);
  }

}

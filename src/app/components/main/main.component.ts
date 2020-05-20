import { Component } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { Report } from 'src/app/core/report';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Covid19App';
  
  countries:any
  country:any
  report:Report[] = [];


  constructor(private corona:CoronaService){}

  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
      // console.log(data)
      this.countries = data
    })
  }


  getCoronaData(country){
    this.report = [];
    this.corona.getCoronaRealTimeData(country).subscribe(data => {
      // console.log(data)
      var index = data.length - 1;
      this.report.push({country:data[index].Country,active:data[index].Active,
         confirmed:data[index].Confirmed, deaths:data[index].Deaths, 
         date:data[index].Date,recovered:data[index].Recovered})

         console.log(this.report)
    })
  }

}
import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";

interface data {
  confirmed : number,
  deaths : number , 
  recovered : number
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  arrKey = [];
  title = "corona";
  data: any;
  fatalityRate : number;
  constructor(private service: AppService) {
  }
  ngOnInit() {
    this.getInfor();
  }
  getInfor() {
    this.service.getCoronaInfor().subscribe( (data:data) => {
      this.arrKey = Object.keys(data);
      this.data = data;
      this.fatalityRate = Number((this.data.deaths / this.data.confirmed * 100).toFixed(2));
    });
  }
}

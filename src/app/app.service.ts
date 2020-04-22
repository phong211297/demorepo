import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppService {
  urlAPI = "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai";

  constructor(private http: HttpClient) {
  }

  getCoronaInfor(a = '') {
   return this.http.get(this.urlAPI + "/jhu-edu/brief" + a);
  }

}

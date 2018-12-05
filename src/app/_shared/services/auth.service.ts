import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  login(credentials) {
    return this.http.post(this.apiBaseUrl + "/auth", credentials);
  }
}

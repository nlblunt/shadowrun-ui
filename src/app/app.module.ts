import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RunnerComponent } from "./runner/runner.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

///SERVICES
import { AngularTokenModule } from "angular-token";
import { AppService } from "./app.service";

//MATERIAL
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [AppComponent, RunnerComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    AngularTokenModule.forRoot({
      apiBase: "http://shadowrun-api.herokuapp.com",
      signInRedirect: "/"})
  ],
  providers: [AngularTokenModule, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}

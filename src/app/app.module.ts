import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RunnerComponent } from "./runner/runner.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

///SERVICES
import { Angular2TokenService } from "angular2-token";
import { AppService } from "./app.service";

//MATERIAL
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, RunnerComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [Angular2TokenService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}

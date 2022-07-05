import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyMbBodyPageComponent } from './ivy-mbbody-page/ivy-mbbody-page.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { IvyQuestionnaireChildComponent } from './ivy-questionnaire-child/ivy-questionnaire-child.component';
import { IvyQuestionnaireParentComponent } from './ivy-questionnaire-parent/ivy-questionnaire-parent.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IvyMbBodyPageComponent,
    IvyQuestionnaireChildComponent,
    IvyQuestionnaireParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonToggleModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

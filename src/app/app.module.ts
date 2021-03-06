import { MatComponentsModule } from './mat-components.module';
import { CourseService } from './course.service';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatIconModule } from '@angular/material/icon';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatChipsModule } from '@angular/material/chips';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatTabsModule} from '@angular/material/tabs';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
      EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,  
    NoopAnimationsModule,
    // MatCheckboxModule,
    // MatRadioModule, 
    // MatSelectModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatIconModule, 
    // MatButtonModule,
    // MatChipsModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule,
    // MatTabsModule,
    // MatDialogModule
  ],
  providers: [
    CourseService,
    { provide : CourseService, useClass: CourseService },
    // { provide : DIALOG_DATA, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

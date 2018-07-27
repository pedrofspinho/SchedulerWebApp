import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { 
    MatToolbarModule,
    MatInputModule, 
    MatButtonModule, 
    MatTableModule, 
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

import * as moment from 'moment';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AppComponent } from './app.component';
import { CreateMeetingComponent } from './components/create-meeting/create-meeting.component';
import { IndexComponent } from './components/index/index.component';
import { EditMeetingComponent } from './components/edit-meeting/edit-meeting.component';
import { routes } from './app.routes';

import { MeetingService } from './services/meeting.service';

@NgModule({
    declarations: [
        AppComponent,
        CreateMeetingComponent,
        IndexComponent,
        EditMeetingComponent,
    ],
    imports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        MeetingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

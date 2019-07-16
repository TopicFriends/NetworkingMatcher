import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingDetailsEditPageRoutingModule } from './meeting-details-edit-page-routing.module';
import { MeetingDetailsEditPageComponent } from './meeting-details-edit-page.component';
import { MeetingDescriptionEditorComponent } from './meeting-description-editor/meeting-description-editor.component';
import { QuillModule } from 'ngx-quill'
import { ReactiveFormsModule } from '@angular/forms'
import { RichTextEditorModule } from '../../rich-text-editor/rich-text-editor.module'
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MeetingDetailsEditPageRoutingModule,
    QuillModule,
    ReactiveFormsModule,
    RichTextEditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    MeetingDetailsEditPageComponent,
    MeetingDescriptionEditorComponent
  ]
})
export class MeetingDetailsEditPageModule { }

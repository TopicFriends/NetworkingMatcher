import {Component, OnInit} from '@angular/core';
import {Meeting, MeetingsService} from '../meetings-core/meetings.service';
import {ActivatedRoute} from '@angular/router';
import {MeetingAttendanceByUser, MeetingAttendanceService} from '../meetings-core/meeting-attendance.service';
import {AuthService} from '../../user-profile-shared/auth.service';
import {Title} from '@angular/platform-browser'
import { SnackBarComponent } from '../../shared/snackbar/snackbar.component'

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.sass'],
})
export class MeetingDetailsComponent implements OnInit {

  meetingAttendanceByUser: MeetingAttendanceByUser;
  meeting: Meeting;

  meetingId: string = this.route.snapshot.params['meetingId'];

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private meetingsService: MeetingsService,
              private meetingAttendanceService: MeetingAttendanceService,
              private titleService: Title,
              public snackBar: SnackBarComponent,
  ) {
    console.log('meetingId: ', this.meetingId)
  }

  ngOnInit() {
    this.retrieveMeetingDetails(this.meetingId); // fixme: misnomer
    this.retrieveCurrentUserMeetingAttendance(this.meetingId);
  }

  private retrieveCurrentUserMeetingAttendance(meetingId: string) {
    this.authService.user.subscribe(user => {
      this.meetingAttendanceService.retrieveUserAttendanceStatus(meetingId)
        .subscribe((status: MeetingAttendanceByUser) => {
          this.meetingAttendanceByUser = status;
          console.log('status.going: ' + status.going)
        });
    });
  }

  private retrieveMeetingDetails(meetingId: string) {
    this.meetingsService.retrieveMeetingDetails(meetingId).subscribe((meeting: Meeting) => {
      this.meeting = meeting;
      // console.log('new DOMParser().parseFromString(meeting.title)', new DOMParser().parseFromString(meeting.title, 'text/html'))
      // const titleTextContent = new DOMParser().parseFromString(meeting.title, 'text/html').documentElement.textContent
      // console.log('new DOMParser().parseFromString(meeting.title)', titleTextContent)
      // documentElement -- https://stackoverflow.com/questions/28899298/extract-the-text-out-of-html-string-using-javascript/28899585
      const meetingTitleText = meeting.plainTextTitle || new DOMParser().parseFromString(meeting.title, 'text/html').documentElement.textContent
      this.titleService.setTitle(meetingTitleText + ' - TopicFriends Meeting');
    });
  }

}

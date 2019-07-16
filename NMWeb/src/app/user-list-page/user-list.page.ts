import { Component, OnInit } from '@angular/core';
import {UserData, UserDataCombined} from 'app/user-profile/user-profile-core/user-profile.service';
import { UserListService } from "app/user-profile/user-profile-core/user-list.service";
import { DbListReadOnly } from '../shared/db.service';
import {Observable} from 'rxjs/Observable'
import {sortUserByLastModified, sortUserByMatchScore, UserMatched, UserMatcherService} from '../user-profile/user-profile-core/user-matcher.service'
import {MatSliderChange} from '@angular/material'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.sass']
})
export class UserListPage implements OnInit {

  userList: DbListReadOnly<UserData>; // = [];// = this.userListService.getUserList();
  userListCombinedSorted: Array<UserMatched> // = [];// = this.userListService.getUserList();

  userListSaved;  //: UserDataWithDetails[];

  maxDistance = 5000
  sortFunctions = [
    sortUserByMatchScore,
    sortUserByLastModified
  ];


  constructor(
    private userListService: UserListService,
    public userMatcherService: UserMatcherService,
  ) {

  }

  ngOnInit() {
    // this.userList = this.userListService.listUserData();
    // this.userList.subscribe(list => {
    //   this.userListSaved = list;
    // })
    // this.userListService.listUserDataCombined().subscribe(list=> {
    //   this.userListCombinedSortedByName = list.sort((el1, el2) => {
    //     if ( ! el1.profile.displayName || ! el2.profile.displayName) {
    //       return 0
    //     }
    //     return el1.profile.displayName.localeCompare(
    //       el2.profile.displayName
    //     )
    //   })
    // })
    this.sortUserListBy(this.sortFunctions[0])
  }

  trackByKey(idx, val: UserMatched) {
    // console.log('trackByKey: ', val)
    return val.userId
  }

  public potentialConnectionsCount() {
    let n = this.userListCombinedSorted && this.userListCombinedSorted.length
    // window.alert('count'+ count)
    // return  n * n / 2 - n / 2
    return  Math.round((n * n)/1000)  // n^2 - n, because interactions can go in both directions
  }

  maxDistanceChange(event: MatSliderChange) {
    // console.log(event)
    this.maxDistance = event.value
  }

  sortUserListBy(sortFunction) {
    this.userMatcherService.listUsersSortedFiltered(sortFunction).subscribe(usersSorted => {
      this.userListCombinedSorted = usersSorted
    })
  }

}

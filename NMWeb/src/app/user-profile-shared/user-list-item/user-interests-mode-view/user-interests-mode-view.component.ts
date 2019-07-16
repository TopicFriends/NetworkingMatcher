import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { WantedTopics } from '../../../user-profile/user-profile-core/user-interests'
import { RelatedTopicLists } from '../../../user-profile/user-profile-core/user-matcher.service'
import { changeDetectionForUserProfileListSpeedup } from '../../../topics/topics-shared/topic-tag/topic-tag.component'


@Component({
  selector: 'app-user-interests-mode-view',
  templateUrl: './user-interests-mode-view.component.html',
  styleUrls: ['./user-interests-mode-view.component.scss'],
  changeDetection: changeDetectionForUserProfileListSpeedup,
})
export class UserInterestsModeViewComponent implements OnInit {

  @Input() topicGroup: WantedTopics;

  @Input() set loggedUserTopicGroupSymmetric(wantedTopics: WantedTopics) {
    this._loggedUserTopicGroupSymmetric = wantedTopics
    this.setRelatedTopicLists()
  }

  @Input() set loggedUserTopicGroupSupplyDemandSame(wantedTopics: WantedTopics) {
    this._loggedUserTopicGroupSupplyDemandSame = wantedTopics
    this.setRelatedTopicLists()
  }

  @Input() set loggedUserTopicGroupSupplyDemandMatch(wantedTopics: WantedTopics) {
    this._loggedUserTopicGroupSupplyDemandMatch = wantedTopics
    this.setRelatedTopicLists()
  }

  _loggedUserTopicGroupSymmetric: WantedTopics;
  _loggedUserTopicGroupSupplyDemandSame: WantedTopics;
  _loggedUserTopicGroupSupplyDemandMatch: WantedTopics;

  relatedTopicLists: RelatedTopicLists

  constructor() { }

  ngOnInit() {
    this.setRelatedTopicLists()

  }

  private setRelatedTopicLists() {
    this.relatedTopicLists = new RelatedTopicLists(
      this._loggedUserTopicGroupSymmetric,
      this._loggedUserTopicGroupSupplyDemandSame,
      this._loggedUserTopicGroupSupplyDemandMatch,
    )
    // console.log('setRelatedTopicLists', this.relatedTopicLists)
  }

}

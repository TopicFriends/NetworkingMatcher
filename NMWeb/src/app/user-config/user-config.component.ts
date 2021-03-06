import { Component, OnInit } from '@angular/core';
import {ExperimentalFeature} from "./experimental-feature";
import {UserConfigService} from "../shared/user-config.service";

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {

  public loading:string;

  public features:ExperimentalFeature[] = [
    {
      name:"show-interest-dialog",
      label: "Show Interest on Topic as a PopUp",
      description: "Let you change the profile view from scrolling to popover"
    },
    {
      name:"show-skills",
      label: "Show Skill Levels section in user profile",
      description: "Define your skill levels (have, want) for given topics"
    },
    {
      name:"show",
      label: "Show Skill Levels section in user profile",
      description: "Define your skill levels (have, want) for given topics"
    }
  ];

  public userConfig;

  constructor(
    private userConfigService: UserConfigService
  ) {
    this.userConfig = this.userConfigService.getUserConfiguration();
    console.log(this.userConfig);
  }

  ngOnInit(){
  }

  featureChange(name){
    this.userConfig[name] = (this.userConfig[name]) ? false : true;
    this.userConfigService.setUserConfiguration(this.userConfig);

  }
}

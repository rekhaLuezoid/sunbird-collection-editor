import { Component, OnInit } from '@angular/core';
import { config } from './quality-params.data';
import * as _ from 'lodash-es';

@Component({
  selector: 'lib-quality-params-modal',
  templateUrl: './quality-params-modal.component.html',
  styleUrls: ['./quality-params-modal.component.css']
})
export class QualityParamsModalComponent implements OnInit {
  qualityFormConfig:any 
  constructor() { }

  ngOnInit(): void {
    this.qualityFormConfig = _.get(config, 'qualityConfig')
  }
  onStatusChanges(event) {
   
  }
  valueChanges(event) {
    console.log(event)
  }

}

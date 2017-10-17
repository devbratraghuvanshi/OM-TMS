import { Branch } from './../../models/branch.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'branch-form',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  @Output() cancelAddBranch: EventEmitter<boolean> = new EventEmitter<boolean>();

  branchType = [{'key': '', 'val': 'Branch Type'}, {'key': '1', 'val': 'Booking'},
  {'key': '2', 'val': 'Delevery'}, {'key': '3', 'val': 'Both'} ]

  model = new Branch('Branch1', 'B001', this.branchType[0].key, true, 'testmail@testmail.com',
  'Devbrat', 'NA', 'UP', 'GZB', 233223, null, 9711259473);
  submitted = false;

  constructor() { }

  onSubmit() { this.submitted = true;
  console.log(this.model);
  }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  cancel() {
    this.cancelAddBranch.emit(false);
  }
}

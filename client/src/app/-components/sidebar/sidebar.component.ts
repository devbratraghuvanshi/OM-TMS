import { Component, OnInit } from '@angular/core';
import { SideBarItem } from 'app/models/SideBarItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  TabItems: SideBarItem[] = [
    {
      Link: '/dashboard/branches',
      Name: 'Branches',
      IconClass: 'mif-flow-branch',
      Count: 2
    },
    {
    Link: '/dashboard/parties',
    Name: 'Parties',
    IconClass: 'mif-organization',
    Count: 2
  },
  {
    Link: '/dashboard/trucks',
    Name: 'Trucks',
    IconClass: 'mif-truck',
    Count: 2
  },
  {
    Link: '/dashboard/drivers',
    Name: 'Drivers',
    IconClass: 'mif-user',
    Count: 2
  },
  {
    Link: '/dashboard/stations',
    Name: 'Stations',
    IconClass: 'mif-cogs',
    Count: 2
  }
]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

sites;
  constructor() { }

  ngOnInit() {
    let siteObj = new Sites();
    this.sites = siteObj.sites;
  }

}

class Sites{
  sites = [{
    name:'Tic-Tac-Toe',
    link:' ',
    shortDesc:'A game of tictactoe made using typescript and scss',
    longDesc:'a long description',
    motivation:'A FCC project',
    completed:'July 2017'
  },{
    name:'Game of Simon',
    link:' ',
    shortDesc:'A game of Simon made using typescript and scss',
    longDesc:'a long description aout Simon',
    motivation:'A FCC project',
    completed:'August 2017'
  },{
    name:'Test',
    link:' ',
    shortDesc:'A game of Simon made using typescript and scss',
    longDesc:'a long description aout test',
    motivation:'A FCC project',
    completed:'August 2017'
  },{
    name:'Tic-Tac-Toe',
    link:' ',
    shortDesc:'A game of tictactoe made using typescript and scss',
    longDesc:'a long description',
    motivation:'A FCC project',
    completed:'July 2017'
  },{
    name:'Game of Simon',
    link:' ',
    shortDesc:'A game of Simon made using typescript and scss',
    longDesc:'a long description aout Simon',
    motivation:'A FCC project',
    completed:'August 2017'
  },{
    name:'Test',
    link:' ',
    shortDesc:'A game of Simon made using typescript and scss',
    longDesc:'a long description aout test',
    motivation:'A FCC project',
    completed:'August 2017'
  }
];
}

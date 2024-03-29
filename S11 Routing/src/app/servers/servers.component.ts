import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['/server']); // absolute path - nothing happens, already on this page
    // this.router.navigate(['server']); // relative path - nothing happens, already on this page

    // routerLink knows what is the current route is, that is not Router aware of
    // this.router.navigate(['server'], { relativeTo: this.route }); // use ActivatedRoute, current route

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user?: any;
  id?: any;

  constructor(private router:Router, private servicio:ConfigService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.id = params['id'];
      console.log(this.id); // price
    }
  );

    this.servicio.getUser(this.id).subscribe(result => {
      this.user = result;
    });

  }

  regresar(){
    this.router.navigate(['home']);
  }

}

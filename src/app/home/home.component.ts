import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ro?: any;
  
  elemento?: any;
  constructor(private servicio:ConfigService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.listUsers().subscribe(result => {
      this.ro = result;
    });
  }

  detalle(data:any){
    console.log(data);
    this.elemento = data;
    this.router.navigate(['details'],
    { queryParams: { id: this.elemento.id } }
    );
  }

}

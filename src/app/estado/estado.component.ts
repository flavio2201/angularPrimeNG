import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../_services/estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estados: any ;
  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.estadoService.getEstados().subscribe(
      result => {
        this.estados = result;
      });
  }

}

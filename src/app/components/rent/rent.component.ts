import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../services/operation.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { ActivatedRoute, Params } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private operationService: OperationService,
    private rutaActiva: ActivatedRoute
  ) { 
    this.createForm(); 
  }

  client: {rut: string, celular: number, correo: string};
  angForm: FormGroup;

  ngOnInit() {
    this.client = {
      rut: this.rutaActiva.snapshot.params.rut,
      celular: this.rutaActiva.snapshot.params.celular,
      correo: this.rutaActiva.snapshot.params.correo
    };
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.client.rut = params.rut;
        this.client.celular = params.celular;
        this.client.correo = params.correo;
      }
    );
  }

  createForm() {
    this.angForm = this.fb.group({
      renta: ["", Validators.required],
    });
  }

  onConsult() {
    let user = new User();
    user.rut = this.client.rut;
    user.celular = this.client.celular;
    user.correo = this.client.correo;
    user.renta = this.angForm.value.renta;

    this.operationService.realizarConsulta(user).subscribe(resp => {
      M.toast({html: 'Consulta Realizada'});
    },(error)=>{
      M.toast({html: 'No se pudo realizar la consulta, favor reintentar mas tarde'})
    });
      
  }

}

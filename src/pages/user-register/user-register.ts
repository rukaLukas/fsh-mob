import { UserProvider } from './../../providers/user/user.provider';
import { UsuarioModel } from './../../model/usuario-model';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-user-register',
  templateUrl: 'user-register.html',
})
export class UserRegister {

  @Input()
  usuario: UsuarioModel;

  formUser: FormGroup;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private userProvider: UserProvider,
    private navParams: NavParams) {

      this.initialize();
  }

  initialize() {

    this.formUser = this.fb.group({
      'cpf': ['', Validators.required],
      'nome': ['',Validators.required],
      'login': ['',Validators.required],
      'senha': ['',Validators.compose
        (
          [
            Validators.required, 
            Validators.minLength(6),
            Validators.maxLength(6)
          ]
        )
      ],
      'email': ['',Validators.compose([Validators.required, Validators.email])],
      'dtNasc': ['',Validators.required],
      'cep': ['',Validators.required],
      'logradouro': ['',Validators.required],
      'bairro': ['',Validators.required],
      'numero': ['',Validators.required],
    });

  }

  aplicaCssErro(campo: string) {
    return {
      'box-register-error': this.hasError(campo),
      'box-register': this.hasSuccess(campo) || this.notUsed(campo)
    };
  }  

  notUsed(campo){
    return this.formUser.get(campo).pristine;
  }

  hasSuccess(campo): boolean{
     return this.formUser.get(campo).valid;
   }  
  
  hasError(campo): boolean{
   
    return (
      !this.formUser.get(campo).valid &&
      (this.formUser.get(campo).touched || this.formUser.get(campo).dirty)
    );

  }

  incluir(){

    this.userProvider.postData(this.formUser.value)
      .subscribe(
          data=>{
            console.log('Usuário registrado com sucesso');
          },
          err=>console.log(err)
      );    

  }

}

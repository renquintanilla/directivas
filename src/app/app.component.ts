import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrafo: any;

  mostrar: boolean;

  constructor() {
    this.propiedadesParrafo = {
      color: 'green',
      fontSize: '24px'
    }

    this.mostrar = true;
  }

  onClick(pColor: string){
    switch(pColor) {
      case 'V':
        this.propiedadesParrafo.color = "green";
        break;
      case 'R':
        this.propiedadesParrafo.color = "red";
        break;
      case 'A':
        this.propiedadesParrafo.color = "yellow";
        break;

    }
  }

  onInput($event: any){
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }


  onClickMostrar() {
    this.mostrar = !this.mostrar;
  }
}

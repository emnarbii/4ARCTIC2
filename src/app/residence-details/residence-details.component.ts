import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent {
  id!: number;
  res: Residence | undefined;
  constructor(private act: ActivatedRoute) {}

  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R1.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R2.jpg',
      status: 'En Construction',
    },
  ];

  ngOnInit() {
    // this.id = this.act.snapshot.params['id'];
    this.act.paramMap.subscribe((param) => {
      this.id = Number(param.get('id'));
      this.load();
    });
  }

  load(): void {
    this.res = this.listResidences.find((res) => res.id === this.id);
  }
}

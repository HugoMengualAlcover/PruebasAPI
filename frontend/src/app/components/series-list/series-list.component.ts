import {Component, OnInit} from '@angular/core';
import {Categoria, Puntuacion, Serie} from "../../common/interfaces";
import {SerieService} from "../../services/serie.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit{

  series: Serie[] = [];

  formSerie: FormGroup = this.formBuilder.group({
    _id: '',
    nombre: '',
    url: [],
    numeroCapitulos: 0,
    year: 0,
    sinopsis: '',
    puntuacion: this.formBuilder.array([ this.formBuilder.group({
      email: '',
      puntuacion: 0
    })]),
    categorias: []
  })

  arrayFori: number[] = []; //Con este array puedo evitar entrar a la primera puntuacion, la cual realmente no representa nada
  indiceInicial: number = 1;

  myNewSerie = new FormGroup({
    newSerie: new FormControl('')
  })

  editar = false;

  categoriasList: Categoria[] = []

  constructor(private serieService: SerieService,
              private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    for (let i = 0; i < this.series.length; i++) {
      this.arrayFori.push(this.indiceInicial);
      this.indiceInicial++;
    }
    this.listSeries();
  }

  private listSeries() {
    this.serieService.getSeries().subscribe(
      (data: Serie[]) => {
        this.series = data;
      }
    )
  }

  onSubmit(){
    if (this.editar) {
      const id = this.formSerie.getRawValue()._id;
      this.serieService.updateSerie(id,
        this.formSerie.getRawValue()).subscribe(
        (data: any) => {
          this.listSeries();
        }
      );
    }else{
      this.serieService.newSerie(this.formSerie.getRawValue()).subscribe(
        (data:any) => {
          console.log(data);
          this.listSeries();
        }
      )
    }
  }

  loadSerie(serie: Serie) {
    this.formSerie.setValue(serie);
    this.editar = true;
  }

  addSerie() {
    this.formSerie.reset();
    this.editar = false;
  }

  removeSerie(serie: Serie) {
    if(confirm('Desea borrar '+serie.nombre+'?')) {
      this.serieService.removeSerie(serie._id).subscribe(
        data => {
          console.log(data);
          this.listSeries();
        }
      );
    }
  }

  get nombre(): any {
    return this.formSerie.get('nombre')?.value;
  }
  get url(): any {
    return this.formSerie.get('url')?.value;
  }
  get categorias(): any {
    return this.formSerie.get('categorias')?.value;
  }
  get numeroCapitulos(): any {
    return this.formSerie.get('numeroCapitulos')?.value;
  }
  get year(): any {
    return this.formSerie.get('year')?.value;
  }
  get sinopsis(): any {
    return this.formSerie.get('sinopsis')?.value;
  }
  get puntuacionArray(): Puntuacion[]{
    console.log(this.formSerie.getRawValue().puntuacion.length)
    return this.formSerie.get('puntuacion')?.value;
  }

  get puntuacionNumber(): any {
    return this.formSerie.get('puntuacion.puntuacion')?.value;
  }

  get email(): any {
    return this.formSerie.get('puntuacion.email')?.value;
  }
  get newSerie(): any {
    return this.formSerie.get('newSerie')?.value;
  }
}

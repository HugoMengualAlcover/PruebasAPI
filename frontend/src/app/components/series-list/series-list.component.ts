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
    _id: [''],
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

  myNewSerie = new FormGroup({
    newSerie: new FormControl('')
  })

  editar: boolean = false;

  categoriasList: Categoria[] = []

  constructor(private serieService: SerieService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listSeries();
    this.editar = false;
  }

  private listSeries() {
    this.serieService.getSeries().subscribe(
      (data: Serie[]) => {
        this.series = data;
      }
    )
  }

  onSubmit(){
    console.log(this.editar)
    if (this.editar) {
      const id = this.formSerie.getRawValue()._id
      console.log(id)
      const serie = this.formSerie.getRawValue();
      this.serieService.updateSerie(id,
        serie).subscribe(
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
    this.editar = true;
    this.formSerie.setValue(serie);
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
    //console.log(this.formSerie.getRawValue().puntuacion.length);
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

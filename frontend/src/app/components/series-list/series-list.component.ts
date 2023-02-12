import {Component, OnInit} from '@angular/core';
import {Categoria, Puntuacion, Serie} from "../../common/interfaces";
import {DataService} from "../../services/data-service";
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

  constructor(private serieService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listSeries();
    this.cargarCategorias();
    this.editar = false;
  }

  private listSeries() {
    this.serieService.getSeries().subscribe(
      (data: Serie[]) => {
        this.series = data;
      }
    )
  }

  private cargarCategorias(){
    this.serieService.getCategorias().subscribe(
      (data: Categoria[]) => {
        this.categoriasList = data;
      }
    )
  }

  onSubmit(){
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
    this.editar = false;
    this.formSerie.reset();
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

  nomCategoria(cat: string[]){
    var nomCats: string = "";
    for (let i = 0; i < cat.length; i++) {
      for (let j = 0; j < this.categoriasList.length; j++) {
        if (cat[i] == this.categoriasList[j]._id){
          nomCats = nomCats+(this.categoriasList[j].nombre)+" "
        }
      }
    }
    return nomCats
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

}

import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/components/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"
  constructor(
    private route: ActivatedRoute
  ){}
ngOnInit():void {
  this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
  )
  this.setValuesToComponents(this.id)
}
setValuesToComponents(id:string|null){
  const result = dataFake.filter(article => article.id == id)[0]
  this.photoCover = result.photoCover
  this.contentTitle = result.titulo
  this.contentDescription = result.description

console.log(result)
}
}

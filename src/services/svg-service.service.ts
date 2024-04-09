import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SVGOptions from '../core/urls';
import { SVGFigureDimensions } from '../core/svgFigureDimension';

@Injectable({
  providedIn: 'root'
})
export class SvgServiceService{

  constructor(private httpClient: HttpClient) {
  }

  
  createSVGDimensions(item: SVGFigureDimensions) : Observable<SVGFigureDimensions>{
    return this.httpClient.post<SVGFigureDimensions>(SVGOptions.SVGURL, item, SVGOptions.HTTP_OPTIONS);
  }

  
  getSVGDimensions(): Observable<SVGFigureDimensions>{
    return this.httpClient.get<SVGFigureDimensions>(SVGOptions.SVGURL, SVGOptions.HTTP_OPTIONS);
  }

}

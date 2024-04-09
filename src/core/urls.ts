import { HttpHeaders } from "@angular/common/http";

export const URL_BASE = "https://localhost:7181";
export const SVGURL = `${URL_BASE}/SVGGenerator`;
export const  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': 'https://localhost:7181',
    })
};
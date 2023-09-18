import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  inAmount: any;
  from: string = '';
  to: string = ''
  result: any;
  currencies: string[] = ['USD', 'INR', 'AED', 'AFN', 'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'CAD',
    'CDF',
    'CRC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'FOK',
    'GBP',
    'GIP',
    'GMD',
    'GYD',
    'HKD',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'JEP',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'LRD ',
    'LSL ',
    'LYD ',
    'MAD ',
    'MDL ',
    'MRU ',
    'MUR ',
    'NIO ',
    'NOK',
    'NPR ',
    'NZD ',
    'OMR ',
    'PAB ',
    'PEN ',
    'PGK',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD ',
    'RUB ',
    'RWF',
    'SAR',
    'SBD ',
    'SCR',
    'SDG',
    'SEK',
    'SZL',
    'TOP',
    'TRY',
    'TTD',
    'TVD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'UYU',
    'UZS',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',]
    
    
    constructor(private http: HttpClient) { }
    
    converter() {
     const url = `https://api.exchangerate-api.com/v4/latest/${this.from}`;
    this.http.get<any>(url).subscribe(data => {
     const exchangRate= data.rates[this.to]
     this.result=this.inAmount*exchangRate

    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: 'globalPipe'
})
export class GlobalPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

@Pipe({
  name: 'safeHtml'
})
export class safeHtml implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}


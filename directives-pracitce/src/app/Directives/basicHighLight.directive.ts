import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[bHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private rendrer: Renderer2){}
  @Input('bHighlight') defaultColor = 'transparent';
  @Input() onHoverColor = 'transparent'

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;

  @HostListener('mouseenter') mouseOver()
  {
    // this.rendrer.setStyle(this.elRef.nativeElement,'background','red')
    this.background = this.onHoverColor;
  }
  @HostListener('mouseleave') mouseLeave()
  {
    // this.rendrer.setStyle(this.elRef.nativeElement,'background','transparent')
    this.background = this.defaultColor;
  }

  ngOnInit(){
    // this.mouseOver();
  }

}

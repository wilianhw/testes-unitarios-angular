import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAction]',
})
export class ActionDirective {
  @Output() appAction: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  handleKeyup(event: KeyboardEvent) {
    this.appAction.emit(event);
  }
}

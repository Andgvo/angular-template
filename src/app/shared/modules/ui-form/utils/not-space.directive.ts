import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNotSpace]'
})
export class NotSpaceDirective {
  inputElement: HTMLElement;

  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
    } else {
      return;
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    if (event.clipboardData) {
      const pastedInput: string = event.clipboardData
        .getData('text/plain')
        .replace(/\ /g, ''); // get a digit-only string
      document.execCommand('insertText', false, pastedInput);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const textData = event.dataTransfer.getData('text').replace(/\ /g, '');
      this.inputElement.focus();
      document.execCommand('insertText', false, textData);
    }
  }

}

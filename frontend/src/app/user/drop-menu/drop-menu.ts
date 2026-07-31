import {
  Component,
  signal,
  viewChild,
  ElementRef,
  input,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-drop-menu',
  imports: [],
  templateUrl: './drop-menu.html',
})
export class DropMenu {
  pos = input<string>('');
  isOpen = signal<boolean>(false);
  dropdownRef = viewChild<ElementRef>('dropdownRef');

  toggleDropdown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('document:mousedown', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (
      this.dropdownRef() &&
      !this.dropdownRef()?.nativeElement.contains(event.target)
    ) {
      this.isOpen.set(false);
    }
  }

  handleClose() {
    this.isOpen.set(false);
  }
}

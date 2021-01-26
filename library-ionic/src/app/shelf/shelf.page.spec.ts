import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShelfPage } from './shelf.page';

describe('ShelfPage', () => {
  let component: ShelfPage;
  let fixture: ComponentFixture<ShelfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShelfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

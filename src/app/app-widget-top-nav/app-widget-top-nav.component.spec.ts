import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWidgetTopNavComponent } from './app-widget-top-nav.component';

describe('AppWidgetTopNavComponent', () => {
  let component: AppWidgetTopNavComponent;
  let fixture: ComponentFixture<AppWidgetTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWidgetTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWidgetTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

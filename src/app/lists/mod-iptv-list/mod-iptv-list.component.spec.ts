import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModIptvListComponent } from './mod-iptv-list.component';

describe('ModIptvListComponent', () => {
  let component: ModIptvListComponent;
  let fixture: ComponentFixture<ModIptvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModIptvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModIptvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

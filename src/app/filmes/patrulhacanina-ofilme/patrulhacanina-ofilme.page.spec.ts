import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatrulhacaninaOfilmePage } from './patrulhacanina-ofilme.page';

describe('PatrulhacaninaOfilmePage', () => {
  let component: PatrulhacaninaOfilmePage;
  let fixture: ComponentFixture<PatrulhacaninaOfilmePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrulhacaninaOfilmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatrulhacaninaOfilmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

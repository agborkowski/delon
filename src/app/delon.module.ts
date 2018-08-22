import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { throwIfAlreadyLoaded } from './core/module-import-guard';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainThemeModule } from '@delon/theme';
import { DelonFormModule } from '@delon/form';
import { DelonUtilModule } from '@delon/util';
import { DelonChartModule } from '@delon/chart';

// region: global config functions

import { NaLodopConfig, DelonABCModule } from '@delon/abc';

export function fnNaLodopConfig(): NaLodopConfig {
  return Object.assign(new NaLodopConfig(), {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
  });
}

// endregion

@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    // theme
    AlainThemeModule.forRoot(),
    // abc
    DelonABCModule.forRoot(),
    // chart
    DelonChartModule.forRoot(),
    // form
    DelonFormModule.forRoot(),
    DelonUtilModule.forRoot(),
  ],
})
export class DelonModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: DelonModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'DelonModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [{ provide: NaLodopConfig, useFactory: fnNaLodopConfig }],
    };
  }
}

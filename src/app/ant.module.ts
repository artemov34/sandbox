import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';

// for datepicker
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

const config: NzConfig = {
  button: {}
};

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    NzFormModule,
    NzDropDownModule,
    NzPaginationModule,
    NzSelectModule,
    NzTableModule,
    NzAlertModule,
    NzSliderModule,
    NzEmptyModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzListModule,
    NzInputModule,
    NzCheckboxModule,
    NzNotificationModule,
    NzModalModule,
    NzMessageServiceModule,
    NzRadioModule,
    NzLayoutModule,
    NzSwitchModule
  ],
  exports: [
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    NzFormModule,
    NzDropDownModule,
    NzPaginationModule,
    NzSelectModule,
    NzTableModule,
    NzAlertModule,
    NzSliderModule,
    NzEmptyModule,
    NzTreeSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzListModule,
    NzInputModule,
    NzCheckboxModule,
    NzNotificationModule,
    NzModalModule,
    NzMessageServiceModule,
    NzRadioModule,
    NzLayoutModule,
    NzSwitchModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: config },
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class AntModule {}

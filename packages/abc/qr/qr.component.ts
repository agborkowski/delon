import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  ChangeDetectorRef,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { NaQRService } from './qr.service';
import { NaQRConfig } from './qr.config';

@Component({
  selector: 'na-qr',
  template: `
  <img class="na-qr__img" src="{{dataURL}}">
  `,
  preserveWhitespaces: false,
  host: { '[class.na-qr]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaQRComponent implements OnChanges {
  dataURL: string;
  // region: fields

  /** 背景 */
  @Input() background: string;
  /** 背景透明级别，范围：`0-1` 之间 */
  @Input() backgroundAlpha: number;
  /** 前景 */
  @Input() foreground: string;
  /** 前景透明级别，范围：`0-1` 之间 */
  @Input() foregroundAlpha: number;
  /** 误差校正级别 */
  @Input() level: string;
  /** 二维码输出图片MIME类型 */
  @Input() mime: string;
  /** 内边距（单位：px） */
  @Input() padding: number;
  /** 大小（单位：px） */
  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  @Input() size: number;
  /** 值 */
  @Input() value: string;
  /** 变更时回调 */
  @Output() change = new EventEmitter<string>();

  // endregion

  constructor(
    cog: NaQRConfig,
    private srv: NaQRService,
    private cd: ChangeDetectorRef,
  ) {
    Object.assign(this, cog);
  }

  ngOnChanges(): void {
    this.dataURL = this.srv.refresh({
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      mime: this.mime,
      padding: this.padding,
      size: this.size,
      value: this.value
    });
    this.cd.detectChanges();
    this.change.emit(this.dataURL);
  }
}

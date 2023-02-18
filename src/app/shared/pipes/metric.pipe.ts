import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'metricPipe' })
export class MetricPipe implements PipeTransform {
  public transform(value: number, metric: string): number {
    switch (metric) {
      case 'mi-km':
        return value * 1.6;
      case 'f-c':
        return ((value - 32) * 5) / 9;
      default:
        return value;
    }
  }
}

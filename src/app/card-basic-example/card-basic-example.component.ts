import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { CardAction, CardConfig, CardFilter, SparklineChartConfig, SparklineChartData } from 'patternfly-ng';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-card-basic-example',
  templateUrl: './card-basic-example.component.html'
})
export class CardBasicExampleComponent implements OnInit {
  actionsText = '';
  chartDates: any[] = ['dates'];
  chartConfig: SparklineChartConfig = {
    chartHeight: 60,
    chartId: 'exampleSparkline',
    tooltipType: 'default'
  };
  chartData: SparklineChartData = {
    dataAvailable: true,
    total: 100,
    xData: this.chartDates,
    yData: ['used', 10, 20, 30, 20, 30, 10, 14, 20, 25, 68, 54, 56, 78, 56, 67, 88, 76, 65, 87, 76]
  };
  config: CardConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.config = {
      action: {
        hypertext: 'View All Events',
        iconStyleClass: 'fa fa-flag'
      },
      filters: [{
        title: 'Last 30 Days',
        value: '30'
      }, {
        default: true,
        title: 'Last 15 Days',
        value: '15'
      }, {
        title: 'Today',
        value: 'today'
      }],
      title: 'Cluster Utilization',
    } as CardConfig;

    const today = new Date();
    for (let d = 20 - 1; d >= 0; d--) {
      this.chartDates.push(new Date(today.getTime() - (d * 24 * 60 * 60 * 1000)));
    }
  }

  // Actions

  handleActionSelect($event: CardAction): void {
    this.actionsText = $event.hypertext + ' selected\r\n' + this.actionsText;
  }

  handleFilterSelect($event: CardFilter): void {
    this.actionsText = $event.title + ' selected\r\n' + this.actionsText;
  }
}
import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Player } from '../../models/player';
import * as d3 from 'd3';

@Component({
  selector: 'app-team-charts',
  templateUrl: './team-charts.component.html',
  styleUrls: ['./team-charts.component.scss']
})
export class TeamChartsComponent implements OnChanges {

  @Input()
  players: Player[];

  @ViewChild('nationalityChart') natlChartContainer;

  countryCount: any;

  constructor() { }

  ngOnChanges() {
    const countryCountTmp = {};
    const data = [];

    for(let player of this.players){
      if(countryCountTmp[player.nationality]){
        countryCountTmp[player.nationality]++;
      }else{
        countryCountTmp[player.nationality]=1;
      }
    }

    for(let country in countryCountTmp){
      data.push({
        'name': country,
        'value': countryCountTmp[country]
      });
    }

    this.countryCount = countryCountTmp;

    var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 850 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // set the ranges
    var y = d3.scaleBand()
              .range([height, 0])
              .padding(0.1);

    var x = d3.scaleLinear()
              .range([0, width]);

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select(this.natlChartContainer.nativeElement)
                .select('svg')
                .remove();

    var svg = d3.select(this.natlChartContainer.nativeElement).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

      // Scale the range of the data in the domains
    x.domain([0, d3.max(data, function(d){ return d.value; })])
    y.domain(data.map(function(d) { return d.name; }));
    //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr('fill', 'steelblue')
        .attr("class", "bar")
        .attr("width", function(d) {return x(d.value); } )
        .attr("y", function(d) { return y(d.name); })
        .attr("height", y.bandwidth());

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
  }

}

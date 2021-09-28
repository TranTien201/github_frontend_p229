$(function () {

	var optionsLine = {
		chart: {
			foreColor: '#f8f9fa',
			height: 420,
			
			type: 'line',
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 2,
				blur: 4,
				opacity: 0.1,
			}
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		colors: ['#B4C6DC', '#98A7AC', '#E2B8AC'],
		series: [{
			name: "Revenue in $",
			data: [770, 990, 1000, 1200, 1500, 1300,1600,1750,1430,2000,2500,2100,3300,2700,3000,1800,2000,2320]

		}, {
			name: "Sales",
			data: [100, 203, 230, 420, 430, 414,450,455,465,430,500,550,510,650,630,343,464,470]
		}, {
			name: "Profit in $",
			data: [440, 490, 520, 610, 990, 730,1200,1350,1230,1700,2000,1900,3000,2400,2900,1500,1700,2100]
		}],
		title: {
			text: 'Company business data',
			style: {
				fontSize: "25px",
				fontWeight: "600"
			},
			align: 'left',
			offsetY: 5,
			offsetX: 20
		},
		markers: {
			size: 4,
			strokeWidth: 0,
			hover: {
				size: 7
			}
		},
		grid: {
			show: true,
			borderColor: 'rgba(255, 255, 255, 0.12)',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',

		},
		labels: ['01/2020', '02/2020', '03/2020', '04/2020', '05/2020', '06/2020', '07/2020', '08/2020', '09/2020', '10/2020', '11/2020', '12/2020', '01/2021', '02/2021', '03/2021', '04/2021', '05/2021', '06/2021'],
		xaxis: {
			tooltip: {
				enabled: false
			}
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			offsetY: -20,

		}
	}
	var chartLine = new ApexCharts(document.querySelector('#chart1'), optionsLine);
	chartLine.render();

	var options = {
		series: [44, 55, 41, 17, 15],
		chart: {
			foreColor: 'rgba(255, 255, 255, 0.65)',
			height: 380,
			type: 'donut',
			colors : '#000'
		},
		colors: ["#DADADC", "#E7E7DC", "#E1D7CD", "#D4E2EF", "#E1E2E4"],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 320
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart3"), options);
	chart.render();

      
	
});
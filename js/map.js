var mymap = L.map('mapid').setView([16.168895, 100.035316], 7);

L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            minZoom: 0,
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);

var marker = L.marker([16.981520, 100.555106]).addTo(mymap);
var marker = L.marker([16.803010, 100.262236]).addTo(mymap);
var marker = L.marker([17.002004, 99.813992]).addTo(mymap);

Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'กราฟสถิติการเข้าร่วมรับบริการกับอุทยานวิทยาศาสตร์ภาคเหนือ'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' คน'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'ผู้เข้าร่วมรายเก่า',
        data: [20, 40, 35, 25, 22, 32, 42, 20, 0, 0, 0, 0]
    }, {
        name: 'ผู้เข้าร่วมรายใหม่',
        data: [10, 5, 4, 6, 2, 8, 12, 3, 0, 0, 0, 0]
    }]
});

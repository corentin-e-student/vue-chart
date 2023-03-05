/* const ctx = document.getElementById('example'); */
const ChartTestData = {
  type: "bar",
  data: {
    labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09",
      "2015-10", "2015-11", "2015-12"
    ],
    datasets: [{
      label: 'Bar Chart',
      borderWidth: 1,
      backgroundColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      pointBorderColor: '#2554FF',
      data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1]
    }]
  },
};

const ChartTestOptions = {
  options: {
    responsive: true,
    /* scales: {
      x: {
        display: false
      },
      y: {
        beginAtZero: true
      }
    } */
  }
};

export const ChartTestConfig = {
  ChartTestData,
  ChartTestOptions
}
export default ChartTestConfig
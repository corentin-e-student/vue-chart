import ChartBar from './ChartTest.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Charts/ChartBar',
  component: ChartBar,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const TemplateChartBar = (args) => ({
  components: { ChartBar }
});

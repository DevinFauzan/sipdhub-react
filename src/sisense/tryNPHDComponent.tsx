// import { IndicatorChart } from '@sisense/sdk-ui';
// import * as DMNPHD from 'src/NPHD-model.ts';
// import { measureFactory } from '@sisense/sdk-data';

// const SisenseNPHDComponent = () => {
//   return (
//     <IndicatorChart
//       dataSet={DMNPHD.DataSource}
//       dataOptions={{
//         value: [
//           measureFactory.sum(
//             DMNPHD.NPHD.REALISASI_KPU, 'Realisasi KPU')
//         ],
//         max: [measureFactory.constant(125000000)],
//       }}
//       styleOptions={{
//         indicatorComponents: {
//           title: {
//             shouldBeShown: true,
//             text: 'Total Realisasi KPU',
//           },
//           ticks: {
//             shouldBeShown: false,
//           },
//           labels: {
//             shouldBeShown: true,
//           },
//         },
//         subtype: 'indicator/gauge',
//         skin: 2,
//       }}
//     />
//   );
// };

// export default SisenseNPHDComponent;

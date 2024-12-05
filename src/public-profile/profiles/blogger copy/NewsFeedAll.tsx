// import React, { Fragment, useContext, useEffect } from 'react';

// import { Container } from '@/components/container';
// import { NewsFeedContentAll } from './NewsFeedContentAll';
// import { MapDataContext } from '../company copy';
// import axios from 'axios';
// import { IPopupContent, IStandardColorRange } from '../company copy/blocks/interfaces/global';

// interface INewsFeedProps {
//   category?: string;  // Define category as a prop (optional)
// }

// const colorList: Array<IStandardColorRange> = [
//   {
//     stepMin: 0,
//     stepMax: 0,
//     color: "#DD2E44",
//     altText: "Penting/Prioritas Utama"
//   },
//   {
//     stepMin: 1,
//     stepMax: 1,
//     color: '#F1AB44',
//     altText: "Menengah"
//   },
//   {
//     stepMin: 2,
//     stepMax: 2,
//     color: '#5BABB4',
//     altText: "Prioritas Rendah"
//   }
// ]

// const popupDataList: Array<IPopupContent> = [
//   {
//     sourceKey: "totalNews",
//     title: "Jumlah Berita"
//   }
// ]

// const NewsFeedAll: React.FC<INewsFeedProps> = ({ category }) => {
//   const { setProvinceMapData, setDistrictMapData, setProvinceColorList, setDistrictColorList, setProvincePopupData, setDistrictPopupData, setMapLegendTitle } = useContext(MapDataContext)

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const provinceResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/news-all-prov`)
//         const districtResponse = await axios.get(`${import.meta.env.VITE_APP_API_URL}/news-all-kab`)

//         setProvinceMapData({
//           originalData: provinceResponse.data,
//           dataKey: "urgency",
//           markerMap: true
//         })

//         setDistrictMapData({
//           originalData: districtResponse.data,
//           dataKey: "urgency",
//           markerMap: true
//         })

//         setProvinceColorList(colorList)
//         setDistrictColorList(colorList)

//         setProvincePopupData(popupDataList)
//         setDistrictPopupData(popupDataList)

//         setMapLegendTitle("Legenda Berita")
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     fetch()
//   }, [])

//   return (
//     <Fragment>
//       <Container>
//         <NewsFeedContentAll /* If necessary, you can pass the category prop to NewsFeedContentAll here if it accepts it */ />
//       </Container>
//     </Fragment>
//   );
// };

// export { NewsFeedAll };

// import React, { useState, useEffect, useCallback, useContext } from 'react';
// import { CardPost } from '@/partials/cards';
// import NewsModal from './NewsModal';
// import { IoMdRefresh } from "react-icons/io";
// import axios from 'axios'; // Import axios for API calls
// import { toAbsoluteUrl } from '@/utils';
// import NewsModalAll from './NewsModalAll';
// import { CardPostAll } from '@/partials/cards/CardPostAll';
// import { FilterContext } from '../../company copy';

// // Define the post item interface
// interface IPostItem {
//   title: string;
//   image: string;
//   description: string;
//   newsLink: string;
//   namaProv?: string; // Province
//   namaKab?: string;  // District
//   postedBy: string;
//   postedDate: string;
//   postedTime: string;
//   urgency: number
// }

// // Instead of extending Array<IPostItem>, define it as an array
// type IPostsItems = IPostItem[];

// interface IPostsProps {}

// const PostsAll: React.FC<IPostsProps> = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [allItems, setAllItems] = useState<IPostsItems>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const {filterProvinsi, filterKabupaten} = useContext(FilterContext)

//   useEffect(() => {
//     fetchAllNewsArticles(filterProvinsi?.value, filterKabupaten?.value);
//   }, [filterProvinsi, filterKabupaten]);

//   const fetchAllNewsArticles = async (kodeProv, kodeKab) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/news`, {
//         params: {
//           kodeProv: kodeProv || "",
//           kodeKab: kodeKab || ""
//         }
//       });
//       setAllItems(response.data);
//     } catch (error) {
//       console.error('Error fetching news articles:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handlePostClick = (item: IPostItem) => {
//     setIsModalOpen(true);
//     // You might want to store selected item details to use in the modal
//   };

//   const renderItems = (item: IPostItem, index: number) => {
//     return (
//       <CardPostAll
//         key={index}
//         imageName={item.image}
//         title={item.title}
//         description={item.description}
//         newsLink={item.newsLink}
//         prop={item.namaProv}
//         kab={item.namaKab}
//         postedBy={item.postedBy}
//         postedDate={item.postedDate}
//         postedTime={item.postedTime}
//         urgency={item.urgency}
//         onClick={() => handlePostClick(item)}
//       />
//     );
//   };
  
//   const addNewsItem = useCallback(async (newPost: IPostItem) => {
//     setIsModalOpen(false);
//     fetchAllNewsArticles(filterProvinsi?.value, filterKabupaten?.value);
//   }, [filterProvinsi, filterKabupaten]);

//   // Refresh button handler as a regular function
//   const handleRefresh = () => {
//     fetchAllNewsArticles(filterProvinsi?.value, filterKabupaten?.value);
//   };

//   const renderFilterProvinsiTitle = useCallback(() => {
//     return filterProvinsi?.value ? ` - ${filterProvinsi.label}` : ""
//   }, [filterProvinsi])

//   const renderFilterKabupatenTitle = useCallback(() => {
//     if (filterProvinsi) {
//       return filterKabupaten?.value ? `, ${filterKabupaten.label}` : ""
//     }

//     return filterKabupaten?.value ? ` - ${filterKabupaten.label}` : ""
//   }, [filterProvinsi, filterKabupaten])

//   return (
//     <div className="card">
//       <div className="card-header flex justify-between items-center ">
//       <h3 className="card-title">Berita Terkini{renderFilterProvinsiTitle()}{renderFilterKabupatenTitle()}</h3>
//         <div>
//           <button
//             className={`align-bottom btn btn-lg text-md font-large px-5 py-3 rounded-lg transition-all duration-200 hover:text-white focus:text-white bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600`}
//             onClick={handleRefresh} 
//           >
//             <IoMdRefresh size="22.66667px" />
//           </button>
//           <button
//             className={`align-bottom btn btn-lg text-md font-large px-5 py-3 rounded-lg transition-all duration-200 hover:text-white focus:text-white ml-2 bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600`}
//             onClick={() => setIsModalOpen(true)}
//           >
//             Tambah Berita
//           </button>
//         </div>
//       </div>
//       <div className="card-body p-5 lg:p-7.5 lg:pb-7 bg-white shadow-md rounded-md">
//         {isLoading ? (
//           <div className="flex flex-col items-center gap-2 justify-center z-50 bg-light transition-opacity duration-700 ease-in-out">
//             <img
//               className="h-[60px] max-w-none"
//               src={toAbsoluteUrl('/media/app/logo-kemendagri.svg')}
//               alt="logo"
//             />
//             <div className="text-gray-500 font-medium text-sm">Memuat...</div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto justify-items-center">
//             {allItems.length > 0 ? (
//               allItems.map((item, index) => renderItems(item, index))
//             ) : (
//               <p className="text-gray-500">Tidak ada berita untuk saat ini.</p>
//             )}
//           </div>
//         )}
//       </div>
//       <NewsModalAll
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={addNewsItem} 
//       />
//     </div>
//   );
// };

// export { PostsAll, type IPostItem, type IPostsItems };

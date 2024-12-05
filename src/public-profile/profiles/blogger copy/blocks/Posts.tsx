// import React, { useState, useEffect, useCallback } from 'react';
// import { CardPost } from '@/partials/cards';
// import NewsModal from './NewsModal';
// import { IoMdRefresh } from "react-icons/io";
// import axios from 'axios'; // Import axios for API calls
// import { toAbsoluteUrl } from '@/utils';

// // Define the post item interface
// interface IPostItem {
//   title: string;
//   image: string;
//   description: string;
//   newsLink: string;
//   prop?: string; // Province
//   kab?: string;  // District
//   postedBy: string;
//   postedDate: string;
//   postedTime: string;
//   category: string;
// }

// // Instead of extending Array<IPostItem>, define it as an array
// type IPostsItems = IPostItem[];

// interface IPostsProps {
//   category: string;
// }

// const Posts: React.FC<IPostsProps> = ({ category }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [allItems, setAllItems] = useState<IPostsItems>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true)

//   useEffect(() => {
//     fetchAllNewsArticles();
//   }, []);

//   const fetchAllNewsArticles = async () => {
//     setIsLoading(true)

//     try {
//       const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/news`);
//       setAllItems(response.data);
//     } catch (error) {
//       console.error('Error fetching news articles:', error);
//     } finally {
//       setIsLoading(false)
//     }
//   };

//   const handlePostClick = (item: IPostItem) => {
//     setIsModalOpen(true);
//   };

//   const items = allItems.filter(item => item.category === category);

//   const renderItems = (item: IPostItem, index: number) => {
//     return (
//       <CardPost
//         key={index}
//         imageName={item.image} // This should contain the correct image path
//         title={item.title}
//         category={item.category}
//         description={item.description}
//         newsLink={item.newsLink}
//         prop={item.prop}
//         kab={item.kab}
//         postedBy={item.postedBy}
//         postedDate={item.postedDate}
//         postedTime={item.postedTime}
//         onClick={() => handlePostClick(item)}
//       />
//     );
//   };
  
//   const addNewsItem = useCallback(() => {
//     setIsModalOpen(false); // Close the modal after successful submission
//     fetchAllNewsArticles()
//   }, []);

//   // Refresh button handler
//   const handleRefresh = useEffect(() => {
//     fetchAllNewsArticles(); // Call the fetch function to reload the data
//   }, []);

//   return (
//     <div className="card">
//       <div className="card-header flex justify-between items-center">
//         <h3 className="card-title">{category}</h3>
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
//             {items.length > 0 ? (
//               items.map((item, index) => renderItems(item, index))
//             ) : (
//               <p className="text-gray-500">Tidak ada berita untuk kategori ini.</p>
//             )}
//           </div>
//         )}
//       </div>
//       <NewsModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={addNewsItem} // Pass the function to handle adding news posts
//         categories={Array.from(new Set(allItems.map(item => item.category)))}
//       />
//     </div>
//   );
// };

// export { Posts, type IPostItem, type IPostsItems };

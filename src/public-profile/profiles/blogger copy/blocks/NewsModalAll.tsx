// import React, { useContext, useEffect, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import ReactQuill from 'react-quill';
// import Swal from 'sweetalert2';
// import 'react-quill/dist/quill.snow.css';
// import axios from 'axios';
// import data from './indonesiaProvinces.json'
// import FilterProvinsiKabupaten from '../../../../components/filter/FilterProvinsiKabupaten';
// import { FilterContext } from '../../company copy';

// interface NewsData {
//   title: string;
//   description: string;
//   image: string;
//   newsLink: string;
//   postedBy: string;
//   postedDate: string;
//   postedTime: string;
//   urgency: number
// }

// interface NewsDataError {
//   title: string;
//   description: string;
//   image: string;
//   newsLink: string;
//   kodeProv: string;
//   postedBy: string;
//   postedDate: string;
//   postedTime: string;
//   urgency: string;
// }

// interface IPostItem {
//   title: string;
//   image: string;
//   description: string;
//   newsLink: string;
//   postedBy: string;
//   postedDate: string;
//   postedTime: string;
// }
// type IPostsItems = IPostItem[]; 

// interface IModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (data: NewsData) => void;
// }

// const kategori = ['Dukungan Pemerintah Daerah', 'Isu Pemilihan', 'Gangguan Keamanan', 'Bencana Alam'];

// // Example lists for provinces and districts; replace with real data as necessary
// // const provinces = ['Province 1', 'Province 2', 'Province 3'];
// // const districts = ['District 1', 'District 2', 'District 3'];

// const NewsModalAll: React.FC<IModalProps> = ({
//   isOpen,
//   onClose,
//   onSubmit,
// }) => {
//   const {optionsProvinsi} = useContext(FilterContext)
//   const [allItems, setAllItems] = useState<IPostsItems>([]);
//   const [formData, setFormData] = useState<NewsData>({
//     title: '',
//     description: '',
//     image: '',
//     newsLink: '',
//     postedBy: '',
//     postedDate: '',
//     postedTime: '',
//     urgency: 3
//   });

//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [filterProvinsi, setFilterProvinsi] = useState<OptionType | null>(null);
//   const [filterKabupaten, setFilterKabupaten] = useState<OptionType | null>(null);
//   const [errorList, setErrorList] = useState<NewsDataError>({
//     title: '',
//     description: '',
//     image: '',
//     newsLink: '',
//     kodeProv: '',
//     postedBy: '',
//     postedDate: '',
//     postedTime: '',
//     urgency: ''
//   })

//   const [optionsKabupaten, setOptionsKabupaten] = useState<OptionType[]>([]);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: { 'image/*': [] },
//     onDrop: acceptedFiles => {
//       const file = acceptedFiles[0];
//       if (file) {
//         setImageFile(file);
//         setFormData(prev => ({ ...prev, image: URL.createObjectURL(file) }));
//       }
//     }
//   });

//   const handleInputChange = (field: keyof NewsData, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (error) setError(null);
//   };

//   const handleSelectChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: parseInt(value) }));
//     if (error) setError(null);
//   };

//   const validateForm = () => {
//     let isClean = true

//     if (!formData.title.trim()) {
//       setErrorList((current) => ({
//         ...current,
//         title: "Judul berita harus diisi"
//       }))
//       isClean = false
//     } else if (formData.title.trim().length > 255) {
//       setErrorList((current) => ({
//         ...current,
//         title: "Judul berita harus di bawah 250 karakter"
//       }))
//       isClean = false
//     }

//     if (!formData.description.trim()) {
//       setErrorList((current) => ({
//         ...current,
//         description: "Deskripsi berita harus diisi"
//       }))
//       isClean = false
//     }

//     if (!formData.image) {
//       setErrorList((current) => ({
//         ...current,
//         image: "Gambar berita harus diisi"
//       }))
//       isClean = false
//     }

//     if (!filterProvinsi?.value) {
//       setErrorList((current) => ({
//         ...current,
//         kodeProv: "Provinsi harus diisi"
//       }))
//       isClean = false
//     }

//     if (!formData.newsLink.trim()) {
//       setErrorList((current) => ({
//         ...current,
//         newsLink: "Link berita harus diisi"
//       }))
//       isClean = false
//     }

//     if (!formData.postedBy.trim()) {
//       setErrorList((current) => ({
//         ...current,
//         postedBy: "Penulis berita harus diisi"
//       }))
//       isClean = false
//     }
    
//     return isClean;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setError(null);

//     const submissionData = new FormData();
//     submissionData.append('title', formData.title.trim());
//     submissionData.append('description', formData.description);
//     submissionData.append('newsLink', formData.newsLink.trim().startsWith('http')
//       ? formData.newsLink.trim()
//       : `https://${formData.newsLink.trim()}`);
//     submissionData.append('postedBy', formData.postedBy.trim());

//     if (filterProvinsi?.value) {
//       submissionData.append('kodeProv', filterProvinsi.value);
//     }

//     if (filterKabupaten?.value) {
//       submissionData.append('kodeKab', filterKabupaten.value);
//     }
    
//     if (imageFile) {
//       submissionData.append('image', imageFile);
//     } else {
//       setError('Image file is required');
//       setIsSubmitting(false);
//       return;
//     }

//     if (formData.urgency) {
//       submissionData.append('urgency', formData.urgency.toString());
//     }

//     try {
//       const responseData = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/news`, submissionData, { withCredentials: true });

//       // Show success alert
//       Swal.fire({
//         title: 'Success!',
//         text: 'News has been submitted successfully.',
//         icon: 'success',
//         confirmButtonText: 'Ok'
//       });

//       onSubmit(responseData.data);
//       resetFields();
//       onClose();
//     } catch (error) {
//       console.error('Error posting news:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: error instanceof Error ? error.message : 'An unexpected error occurred',
//         icon: 'error',
//         confirmButtonText: 'Try Again'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetFields = () => {
//     setFormData({
//       title: '',
//       description: '',
//       image: '',
//       newsLink: '',
//       postedBy: '',
//       postedDate: '',
//       postedTime: '',
//       urgency: 3
//     });
//     setImageFile(null);
//     setError(null);
//   };

//   const fetchAllNewsArticles = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/news`);
//       setAllItems(response.data);
//     } catch (error) {
//       console.error('Error fetching news articles:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllNewsArticles();
//   }, []);

//   const handleRefresh = () => {
//     fetchAllNewsArticles(); // Call the fetch function to reload the data
//   };
  
//   useEffect(() => {
//     const fetch = async () => {
//       setFilterKabupaten(null);
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kab`, {params: {
//           kodeProv: filterProvinsi?.value
//         }});
//         setOptionsKabupaten(
//           [{ value: "", label: "Semua Kabupaten" }].concat(
//             response.data.map((item) => ({
//               value: item.kodeKab,
//               label: item.namaKab
//             }))
//           )
//         );
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     if(filterProvinsi !== null){
//       fetch();
//     }
//   }, [filterProvinsi]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
//         <h2 className="text-2xl font-bold text-center text-blue-600">Tambah Berita Baru</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold">Judul Berita</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
//               value={formData.title}
//               onChange={(e) => handleInputChange('title', e.target.value)}
//               required
//               placeholder="Masukkan Judul Berita"
//               disabled={isSubmitting}
//             />
//             { errorList.title && <span className='text-danger text-sm'>{ errorList.title }</span> }
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold">Deskripsi</label>
//             <div className="mt-1">
//               <ReactQuill
//                 theme="snow"
//                 modules={{ toolbar: ["bold", "italic", "underline"] }}
//                 value={formData.description}
//                 onChange={(value) => handleInputChange('description', value)}
//                 placeholder="Deskripsi Berita"
//                 readOnly={isSubmitting}
//               />
//             </div>
//             { errorList.description && <span className='text-danger text-sm'>{ errorList.description }</span> }
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold">Tingkat Urgensi</label>
//             <select
//               className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
//               value={formData.urgency}
//               onChange={(e) => handleSelectChange('urgency', e.target.value)}
//               required
//               disabled={isSubmitting}>
//                 <option value={3}>Non-prioritas</option>
//                 <option value={2}>Menengah</option>
//                 <option value={1}>Prioritas Utama</option>
//               </select>
//               { errorList.urgency && <span className='text-danger text-sm'>{ errorList.urgency }</span> }
//           </div>

//           <div>
//             <FilterProvinsiKabupaten 
//               filterProvinsi={filterProvinsi} 
//               setFilterProvinsi={setFilterProvinsi} 
//               filterKabupaten={filterKabupaten} 
//               setFilterKabupaten={setFilterKabupaten} 
//               optionsKabupaten={optionsKabupaten}
//               optionsProvinsi={optionsProvinsi}
//               layout="column"
//               labelClass="text-gray-700 text-sm font-bold"
//               errorEnabled
//               provinsiError={errorList.kodeProv}
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold">Gambar Depan</label>
//             { errorList.image && <span className='text-danger text-sm'>{ errorList.image }</span> }
//             <div {...getRootProps()} className={`mt-1 flex items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
//               <input {...getInputProps()} disabled={isSubmitting} />
//               {formData.image ? (
//                 <div className="w-full">
//                   <img src={formData.image} alt="Preview" className="max-h-48 object-contain mx-auto rounded-md" />
//                   <p className="text-sm text-gray-500 text-center mt-2">Geser dan drop gambar di sini, atau klik untuk memilih gambar</p>
//                 </div>
//               ) : (
//                 <p className="text-gray-500">Geser dan drop gambar di sini, atau klik untuk memilih gambar</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold">Link Berita</label>
//             <input
//               type="url"
//               className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
//               value={formData.newsLink}
//               onChange={(e) => handleInputChange('newsLink', e.target.value)}
//               required
//               placeholder="https://example.com"
//               disabled={isSubmitting}
//             />
//             { errorList.newsLink && <span className='text-danger text-sm'>{ errorList.newsLink }</span> }
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold">Diposting Oleh</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
//               value={formData.postedBy}
//               onChange={(e) => handleInputChange('postedBy', e.target.value)}
//               required
//               placeholder="Nama Penulis"
//               disabled={isSubmitting}
//             />
//             { errorList.postedBy && <span className='text-danger text-sm'>{ errorList.postedBy }</span> }
//           </div>

//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//               <strong className="font-bold">Error: </strong>
//               <span className="block sm:inline">{error}</span>
//             </div>
//           )}

//           <div className="flex justify-end space-x-2 pt-4">
//             <button
//               type="button"
//               className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
//               onClick={onClose}
//               disabled={isSubmitting}
//             >
//               Batal
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
//               disabled={isSubmitting}
//               onClick={handleSubmit}
//             >
//               {isSubmitting ? 'Mengirim...' : 'Kirim'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewsModalAll;

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'; 

interface NewsData {
  title: string;
  category: string;
  description: string;
  image: string; 
  newsLink: string;
  postedBy: string;
  postedDate: string;
  postedTime: string;
}

interface IPostItem {
  title: string;
  image: string;
  description: string;
  newsLink: string;
  prop?: string; // Province
  kab?: string;  // District
  postedBy: string;
  postedDate: string;
  postedTime: string;
  category: string;
}

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewsData) => void;
  categories: string[];
}

type IPostsItems = IPostItem[];

const kategori = ['Dukungan Pemerintah Daerah', 'Isu Pemilihan', 'Gangguan Keamanan', 'Bencana Alam'];

const NewsModal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  categories,
}) => {
  const [allItems, setAllItems] = useState<IPostsItems>([]);
  const [formData, setFormData] = useState<NewsData>({
    title: '',
    category: 'Dukungan Pemerintah Daerah',
    description: '',
    image: '',
    newsLink: '',
    postedBy: '',
    postedDate: '',
    postedTime: ''
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      if (file) {
        setImageFile(file);
        setFormData(prev => ({ ...prev, image: URL.createObjectURL(file) }));
      }
    }
  });

  const handleInputChange = (field: keyof NewsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError('Judul berita harus diisi');
      return false;
    }
    if (!formData.description.trim()) {
      setError('Deskripsi berita harus diisi');
      return false;
    }
    if (!formData.newsLink.trim()) {
      setError('Link berita harus diisi');
      return false;
    }
    if (!formData.postedBy.trim()) {
      setError('Penulis berita harus diisi');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const submissionData = new FormData();
    submissionData.append('title', formData.title.trim());
    submissionData.append('category', formData.category);
    submissionData.append('description', formData.description);
    submissionData.append('newsLink', formData.newsLink.trim().startsWith('http')
      ? formData.newsLink.trim()
      : `https://${formData.newsLink.trim()}`);
    submissionData.append('postedBy', formData.postedBy.trim());

    if (imageFile) {
      submissionData.append('image', imageFile);
    } else {
      setError('Image file is required');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/news`, {
        method: 'POST',
        body: submissionData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to post news');
      }

      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'News has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      onSubmit(responseData.data);
      resetFields();
      onClose();
    } catch (error) {
      console.error('Error posting news:', error);
      Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'An unexpected error occurred',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitAndRefresh = async (e) => {
    e.preventDefault(); // Prevent default form submission, if necessary
    
    await handleSubmit(e); // Pass the event to handleSubmit
    handleRefresh(); // Then call refresh
  };
  

  const resetFields = () => {
    setFormData({
      title: '',
      category: 'Dukungan Pemerintah Daerah',
      description: '',
      image: '',
      newsLink: '',
      postedBy: '',
      postedDate: '',
      postedTime: '',
    });
    setImageFile(null);
    setError(null);
  };

  const fetchAllNewsArticles = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/news`);
      setAllItems(response.data);
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };

  useEffect(() => {
    fetchAllNewsArticles();
  }, []);

  const handleRefresh = () => {
    fetchAllNewsArticles(); // Call the fetch function to reload the data
  };
  
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full space-y-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-blue-600">Tambah Berita Baru</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold">Judul Berita</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
              placeholder="Masukkan Judul Berita"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold">Kategori</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              required
              disabled={isSubmitting}
            >
              {/* Map through the kategori array to create options */}
              {kategori.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold">Deskripsi</label>
            <div className="mt-1">
              <ReactQuill
                theme="snow"
                modules={{ toolbar: ["bold", "italic", "underline"] }}
                value={formData.description}
                onChange={(value) => handleInputChange('description', value)}
                placeholder="Deskripsi Berita"
                readOnly={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold">Gambar Depan</label>
            <div {...getRootProps()} className={`mt-1 flex items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <input {...getInputProps()} disabled={isSubmitting} />
              {formData.image ? (
                <div className="w-full">
                  <img src={formData.image} alt="Preview" className="max-h-48 object-contain mx-auto rounded-md" />
                  <p className="text-sm text-gray-500 text-center mt-2">Geser dan drop gambar di sini, atau klik untuk memilih gamba</p>
                </div>
              ) : (
                <p className="text-gray-500">Geser dan drop gambar di sini, atau klik untuk memilih gambar</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold">Link Berita</label>
            <input
              type="url"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
              value={formData.newsLink}
              onChange={(e) => handleInputChange('newsLink', e.target.value)}
              required
              placeholder="https://example.com"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold">Diposting Oleh</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
              value={formData.postedBy}
              onChange={(e) => handleInputChange('postedBy', e.target.value)}
              required
              placeholder="Nama Penulis"
              disabled={isSubmitting}
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;

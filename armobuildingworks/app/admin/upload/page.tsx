// app/admin/upload/page.tsx
import React, { useState } from 'react';

const AdminUploadPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]); 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData();

    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Files uploaded successfully!');
        setFiles([]); 
      } else {
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('An error occurred while uploading files.');
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl mb-4'>Admin Upload</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          multiple
          onChange={handleFileChange}
          className='mb-4'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2'
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AdminUploadPage;

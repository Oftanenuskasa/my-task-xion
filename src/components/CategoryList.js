import React from 'react';
import { FaEdit, FaTrash, FaImage, FaFilePdf, FaFileExcel, FaPrint } from 'react-icons/fa';

export default function CategoryList() {
  const categories = [
    {
      name: 'Computer',
      code: 'CMP001',
      description: 'Category for computer hardware.',
      createdDate: 'January 1, 2023'
    },
    {
      name: 'Printer',
      code: 'PRT002',
      description: 'Category for printers and printing devices.',
      createdDate: 'January 1, 2023'
    },
    {
      name: 'Scanner',
      code: 'SCN003',
      description: 'Category for scanning devices.',
      createdDate: 'January 1, 2023'
    },
    {
      name: 'RAM',
      code: 'RAM004',
      description: 'Category for random access memory.',
      createdDate: 'January 1, 2023'
    },
    {
      name: 'Hard Disk',
      code: 'HD005',
      description: 'Category for hard disk drives.',
      createdDate: 'January 1, 2023'
    }
  ];

  return (
    <div className="p-5">
      <nav className="bg-white p-4 flex justify-between items-center relative" style={{ marginTop: '20px' }}>
        <div className="flex items-center">
          {/* Updated background color here */}
          <button className="flex items-center bg-orange-400 text-white text-lg hover:bg-gray-800 py-2 px-4 rounded-lg shadow-md" style={{ border: '1px solid black' }}>
            <span className="font-semibold text-xl mr-1">🔍</span> Search......
          </button>
        </div>
        <div className="text-center flex-grow">
          <div className="text-gray-800 text-lg font-semibold">Product Category list</div>
          <div className="text-gray-600 text-sm">View/Search product Category</div>
        </div>
        <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center">
          {/* Background color remains the same for this button */}
          <button className="flex items-center bg-orange-400 text-white text-lg hover:bg-gray-800 py-2 px-4 rounded-lg shadow-md">
            <span className="font-semibold text-xl mr-1">+</span> Add Category
          </button>
        </div>
      </nav>
      <div className='shadow-xl p-5 mr-5 h-96 overflow-visible'>
        <table className="w-full">
          <thead>
            <tr>
              <th></th>
              <th className="font-semibold bg-gray-200 py-2 px-3">Category Name</th>
              <th className="font-semibold bg-gray-200 py-2 px-3">Category Code</th>
              <th className="font-semibold bg-gray-200 py-2 px-3">Description</th>
              <th className="font-semibold bg-gray-200 py-2 px-3">Created Date</th>
              <th className="font-semibold bg-gray-200 py-2 px-3">
                <div className="flex justify-between items-center">
                  <FaFilePdf className="text-red-600 text-xl mr-2" />
                  <FaFileExcel className="text-green-600 text-xl mr-2" />
                  <FaPrint className="text-blue-600 text-xl mr-2" />
                </div>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td style={{ padding: '10px' }}><input type="checkbox" name="category" /></td>
                <td className="flex items-center py-3 px-3">
                  <FaImage className="w-8 h-8 mr-2" style={{ marginRight: '8px' }} />
                  {category.name}
                </td>
                <td className="py-3 px-3">{category.code}</td>
                <td className="py-3 px-3">{category.description}</td>
                <td className="py-3 px-3">{category.createdDate}</td>
                <td className="py-3 px-3">
                  <button className="text-blue-500 hover:text-blue-700 ml-2">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700 ml-2">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

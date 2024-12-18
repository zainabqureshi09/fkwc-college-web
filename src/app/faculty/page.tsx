'use client';

import FacultyCard from "@/app/components/FacultyCard";
import Image from 'next/image'




const facultyData = [
  {
    id: 1,
    name: 'Miss Bisma',
    designation: 'Senior Lecturer Physics / Masters in physics',
   
  },
  {
    id: 2,
    name: 'Miss Sadaf',
    designation: 'Masters in Maths / Senior Lecturer Maths',
  
  },
  {
    id: 3,
    name: 'Miss Zareen',
    designation: 'Masters in Botany / Senior Lecturer in Botany',
    
  },
  {
    id: 4,
    name: 'Miss Ayesha',
    designation: 'Senior Lecturer of Zology',
   
  },
  {
    id: 5,
    name: 'Miss Aneesa',
    designation: 'Senior Lecturer of English',
   
  },
  {
    id: 6,
    name: 'Miss Maryam',
    designation: 'Senior Lecturer of Chemistry',
   
  },
  {
    id: 7,
    name: 'Miss Bejanti Mala',
    designation: 'Senior Lecturer of Computer Science',
   
  },
  {
    id: 8,
    name: 'Miss Saleha',
    designation: 'Senior Lecturer of Urdu Literature',
   
  },
  {
    id: 9,
    name: 'Miss Anusha',
    designation: 'Senior Lecturer of Urdu Pakistan Srudies / Civics',
   
  },
  {
    id: 10,
    name: 'Miss Shaista',
    designation: 'Senior Lecturer of Accounting',
   
  },
  {
    id: 11,
    name: 'Miss Sehar',
    designation: 'Senior Lecturer of Commerce Faculty',
   
  },
  {
    id: 12,
    name: 'Miss Humaira',
    designation: 'Senior Teacher of Sports',
   
  },
  {
    id: 13,
    name: 'Miss Imrana',
    designation: 'Principal Assistant',
   
  },
  {
    id: 14,
    name: 'Miss Rubina',
    designation: 'Miss Librarian',
   
  },


];

export default function FacultyPage() {
  return (
    <>
    <div className="p-6 flex flex-col items-center justify-center w-full my-6">
      <div className="border rounded-lg  justify-center items-center shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
                  src="/madam.jpg"
                  alt="Slide 5"
                  layout="responsive" // Makes the image responsive
              width={700}
              height={200}
              quality={100} // Set image quality to 100 for sharpness
                />
    </div>
            <div className="p-4 text-center">
              <h2 className="text-2xl font-extralight">Mam Sitara Jabeen</h2>
              <p className="text-gray-600">Honourable Principal of FKWC</p>
            </div>
          </div>
      <h1 className="text-3xl font-bold text-center mb-6">Our Faculty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyData.map((faculty) => (
          <FacultyCard
            key={faculty.id}
            name={faculty.name}
            designation={faculty.designation}
          />

        ))}
      </div>
      <br />
      <br />
      </>
  );
}

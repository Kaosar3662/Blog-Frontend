/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import BlogCard from '../components/Card/Blogcard';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

const Blog = () => {
  let data = [
    {
      id: 1,
      image: 'http://dummyimage.com/225x100.png/5fa2dd/ffffff',
      title: 'Eleventh Hour, The',
      subtitle: 'Senior Quality Engineer',
    },
    {
      id: 2,
      image: 'http://dummyimage.com/149x100.png/cc0000/ffffff',
      title: 'Live Free or Die Hard',
      subtitle: 'Office Assistant I',
    },
    {
      id: 3,
      image: 'http://dummyimage.com/229x100.png/dddddd/000000',
      title: 'Suez',
      subtitle: 'Systems Administrator I',
    },
    {
      id: 4,
      image: 'http://dummyimage.com/168x100.png/ff4444/ffffff',
      title: 'Himizu',
      subtitle: 'Teacher',
    },
    {
      id: 5,
      image: 'http://dummyimage.com/224x100.png/cc0000/ffffff',
      title: 'Otello',
      subtitle: 'Nuclear Power Engineer',
    },
    {
      id: 6,
      image: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
      title: 'Mirror, The (Zerkalo)',
      subtitle: 'Pharmacist',
    },
    {
      id: 7,
      image: 'http://dummyimage.com/169x100.png/cc0000/ffffff',
      title: 'World War Z',
      subtitle: 'GIS Technical Architect',
    },
    {
      id: 8,
      image: 'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
      title: 'Bunny Lake Is Missing',
      subtitle: 'Biostatistician I',
    },
    {
      id: 9,
      image: 'http://dummyimage.com/121x100.png/ff4444/ffffff',
      title: 'Blue City',
      subtitle: 'Food Chemist',
    },
    {
      id: 10,
      image: 'http://dummyimage.com/135x100.png/dddddd/000000',
      title: 'Lonely Street',
      subtitle: 'Human Resources Manager',
    },
    {
      id: 11,
      image: 'http://dummyimage.com/195x100.png/5fa2dd/ffffff',
      title: 'Melody',
      subtitle: 'Chemical Engineer',
    },
    {
      id: 12,
      image: 'http://dummyimage.com/193x100.png/cc0000/ffffff',
      title: 'Escape',
      subtitle: 'Structural Analysis Engineer',
    },
    {
      id: 13,
      image: 'http://dummyimage.com/160x100.png/ff4444/ffffff',
      title: 'Shot in the Heart',
      subtitle: 'Accounting Assistant II',
    },
    {
      id: 14,
      image: 'http://dummyimage.com/117x100.png/dddddd/000000',
      title: 'Hell and High Water',
      subtitle: 'Software Engineer II',
    },
    {
      id: 15,
      image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      title: "Another Man's Poison",
      subtitle: 'Administrative Assistant I',
    },
    {
      id: 16,
      image: 'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
      title: 'Absence of Malice',
      subtitle: 'Administrative Officer',
    },
    {
      id: 17,
      image: 'http://dummyimage.com/113x100.png/dddddd/000000',
      title: 'Glitter',
      subtitle: 'Electrical Engineer',
    },
    {
      id: 18,
      image: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
      title: 'Cake',
      subtitle: 'Social Worker',
    },
    {
      id: 19,
      image: 'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
      title: 'Wolfsburg',
      subtitle: 'Recruiting Manager',
    },
    {
      id: 20,
      image: 'http://dummyimage.com/221x100.png/dddddd/000000',
      title: 'Blind (Beul-la-in-deu)',
      subtitle: 'General Manager',
    },
    {
      id: 21,
      image: 'http://dummyimage.com/158x100.png/cc0000/ffffff',
      title: 'Winter of Discontent',
      subtitle: 'Teacher',
    },
    {
      id: 22,
      image: 'http://dummyimage.com/203x100.png/dddddd/000000',
      title: 'Where the Red Fern Grows',
      subtitle: 'Graphic Designer',
    },
    {
      id: 23,
      image: 'http://dummyimage.com/181x100.png/dddddd/000000',
      title: 'Wild Wild West Revisited, The',
      subtitle: 'Cost Accountant',
    },
    {
      id: 24,
      image: 'http://dummyimage.com/145x100.png/5fa2dd/ffffff',
      title: 'Everyday People',
      subtitle: 'Research Nurse',
    },
    {
      id: 25,
      image: 'http://dummyimage.com/235x100.png/ff4444/ffffff',
      title: 'November',
      subtitle: 'Business Systems Development Analyst',
    },
    {
      id: 26,
      image: 'http://dummyimage.com/180x100.png/cc0000/ffffff',
      title: 'First Wives Club, The',
      subtitle: 'Software Test Engineer I',
    },
    {
      id: 27,
      image: 'http://dummyimage.com/169x100.png/5fa2dd/ffffff',
      title: 'Boat Trip',
      subtitle: 'Structural Analysis Engineer',
    },
    {
      id: 28,
      image: 'http://dummyimage.com/245x100.png/dddddd/000000',
      title: 'Jude',
      subtitle: 'VP Marketing',
    },
    {
      id: 29,
      image: 'http://dummyimage.com/170x100.png/ff4444/ffffff',
      title: 'Magic Town',
      subtitle: 'Chemical Engineer',
    },
    {
      id: 30,
      image: 'http://dummyimage.com/147x100.png/5fa2dd/ffffff',
      title: "Scatter My Ashes at Bergdorf's",
      subtitle: 'Structural Engineer',
    },
    {
      id: 31,
      image: 'http://dummyimage.com/162x100.png/cc0000/ffffff',
      title: 'Frosty the Snowman',
      subtitle: 'Web Designer I',
    },
    {
      id: 32,
      image: 'http://dummyimage.com/171x100.png/dddddd/000000',
      title: 'Three-Step Dance',
      subtitle: 'Help Desk Technician',
    },
    {
      id: 33,
      image: 'http://dummyimage.com/153x100.png/cc0000/ffffff',
      title: 'Iron Mask, The',
      subtitle: 'Analyst Programmer',
    },
    {
      id: 34,
      image: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
      title: 'Spider-Man 2',
      subtitle: 'Developer I',
    },
    {
      id: 35,
      image: 'http://dummyimage.com/169x100.png/dddddd/000000',
      title: 'Tobacco Road',
      subtitle: 'Accounting Assistant II',
    },
    {
      id: 36,
      image: 'http://dummyimage.com/239x100.png/ff4444/ffffff',
      title: 'Miss Nobody',
      subtitle: 'VP Marketing',
    },
    {
      id: 37,
      image: 'http://dummyimage.com/104x100.png/dddddd/000000',
      title: 'Curious George',
      subtitle: 'Professor',
    },
    {
      id: 38,
      image: 'http://dummyimage.com/164x100.png/cc0000/ffffff',
      title: 'World on a Wire (Welt am Draht)',
      subtitle: 'Payment Adjustment Coordinator',
    },
    {
      id: 39,
      image: 'http://dummyimage.com/102x100.png/cc0000/ffffff',
      title: 'Swann in Love (Un amour de Swann)',
      subtitle: 'Account Representative IV',
    },
    {
      id: 40,
      image: 'http://dummyimage.com/156x100.png/ff4444/ffffff',
      title: 'Batman Begins',
      subtitle: 'Web Designer II',
    },
    {
      id: 41,
      image: 'http://dummyimage.com/224x100.png/ff4444/ffffff',
      title: 'I Could Never Be Your Woman',
      subtitle: 'Director of Sales',
    },
    {
      id: 42,
      image: 'http://dummyimage.com/174x100.png/5fa2dd/ffffff',
      title: 'All Passion Spent',
      subtitle: 'Software Test Engineer II',
    },
    {
      id: 43,
      image: 'http://dummyimage.com/131x100.png/dddddd/000000',
      title: 'Jakob the Liar',
      subtitle: 'Programmer Analyst III',
    },
    {
      id: 44,
      image: 'http://dummyimage.com/250x100.png/dddddd/000000',
      title: 'As I Lay Dying',
      subtitle: 'Help Desk Operator',
    },
    {
      id: 45,
      image: 'http://dummyimage.com/103x100.png/ff4444/ffffff',
      title: 'Squeeze',
      subtitle: 'Product Engineer',
    },
    {
      id: 46,
      image: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
      title: 'Train Robbers, The',
      subtitle: 'Automation Specialist II',
    },
    {
      id: 47,
      image: 'http://dummyimage.com/104x100.png/ff4444/ffffff',
      title: 'Central Park',
      subtitle: 'Quality Engineer',
    },
    {
      id: 48,
      image: 'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      title: 'Family Tree',
      subtitle: 'Statistician I',
    },
    {
      id: 49,
      image: 'http://dummyimage.com/163x100.png/dddddd/000000',
      title: 'Delta of Venus',
      subtitle: 'Director of Sales',
    },
    {
      id: 50,
      image: 'http://dummyimage.com/247x100.png/cc0000/ffffff',
      title: 'Hammer of the Gods',
      subtitle: 'Marketing Manager',
    },
    {
      id: 51,
      image: 'http://dummyimage.com/121x100.png/cc0000/ffffff',
      title: 'Appropriate Adult',
      subtitle: 'Safety Technician II',
    },
    {
      id: 52,
      image: 'http://dummyimage.com/176x100.png/dddddd/000000',
      title: 'Les Formidables (Gang-jeok)',
      subtitle: 'Accounting Assistant I',
    },
    {
      id: 53,
      image: 'http://dummyimage.com/139x100.png/5fa2dd/ffffff',
      title: 'Extraterrestrial (Extraterrestre)',
      subtitle: 'Recruiting Manager',
    },
    {
      id: 54,
      image: 'http://dummyimage.com/122x100.png/cc0000/ffffff',
      title: 'Contagion / Bio Slime',
      subtitle: 'Nuclear Power Engineer',
    },
    {
      id: 55,
      image: 'http://dummyimage.com/105x100.png/cc0000/ffffff',
      title: 'Dream With the Fishes',
      subtitle: 'Database Administrator III',
    },
    {
      id: 56,
      image: 'http://dummyimage.com/155x100.png/cc0000/ffffff',
      title: 'Last Unicorn, The',
      subtitle: 'Engineer III',
    },
    {
      id: 57,
      image: 'http://dummyimage.com/116x100.png/5fa2dd/ffffff',
      title: 'Derailed',
      subtitle: 'Occupational Therapist',
    },
    {
      id: 58,
      image: 'http://dummyimage.com/232x100.png/dddddd/000000',
      title: 'Biker Boyz',
      subtitle: 'Accountant IV',
    },
    {
      id: 59,
      image: 'http://dummyimage.com/115x100.png/5fa2dd/ffffff',
      title: 'Goodbye, Columbus',
      subtitle: 'Environmental Specialist',
    },
    {
      id: 60,
      image: 'http://dummyimage.com/249x100.png/ff4444/ffffff',
      title: 'Be Cool',
      subtitle: 'Senior Sales Associate',
    },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostperpage] = useState(6);

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const lastProductIndex = currentPage * postperpage;
  const firstProductIndex = lastProductIndex - postperpage;
  const dataToShow = filteredData.slice(firstProductIndex, lastProductIndex);

  return (
    <main className="gap-[50px] mt-20 md:mt-20 px-4">
      <div className="grid w-full gap-8 max-w-[1200px]">
        <div className="flex  flex-col gap-10">
                    <div className="flex flex-col w-full items-center gap-2">
                      <h1>All Blog</h1>
                      <p>Subtitle is going to be here.</p>
                    </div>

                    <div className="flex gap-6 flex-col  w-full sm:flex-row sm:justify-between">
                      <Search
                        data={data}
                        setFilteredData={setFilteredData}
                        setCurrentPage={setCurrentPage}
                      />
                      filter
                    </div>
        </div>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dataToShow.map((singledata, index) => (
            <BlogCard key={index} data={singledata} />
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          Total Products: {data.length - 1}
          <div className="flex gap-2.5 ">
            <Pagination
              totalBlog={filteredData.length}
              postperpage={postperpage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      <div className="w-full grid-cols-2 h-fit"></div>
    </main>
  );
};

export default Blog;

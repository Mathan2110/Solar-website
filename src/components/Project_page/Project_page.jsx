import React,{useState} from 'react'
import './Project_page.css'
import greaterthan_icon from '../../assets/icons/greaterthan-icon.svg'
import greaterthan_white_icon from '../../assets/icons/greaterthan-white.svg'
import project1 from '../../assets/About_section_image.webp'
import project3 from '../../assets/About_section_image2.webp'
import project2 from '../../assets/AC and DC Distribution Box_02.webp'
import project5 from '../../assets/ac-dc-distribution-box.webp'
import project4 from '../../assets/all-in-one-light.webp'
import project6 from '../../assets/contact_us_image.jpg'
import project7 from '../../assets/contact-image.jpg'
import project8 from '../../assets/electric-water-heater.webp'
import project9 from '../../assets/gas-water-heater.webp'
import project10 from '../../assets/On-Grid Inverters_02.webp'
import project11 from '../../assets/on-grid-inventors.webp'
import project12 from '../../assets/solar-power-plant.webp'
import project13 from '../../assets/solar-street-lights.webp'
import project14 from '../../assets/solar-water-heater.webp'
import project15 from '../../assets/why_choose_asian_plant.webp'
import project16 from '../../assets/roi-solar.webp'
import project17 from '../../assets/solar-growth.webp'
import project18 from '../../assets/surya-solar.webp'

const projectList = [
  project1,project2,project3,project4,project5,project6,project7,project8,project9,project10,project11,project12,project13,project14,project15,project16,project17,project18
]

const Project_page = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = projectList.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(projectList.length / imagesPerPage);

  const goToPage = (number) => {
    setCurrentPage(number);
  };


  return (
    <>
    <div className="banner_project">
        <h1>Our Projects</h1>
        <div>
            <p>Home</p> 
            <img src={greaterthan_icon} alt="" className='black_icon' />
            <img src={greaterthan_icon} alt="" className='black_icon' />
            <img src={greaterthan_white_icon} alt="" className='white_icon' />
            <img src={greaterthan_white_icon} alt="" className='white_icon' />
            <p>Projects</p>
        </div>
    </div>
    <div className='project_page_container' >
        <h4>Our project</h4>
        <h1>Lighting the Way with Sustainable Projects</h1>
        <p>Explore our portfolio of successful solar installations across homes, commercial buildings, and industrial facilities</p>
        <div className="project_list">
            {currentImages.map((src,index) => (
                <>
                <div className='project_image_container'>
                    <img src={src} alt="" />
                    <div>View</div>
                </div>
                </>
            ))}
        </div>
        <div className='page_index'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              padding: '10px 15px',
              backgroundColor: currentPage === i + 1 ? '#3498db' : '#eee',
              color: currentPage === i + 1 ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default Project_page
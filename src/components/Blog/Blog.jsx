import React,{useState} from 'react'
import './Blog.css'
import image from '../../assets/About_section_image2.webp'
import profile from '../../assets/profile.jpg'
import greaterthan_icon from '../../assets/icons/greaterthan-icon.svg'
import greaterthan_white_icon from '../../assets/icons/greaterthan-white.svg'
import blogList from '../../assets/Bloglist/Bloglist.json'


const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
      const imagesPerPage = 6;
    
      const indexOfLastImage = currentPage * imagesPerPage;
      const indexOfFirstImage = indexOfLastImage - imagesPerPage;
      const blogs = blogList.slice(indexOfFirstImage, indexOfLastImage);
    
      const totalPages = Math.ceil(blogList.length / imagesPerPage);
    
      const goToPage = (number) => {
        setCurrentPage(number);
      };
  return (
    <div className='blog_container'>
        <div className="banner_blog">
            <h1>Latest Blogs</h1>
            <div>
                <p>Home</p> 
                <img src={greaterthan_icon} alt="" className='black_icon' />
                <img src={greaterthan_icon} alt="" className='black_icon' />
                <img src={greaterthan_white_icon} alt="" className='white_icon' />
                <img src={greaterthan_white_icon} alt="" className='white_icon' />
                <p>Blogs</p>
            </div>
        </div>
        <div className="blog_contents">
            <h4>Blogs</h4>
            <h1>Bright Ideas for a Greener Tomorrow</h1>
            <p>Join us on a journey toward sustainability with stories, tips, and innovations from the world of solar power</p>
            <div className="blog_box">
                <div className="category">
                    <ul className='category_list' >
                        <li className='active'>View all</li>
                        <li>Electric Water Heater</li>
                        <li>Solar Street Lights</li>
                        <li>A/c and DC Distribution Box</li>
                        <li>Gas Water Heater</li>
                    </ul>
                    <div className="blogs">
                        {blogs.map((blog,index) => (
                            <>
                                <div className="blog">
                                    <img src={image} alt="" className='blog_image' />
                                    <h4>{blog.name}</h4>
                                    <h1>{blog.title}</h1>
                                    <p>{blog.description}</p>
                                    <div className="pic_rating">
                                        <img src={profile} alt="" />
                                        <div className="name">
                                            <div>{blog.profile_name}</div>
                                            <div>{blog.Date}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className='page_index index_width'>
                        {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i + 1)}
                            style={{
                            padding: '10px 15px',
                            backgroundColor: currentPage === i + 1 ? '#3498db' : '#eee',
                            color: currentPage === i + 1 ? '#fff' : '#000',
                            borderColor:currentPage === i + 1 ? '#3498db' : '#010100',
                            borderRadius: '5px',
                            }}
                        >
                            {i + 1}
                        </button>
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Blog
import React from 'react'
import './Customer.css'
import profile from '../../assets/profile.jpg'
import quote_icon from '../../assets/icons/quote-icon.svg'
import star_icon from '../../assets/icons/star-icon.svg'

const Customer = () => {
  return (
    <div className='customer_container' id='customers'>
        <h1>What Our Clients Say About Going Solar With Asian power plant</h1>
        <p> 
            Client satisfaction is at the heart of everything we do. From residential rooftops to large-scale solar farms, we’ve helped hundreds of clients make the transition to clean, renewable energy—efficiently and affordably. Here’s what they have to say about their experience with our solar solutions.
        </p>
        <div className="rating_container">
            <div className="profile_pics">
                <img src={profile} alt="" />
                <img src={profile} alt="" />
                <img src={profile} alt="" />
                <div>+</div>
            </div>
            <div className="rating">4.5+</div>
            <p>Positive Reviews for our customer</p>
        </div>
        <div className="review_container">
            <div className="review_card">
                <img src={quote_icon} alt="" />
                <p>“My monthly bill dropped from ₹3,200 to just ₹400. Highly recommend them!” – Mrs. Banu, Erode</p>
                <div className="pic_rating">
                    <img src={profile} alt="" />
                    <div className="name">
                        <div className='name_'>Banu</div>
                        <div>
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="review_card">
                <img src={quote_icon} alt="" />
                <p>“They explained subsidy eligibility clearly and installed our 5KW plant within 7 days!” – Mr. Ravi, Salem</p>
                <div className="pic_rating">
                    <img src={profile} alt="" />
                    <div className="name">
                        <div className='name_'>Ravi</div>
                        <div>
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="review_card">
                <img src={quote_icon} alt="" />
                <p>“Excellent after-service support even months after installation.” – TechPark, Coimbatore </p>
                <div className="pic_rating">
                    <img src={profile} alt="" />
                    <div className="name">
                        <div className='name_'>Itachi</div>
                        <div>
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer
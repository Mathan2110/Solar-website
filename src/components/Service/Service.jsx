import React, { useState } from 'react'
import './Service.css'
import solar_water_heater from '../../assets/solar-water-heater.webp'
import electric_water_heater from '../../assets/electric-water-heater.webp'
import gas_water_heater from '../../assets/gas-water-heater.webp'
import solar_power_plant from '../../assets/solar-power-plant.webp'
import ac_dc_distribution_box from '../../assets/ac-dc-distribution-box.webp'
import on_grid_inverters from '../../assets/on-grid-inventors.webp'
import solar_street_lights from '../../assets/solar-street-lights.webp'
import all_in_one_street_lights from '../../assets/all-in-one-light.webp'
import ro_system from '../../assets/ro-systems.webp'

const Service = () => {
    const [showCard1,setShowCard1] = useState(true)
    const [showCard2,setShowCard2] = useState(false)
    const [showCard3,setShowCard3] = useState(false)
    const [showCard4,setShowCard4] = useState(false)
    const [showCard5,setShowCard5] = useState(false)
    const [showCard6,setShowCard6] = useState(false)
    const [showCard7,setShowCard7] = useState(false)
  return (
    <div className='service_container' id='services'>
        <h1>Powering Every Corner — From Homes to Industries</h1>
        <p>Our products are designed to meet a wide range of solar needs.</p>
        <div className="services">
            <ul className="service">
                <li onClick={()=>{
                    setShowCard1(true)
                    setShowCard2(false)
                    setShowCard3(false)
                    setShowCard4(false)
                    setShowCard5(false)
                    setShowCard6(false)
                    setShowCard7(false)
                }} className={showCard1 ? 'active' :''} >Solar Water Heater</li>
                <div className={showCard1 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>Solar Water Heater</h2>
                    <p>A solar water heater is a device that uses solar energy (sunlight) to heat water for residential, commercial, or industrial use.</p>
                    <img src={solar_water_heater} alt="" />
                </div>
                <li onClick={()=>{
                    setShowCard1(false)
                    setShowCard2(true)
                    setShowCard3(false)
                    setShowCard4(false)
                    setShowCard5(false)
                    setShowCard6(false)
                    setShowCard7(false)
                }} className={showCard2 ? 'active' :''} >Electrical & Gas Water Heaters</li>
                <div className={showCard2 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>Electrical & Gas Water Heaters</h2>
                    <p>Efficient water heating options powered by electricity or LPG.</p>
                    <img src={gas_water_heater} alt="" />
                </div>
                <li onClick={()=>{
                    setShowCard1(false)
                    setShowCard2(false)
                    setShowCard3(true)
                    setShowCard4(false)
                    setShowCard5(false)
                    setShowCard6(false)
                    setShowCard7(false)
                }} className={showCard3 ? 'active' :''} >Solar Power Plant (On-Grid / Off-Grid)</li>
                <div className={showCard3 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>Solar Power Plant (On-Grid / Off-Grid)</h2>
                    <p>Complete rooftop or ground-mounted systems that save up to 90% on bills.</p>
                    <img src={solar_power_plant} alt="" />
                </div>
                <li onClick={()=>{
                    setShowCard1(false)
                    setShowCard2(false)
                    setShowCard3(false)
                    setShowCard4(true)
                    setShowCard5(false)
                    setShowCard6(false)
                    setShowCard7(false)
                }} className={showCard4 ? 'active' :''} >A/C and D/C Distribution Box</li>
                <div className={showCard4 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>A/C and D/C Distribution Box</h2>
                    <p>High-quality distribution panels for solar-based energy flow.</p>
                    <img src={ac_dc_distribution_box} alt="" />
                </div>
                <li onClick={()=>{
                    setShowCard1(false)
                    setShowCard2(false)
                    setShowCard3(false)
                    setShowCard4(false)
                    setShowCard5(true)
                    setShowCard6(false)
                    setShowCard7(false)
                }} className={showCard5 ? 'active' :''} >On-Grid Inverters</li>
                <div className={showCard5 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>On-Grid Inverters</h2>
                    <p>Smart inverters that synchronize with EB supply for optimized use.</p>
                    <img src={on_grid_inverters} alt="" />
                </div>
                <li onClick={()=>{
                    setShowCard1(false)
                    setShowCard2(false)
                    setShowCard3(false)
                    setShowCard4(false)
                    setShowCard5(false)
                    setShowCard6(true)
                    setShowCard7(false)
                }} className={showCard6 ? 'active' :''} >Solar Street Lights & All-in-One Lights</li>
                 <div className={showCard6 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>Solar Street Lights & All-in-One Lights</h2>
                    <p>Ideal for villages, campuses, and industrial zones.</p>
                    <img src={solar_street_lights} alt="" />
                </div>
                <li onClick={()=>{
                    setShowCard1(false)
                    setShowCard2(false)
                    setShowCard3(false)
                    setShowCard4(false)
                    setShowCard5(false)
                    setShowCard6(false)
                    setShowCard7(true)
                }} className={showCard7 ? 'active' :''} >RO Systems</li>
                <div className={showCard7 ? 'dropdown showDropdown' : 'dropdown'}>
                    <h2>RO Systems</h2>
                    <p>Water purification solutions compatible with solar backup.</p>
                    <img src={ro_system} alt="" />
                </div>
            </ul>
            <div className="service_info">
                <div className={showCard1 ? 'service_card show_card' : 'service_card'}>
                    <h2>Solar Water Heater</h2>
                    <p>Cost-effective heating using sunlight, ideal for homes & institutions.</p>
                    <img src={solar_water_heater} alt="" />
                </div>
                <div className={showCard2 ? 'service_card show_card' : 'service_card'}>
                    <h2>Electrical & Gas Water Heaters</h2>
                    <p>Efficient water heating options powered by electricity or LPG.</p>
                    <img src={gas_water_heater} alt="" />
                </div>
                <div className={showCard3 ? 'service_card show_card' : 'service_card'}>
                    <h2>Solar Power Plant (On-Grid / Off-Grid)</h2>
                    <p>Complete rooftop or ground-mounted systems that save up to 90% on bills.</p>
                    <img src={solar_power_plant} alt="" />
                </div>
                <div className={showCard4 ? 'service_card show_card' : 'service_card'}>
                    <h2>A/C and D/C Distribution Box</h2>
                    <p>High-quality distribution panels for solar-based energy flow.</p>
                    <img src={ac_dc_distribution_box} alt="" />
                </div>
                <div className={showCard5 ? 'service_card show_card' : 'service_card'}>
                    <h2>On-Grid Inverters</h2>
                    <p>Smart inverters that synchronize with EB supply for optimized use.</p>
                    <img src={on_grid_inverters} alt="" />
                </div>
                <div className={showCard6 ? 'service_card show_card' : 'service_card'}>
                    <h2>Solar Street Lights & All-in-One Lights</h2>
                    <p>Ideal for villages, campuses, and industrial zones.</p>
                    <img src={solar_street_lights} alt="" />
                </div>
                <div className={showCard7 ? 'service_card show_card' : 'service_card'}>
                    <h2>RO Systems</h2>
                    <p>Water purification solutions compatible with solar backup.</p>
                    <img src={ro_system} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
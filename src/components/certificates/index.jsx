import React, { useState } from 'react';
import { certificates } from '../../data/Certificates';
import SwiperSlideFunction from '../swiperSlide';
import Title from '../title'
import Categories from '../categories';

const allCategories = ['All', ...new Set(certificates.map(item => item.category))]

export default function SectionCertificates() {

  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(certificates)

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(certificates)
      return;
    }
    const filteredData = certificates.filter((item) => {
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <>
      <section className="sectionsPage" id="certificates">
        <Title title={'Certificados'} url={'/certificados'} />
        <div className="containerSwiper">
          <Categories filter={filter} categories={categories} />
          <SwiperSlideFunction menuItem={menuItems} urlSection={'/certificados'} />
        </div>
      </section>
    </>
  )
}
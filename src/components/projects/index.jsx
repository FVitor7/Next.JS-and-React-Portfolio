import React, { useState } from 'react';
import { projects } from '../../data/Projects';
import SwiperSlideFunction from '../swiperSlide';
import Categories from '../categories';
import Title from '../title'



const allCategories = ['All', ...new Set(projects.map(item => item.category))]

export default function SectionProjects() {

  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projects);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(projects)
      return;
    }
    const filteredData = projects.filter((item) => {
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <>
      <section className="sectionsPage" id="projects">
      <Title title={'Projetos'} url={'/projetos'}/>
        
        <div className="containerSwiper">
          <Categories filter={filter} categories={categories} />
          <SwiperSlideFunction menuItem={menuItems} urlSection={'/projetos'} />
        </div>
        
      </section>
    </>
  )
}
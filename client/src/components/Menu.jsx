import React from 'react'
import Header from './Header'; 
import HomeSLider from './HomeSLider';
import FilterSection from './FilterSection';
const Menu = () => {
  return (
    <>
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">

    <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">

        <Header></Header>  
        <HomeSLider />
        <FilterSection />
    </div>
    </main>
    </>
  )
}

export default Menu;

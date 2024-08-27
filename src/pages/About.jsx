import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit fuga nobis unde atque illum dolor incidunt rem sunt architecto dignissimos impedit eius, tenetur ab illo magnam eaque minima sed amet! Cum enim, nesciunt dolor recusandae facere, odit, iure dolorem labore nemo quibusdam sint itaque! Libero aperiam tempore dolore exercitationem ipsum assumenda quisquam itaque accusantium veniam ea eaque dolorem quod voluptatum rem facere, beatae corrupti alias tenetur, deserunt a! Similique ducimus consectetur alias enim non a deleniti ad quasi voluptatum, dolores asperiores id, voluptatem vitae laudantium minus natus? Harum nemo reiciendis distinctio quibusdam ipsum voluptates blanditiis rem odit, eius eos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore aut ab odit animi quo ipsa laudantium assumenda, placeat esse vel reprehenderit rem possimus consequuntur minus vitae tenetur fuga, laborum doloremque? Quasi nostrum quidem nemo inventore ad illo libero culpa sint beatae rem! Nemo veritatis voluptate ipsam ratione, nobis dolor.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem, eius eveniet unde excepturi rem atque non rerum, dolor, id soluta facere dignissimos laudantium nesciunt.</p>
        </div>
      </div>
    </div>
  )
}

export default About
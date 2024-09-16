import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <div key={eachItem.id}>
            <PlanetItem planetsList={eachItem} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

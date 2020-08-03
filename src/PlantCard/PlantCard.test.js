import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PlantCard from './PlantCard'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(() => ({
  isLoading: false, 
  hasErrored: '', 
  setPlants: [{
    common_name: "wild celery",
    family: "Apiaceae",
    family_common_name: "Carrot family",
    genus: "Apium",
    genus_id: 545,
    id: 105974,
    image_url: "https://bs.floristic.org/image/o/c6a2e8aa781660ea09fd9118918eeaa3c4dc3741",
    scientific_name: "Apium graveolens"
  }],
setFavorites: []
}))

const plant = {
  common_name: "wild celery",
  family: "Apiaceae",
  family_common_name: "Carrot family",
  genus: "Apium",
  genus_id: 545,
  id: 105974,
  image_url: "https://bs.floristic.org/image/o/c6a2e8aa781660ea09fd9118918eeaa3c4dc3741",
  scientific_name: "Apium graveolens"
}

describe('PlantCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <PlantCard plant={plant} />
        </Provider>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render a name', () => {
    const { getByText} = render(
      <BrowserRouter>
        <Provider store={store}>
          <PlantCard plant={plant} /> 
        </Provider>
      </BrowserRouter>
    )

    const name = getByText('wild celery', {exact: false})

    expect(name).toBeInTheDocument()
  })

  it('Should render a scientific name', () => {
    const { getByText} = render(
      <BrowserRouter>
        <Provider store={store}>
          <PlantCard plant={plant} /> 
        </Provider>
      </BrowserRouter>
    )

    const name = getByText('Apium graveolens', {exact: false})

    expect(name).toBeInTheDocument()
  })

  it('Should render an image', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <PlantCard plant={plant} /> 
        </Provider>
      </BrowserRouter>
    )

    const alt = getByAltText('wild celery')

    expect(alt).toBeInTheDocument()
  })

  it('Should render its scientific name', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <PlantCard plant={plant} /> 
        </Provider>
      </BrowserRouter>
    )

    const scientificName = getByText("Apium graveolens")

    expect(scientificName).toBeInTheDocument()
  })

  it('Should be clickable', async () => {
    const mockHandleClick = jest.fn()
    
    const { getByAltText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <PlantCard plant={plant} handleClick={mockHandleClick} />
        </Provider>
      </BrowserRouter>
    )
    const cardImg = getByAltText('wild celery')
    
    expect(cardImg).toBeInTheDocument()
    
    fireEvent.click(cardImg)

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})
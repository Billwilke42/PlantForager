import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PlantPage from './PlantPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux'


let store = createStore(() => ({
  isLoading: false, 
  hasErrored: '', 
  setPlants: [{
  "id": 111174,
  "common_name": "lawndaisy",
  "slug": "bellis-perennis",
  "scientific_name": "Bellis perennis",
  "year": 1753,
  "bibliography": "Sp. Pl.: 886 (1753)",
  "author": "L.",
  "status": "accepted",
  "rank": "species",
  "family_common_name": "Aster family",
  "genus_id": 780,
  "observations": "Madeira, Europe to Medit. and C. Asia",
  "image_url": "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
  "genus": "Bellis",
  "family": "Asteraceae",
  "duration": null 
}],
setPlantInfo: {
  "id": 111174,
  "common_name": "lawndaisy",
  "slug": "bellis-perennis",
  "scientific_name": "Bellis perennis",
  "year": 1753,
  "bibliography": "Sp. Pl.: 886 (1753)",
  "author": "L.",
  "status": "accepted",
  "rank": "species",
  "family_common_name": "Aster family",
  "genus_id": 780,
  "observations": "Madeira, Europe to Medit. and C. Asia",
  "image_url": "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
  "genus": "Bellis",
  "family": "Asteraceae",
  "duration": null 
},
setPlantPage: true
}))


describe('PlantPage', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <PlantPage />
        </Provider>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render a common name, a scientific name, locations and year published', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <PlantPage 
            returnHome={jest.fn()}
          />
        </Provider>
      </MemoryRouter>
    )
    const commonName = getByText('lawndaisy')
    const scientificName = getByText('Bellis perennis')
    const locations = getByText('Madeira, Europe to Medit. and C. Asia', {exact: false})
    const published = getByText('1753', {exact: false})

    expect(commonName).toBeInTheDocument()
    expect(scientificName).toBeInTheDocument()
    expect(locations).toBeInTheDocument()
    expect(published).toBeInTheDocument()
  })

  it('Should be able to return home', () => {
    const mockReturnHome = jest.fn()
    
    const { getByAltText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <PlantPage 
            returnHome={mockReturnHome}
          />
        </Provider>
      </MemoryRouter>
    )
  
    const returnHomeBtn = getByAltText('return-home')

    fireEvent.click(returnHomeBtn)
    
    expect(mockReturnHome).toHaveBeenCalledTimes(1)
  })

  it('Should render an error message if the fetch fails', () => {
    store = createStore(() => ({hasErrored: 'Failed to Fetch'}))
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <PlantPage 
            returnHome={jest.fn()}
          />
        </Provider>
      </MemoryRouter>
    )
    const errorMsg = getByText('Error: Failed to Fetch')

    expect(errorMsg).toBeInTheDocument()
  })
})
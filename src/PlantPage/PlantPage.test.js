import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PlantPage from './PlantPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(() => ({isLoading: false, hasErrored: '', setPlants: [{
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
setPlantPageId:'111174'

}))


describe('PlantPage', () => {
  it('Should render without crashing', () => {
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
    const locations = getByText('Locations: Madeira, Europe to Medit. and C. Asia')
    const published = getByText('First Published: 1753')
  })
})
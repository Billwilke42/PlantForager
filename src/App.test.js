import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';

let store;

describe('App', () => {
  it('Should render a Nav Component and a PlantCard', async () => {
    store = createStore(rootReducer, {
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
          setPlantInfo: {},
          setPlantPageId: 0
        }, applyMiddleware(thunk))

    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const title = await waitFor(() => getByText('Plant Forager'))
    const name = await waitFor(() => getByText('lawndaisy Bellis perennis'))

    expect(title).toBeInTheDocument()
  })

  it('Should render a Loading page on click', async () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    )
    const plantCard = await waitFor(() => getByTestId('111174'))
    
    fireEvent.click(plantCard)

    const familyName = getByText('Family Name:')
    const location = getByText('Locations:')
    const firstPublished = getByText('First Published:')
  })

})
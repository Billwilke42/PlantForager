import React from 'react'

import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

describe('CardContainer', () => {
  const store = createStore(() => ({plants: [{
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
  }]}))

  it('Should render a plant card', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CardContainer />
        </Provider>
      </BrowserRouter>

    )
    const commonName = await waitFor(() => getByText('lawndaisy'))
    

  })
})
import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { setFavorites } from '../actions';

describe('CardContainer', () => {
  const store = createStore(() => ({
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
  setFavorites: []
}))

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Provider store={store}>
        <CardContainer />
      </Provider>
    </MemoryRouter> , div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('Should render a plant card', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CardContainer />
        </Provider>
      </BrowserRouter>

    )
    const name = await waitFor(() => getByText('Bellis perennis', {exact: false}))
    
    expect(name).toBeInTheDocument()
  })

  it('Cards should have an image', async () => {
    const mockHandleClick = jest.fn()
    
    const { getByAltText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CardContainer handleClick={mockHandleClick} />
        </Provider>
      </BrowserRouter>

    )
    const cardImg = await waitFor(() => getByAltText('lawndaisy'))
    
    expect(cardImg).toBeInTheDocument()
  })

  it('Should have clickable cards', async () => {
    const mockHandleClick = jest.fn()
    
    const { getByAltText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CardContainer handleClick={mockHandleClick} />
        </Provider>
      </BrowserRouter>
    )
    const cardImg = await waitFor(() => getByAltText('lawndaisy'))
    
    expect(cardImg).toBeInTheDocument()
    
    fireEvent.click(cardImg)

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})
import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk'

let store = createStore(rootReducer, {
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

describe('Nav', () => {

  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Should render a title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </BrowserRouter>
    )

    const title = getByText('Plant Forager')

    expect(title).toBeInTheDocument()
  })

  it('Should render a search input', () => {
    const { getByPlaceholderText } = render (
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </BrowserRouter>
    )

    const input = getByPlaceholderText('Search by Common Name')

    expect(input).toBeInTheDocument()
  })

  it('Should run the search function when the input changes', () => {
    const mockSearch = jest.fn()
    
    const { getByPlaceholderText } = render (
      <BrowserRouter>
        <Provider store={store}>
          <Nav search={mockSearch}/>
        </Provider>
      </BrowserRouter>
    )

    const input = getByPlaceholderText('Search by Common Name')

    fireEvent.change(input, {value: 'd'})

    expect(mockSearch).toHaveBeenCalledTimes(1)
  })

  it('Should be able to show the users favorites', () => {
    const mockFavorites = jest.fn()
    const { getByAltText } = render (
      <BrowserRouter>
        <Provider store={store}>
          <Nav showFavorites={mockFavorites}/>
        </Provider>
      </BrowserRouter>
    )

    const favoritesBtn = getByAltText('fave-page-icon')

    fireEvent.click(favoritesBtn)

    expect(mockFavorites).toHaveBeenCalledTimes(1)
  })

  it('Should be able to show the users favorites', () => {
    store=createStore(rootReducer, {setFavoritesPage: true})
    const mockReturnHome = jest.fn()
    const { getByAltText } = render (
      <BrowserRouter>
        <Provider store={store}>
          <Nav returnHome={mockReturnHome}/>
        </Provider>
      </BrowserRouter>
    )

    const homeBtn = getByAltText('home-icon')

    fireEvent.click(homeBtn)

    expect(mockReturnHome).toHaveBeenCalledTimes(1)
  })
})
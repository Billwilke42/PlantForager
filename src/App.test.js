import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history'


let store;


describe('App', () => {
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
    setPlantPage: false,
    setFavorites: []
  }, applyMiddleware(thunk))
  
  it('Should should change url path when the favorites button is clicked and be able to return home', async () => {
    const testHistoryObject = createMemoryHistory()
    const { getByAltText } = render(
      <Router history={ testHistoryObject }>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    )
    expect(testHistoryObject.location.pathname).toEqual('/')

    const favePageBtn = getByAltText('fave-page-icon')

    fireEvent.click(favePageBtn)

    expect(testHistoryObject.location.pathname).toEqual('/favorites')

    const homeBtn = await waitFor(() => getByAltText('home-icon'))
    
    fireEvent.click(homeBtn)

    expect(testHistoryObject.location.pathname).toEqual('/')
})


it('Should change path on plant card click and be able to return home',   async () => {
  const testHistoryObject = createMemoryHistory()
  const { getByTestId, getByAltText } = render(
    <Router history={ testHistoryObject}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
  const plantCard = getByTestId('111174')

  fireEvent.click(plantCard)

  expect(testHistoryObject.location.pathname).toEqual('/plant/111174')

})
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render a Nav Component and a PlantCard', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const title = await waitFor(() => getByText('Plant Forager'))
    const name = await waitFor(() => getByText('lawndaisy', {exact: false}))

    expect(title).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })

  it('Should render a loading screen on plantCard click and be able return home', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    )
    const plantCard = getByTestId('111174')

    fireEvent.click(plantCard)
    const loading = getByText('Loading')
    expect(loading).toBeInTheDocument()
  })

  it('Should should display favorites', () =>{
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    )
    
    const faveIconBtn = getByAltText('fave-icon')
    
    fireEvent.click(faveIconBtn)

    const favePageBtn = getByAltText('fave-page-icon')

    fireEvent.click(favePageBtn)

    const title = getByText('Favorites:')
    const name =  getByText('lawndaisy', {exact: false})
    
    expect(title).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })
})
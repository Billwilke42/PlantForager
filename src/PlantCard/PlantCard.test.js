import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PlantCard from './PlantCard'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

describe('PlantCard', () => {
  it('Should render without crashing', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <PlantCard key= '3' common_name='lily' id='3' handleClick={jest.fn()} /> 
      </BrowserRouter>
    )

    const name = getByText('lily')
    const alt = getByAltText('lily')

    expect(name).toBeInTheDocument()
    expect(alt).toBeInTheDocument()
  })
})
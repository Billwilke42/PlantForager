import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers/index';
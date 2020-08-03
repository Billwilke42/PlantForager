import * as actions from './index';

describe('actions', () => {
  it('Should set all the plants', () => {
    const plants = [{
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
    }]

    const expectedAction = {
      type: "SET_PLANTS",
      plants: [{
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
      }]
    }

    const result = actions.setPlants(plants)

    expect(result).toEqual(expectedAction)
  })

  it('Should set the plant info', () => {
    const plantInfo = [{
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
    }]

    const expectedAction = {
      type: "SET_PLANT_INFO",
      plantInfo: [{
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
      }]
    }

    const result = actions.setPlantInfo(plantInfo)

    expect(result).toEqual(expectedAction)
  })

  it('Should reset the plant info', () => {
    const expectedAction = {
      type: "RESET_PLANT_INFO"
    }

    const result = actions.resetPlantInfo()

    expect(result).toEqual(expectedAction)
  })

  it('Should set the favorites', () => {
      const plants = [{
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
      }]
  
      const expectedAction = {
        type: "SET_FAVORITES",
        favorites: [{
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
        }]
      }
  
      const result = actions.setFavorites(plants)
  
      expect(result).toEqual(expectedAction)

  })

  it('Should remove a favorites', () => {
    const plant = [{
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
    }]

    const expectedAction = {
      type: "REMOVE_FAVORITES",
      favorites: [{
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
      }]
    }

    const result = actions.removeFavorites(plant)

    expect(result).toEqual(expectedAction)

})
  
  it('Should set the plant page', () => {
    const plantPage = true

    const expectedAction = {
      type: "SET_PLANT_PAGE",
      plantPage: true
    }

    const result = actions.setPlantPage(plantPage)

    expect(result).toEqual(expectedAction)
  })

  it('Should reset the plant Page', () => {
    const expectedAction = {
      type: "RESET_PLANT_PAGE"
    }

    const result = actions.resetPlantPage()

    expect(result).toEqual(expectedAction)
  })

  it('Should set the favorites page', () => {
    const favoritesPage = true

    const expectedAction = {
      type: "SET_FAVORITES_PAGE",
      favoritesPage: true
    }

    const result = actions.setFavoritesPage(favoritesPage)

    expect(result).toEqual(expectedAction)
  })

  it('Should set the search', () => {
    const search = 'flower'

    const expectedAction = {
      type: 'SET_SEARCH',
      search: 'flower'
    }

    const result = actions.setSearch(search)

    expect(result).toEqual(expectedAction)
  }) 

  it('Should reset the search', () => {
  
    const expectedAction = {
      type: 'RESET_SEARCH',
    }

    const result = actions.resetSearch()

    expect(result).toEqual(expectedAction)
  }) 

  it('Should reset the favorites Page', () => {
    const expectedAction = {
      type: "RESET_FAVORITES_PAGE"
    }

    const result = actions.resetFavoritesPage()

    expect(result).toEqual(expectedAction)
  })

  it('Should set isLoading', () => {
    const bool = true;

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = actions.isLoading(bool)

    expect(result).toEqual(expectedAction)
  })

  it('Should set hasErrored', () => {
    const msg = 'Youve Errored!';

    const expectedAction = {
      type: 'HAS_ERRORED',
      message: 'Youve Errored!'
    }

    const result = actions.hasErrored(msg)

    expect(result).toEqual(expectedAction)
  })
  

})
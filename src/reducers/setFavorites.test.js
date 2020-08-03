import { setFavorites } from './setFavorites'

describe('setFavorites reducer', () => {
  it('should return an initial state', () => {
    const expected = []
    const result = setFavorites(undefined, [])
    expect(result).toEqual(expected) 
  })

  it('should set favorites state', () => {
    const expected = [[{
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
    }]]
    
    const result = setFavorites(undefined, {
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
    })

    expect(result).toEqual(expected)
  })
})
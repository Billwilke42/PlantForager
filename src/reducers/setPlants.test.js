import { setPlants } from './setPlants'

describe('setPlantInfo reducer', () => {
  it('should return an initial state', () => {
    const expected = []
    const result = setPlants(undefined, [])
    expect(result).toEqual(expected) 
  })

  it('should set plants state', () => {
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
    
    const result = setPlants(undefined, {
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
    })

    expect(result).toEqual(expected)
  })
})
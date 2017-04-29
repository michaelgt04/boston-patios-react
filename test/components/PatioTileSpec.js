import PatioTile from '../../src/components/PatioTile'

describe('PatioTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <PatioTile
        name={'Atwood Tavern'}
        description={'Hidden gem'}
        neighborhood={'Inmann Square'}
      />
    )
  })

  it('should render an h2 tag with the name of the patio', () => {
    expect(wrapper.find('h2')).toBePresent()
    expect(wrapper.find('h2').text()).toMatch('Atwood Tavern')
  })

  it('should render an h3 tag with the neighborhood of the patio', () => {
    expect(wrapper.find('h3')).toBePresent()
    expect(wrapper.find('h3').text()).toMatch('Inmann Square')
  })

  it('should render a p tag with the description of the patio', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toMatch('Hidden gem')
  })
})

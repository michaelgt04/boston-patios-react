import PatiosIndex from '../../src/containers/PatiosIndex';
import PatioTile from '../../src/components/PatioTile';

describe('src/containers/PatiosIndex', () => {
  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if (url.endsWith('/api/v1/patios')) {
        return(createResponseFromFixture('patios/index'))
      }
    })

    wrapper = mount(
      <PatiosIndex />
    );
  })


  it('should render a fragment of PatioTile components', done => {
    setTimeout(() => {
      expect(wrapper.find(PatioTile)).toBePresent()
      expect(wrapper.find(PatioTile).length).toEqual(2)
      done();
    }, 0)
  });
})

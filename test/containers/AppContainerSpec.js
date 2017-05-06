import App from '../../src/containers/App';
import PatiosIndex from '../../src/containers/PatiosIndex';

describe('src/containers/App', () => {
  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if (url.endsWith('/api/v1/patios')) {
        return(createResponseFromFixture('patios/index'))
      }

    })
    wrapper = mount(
      <App />
    );
  })

  it('should render an PatiosIndex component', done => {
    setTimeout(() => {
      expect(wrapper.find(PatiosIndex)).toBePresent()
      done();
    }, 0)
  });
})

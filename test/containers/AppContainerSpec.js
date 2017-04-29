import App from '../../src/containers/App';
import PatiosIndex from '../../src/containers/PatiosIndex';

describe('src/containers/App', () => {
  let wrapper = mount(
    <App />
  );

  it('should render an PatiosIndex component', () => {
    expect(wrapper.find(PatiosIndex)).toBePresent()
  });
})

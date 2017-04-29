import PatiosIndex from '../../src/containers/PatiosIndex';
import PatioTile from '../../src/components/PatioTile';

describe('src/containers/App', () => {
  let wrapper = mount(
    <PatiosIndex />
  );

  it('should render a PatioTile component', () => {
    expect(wrapper.find(PatioTile)).toBePresent()
  });
})

import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = () => {
  shallow(<App />);
};

test('renders without error', () => {});

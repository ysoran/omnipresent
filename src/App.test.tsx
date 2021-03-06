import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

const app = () => {
    const wrapper = shallow(<App />);
    return { wrapper };
};

describe('App', () => {
    it('should render snapshot', () => {
        const { wrapper } = app();
        expect(wrapper).toMatchSnapshot();
    });
});


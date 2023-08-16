import {configureStore} from '@reduxjs/toolkit';
import {TopHeadlines} from './TopHeadlines';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '@src/redux/store';

const initialProps = {headlines: [], removeRow: jest.fn()};

const renderTopHeadline = (initialProps = {}) => {
  return render(
    <Provider store={store}>
      <TopHeadlines {...initialProps} />
    </Provider>,
  );
};
describe('Headline component test cases.', () => {
  it('Should render component properly.', () => {
    renderTopHeadline(initialProps);
  });

  it('Should display pinned item properly.', () => {
    const {queryByTestId} = renderTopHeadline({});
    queryByTestId('pinnedItem', {includeHiddenElements: true});
  });
});

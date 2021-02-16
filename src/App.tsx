import React, {useEffect, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './App.navigator';

import {Provider} from 'react-redux';
import store from './Store/store';
import {Subscription} from 'rxjs';
import {loaderService} from './services/loader.service';
import {ActivityIndicator} from 'react-native';
import {View} from 'native-base';
import {PRIMARY} from './styles/colors';
import {windowWidth} from './utils/Dimensions';
import Loader from './components/shared/Loader/Loader';
import {Root} from 'native-base';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const sub: Subscription = new Subscription();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    SplashScreen.hide();

    sub.add(
      loaderService.$loader.subscribe((loading) => {
        setLoading(loading);
      }),
    );
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        {loading && <Loader />}
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    </>
  );
};

export default App;

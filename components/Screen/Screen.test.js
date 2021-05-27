import React from 'react';
import renderer from 'react-test-renderer';

import Screen, {ScreenHeader, ScreenBody} from './Screen';

describe('Screens', () => {
  it('Screen redirects correctly', () => {
    const screen = renderer.create(<Screen></Screen>).toJSON();
    expect(screen).toBeDefined();
  });

  it('ScreenHeader in Screen redirects correctly', () => {
    const screen = renderer.create(<Screen
      header={<ScreenHeader></ScreenHeader>}
    >
    </Screen>).toJSON();
    expect(screen).toBeDefined();
  });

  it('ScreenHeader and ScreenBody in Screen redirects correctly', () => {
    const screen = renderer.create(<Screen
      header={<ScreenHeader></ScreenHeader>}
      body={<ScreenBody></ScreenBody>}
    >
    </Screen>).toJSON();
    expect(screen).toBeDefined();
  });
});
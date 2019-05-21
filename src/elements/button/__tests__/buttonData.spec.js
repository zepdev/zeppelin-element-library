import buttonData from '../buttonData';
describe('buttonData', () => {
  test('has object with data for generating buttons', () => {
    expect(buttonData).toHaveProperty('zeppelinPrimary');
    expect(buttonData).toHaveProperty('zeppelinSecondary');
    expect(buttonData).toHaveProperty('catPrimary');
    expect(buttonData).toHaveProperty('catSecondary');
    expect(buttonData).toHaveProperty('rentalPrimary');
    expect(buttonData).toHaveProperty('rentalSecondary');
    expect(buttonData).toHaveProperty('primary_disabled');
    expect(buttonData).toHaveProperty('secondary_disabled');
    expect(buttonData).toHaveProperty('full');
  });
});

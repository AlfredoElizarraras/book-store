import deepFreeze from 'deep-freeze';
import { userAuth } from '../../actions';
import user from './userAuth';

describe('User reducer', () => {
  it('Should store the user basic information when login or sign up', () => {
    const stateBefore = null;
    const stateAfter = {
      username: 'Apolo',
      token: 'user-token',
    };
    const action = userAuth({
      username: 'Apolo',
      token: 'user-token',
    });

    deepFreeze(action);

    expect(user(stateBefore, action)).toEqual(stateAfter);
  });

  it('Should return null when user logout', () => {
    const stateBefore = {
      username: 'Apolo',
      token: 'user-token',
    };
    const stateAfter = null;
    const action = userAuth(null);

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(user(stateBefore, action)).toEqual(stateAfter);
  });
});

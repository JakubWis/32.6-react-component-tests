import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import React from 'react';
import { shallow } from 'enzyme';

it('should update player score', () => {
  let players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Antonio',
        score: 0
    }
  ]
  const appComponent = shallow(<App />);
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');
  
  expect(Number(playersAfterUpdate[0].score)).toEqual(10);
  players = []
  appComponent.setState({ players });
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);

})

it('should delete first player', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Antonio',
        score: 0
    }
  ]
  appComponent.setState({ players });

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove(0);

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Antonio');
})

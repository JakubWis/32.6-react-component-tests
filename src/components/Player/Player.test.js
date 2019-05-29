import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders whithout crashing', () => {
    const playerNamePassed = "Ania";
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('check score', () => {
    const playerScorePassed = "2";
    const playerComponent = shallow(<Player score={playerNamePassed} />);

    const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

    expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent =  shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const plusButton = playerComponent.find('.Player__button').first();
    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
})

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent =  shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const minusButton = playerComponent.find('.Player__button').last();
    minusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
})

it('should call onPlayerRemove when X button is clicked', () => {
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent =  shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);

    const xButton = playerComponent.find('.Player__button_remove')
    xButton.simulate('click');

    expect(mockedOnPlayerRemove).toBeCalled();
})
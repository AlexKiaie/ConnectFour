import { isWinningMove, isBoardFull } from './gameUtils';

describe('end state tests', () => {
	describe('detect winning state', () => {
		it('detects winning state with 4 across', () => {
			var gameState = [
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}]
			];
			expect(isWinningMove(gameState, 0, 0)).toEqual(true);
		});
	
		it('detects winning state starting from middle of 4 pieces', () => {
			var gameState = [
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}]
			];
			expect(isWinningMove(gameState, 2, 0)).toEqual(true);
		});
	
		it('detects winning state with 4 diagonal', () => {
			var gameState = [
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: undefined}, {color: 'red'}, {color: undefined}, {color: undefined}],
			  [{color: undefined}, {color: undefined}, {color: 'red'}, {color: undefined}],
			  [{color: undefined}, {color: undefined}, {color: undefined}, {color: 'red'}]
			];
			expect(isWinningMove(gameState, 0, 0)).toEqual(true);
		});
	
		it('detects winning state with opposite diagonal', () => {
			var gameState = [
			  [{color: undefined}, {color: undefined}, {color: undefined}, {color: 'red'}],
			  [{color: undefined}, {color: undefined}, {color: 'red'}, {color: undefined}],
			  [{color: undefined}, {color: 'red'}, {color: undefined}, {color: undefined}],
			  [{color: 'red'}, {color: undefined}, {color: undefined}, {color: undefined}]
			];
			expect(isWinningMove(gameState, 0, 3)).toEqual(true);
		});
	
		it('detects winning state with 4 vertical', () => {
			var gameState = [
			  [{color: 'red'}, {color: 'red'}, {color: 'red'}, {color: 'red'}],
			  [{color: undefined}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: undefined}, {color: undefined}, {color: undefined}, {color: undefined}],
			  [{color: undefined}, {color: undefined}, {color: undefined}, {color: undefined}]
			];
			expect(isWinningMove(gameState, 0, 0)).toEqual(true);
		});
	
		it('returns false when there are not 4 in a row', () => {
			var gameState = [
				[{color: undefined}, {color: undefined}, {color: 'red'}, {color: 'red'}],
				[{color: undefined}, {color: undefined}, {color: undefined}, {color: undefined}],
				[{color: undefined}, {color: undefined}, {color: undefined}, {color: undefined}],
				[{color: undefined}, {color: undefined}, {color: undefined}, {color: undefined}]
			];
			  expect(isWinningMove(gameState, 0, 0)).toEqual(false);
		});
	});
	
	describe('detect tie game', () => {
		it('returns true if all board spots have a color assigned', () =>{
			var gameState = [
				[{color: 'sdf'}, {color: 'sdfff'}, {color: 'red'}, {color: 'red'}],
				[{color: 'asfsadf'}, {color: 'sdfhdj'}, {color: 'dfhds'}, {color: '23uyfow'}],
				[{color: 'sdf'}, {color: 'dfhh'}, {color: 'afafb'}, {color: 'abfvasd'}],
				[{color: 'sdf'}, {color: 'dfh'}, {color: 'srg'}, {color: 'avavds'}]
			];
			expect(isBoardFull(gameState)).toEqual(true);
		});

		it('returns false if one column has an empty slot in the top row', () =>{
			var gameState = [
				[{color: 'sdf'}, {color: 'sdfff'}, {color: 'red'}, {color: undefined}],
				[{color: 'asfsadf'}, {color: 'sdfhdj'}, {color: 'dfhds'}, {color: '23uyfow'}],
				[{color: 'sdf'}, {color: 'dfhh'}, {color: 'afafb'}, {color: 'abfvasd'}],
				[{color: 'sdf'}, {color: 'dfh'}, {color: 'srg'}, {color: 'avavds'}]
			];
			expect(isBoardFull(gameState)).toEqual(false);
		});
	});
});


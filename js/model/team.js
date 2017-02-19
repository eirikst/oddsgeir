	var Team = class Team {

		constructor(nameStr, nationStr) {
			this.nameStr = nameStr;
			this.nationStr = nationStr;
			this.matches = [];
		}

		addMatch(match) {
			this.matches.push(match);
		}

		addMatches(matches) {
			for(var i = 0; i < matches.length; i++) {
				this.matches.push(matches[i]);
			}
		}

		didWinMatch(nr) {
			return this.matches[nr].winner() === this;
		}

		didLoseMatch(nr) {
			if(this.matches[nr].winner() == 'draw') {
				return false;
			}
			return this.matches[nr].winner() !== this;
		}

		didDrawMatch(nr) {
			return this.matches[nr].winner() == 'draw';
		}
	}

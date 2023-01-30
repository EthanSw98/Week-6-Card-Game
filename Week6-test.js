let expect = chai.expect;

describe('finalScore', function(){
    it('should compare 2 variables', function(){
        var x = finalScore( 8, 5);
        expect(x).to.equal(`PLAYER 1 WINS.`);
    });
    
    it('should compare 2 variables', function(){
        var x = finalScore( 8, 14);
        expect(x).to.equal(`PLAYER 2 WINS.`);
    });


});


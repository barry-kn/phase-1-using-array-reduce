const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [
    { id: 1, type: 'AA', amount: 12 },
    { id: 2, type: 'AAA', amount: 7 },
    { id: 3, type: 'AA', amount: 3 },
    { id: 4, type: 'AAA', amount: 4 },
    { id: 5, type: 'AA', amount: 5 }
  ];
  
  const totalBatteries = batteries.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  
  describe('reducer', function() {
    describe('batteries', function() {
      it('should have a `totalBatteries` variable', function() {
        expect(totalBatteries).to.exist;
      });
  
      it('should have a number as a result', function() {
        expect(totalBatteries).to.be.a('number');
      });
  
      it('should have made the sum of all the assembled batteries', function() {
        expect(totalBatteries).to.eql(31);
      });
    });
  });
  
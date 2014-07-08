describe("iterators", function(){

    it("works with iterator method at low level", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        let iterator = numbers.values();
        let next = iterator.next();
        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);
    });

    it("cannot 'for in' over iterable", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        for(let i in numbers.values()) {
            sum += i;
        }
        expect(sum === 10).toBe(false);
    });

    it("can 'for of' over iterable", function(){
        let sum = 0;
        let numbers = [1,2,3,4];

        for(let n of numbers) {
            sum += n;
        }
        expect(sum).toBe(10);
    });

    it("can get an iterator from array the hard way", function(){

        let sum = 0;
        let numbers = [1,2,3,4];
        let iterator = numbers[Symbol.iterator]();

        let next = iterator.next();
        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);

    });

    it("can build your own", function(){

        class Classroom {

            constructor() {
                this.students = ["Tim", "Joy", "Sue"];
            }

            [Symbol.iterator]() {
                var index = 0;
                return {
                    next: () => {
                        if(index < this.students.length){
                            index += 1;
                            return {done: false, value: this.students[index-1]};
                        }
                        return { value: undefined, done: true };
                    }
                }
            }
        }

        let scienceClass = new Classroom();
        let result = [];
        for(let name of scienceClass){
            result.push(name);
        }
        expect(result).toEqual(["Tim", "Joy", "Sue"]);

    });
});
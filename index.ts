
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}



interface Items {
    title: string;
    rating: number;
}

function filterByRating(items: Items[]): Items[] {
    return items.filter(item => item.rating >= 4)
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}



class Vehicle {
    make: string;
    year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }
    getModel() {
        return `Model: ${this.model}`
    }
}



function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {
        return value * 2
    }
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]) {
    return products.reduce((max, product) => {
        return product.price > max.price ? product : max;
    });
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday"
    }
}



async function squareAsync(n: number): Promise<number> {
    return new Promise((resolved, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolved(n * n)
            }, 1000)
        }
        else {
            reject('Error: Negative number not allowed')
        }
    })
}

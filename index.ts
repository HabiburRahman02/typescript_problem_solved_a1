// 1
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

// console.log(formatString("Hello", false));

// 2
interface Items {
    title: string;
    rating: number;
}

function filterByRating(items: Items[]): Items[] {
   return items.filter(item => item.rating >= 4)
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));

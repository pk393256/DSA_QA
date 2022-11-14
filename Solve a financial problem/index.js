//level mid
/*
Given a list of prices of a single stock for N number of days, find stock span for each day. Stock span is defined as a number of consecutive days prior to the current day when the price of a stock was less than or equal to the price at current day.
For the first day, span is always 1. In the example we can see that for day 2 at 60, there is no day before it where the price was less than 60. Hence span is 1 again. For day 3, the price at day 2 (60) is less than 70, hence span is 2. Similarly, for day 4 and day 5. Remember days should be consecutive, that’s why the span for day 4 is 1 – even though there was a day 2 where the price was less than 65.
*/
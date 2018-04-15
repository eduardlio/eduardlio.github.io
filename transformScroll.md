# What i'm trying to do in this branch (transform-scroll)

on clicking the nav items, the dom itself transformY(- whatever is above it);

so say the order is like this with their respective heights:

1. nav 160
2. big thing 700
3. about 700
4. current 700
5. contact doesn't matter probably calc(100%- 160px); 

click on about me:
2 - 4 are wrapped in a big div wrapper. all i have to do is translateY( 160
- x&700);
add 160 to 700 times how many items are before it (which we'll call `before`). technically the above list
should look like: bigthing, about, current
so `distance = 160 + -700*(before);` and `translateY(distance+"px");`
set the `current` to 1
so now i want to go to the footer (which is behind everything and is 100%
height).
so i click contact
so 
`translateY(-(160 + x \* 700))` x is itempos - current

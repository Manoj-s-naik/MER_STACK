#
next js is built top of the react , it solve the seo problem which is not do by react.

# server side rendering




## server components cannot 

# cannot listen to browser events like click , onchange so and so
# cannot use state, useeffect, localstorage 
# 
#


## Fetching on the client 
# useState + useEffect

## caching 
 storing data somewhere that is faster to access.
# DATA SOURCE
memory file system network
to disable caching - its only work in fetch ( not in axios) => cache: 'no-store' -- to keep a data fresh.

other ways : next : {revalidate : 10} --get fresh data from server after 10 second.

### static rendering 
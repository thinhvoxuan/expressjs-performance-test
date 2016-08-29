# expressjs-performance-test
expressjs-performance-test
Test expressjs with mysql

# installation
```
brew install wrk
```

# wrk tool
script run Test
```
▶ docker-compose up -d
▶ npm run start:single
or
▶ npm run start:cluster


##### return simple json
--- Single Node ----
▶ wrk -t12 -c400 -d30s http://localhost:3000/
Running 30s test @ http://localhost:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    81.88ms   23.14ms 285.31ms   84.79%
    Req/Sec   388.75     85.17   636.00     76.85%
  139301 requests in 30.08s, 88.74MB read
  Socket errors: connect 0, read 384, write 0, timeout 0
Requests/sec:   4630.75
Transfer/sec:      2.95MB
--- 4 Node ----
Running 30s test @ http://localhost:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    50.74ms   41.21ms 683.74ms   76.45%
    Req/Sec   723.76    406.95     7.12k    88.17%
  252490 requests in 30.09s, 160.85MB read
  Socket errors: connect 0, read 10, write 0, timeout 0
Requests/sec:   8391.16
Transfer/sec:      5.35MB


##### return simple json but has cache
--- Single Node ----
▶ wrk -t12 -c400 -d30s http://localhost:3000/returnWithCache
Running 30s test @ http://localhost:3000/returnWithCache
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   210.19ms   35.36ms 324.95ms   87.39%
    Req/Sec   132.88     92.47   333.00     60.00%
  3443 requests in 30.10s, 2.19MB read
  Socket errors: connect 0, read 4353, write 42, timeout 0
Requests/sec:    114.37
Transfer/sec:     74.61KB
--- 4 Node ----
▶ wrk -t12 -c400 -d30s http://localhost:3000/returnWithCache
Running 30s test @ http://localhost:3000/returnWithCache
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   151.71ms   89.18ms 667.51ms   71.02%
    Req/Sec   230.65    114.26   606.00     66.70%
  80106 requests in 30.10s, 51.03MB read
Requests/sec:   2661.47
Transfer/sec:      1.70MB



##### return simple json after 500ms but has cache
--- Single Node ----
▶ wrk -t12 -c400 -d30s http://localhost:3000/longReturnWithCache
Running 30s test @ http://localhost:3000/longReturnWithCache
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   266.53ms   98.56ms 571.30ms   73.06%
    Req/Sec   109.20     75.05   333.00     70.71%
  5359 requests in 30.09s, 3.41MB read
  Socket errors: connect 0, read 2971, write 196, timeout 396
Requests/sec:    178.11
Transfer/sec:    116.19KB
--- 4 Node ----
▶ wrk -t12 -c400 -d30s http://localhost:3000/longReturnWithCache
Running 30s test @ http://localhost:3000/longReturnWithCache
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   164.93ms  101.65ms 636.66ms   77.76%
    Req/Sec   177.64     95.50   727.00     67.14%
  20793 requests in 30.10s, 13.25MB read
  Socket errors: connect 0, read 1519, write 0, timeout 1186
Requests/sec:    690.79
Transfer/sec:    450.63KB

```

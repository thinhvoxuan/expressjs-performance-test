# expressjs-performance-test
expressjs-performance-test
Test expressjs with mysql


script run Test
```
▶ docker-compose up -d
▶ npm run start
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

~
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

wrk -t12 -c400 -d30s http://localhost:3000/longReturnWithCache
Running 30s test @ http://localhost:3000/longReturnWithCache
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   266.53ms   98.56ms 571.30ms   73.06%
    Req/Sec   109.20     75.05   333.00     70.71%
  5359 requests in 30.09s, 3.41MB read
  Socket errors: connect 0, read 2971, write 196, timeout 396
Requests/sec:    178.11
Transfer/sec:    116.19KB

```

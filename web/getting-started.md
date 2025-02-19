# 互联网资源
## 公网
- ASN: <strong>AS151673</strong> `APNIC`  
- Subnet: 

| Type          |     CIDR           |  RIR     |
| ------------- | :-----------:      | ----:    |
| IPv6          | 2406:840:efa0::/44 | APNIC    |
| IPv6          | 2406:840:fede::/48 | APNIC    |
| IPv6          | 2a0f:7803:fc00::/40| RIPE NCC |
| IPv6          | 2a0f:7803:fd00::/40| RIPE NCC |

## DN42
- ASN: <strong>AS4242420766</strong> `DN42`  
- Subnet: 

| Type          |     CIDR            |  RIR     |
| ------------- | :-----------:       | ----:    |
| IPv4          | 172.23.199.192/27   | DN42     |
| IPv6          | fd40:d6e7:3f4d::/48 | DN42     |

# 位置

| Country       | Location            | Service                    |
| ------------- | :-----------:       | ----:                      |
| US            | Las Vegas           | Buyvm 10 Gbgps             |
| DE            | Frankfurt           | Xtom V.PS 1 Gbps           |
| DE            | Frankfurt           | PigeonIX VM 1 Gbps         |
| CN            | Hongkong            | Azure 10 Gbps              |
| CN            | Jinchang            | China Mobile/China Telecom |

# BGP 社区属性
## 内部 Community:

>(151673, <999,  0)            Community for all my node
>
>(151673, <999,  1)            Community only for this node

```
(151673,   1, *)   do not send to ibgp
(151673,   2, *)   do not send to ebgp
(151673,   3, *)   do not send to kernel
(151673,   4, *)   send to kernel but mark unreachable
(151673,   5, *)   send to kernel but mark blackhole
(151673, 101, *)   allow bgp_local_perf
(151673, 201, *)   transit routes
(151673, 202, *)   ixp rs routes
(151673, 203, *)   peer routes
(151673, 204, *)   customer routes
(151673, 209, *)   ibgp routes
```
## 信息类 Community
```
(151673, 10000, region_code)    Received from region
(151673, 10001, country_code)   Received from country
```

## 控制类 Community:
```
 Actions:
  * = 0   do not announce to target
  * = 1   prepend 1 to target
  * = 2   prepend 2 to target
  * = 4   prepend 4 to target
  * = 8   prepend 8 to target
 Action target selector:
  * = Action
  (151673, 1*00, 0)            Do action to everyone
  (151673, 1*01, asn)          Don't do action to this asn
  (151673, 1*02, asn)          Do action to this asn
  (151673, 1*10, 0)            Do action to every region
  (151673, 1*11, region_code)  Don't do action to this region
  (151673, 1*12, region_code)  Do action to this region
  (151673, 1019, 0)            Disable (asn, 1010, 0),  (asn, 1011, local_region) as default value
  (151673, 1*20, 0)            Do action to every country
  (151673, 1*21, country_code) Don't do action to this country
  (151673, 1*22, country_code) Do action to this country
  (151673, 1*30, 1)            Do action to upstreams
  (151673, 1*30, 2)            Do action to ixp rs
  (151673, 1*30, 3)            Do action to peers
  (151673, 1*30, 4)            Do action to downstreams
  (151673, 1*30, 8)            Do action to route collectors
```

# Route Propagation
![graph from he](https://bgp.he.net/graphs/as151673-ipv6.svg)


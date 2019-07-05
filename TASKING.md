# Method Definitions
#### 1. validate input integers.
```
input：
    startInteger: integer,
    endInteger: integer
output：
    isValid: boolean 
```
#### 2. build single multiply string
```
input：
    firstInteger: integer,
    secondInteger: integer
output：
    multiplyItem: String
```
### 3 build single multiply string
```
input：
    multiplyItemList: [
      [
        multiplyItem
      ],
      [
        multiplyItem,
        multiplyItem,
        …
       ]
    ]
output：
    multiplyTableString: String
```
---

# Test Cases
### AC1
- **Given**: two integer numbers `1` and `2`.
- **When**: create a multiply table
- **Then**: should return a string:
```
1*1=1
1*2=2 2*2=4
```
### AC2
- **Given**: two integer numbers `999` and `1000`.
- **When**: create a multiply table
- **Then**: should return a string:
```
999*999=998001
999*1000=999000 1000*1000=1000000
```
###AC3
- **Given**: two integer numbers `2` and `1`
- **When**: create a multiply table
- **Then**: should return `null`
###AC4
- **Given**: two integer numbers `0` and `1`
- **When**: create a multiply table
- **Then**: should return `null`
###AC5
- **Given**: two integer numbers `1000` and `1001`
- **When**: create a multiply table
- **Then**: should return `null`
## Description:

Without using system Math library functions, process a sequence of integer numbers to determine the following statistics:

### **Return Value Requirements**

Return an object containing:

\- `min`: The smallest value in the sequence  
\- `max`: The largest value in the sequence  
\- `count`: Total number of elements  
\- `avg`: The arithmetic mean of all values

```ts
{
  min: -8,
  max: 53,
  count: 6,
  avg: 18.666666666667
}
```

### **The minimun value in the sequence**

[2, 4, 21, -8, 53, 40] -> { min: -8, ...}  
[10, -5, 32, 0, 17, -12, 22] -> { min: -12, ...}  
[3, 8, 15, 21, 42, 7, 34, 4, 39] -> { min: 3, ...}

### **The maximum value in the sequence**

[2, 4, 21, -8, 53, 40] -> { max: 53, ...}  
[10, -5, 32, 0, 17, -12, 22] -> { max: 32, ...}  
[3, 8, 15, 21, 42, 7, 34, 4, 39] -> { max: 42, ...}

### **The total number of elements in the sequence**

[2, 4, 21, -8, 53, 40] -> { count: 6, ...}  
[10, -5, 32, 0, 17, -12, 22] -> { count: 7, ...}  
[3, 8, 15, 21, 42, 7, 34, 4, 39] -> { count: 9, ...}

### **The average of all values in the sequence**

[2, 4, 21, -8, 53, 40] -> { avg: 18.666666666667, ...}  
[10, -5, 32, 0, 17, -12, 22] -> { avg: 9.142857142857142, ...}  
[3, 8, 15, 21, 42, 7, 34, 4, 39] -> { avg: 19.22222222222222, ...}

### **Ignore sparse holes in the sequence**

Example 1: [2, 4, ,21, -8, 53, 40]

```ts
// output
{
  min: -8,
  max: 53,
  count: 6,
  avg: 18.666666666667
}
```

Example 2: [10, -5, 32, 0, 17, -12, 22, , ,]

```ts
// output
{
  min: -12,
  max: 32,
  count: 7,
  avg: 9.142857142857142
}
```

Example 3: [3, 8, , 15, 21, , 42, 7, , 34, 4, 39]

```ts
// output
{
  min: 3,
  max: 42,
  count: 9,
  avg: 19.22222222222222
}
```

### **Throw error if sequence is empty**

[] -> Error: "Cannot calculate stats for empty array"

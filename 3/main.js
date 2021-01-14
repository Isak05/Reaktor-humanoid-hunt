var input = 
`30,69 L,L,D,D,R,R,R,R,U,U,U,R,R,D,D,R,R,R,U,U,R,R,D,D,R,R,U,R,D,R,R,U,U,R,R,D,D,R,R,R,U,U,R,R,D,D,R,R,U,U,R,R,R,R,R,U,U,U,L,L,L,D,L,U,U,U,R,U,R,U,U,R,R,R,D,D,L,D,R,R,D,D,D,D,D,D,D,L,L,L,L,L,D,R,R,R,D,R,D,D,D,D,D,D,D,D,D,D,D,D,D,L,D,D,D,D,R,D,D,D,L,D,R,D,L,D,R,R,D,L,L,L,L,U,L,L,L,U,L,D,L,L,L,U,L,D,L,L,U,U,L,U,R,R,R,R,R,R,R,R,R,R,R,D,L,L,L,L,L,L,L,L,L,D
20,45 R,D,L,L,L,L,L,U,L,D,L,U,U,U,L,U,U,U,U,U,L,U,R,U,L,L,U,L,L,D,L,U,L,L,D,D,L,D,L,U,U,U,L,L,D,D,D,D,D,D,D,D,D,R,D,R,D,L,D,R,D,R,D,D,D,L,D,R,D,D,L,L,D,D,D,L,D,R,R,D,D,D,D,D,R,D,R,U,U,U,R,U,L,U,U,R,U,U,R,R,U,R,R,R,R,R,D,R,D,D,D,R,D,L,D,D,R,R,R,R,D,R,U,R,D,D,R,R,R,U,U,U,R,R,R,U,R,R,R,D,R,U,R,D,R,R,U,R,R,R,R,D,R,R,R,R,R,R,R,U,R,R,D,R,R,R,U,R,D,R,U,R,D,R,U,R,D
20,60 U,U,L,U,R,R,U,R,D,D,R,D,L,D,R,R,R,R,U,R,R,R,R,R,R,R,D
85,101 L,L,U,U,R,R,R,R,D,R,U,R,R,D,R,R,U,R,R,R,D,R,U,R,R,R,D,R,U,R,R,R,R,R,R,R,U,R,R,U,U,L,U,L,U,U,L,U,L,D,L,D,L,L,D,L,U,L,D,L,L,U,L,L,L,U,U,R,R,R,U,R,D,R,R,U,U,U,R,U,R,U,L,U,L,L,L,L,L,D,D,D,R,R,U,R,D,D,L,L,L,L,L,L,L,D,D,L,D,R,D,L,L,D,L,U,U,U,U,U,U,U,U,U,R,R,D,R,U,U,U,L,U,U,R,R,R,R,R,R,R,U,R,U,U,R,R,R,D,D,D,R,R,U,U,U,U,U,U,U,U,U,L,L,U,L,D,D,D,D,R,D,L,L,L,L,L,D,L,D,L,U,L,D,D,L,L,U,L,D,L,L,U,L,D,D,L,D,R,R,D,D,L,L,D,D,L,L,U,L,U,R,U,L,L,U,L,U,L,D,D,L,D,D,D,L,L,U,L,U,R,U,L,L,U,U,L,L,L,L,L,D,L,L,D,L,L,U,U,U,U,U,L,U,R,R,R,R,U,U,L,U,R,U,L,L,U,L,L,U,L,L,U,U,R,R,R,U,U,R,R,D,D,R,D,D,R,U,U,U,R,U,U,U,U,R,R,R,D,R,D,R,D,R,D,R,U,U,U,U,L,U,L,U,U,R,R,U,U,U,U,R,R,R,U,U,L,L,L,U,U,R,U,L,U,L,L,U,L,L,L,D,D,R,D,L,D,D,R,R,D,D,L,D,D,L,D,D,D,R,U,R,D,D,D,R,D,R,D
123,57 R,R,U,U,U,U,U,U,U,L,U,R,U,U,U,U,U,U,U,U,U,L,L,U,U,R,R,U,U,U,L,L,U,L,L,U,L,L,D,L,U,U,L,L,D,L,U,U,L,L,L,D,L,D,L,L,U,L,U,R,U,R,R,R,R,R,R,R,R,R,R,R,D,R,R,R,D,R,R,U,U,R,R,X
63,109 D,D,D,D,D,D,D,D,D,R,D,L,D,R,D,R,R,U,U,U,U,R,R,U,U,R,R,D,R,U,R,R,D,D,R,D,L,D,D,L,D,R,D,R,R,D,R,R,U,U,R,R,U,R,U,R,D,D,R,R,D,D,D,D,R,R,U,U,U,U,U,U,L,U,U,L,U,R,U,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,D,R,R,U,R,U,U,L,U,U,R,R,U,U,L,U,R,U,U,U,L,U,U,L,L,L,U,U,U,U,R,R,D,D,R,R,U,U,U,U,L,U,U,U,L,L,U,U,U,L,L,D,L,L,L,L,L,L,U,L,U,U,U,R,U,L,U,R,R,R,D,R,R,R,U,R,R,R,D,D,D,L,L,L,L,L,D,L,U,L,D,L,U
58,20 U,L,U,L,U,U,L,U,U,U,R,R,D,R,R,R,D,D,D,L,D,R,D,D,R,D,L,D,R,R,D,D,R,D,D,D,D,R,D,L,D,R,D,L,D,D,D,R,R,D,D,D,R,R,D,D,L,D,D,D,L,L,L,U,U,R,U,L,U,U,U,L,D,D,D,D,D,D,D,R,R,R,R,R,R,U,R,U,L,U,R,R,R,D,D,R,R,R,U,R,U,L,L,U,U,R,U,R,R,R,U,R,D,R,R,U,R,U,U,L,L,L,L,U,L,L,U,L,L,U,L,L,D,L,L,U,L,D,D,D,R,D,L,L,U,U,L,U,U,U,R,R,R,R,R,R,R,R,R,R,R,D,R,R,R,R,R,R,D,R,D,D,R,R,R,U,U,U,U,L,L,U,U,L,L,U,U,U,R,R,D,R,U,R,R,R,R,D,R,D,R,D,D,D,L,L,L,D,D,R,D,L,D,R,R,R,U,U,R,R,D,D,R,R,R,U,R,R,R,R,U,U,L,L,L,L,L,U,L,L,U,U,U,U,U,L,U,L,D,L,U,L,L,L,L,L,L,L,L,L,D,D,D,D,D,R,D,L,L,L,L,L,U,X
61,126 U,U,R,R,D,R,U,U,R,R,D,D,R,R,R,R,U,R,R,R,D,R,R,R,R,R,R,U,U,L,U,R,R,R,R,D,D,D,D,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,U,R,R,R,R,U,U,R,R,U,U,U,U,L,L,U,L,D,L,D,L,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,D,D
42,7 U,L,U,R,U,L,L,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,D,L,U,L,L,L,D,L,U,L,L,D,D,L,L,L,L,L,D,L,D,L,D,R,R,D,R,R,D,R,U,R,U,R,D,D,R,R,U,R,U,R,R,U,R,U,R,D,D,D,D,L,L,D,L,U,L,D,L,L,L,L,L,L,L,L,L,L,U,L,L,L,U,L,L,L,D,L,U,U,U,L,U,U,U,U,S
87,3 U,R,D,R,U,R,R,D,D,D,D,R,D,R,D,D,L,L,L,D,L,D,L,U,U,L,U,R,U,U,L,U,L,L,L,U,U,R,U,L,L,L,L,L,L,L,D,L,D,D,R,D,L,D,R,D,D,R,R,U,R,R,U,U,L,U,L,D,D,R
110,49 L,U,U,L,L,D,D,L,D,L,L,U,L,U,L,U,R,U,R,R,D,R,U,U,R,R,R,R,R,D,D,R,D,D,R,R,D,R,R,U,U,U,L,U,L,D,L,U,U,R,R,R,R,D,D,D,D,D,D,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,U,L,L,U,L,D,L,U,U,U,L,U,R,R,R,D,R,U,U,R,R,R,R,R,U,X
91,68 U,L,D,L,L,U,U,L,L,L,D,D,L,L,U,U,U,U,R,U,U,R,U,U,U,L,U,R,U,U,U,U,U,L,L,U,U,U,L,U,R,U,U,U,L,L,D,L,D,D,L,L,U,L,L,U,L,U,R,R,R,U,R,D,D,L,L
13,89 R,D,D,R,R,D,D,L,D,D,D,L,L,U,U,U,L,U,U,U,U,U,U,R,R,R,R,D,D,R,R,R,D,D,D,L,D,D,R,D,R,R,U,R,R,U,U,R,U,U,L,U,U,L,L,D,D,D,D,R,U,U,U
121,116 D,D,L,U,U
31,26 L,D,D,D,R,R,R,R,R,U,R,R,D,R,R,U,R,D,R,U,U,R,R,R,D,R,R,R,R,R,U,U,U,U,U,U,R,R,D,D,D,D,D,D,D,D,L,L,L,L,L,L,L,L,U,L,D,L,L,L,L,L,L,L,L,L,D,L,D,D,L,D,R,D,L,L,L,D,D,D,L,D,L,U,L,U,L,U,R,R,U,U,U,R,R,U,U,R,R,D,L,D,D,L,L,D,D,D,L
26,84 R,R,R,U,U,L,L,U,L,D,L,U,U,U,R,R,R,U,U,U,U,U,R,U,R,D,D,R,D,R,U,U,U,U,R,U,U,U
42,111 D,D,L,L,L,D,D,L,D,L,U,L,U,U,L,L,D,D,D,D,D,R,R,R,R,R,R,U,R,R,D,D,D,D,D,L,L,U,U,L,L,L,L,L,D,D,L,D,L,D,R,R,D,R,R,R,R,U,R,D,R,U,R,R,D,R,R,U,R,D,R,U,R,R,R,R,U,U,R,R,R,R,D,D,R,R,R,U,U,L,U,R,R,R,R,D,R,R,R,R,R,R,R,R,R,U,U,L,U,R,U,R,U,L,L,U
74,104 R,U,U,U,U,U,R,R,R,D,D,R,D,D,D,L,L,U,U,U,L,D,D,D,D,R,R,R,R,U,U,U,U,U,U,U,L,L,L,L,L,L,L,D,D,L,L,L,U,L,L,D,L,U,L,D,D,D,L,D,D,L,L,D,D,D,D,L,D,D,D,D,D,D,D,D,D,D,D,D,D,R
85,49 D,D,D,L,U,U,U,U,R,R,U,R,R,D,D,D,R,R,R,R,U,R,U,L,L,L,U,U,R,R,R,R,R,D,D,D,D,R,D,L,L,L,L,L,L,L,L,L,U,U,U
104,62 D,D,L,L,D,D,L,L,D,L,D,R,R,R,R,R,R,U,U,L,L,D,L,L
88,21 U,R,U,R,D,R,R,R,U,U,L,U,U,L,L,U,L,L,D,D,L,L,D,L,D,D,R,D,L,L,L,U,U,U,U,U,R,U,L,U,U,R,U,R,D,R,D,D,R,U,U,R,R,R,R,R,R,R,R,U,U,R,U,L,L,L,D,L,L,L
20,123 L,L,L,U,U,L,U,R,U,U,R,U,L,L,L,D,L,D,L,U,L,U,L,L,L,L,D,L,D,L,L,U,L,L,U,L,U,U,R,R,R,D,R,U,U,U,L,U,L,L,U,L,D,D,L,L,X
37,49 D,L,L,U,U,L,L,D,L,L,D,D,L,L,U,U,U,U,U,L,U,U,R,R,U,U,U,L,L,D,L,U,L,L,U,L,L,D,L,U,L,L,U,U,R,R,R,U,U,L,L,L,L,L,D,L,L,U,L,D,D,D,R,R,R,D,D,L,L,D,D,R,R,R,R,R,R,R,D,R,D,D,L,L,D,L,L,L,L,L,L,L,L,L,U,L,L,L,U,L,U,L,U,R,R,R,U,U,U,L,L,D,L,L,L,L,U,L,D,D,D,R,R,D,D,D,R,D,L,L,U,U
43,19 U,U,L,L,L,L,D,D,R,D,L,D,R,R,R,R,R,R,R,R,U,R,U,R,R,D,R,U,U,U,L,U,R,U,U,L,U,L,D,L,L,D,D,L,L,U,U,L,U,U,R,R,R,U,R,R,U,U,R,R,U,U,U,L,L,L,L,U,L,L,D,L,U,U,U,R,U,R,D,R,U,R,D,R,D,R,U,U,R,R,D,D,D,D,D,D,D,D,D,L,D,R,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D
78,41 D,L,U,U,R,U,L,L,L,U,R,R,R,R,R,R,D,D,L,D,D,R,R,D,L,L,L,L,L,L,L,U
71,48 R,R,U,U,L,L,L,L,D,D,D,L,L,L,L,U,L,U,R,U,R,R,D,L,D,R,R,U,U,U,R,R,R,R,R,R,R,R,R
19,83 U,R,U,U,U,L,L,L,D,L,D,R,D,D,D,L,L,L,L,L,U,L,U,L,U,U,U,R,R,D,R,R,U,U,R,R,R,R,R,R,R,R,D,R,D,D,D,D,L,D,L,D,L,L,U,R,U,R,U,U,U,U
33,112 L,D,L,L,U,L,L,L,L,L,L,D,L,L,U,L,D,D,R,R,R,R,R,R,R,R,R,R,R,R,D,D,D,D,D,D,D,D,L,L,D,D,L,D,R,R,R,R,D,R,R,R,R,R,R,R,R,U
64,8 R,U,R,R,R,U,R,R,D,R,U,U,R,R,D,D,D,R,D,L,L,L,L,L,L,L,D,L,L,L,L,L,L,U,U,U,L,L,L,L,D,L,D,L,D,R,R,D,R,R,D,R,R,R,D,R,D,R,D,L,L,D,D,D,R,R,U,R,D,D,D,L,D,D,D,D,D,D,D,R,D,D,D,D,D,D,L,U
47,18 L,L,D,L,U,U,U,L,L,U,U,L,L,D,L,U,U,U,R,R,U,U,L,U,R,R,R,D,R,R,U,U,R,R,D,D,R,U,U,R,U,R,D
27,124 U,L,U,R,R,R,D,D,D,D,L,L,L,L,U,L,U,U,L,L,D,D,L,D,R,D,X
125,86 D,D,L,L,U,L,L,D,D,D,L,D,D,R,D,D,D,D,R,D,D,D,D,D,D,L,D,D,R,D,D,D,D,D,D,D,D,L,D,D,D,R,D,D,D,D,D,D,D,D,D,L,D,L,U
103,32 R,D,R,D,R,U,U,U,R,U,L,L,L,L,L,L,L,L,L,L
103,56 U,R,U,L,U,R,R,R,D,D,R,R,R,D,R,U,R,U,R,D,D,D,D,R,R,D,R,D,D,D,L,L,U,L,U,L,L,U,L,L,L,D,L,L,L,L,U,U,R,R,U,R,R,R,R,R,D,L,L,L,L,D,L,L
41,48 D,L,D,R,D,L,L,L,U,U,U,L,U,U,L,U,L,L,D,L,U,L,D,L,D,D,R
89,27 D,L,U,L,D,D,L,U,U,L,L,U
100,20 R,U,R,U,R,U,R,U,R,U,F
121,47 L,D,D,R,R,D,D,D,L,L,D,D,L,L,L,L,D,D,L,L,U,U,L,U,R,R,R,R,R,R,U,U,R,U,L,U,U,U,U,U,R,U,U,R,U,L,U,R,U,U,L,U,R,U,U,L,U,R,R,D,R,D,R,U
2,53 U,U,U,U,U,U,U,U,L,U,U,U,U,U,U,U,U,U,U,U,R,R,R,R,D,D
34,92 L,L,D,L,D,R,R,R,R,R,R,D,R,R,U,U,U,R,R,R,U,U,L,L,U,L,U,R,U,R,R,U,U,U,U,L,U,L,L,L,L,L,L,L,L,D,L,U,U,U,U,L,L,U,U,R,R,R,U,U,U,U
121,59 U,L,L,D,D,D,D,R,R,D,D,L,L,L,D,D,D,L,L,D,L,U,L,L,U,L,D,D,L,L,L,U,U,R,U,U,R,U,L,U,L,U,R,R,D,R,D,D,R,R,R,R,D,L,L,L,L,L,D,D,L
117,20 D,L,L,L,U,L,L,L,D,L,L,L,U,U,R,U,L,L,L,D,D,D,L,L,U,U,L,D,D,L,L,L,L,U,U,L,U,R,U,L,L,L,L,D,L,U,U,U,R,R,R,R,R,R,U,R,U,U,R,R,R,R,F
102,15 D,L,D,L,U,L,L,L,L,L
48,51 R,U,U,R,U,R,U,L,L,U,L,D,L,L,L,D,D,L,D,L,U,U,U,U,L,L,L,L,U,U,U,U,R,R,U,R,R,D,R,U,R,R,D,R,U,R,D,R,U,R,R,D,D,R,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,D,L,D,L,U,L,D,L,D,L,U,U,U,U,U,L,U,R,U,L,L,D,D,D,D,L,L,L,L,U,L,U,L,U,U,U,R,R,U,L,L,L,L,L,L,D,L,L,L,L,L,L,L,L,U,L,L,L,L,L,L
9,2 D,R,U,R,R,R,R,R,R,D,L,L,L,L,L,D,L,L,L,D,D,L,L,L,U,U,U,R,U,L,L,L,L,S
33,86 D,L,U,U,R,R,R,D,D,R,R,U,R,U,L,U,R,R,R,D,D,R,U,U
6,111 U,U,L,L,L,L,D,L,U,U,L,X
64,12 D,R,U,U,L,L,L,L,L,U,L,U,L,D
8,39 L,U,R,R,R,U,U
114,95 L,D,D,L,L,D,D,D,L,L,L,L,L,L,L,L,L,L,D,L,L,L,U,L,D,L,L,L,U,L,D,L,L,L,L,U
115,96 U,R,D,R,D,R,U,U,R,D,D,D,R,D,D
66,3 U,R,D,R,R,R,R,R,R,U,R,R,D,D,D,D,D,D,D,R,R,U
17,97 U,R,D,D,D,D,D,D,D,D,L,L,U,U,U,L,U,L,U,L,U,R,R,U,L,L,L,U,U,U
74,57 U,U,U,U,U,U,L,L,U,L,D,L,L,L,L,L,L,L,L,U,U,U,U,U,R,U,L,L,D,D,D,D,D,D,D,R,R,R,R,R,R,R,R,R,R,R,D,D,D,D,D,D,R,D,D,D,D,D,R,R
2,83 D,R,U,U,U,L,U,U,R,R,R,R,D,D,D,R,D,L,D,L,D,R,R,R,R,U,R,U,L,U,U,U,U,L,U,R,R,R,R,R,D
69,103 R,U,R,R,D,D,R,D,L,L,L,L,L,L,U,U,U,U,R,R,U
56,6 U,R,U,L,L,U,U,R,R,R,R,D,D,D,R,R,R,U,U,U,R,R,D,D,D,R,R,R,R,R,R,U,R,R,R,R,D,D,D
64,65 L,D,D,R,R,R,U,U,R,R,U,R,R,D,R,U,R,D,D,D,L,D
11,57 D,D,D,L,D,D,D,D,L,L,U,U,U,U,U,U,R,U,L
9,112 L,U,U,R,R,U,R,D,D,D,D,R,R,U,R,D,R,U,U,U,L,L,U,U,R,R,R,R,D,D,R,D,L,D,D,R,R,D,L,L,L,L,L,L,L,L,L,L,L,L,U,U,L
15,123 L,L,L,U,L,U,L,L,D,D,L,L,U,L,D,L,U,U,L,L,L,D,D,R,D,L,L,L,X
34,51 L,L,U,R,R,U
28,91 L,U,U,R,R,R,D,R,R,U,R,D,R,R,U,R,D,R,U,U,R,U,R,U,U
89,65 R,R,U,U,L,L,L,L,D,L,U,L,D,D,L,D,D
75,68 R,R,U,L,L,U,U,L,D,D,D,D,L
104,13 R,F
53,83 L,U,L,L,D,L,L,L,U,L,D,L,U,L,D,L,U,L,U,L,L,L,L,L,L,L,L,L,U,U,U,L,L
76,1 D,R,U,R,R,R,R,R,R,R,R,R,D,D,D,R,R,R,D,D,D,R,D,R,U
14,104 L,D,R,D,L,D,R,R,R,R,R,U,U,L,L
98,63 R,D,R,U,R,R,U,R,U,R,R,D,D,D,D,L,L
16,55 R,D,D,D,D,D,R,R,U
87,79 L,D,L,U,U,L,U,R,R,R,R,R,D,R,R,R,R,R,D
111,17 U,U,F
74,84 U,R,D,D,D,D,D,R,R,U,U,U,U
38,122 L,D,R,R,U,U,L,L,L,D,D,D,R,R
104,90 R,U,U,U,U,L,L,U,L,L,L,L,L,L,L,L,D,D,D,L,L,L,D,D,D,L,D,D
122,17 U,U,F
103,92 U,U,U,R,U,U
36,25 L,L,L,D,D,L,D,R,R,U,R,R,R,R,U,U,R,R,R,R,R,R,R,R,D,R,U,U,U,U,R,U,R,R,R
99,9 R,U,R,R,U,U,R,R,R,F
1,69 R,D,D,D,D,D,D,D,D,D,R,R,R,R,R,D,D,D,R,D,D,D,L
83,110 U,U,U,R,R,D,D,D,R,R,R,D,R,R,R,U,R,R,R,R,R,R,D,R,R,R,U,R,R,D,R,R,U,R,R,D,R,U,R,D,R,R,R,R,R,U,R,D,R,R,U,R,U,U,U,R,U,U,L,U,R,R,D,D,D,D,D,D,R
120,66 D,D,R,R,U,U,R,R,R,D,D,L,D,R,R,R,X
126,61 L,U,U,L,L,D,D,D,D,D,R,R,U,R,D,D,D,D,D,R,X
114,34 L,L,L,L,L,L,L,U,U
65,83 L,L,U,U,R,U,R,U,L,U,L,U,U,R,R,U,R,R,U,R,D,R,U
123,18 L,D,R,D,R,R,D,D,L,L,L,L,U,L,U,L,U,U,U,U,U,F
55,83 U,R,R,D,R,U,U,U,U,U,U,U,U,U,U
1,54 R,D,D,L,D,D,D,R,D,D,D,D,D,D,D,D,D,L,L,X
56,25 R,R,U,U,U,L,L,L,D,L,U,U,U,R,R,U,L,U,U,L,U,U,U,U,U,R,U,R,D,R,R,D,R,R,R,D,D,D,D,D,D,R,D,D,R,D,D
98,7 U,U,R,U,R,D,D,D,R,U,U,U,R,R,R,R,F
110,95 R,U,L,L,U,U,L,L,U,L,L,L,D
84,103 D,L,D,R,R,D,R,U,U,U,U,U,U,L,L
44,1 D,L,L,L,D,R,R,D,D,D,D,D,L,L,L,L,U,U,U,U,U,L,L,L,L,L,L,L,L,L,L,L,L,L,L,D,L,L,L,L,L,D,L,L,D,L,L,L,L,L,D,R,R
1,2 R,S
48,122 L,L,L,L,D,L,U,U,U,U,U,U,U,L,U,L,L,D,L,D,L,L,L,U,L,U,U
93,63 R,D,R,D,R,D,R,U,U,U,U,L,L,L,L,L,D,D,D,D,R,D,R,D,L,L,D,L,L,L,L,L,U,L,U,R
114,18 L,U,U,U,F
63,102 U,U,R,U,L,U,R,R,R,R,R,R,R,R,D,R,U
78,53 D,D,D,D,D,D,L,D,R,R,U,U,U,U,R,R,R
118,56 R,R,R,R,U,R,U,L,L,U,R,R,U,U,U,U,U,U,U,U,L,U,R,U,U,U,R,D,D,D,D,D,D,D
71,38 U,U,U,U,R,R,D,R,R,U,R,D,R,R,R,D
97,12 R,U,R,D,D,R,U,U,R,R,U,R,R,R,F
104,15
59,47 U,L,D,L,U,L,L,L,D,D,R,D,L,L,D,D,L,L,U,U,R,U,U,U,L,L,U,L,L,L,D,L,L,L,D,D
53,126 U,U,L,U,R,R,D,D,R,R,R,R,R,U,U,R,R,R,R
117,18 U,U,U,F
21,122 D,D,L,L,L,L,L,U,U,L,L,U,L,L,U,L,U,L,L,D,L,L,D,L,U,L,L,L,L,U,U,L,U,U,U,U,R,R,R,U,L
29,25 L,D,D,D,D,D,D,D,L,U,U,U,U,U,U,U,U,R,R,R,D,R,R,D
25,95 R,U,R,D,R,U,R,U,U,L,L,L,U,U,U,U,L,L,D`;
input = input.split("\n");

var c = document.createElement("canvas");
c.width = window.innerHeight * 0.75;
c.height = c.width;
document.body.appendChild(c);
var ctx = c.getContext("2d");

var output = document.createElement("p");
document.body.appendChild(output);

var tiles = {
	NONE: 0,
	WALL: 1,
	START: 2,
	FINISH: 3
};

var startPoint = {x: 0, y: 0};
var endPoints = [];

var grid = [];
for(var i = 0; i < 128; i++) {
	grid.push([]);
	for(var j = 0; j < 128; j++) {
		grid[i].push(tiles.WALL);
	}
}

for(var i = 0; i < input.length; i++) {
	var index = input[i].search(",");
	var x = parseInt(input[i].substr(0, index));
	var y = parseInt(input[i].substr(index + 1, input[i].search(" ") - index));
	
	index = input[i].search(" ") + 1;
	while(index < input[i].length) {
		grid[x][y] = tiles.NONE;
		switch(input[i].substr(index, 1)) {
		case "U":
			y--;
			break;
		case "D":
			y++;
			break;
		case "L":
			x--;
			break;
		case "R":
			x++;
			break;
		case "X":
			grid[x][y] = tiles.WALL;
			break;
		case "S":
			grid[x][y] = tiles.START;
			startPoint.x = x;
			startPoint.y = y;
			break;
		case "F":
			grid[x][y] = tiles.FINISH;
			endPoints.push({x, y});
			break;
		}
		index += 2;
	}
}

var pf = new pathfinder(startPoint, endPoints, grid);
var pathfindingSpeed = 25

var loop = setInterval(update, 1000 / 20);
function update() {
	var updateOutput = !pf.finished;
	
	for(var i = 0; i < pathfindingSpeed; i++) {
		pf.update();
	}
	
	if(updateOutput) {
		output.innerHTML = "Route: " + pf.path;
	}
	
	const tileWidth = c.width / grid.length;
	const tileHeight = c.height / grid.length;
	
	for(var i = 0; i < grid.length; i++) {
		for(var j = 0; j < grid[i].length; j++) {
			switch(grid[i][j]) {
			case tiles.NONE:
				ctx.fillStyle = "rgb(225, 175, 175)";
				break;
			case tiles.WALL:
				ctx.fillStyle = "rgb(100, 50, 50)";
				break;
			case tiles.START:
				ctx.fillStyle = "rgb(100, 100, 255)";
				break;
			case tiles.FINISH:
				ctx.fillStyle = "rgb(100, 255, 100)";
				break;
			}
			ctx.fillRect(
				i / grid.length * c.width,
				j / grid.length * c.height,
				tileWidth + 1,
				tileHeight + 1
			);
		}
	}
	
	ctx.beginPath();
	var x = startPoint.x;
	var y = startPoint.y;
	ctx.lineTo((x + 0.5) * tileWidth, (y + 0.5) * tileHeight);
	for(var i = 0; i < pf.path.length; i++) {
		switch(pf.path[i]) {
		case "U":
			y--;
			break;
		case "R":
			x++;
			break;
		case "D":
			y++;
			break;
		case "L":
			x--;
			break;
		}
		ctx.lineTo((x + 0.5) * tileWidth, (y + 0.5) * tileHeight);
	}
	ctx.strokeStyle = "rgb(255, 50, 50)";
	ctx.lineWidth = 2;
	ctx.stroke();
}

function pathfinder(start, ends, grid) {
	this.vec2 = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	this.openList = [];
	this.start = start;
	this.ends = ends;
	this.current = this.start;
	this.openList.push(start);
	this.finished = false;
	
	this.dirs = [
		{x: 0, y: -1},
		{x: 1, y: 0},
		{x: 0, y: 1},
		{x: -1, y: 0}
	];
	this.path = "";
	this.grid = [];
	for(var i = 0; i < grid.length; i++) {
		this.grid.push([]);
		for(var j = 0; j < grid[i].length; j++) {
			this.grid[i].push({
				open: true,
				parent: new this.vec2(-1, -1),
				g: -1,
				h: -1,
				f: -1,
				onOpenList: false,
				state: grid[i][j]
			});
		}
	}
	
	this.update = function() {
		if(!this.finished) {
			for(var i = 0; i < 4; i++) {
				var offX = this.dirs[i].x;
				var offY = this.dirs[i].y;
				
				if(this.grid[this.current.x][this.current.y].state == 3) {
					this.finished = true;
					break;
				}
				if(this.grid[this.current.x + offX][this.current.y + offY].state != 1 && 
					this.grid[this.current.x + offX][this.current.y + offY].open == true
				) {
					if(!this.grid[this.current.x + offX][this.current.y + offY].onOpenList) {
						this.openList.push(new this.vec2(this.current.x + offX, this.current.y + offY));
					}
					this.grid[this.current.x + offX][this.current.y + offY].onOpenList = true;
					var g = this.grid[this.current.x][this.current.y].g + Math.sqrt(Math.abs(i - 1) + Math.abs(j - 1));
						
					var h = Infinity; 
					for(var j = 0; j < ends.length; j++) {
						var dist = Math.sqrt(
							Math.abs(this.current.x + offX - ends[j].x) ** 2 + 
							Math.abs(this.current.y + offY - ends[j].y) ** 2
						);
						if(dist < h) {
							h = dist;
						}
					}
						
					var f = g + h;
					if(this.grid[this.current.x + offX][this.current.y + offY].f == -1 || 
					   this.grid[this.current.x + offX][this.current.y + offY].f > f
					) {
						this.grid[this.current.x + offX][this.current.y + offY].g = g;
						this.grid[this.current.x + offX][this.current.y + offY].h = h;
						this.grid[this.current.x + offX][this.current.y + offY].f = f;
						this.grid[this.current.x + offX][this.current.y + offY].parent = new this.vec2(this.current.x, this.current.y);
					}
				}
			}
		}
		
		if(!this.finished) {
			var lowVal = -1;
			var lowPos = this.vec2(-1, -1);
			var lowId = -1;
			for(var i = 0; i < this.openList.length; i++) {
				if((lowVal > this.grid[this.openList[i].x][this.openList[i].y].f || lowVal == -1) && 
					this.grid[this.openList[i].x][this.openList[i].y].f != -1) {
					lowVal = this.grid[this.openList[i].x][this.openList[i].y].f;
					lowPos = this.openList[i];
					lowId = i;
				}
			}
			this.openList.splice(lowId, 1);
			this.current = lowPos;
			this.grid[this.current.x][this.current.y].open = false;
		}
		
		var done = false;
		var x = this.current.x;
		var y = this.current.y;
		this.path = "";
		while(!done) {
			var parent = this.grid[x][y].parent;
			
			if(parent.x < x) this.path = "R" + this.path;
			if(parent.x > x) this.path = "L" + this.path;
			if(parent.y < y) this.path = "D" + this.path;
			if(parent.y > y) this.path = "U" + this.path;
			
			var tempX = parent.x;
			y = parent.y;
			x = tempX;
			if(this.start.x == x && this.start.y == y) {
				done = true;
			}
		}
	}
}
// Alhamdulillah 

myString = `
10830191	52
10830223	78
10830237	171
10814356	206
10869394	76
10815131	121
10893781	123
10893798	115
10893801	106
10893804	21
10893807	116
10896720	11
10830167	188
10830230	75
10896688	187
10893988	89
10896679	157
10896680	175
10830197	5
10814368	67
10869350	206
10814359	150
10830166	174
10830176	135
10830225	73
10814388	93
10814409	149
10814370	184
10893810	104
10830232	86
10830172	39
10830219	118
10830239	37
10830241	41
10830229	136
10830235	183
10893509	55
10868964	14
10868995	126
10814376	95
10893803	20
10893808	110
10893812	23
10893806	181
10893814	26
10814367	198
10830168	182
10830185	4
10830233	94
10830238	2
10830240	45
10830207	111
10830209	112
10814379	47
10869491	48
10814391	49
10814402	167
10814423	179
10815133	27
10830214	51
10830213	124
10830164	180
10830174	40
10830206	34
10893799	2
10893809	108
10893541	56
10893995	44
10893996	141
10893987	151
10896709	9
10814363	156
10868979	15
10868996	132
10868803	59
10868830	170
10893784	122
10893802	103
10893811	25
10814105	158
10868825	61
10869021	164
10893787	120
10893800	105
10893805	1
10896681	169
10831104	205
10896723	3
10896712	6
10896693	8
10869396	71
10830204	32
10830221	77
10830231	90
10893517	57
10893512	58
10868985	17
10868989	19
10893994	99
10896677	163
10896694	22
10814362	155
10830186	54
10830201	109
10830182	42
10830195	30
10830228	63
10869011	134
10869348	66
10814399	161
10814425	53
10893813	102
10868813	165
10869026	138
10896706	7
10896697	10
10830180	29
10896724	193
10868973	62
10868960	13
10868983	16
10868988	18
10920219	190
10814694	191
10868804	60
10814378	186
10815103	210
10815099	12
`

sortedArray = myString.split("\n")
sortedArray.pop()
sortedArray.shift()

myMap = {}



for(entry of sortedArray) {
    someList =  entry.split("\t")

    firstInteger = parseInt(someList[0])
    secondInteger = parseInt(someList[1])
    

    myMap[secondInteger] = firstInteger
    
}

console.log(myMap)



newSortedList =  []

for(const [key, value] of Object.entries(myMap)){
    newSortedList.push([parseInt(key), value])
}

console.log(newSortedList)


// Used this code to sort and filter lots given in 
// e-auksion.uz website

// lots was given excel file, and needed lots get out
// and given to myString 
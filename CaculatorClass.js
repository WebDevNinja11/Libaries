class Caculator{
	constructor(){

	}
Divide(...values) {
    let value1 = values[0];
    let finishedvalue;
    for (let i = 1; i < values.length; i++) {  
        value1 = value1 / values[i];
        finishedvalue = value1;
    }
    return finishedvalue;
}

Multiply(...values) {
    let value1 = values[0];
    let finishedvalue;
    for (let i = 1; i < values.length; i++) {  
        value1 = value1 * values[i];
        finishedvalue = value1;
    }
    return finishedvalue;
}

Add(...values2) {
    let value1 = values2[0];
    let finishedvalue;
    for (let i = 1; i < values2.length; i++) {  
        value1 = value1 + values2[i];
        finishedvalue = value1;
    }
    return finishedvalue;
}

Subtract(...values) {
    let value1 = values[0];
    let finishedvalue;
    for (let i = 1; i < values.length; i++) {  
        value1 = value1 - values[i];
        finishedvalue = value1;
    }
    return finishedvalue;
}

}





function computerState(P1, P2, wins) {
    let point = {
        0: 0,
        1: 15,
        2: 30,
        3: 40,
        4: "A"
    }
    let p1count = 0;
    let p2count = 0;
    let point1 = ""
    let point2 = ""
    if (wins.length == 0) {
        point1 = point[p1count];
        point2 = point[p2count];
    }
    for (let i = 0; i < wins.length; i++) {

        if ((point1 == 40) && (point2 == 40)) {
            if (wins[i] == P1) {
                if (wins[i] == P1) {
                    p1count++;
                    point1 = point[p1count]
                }
                continue;
            }
        }

        if ((point1 == 40) && (point2 == 40)) {
            if (wins[i] == P2) {


                if (wins[i] == P2) {
                    p2count++;
                    point2 = point[p2count]
                }
                continue;
            }
        }

        if ((point1 == "A") && point2 == 40) {
            if (wins[i] == P2) {
                p1count--;
                point1 = point[p1count]
                continue;
            }
           
        }

        if ((point1 == 40) && point2 == "A") {
            if (wins[i] == P1) {
                p2count--;
                point2 = point[p2count];
                continue;
            }
            
        }
        if((point1==40) && point2=="A"){
            if(wins[i]==P2){
                return (`${P2} WINS`)
            }
        }

        if((point1=="A") && point2==40){
            if(wins[i]==P1){
                return (`${P1} WINS`)
            }
        }

        if (wins[i] == P1) {
            p1count++;
            point1 = point[p1count]
            if (i == 0) {
                point2 = point[p2count]
            }
        } else if (wins[i] == P2) {
            p2count++;
            point2 = point[p2count]
            if (i == 0) {
                point1 = point[p1count]
            }
        }
    }
    if (point1 == "A") {
        if ([0, 15, 30].includes(point2)) {
            return (`${P1} WINS`)
        }
    }
    if (point2 == "A") {
        if ([0, 15, 30].includes(point1)) {
            return (`${P2} WINS`)
        }
    }
    if (!((point1 == 0 && point2 == 40) || (point1 === 40 && point2 == 40))) {
        if (point1 == point2) {
            return (`${point1}a`)
        }
    }
    if (point1 == 40 && point2 == 40) {
        return (`DEUCE`)
    }
    if ((point1 == "A" && point2 == 40)) {
        return (`${P1} ADVANTAGE`)
    }
    if ((point2 == "A" && point1 == 40)) {
        return (`${P2} ADVANTAGE`)
    }

    return (`${P1} ${point1} = ${P2} ${point2}`)

}

let wins = ["Anna", "Anna", "Anna", "Bob", "Bob", "Bob", "Anna","Bob","Bob","Bob"]
console.log(computerState("Bob", "Anna", wins))
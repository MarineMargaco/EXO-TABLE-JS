var tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var tab1 = [];
var tab2 = [];
var tab3 = [];

for (i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 100);
    tableau.push(random);
}
console.table(tableau);



//CALCUL DE LA PLUS GRANDE VALEUR
function PlusGrandeValeur(tableau) {
    var max = tableau[0];
    for (i = 0; val = tableau[i]; i++) {
        if (val > max) {
            max = val;
        }
    }
    return max;
}
document.write('La plus grande valeur est (' + PlusGrandeValeur(tableau) + ')<BR>');



//CALCUL DE LA PLUS PETITE VALEUR
function PlusPetiteValeur(tableau) {
    var min = tableau[0];
    for (i = 0; val = tableau[i]; i++) {
        if (val < min) {
            min = val;
        }
    }
    return min;
}
document.write('La plus petite valeur est (' + PlusPetiteValeur(tableau) + ')<BR>');



//ADDITION DES VALEURS DU TABLEAU
var somme = 0;
tableau.forEach(function (addition) {
    somme += addition
    return somme;
});
document.write('La somme des valeurs du tableau est égale à (' + somme + ')<BR>');



//CALCUL DE LA MOYENNE
document.write('La moyenne des valeurs du tableau est égale à (' + somme / tableau.length + ')<BR>');


//CLASSEMENT
for (i = 0; i < tableau.length; i++) {
    if (tableau[i] <= 10) {
        tab1.push(tableau[i]);
    } else {
        tab2.push(tableau[i]);
    }
};
console.table(tab1);
console.table(tab2);



//TRIE DES TABLEAUX
tab1.sort(function (a, b) {
    return a - b;
});
console.table(tab1);

tab2.sort(function (a, b) {
    return a - b;
});
console.table(tab2);


//CONCATENATION
tab3 = tab1.concat(tab2);
console.table(tab3);


//SUPPRIMER TOUTES LES VALEURS DE TABLEAU AVEC FOR
for (j = tableau.length; j > 0; j--) {
    tableau.pop();
}
console.log(tableau);


//SUPPRIMER TOUTES LES VALEURS DE TAB1 AVEC WHILE
while (tab1.length != 0) {
    tab1.pop(tab1[0]);
}
console.log(tab1);



//SUPPRIMER TOUTE LES VALEURS DE TAB2 AVEC DO ... WHILE
var v = tab2.length;
do {
    tab2.pop();
    v--;
} while (v > 0);
console.log(tab2);
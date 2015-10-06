(function() {
    var workDays = window.workDays = [];

    // Jour 1 : Lundi 13
    workDays[13] = {
      count: 0,        // Valeur de début de journée
      final: 173844,   // Valeur de fin de journée
      duration: 129600 // Durée totale
    };

    // Jour 2 : Mardi 14
    workDays[14] = {
      count: 173844,
      final: 352572,
      duration: 129600
    };

    // Jour 3: Mercredi 15
    workDays[15] = {
      count: 352572,
      final: 547800,
      duration: 129600,
    };

    // Jour 4: Jeudi 16
    workDays[16] = {
      count: 547800,
      final: 707916,
      duration: 129600
    };

    // Jour 5: Vendredi 17
    workDays[17] = {
      count: 707916,
      final: 707916,
      duration: 129600
    };

})();
/*
    Durée :
        Correspond au paramètre 'duration' pour chaque jour.
        1 heure = 14400

    Compteur :
        Correspond au paramètre 'count' pour chaque jour.
        Pour connaitre la bonne valeur :
        - On prend la valeur de fin de journée (correspondante au 'final' de chaque jour)
        - On la divise par le nombre d'heures totales (soit 9 heures) (Ex: Jour1: 173844 % 9)
        - On multiplie le résultat par le nombre d'heures restantes (Ex: Jour1: pour 4 heures restantes : ((173844 % 9) x 4) = 77264)

    Si je veux faire reprendre mon compteur 4 heures avant la fin du jour 1, je modifie les valeurs correspondantes comme tel :

    workDays[13] = {
        count: 77264,
        final: 173844,
        duration: 57600
    };

*/

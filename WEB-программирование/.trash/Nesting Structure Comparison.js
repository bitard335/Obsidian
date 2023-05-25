/*
Завершите функцию/метод (в зависимости от языка), чтобы вернуть значение true/ True, когда его аргументом является массив, 
который имеет те же структуры вложенности и ту же соответствующую длину вложенных массивов, что и первый массив.

should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

Для вашего удобства уже объявлена и определена функция 'isArray(o)', 
которая возвращает значение true, если ее аргументом является массив, 
в противном случае значение false.
*/


Array.prototype.sameStructureAs = function (other) {
    function checkStructure(arr1, arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)) {
            if (arr1.length !== arr2.length) {
                return false;
            }
            for (let i = 0; i < arr1.length; i++) {
                if (!checkStructure(arr1[i], arr2[i])) {
                    return false;
                }
            }
        } else {
            if (Array.isArray(arr1) || Array.isArray(arr2)) {
                return false;
            }
        }
        return true;
    }

    return checkStructure(this, other);
};

console.log(Array.prototype.sameStructureAs(other))
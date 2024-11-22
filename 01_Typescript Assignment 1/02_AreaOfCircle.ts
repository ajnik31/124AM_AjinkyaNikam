function Area(radius:number, pi:number=3.14) : number{
    var area = pi * radius* radius;
    return area;
}


var area = Area(5);
console.log("Area of circle is "+area);

export function T_distribution(x:number, dof:number) {
    let resultFx ;
  
          let p1;
          p1=1+((x*x)/dof);
          let p2= Math.pow(p1,(((dof+1)/2)*-1));
          let result= ((gamma(dof+1))
                  /((Math.pow((dof*Math.PI), 0.5)*(gamma(dof))))
                  *(Math.pow((1+((x*x)/dof)),((dof+1)/2))));
          resultFx=p2* result;
  
          resultFx = Math.round((resultFx + Number.EPSILON) * 100000) / 100000;
  
          return resultFx;
  }
  
  function gamma(n:number){
    let r=1;
  
    if((n%2)==0){
        n=n/2;
        for(let i=1; i<=(n-1); i++){
            r=r*i;
        }
    }else{
  
    do{
        n=n-2;
        r=r*n/2;
/*        if(n==2){
            break;
        }*/
    }while(n!=1);
    let pi= Math.PI;
  
  
  
    r=r*(Math.sqrt(pi));
    }
    return r;
  }
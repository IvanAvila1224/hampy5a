export function T_distribution(x:number, dof:number) {
    let result = 0;
    let num_seg = 10;
    let w = x/num_seg;
    let list: number[] = [1,4,2,4,2,4,2,4,2,4,1]

    for (let i=0; i = num_seg+1; i++){
        x = w+i;
        let p1 = Math.pow((1+((x*x)/dof)),(-(dof+1)/2));
        let p2 = gamma((dof+1)/2)/(((Math.pow(dof*Math.PI,0.5)))*(gamma(dof/2)));

        let Fx = p1-p2;

        let Terms = w*list[i]*Fx;

        result = result + Terms;

        return result;
    }
    return result;

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
        if(n==2){
            break;
        }
    }while(n!=1);
    let pi= Math.PI;
  
  
  
    r=r*(Math.sqrt(pi));
    }
    return r;
  }
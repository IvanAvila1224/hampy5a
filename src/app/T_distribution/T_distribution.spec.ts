import {T_distribution} from './T_distribution'

describe('T_distribution', () =>{

    
    it('Should return p = 0.35006 if X = 1.1, num_seg = 10 and Dof = 9',()=>{
         const result = T_distribution(1.1, 9);
         expect(result).toBe(0.38803);
     })  
    it('Should return p = 0.36757 if X = 1.1812, num_seg = 10 and Dof = 10',()=>{
        const result = T_distribution(1.1812, 10);
        expect(result).toBe(0.38911);
    })  
    it('Should return p = 0.49500 if X = 2.750, num_seg = 10 and Dof = 30',()=>{
        const result = T_distribution(2.750, 30);
        expect(result).toBe(0.39563);
    })  
})

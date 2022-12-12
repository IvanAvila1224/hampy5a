import { simpson_rule} from './simpson_rule'

describe('media test suite', () => {
    it('Should return p = 16 if f(x) = 2x, x0=0, x1=4, num_seg=4, dof=0', () => {
        const resultado = simpson_rule("2x",0, 4, 4, 0);
        expect(resultado).toBe(16);
    })

    it('Should return p=0.33333 if f(x) = x*x, x0=0, x1=1, num_seg=4, dof =0', () => {
        const resultado = simpson_rule("x*x",0, 1, 4, 0);
        expect(resultado).toBe(0.33333);
    })

    it('Should return p=1 if f(x) = 1/x, x0=1, x1=4, num_seg=6, dof=0', () => {
        const resultado = simpson_rule("1/x",1, 1, 6, 0);
        expect(resultado).toBe(1);
    })

})
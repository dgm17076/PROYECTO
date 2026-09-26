const {createServer}=require('../src/app');
const store=require('../src/store');
let server,base;
beforeEach(done=>{store.reset();server=createServer().listen(0,()=>{base=`http://127.0.0.1:${server.address().port}`;done()})});
afterEach(done=>server.close(done));
async function req(path,method='GET',data,token){const r=await fetch(base+path,{method,headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:data?JSON.stringify(data):undefined});return {status:r.status,body:await r.json()}}
async function user(){await req('/api/auth/register','POST',{name:'Ana García',email:'ana@test.mx',password:'12345678'});return (await req('/api/auth/login','POST',{email:'ana@test.mx',password:'12345678'})).body}
test('health',async()=>expect((await req('/api/health')).status).toBe(200));
test('registro válido',async()=>expect((await req('/api/auth/register','POST',{name:'Ana',email:'ana@test.mx',password:'12345678'})).status).toBe(201));
test('rechaza registro inválido',async()=>expect((await req('/api/auth/register','POST',{name:'',email:'x',password:'1'})).status).toBe(400));
test('requiere JWT',async()=>expect((await req('/api/donaciones')).status).toBe(401));
test('crea donación con trazabilidad',async()=>{let u=await user();let d=await req('/api/donaciones','POST',{type:'Alimentos',description:'Arroz',quantity:10,centerId:'c1'},u.token);expect(d.status).toBe(201);expect(d.body.donation.donorName).toBe('Ana García');expect(d.body.donation.createdAt).toBeTruthy();expect(d.body.donation.centerName).toBe('Centro Norte');expect(d.body.donation.id).toMatch(/^DON-/)});
test('propietario cancela registrada',async()=>{let u=await user();let d=await req('/api/donaciones','POST',{type:'Ropa',quantity:3,centerId:'c2'},u.token);let c=await req(`/api/donaciones/${d.body.donation.id}/cancelar`,'PATCH',{},u.token);expect(c.status).toBe(200);expect(c.body.donation.status).toBe('Cancelada')});
test('usuario no accede a reporte admin',async()=>{let u=await user();expect((await req('/api/reportes/resumen','GET',null,u.token)).status).toBe(403)});
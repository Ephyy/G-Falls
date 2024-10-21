
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('notas').del();
  await knex('users').del();

  // Inserts seed entries for Users
  await knex('users').insert([
    {
      username: 'admin',
      password: 'admin',
      nombre: 'admin',
      nombre_completo: 'admin',
      iniciales: 'AD',
      cargo: 'administrador',
      avatar: 'https://i.pinimg.com/736x/a7/ba/9e/a7ba9e0929f4215c00b13538b5928f33.jpg'
    },
    {
      username: 'ephy',
      password: 'ephy',
      nombre: 'Ephy',
      nombre_completo: 'Ardiles Silva, Vicente Alejandro',
      iniciales: 'VA',
      cargo: 'estudiante',
      avatar: null
    },
    {
      username: 'ephy2',
      password: 'ephy2',
      nombre: 'Ephy 2',
      nombre_completo: 'A S, Ephy',
      iniciales: 'EP',
      cargo: 'estudiante',
      avatar: null
    }
  ]);

  // Inserts seed entries for Notas
  await knex('notas').insert([
    { user_id: 2, nota: '6.5', observacion: 'Mensaje Ephy' },
    { user_id: 3, nota: '5.5', observacion: 'Mensaje Ephy2' }
  ]);
}
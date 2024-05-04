<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Eric Daniel',
                'surname' => 'Mena García',
                'email' => 'menaericdaniel@gmail.com',
                "photo" => 'pr_mena_eric.png',
                'dni' => '92856678',
                'password' => bcrypt('123123'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 1,
                'visible' => true
            ],
            [
                'name' => 'Alberto',
                'surname' => 'Cárdenas Ríos',
                'email' => 'albertocardenasrios@ibmepa.com',
                "photo" => 'pr_cardenas_alberto.png',
                'dni' => '18757405',
                'password' => bcrypt('18757405'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 2,
                'visible' => true
            ],
            [
                'name' => 'Roberto Raúl',
                'surname' => 'Moyes',
                'email' => 'robertoraulmoyes@ibmepa.com',
                "photo" => 'pr_moyes_roberto.png',
                'dni' => '23428776',
                'password' => bcrypt('23428776'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 3,
                'visible' => true
            ],
            [
                'name' => 'Norberto',
                'surname' => 'Herrera',
                'email' => 'norbertoherrera@ibmepa.com',
                "photo" => 'pr_herrera_norberto.png',
                'dni' => '10592391',
                'password' => bcrypt('10592391'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 3,
                'visible' => true
            ],
            [
                'name' => 'Vicente',
                'surname' => 'Pizarro',
                'email' => 'vicentepizarro@ibmepa.com',
                "photo" => 'pr_pizarro_vicente.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Ruben',
                'surname' => 'Garay',
                'email' => 'rubengaray@ibmepa.com',
                "photo" => 'pr_garay_ruben.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'José Luis',
                'surname' => 'Tapia',
                'email' => 'joseluistapia@ibmepa.com',
                "photo" => 'pr_tapia_jose.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Luis',
                'surname' => 'Catril',
                'email' => 'luiscatril@ibmepa.com',
                "photo" => 'pr_catril_luis.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Julio',
                'surname' => 'Pistagnesi',
                'email' => 'juliopistagnesi@ibmepa.com',
                "photo" => 'pr_pistagnesi_julio.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Mario',
                'surname' => 'Herrera',
                'email' => 'marioherrera@ibmepa.com',
                "photo" => 'pr_herrera_mario.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Roberto',
                'surname' => 'Ojeda',
                'email' => 'robertoojeda@ibmepa.com',
                "photo" => 'pr_ojeda_roberto.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Gustavo',
                'surname' => 'Mardones',
                'email' => 'gustavomardones@ibmepa.com',
                "photo" => 'pr_mardones_gustavo.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Sergio',
                'surname' => 'Navarrete',
                'email' => 'sergionavarrete@ibmepa.com',
                "photo" => 'pr_navarrete_sergio.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 4,
                'visible' => true
            ],
            [
                'name' => 'Daniel',
                'surname' => 'Cogote',
                'email' => 'danielcogote@ibmepa.com',
                "photo" => 'pr_cogote_daniel.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Sergio',
                'surname' => 'Gonzalez',
                'email' => 'sergiogonzalez@ibmepa.com',
                "photo" => 'pr_gonzalez_sergio.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Eduardo',
                'surname' => 'Zelada',
                'email' => 'eduardozelada@ibmepa.com',
                "photo" => 'pr_zelada_eduardo.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Leonidas',
                'surname' => 'Luna',
                'email' => 'leonidasluna@ibmepa.com',
                "photo" => 'pr_luna_leonidas.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Ricardo',
                'surname' => 'Pilchuman',
                'email' => 'ricardopilchuman@ibmepa.com',
                "photo" => 'pr_pilchuman_ricardo.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Isaias',
                'surname' => 'Avecilla',
                'email' => 'isaiasavecilla@ibmepa.com',
                "photo" => 'pr_avecilla_isaias.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Manuel',
                'surname' => 'Gonzalez',
                'email' => 'manuelgonzalez@ibmepa.com',
                "photo" => 'pr_gonzalez_manuel.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Domingo',
                'surname' => 'Obregon',
                'email' => 'domingoobregon@ibmepa.com',
                "photo" => 'pr_obregon_domingo.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Daniel',
                'surname' => 'Huaiquillan',
                'email' => 'danielhuaiquillan@ibmepa.com',
                "photo" => 'pr_huaiquillan_daniel.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Jorge',
                'surname' => 'comigual',
                'email' => 'jorgecomigual@ibmepa.com',
                "photo" => 'pr_comigual_jorge.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Fabian',
                'surname' => 'Aravena',
                'email' => 'fabianaravena@ibmepa.com',
                "photo" => 'pr_aravena_fabian.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Alejandro',
                'surname' => 'Azocar',
                'email' => 'alejandroazocar@ibmepa.com',
                "photo" => 'pr_azocar_alejandro.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Nery',
                'surname' => 'Vera',
                'email' => 'neryvera@ibmepa.com',
                "photo" => 'pr_vera_nery.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Claudio',
                'surname' => 'Muñoz',
                'email' => 'claudiomuñoz@ibmepa.com',
                "photo" => 'pr_muñoz_claudio.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Isaias',
                'surname' => 'Ubilla',
                'email' => 'isaiasubilla@ibmepa.com',
                "photo" => 'pr_ubilla_isaias.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Victor',
                'surname' => 'Cabero',
                'email' => 'victorcabero@ibmepa.com',
                "photo" => 'pr_cabero_victor.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Julio',
                'surname' => 'Poblete',
                'email' => 'juliopoblete@ibmepa.com',
                "photo" => 'pr_poblete_julio.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ],
            [
                'name' => 'Javier',
                'surname' => 'Comigual',
                'email' => 'javiercomigual@ibmepa.com',
                "photo" => 'pr_comigual_javier.png',
                'dni' => '12345678',
                'password' => bcrypt('12345678'),
                'bio' => 'Pastor Evangélico',
                'role_id' => 5,
                'visible' => true
            ]
        ]);
    }
}

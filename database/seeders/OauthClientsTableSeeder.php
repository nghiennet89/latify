<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OauthClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * php artisan db:seed --class=OauthClientsTableSeeder
     *
     * @return void
     */
    public function run()
    {
        $date = date('Y-m-d H:i:s');
        // oauth_clients table
        $oauth_clients = [
            [
                'id'                     => 1,
                'name'                   => 'Latify Personal Access Client',
                'secret'                 => 'Ar7IaYao1s96AA1gT2kRgW6oIf3UXLcdynH5394V',
                'redirect'               => env('APP_URL'),
                'personal_access_client' => 1,
                'password_client'        => 0,
                'revoked'                => 0,
                'created_at'             => $date,
                'updated_at'             => $date,
            ],
            [
                'id'                     => 2,
                'name'                   => 'Latify Password Grant Client',
                'secret'                 => 'r4NpgjHKQtVz5VziuBsi5yflRXp6IgA3dAXVziVq',
                'redirect'               => env('APP_URL'),
                'personal_access_client' => 0,
                'password_client'        => 1,
                'revoked'                => 0,
                'created_at'             => $date,
                'updated_at'             => $date,
            ],
        ];
        DB::table('oauth_clients')->insert($oauth_clients);

        // oauth_personal_access_clients table
        $oauth_personal_access_clients = [
            [
                'id'         => 1,
                'client_id'  => 2,
                'created_at' => $date,
                'updated_at' => $date,
            ],
        ];
        DB::table('oauth_personal_access_clients')->insert($oauth_personal_access_clients);
    }
}

<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 30/03/18
 * Time: 18:40.
 */

namespace App\Exception;

use Exception;

class PokemonAlreadyExistsException extends Exception
{
    const MESSAGE = 'A pokemon with name %s already exists';

    public function __construct(string $name)
    {
        parent::__construct(sprintf(self::MESSAGE, $name));
    }
}

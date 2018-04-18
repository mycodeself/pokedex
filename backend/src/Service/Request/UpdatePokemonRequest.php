<?php

namespace App\Service\Request;

/**
 * Class UpdatePokemonRequest.
 */
class UpdatePokemonRequest extends CreatePokemonRequest
{
    /**
     * @var int
     */
    private $id;

    /**
     * UpdatePokemonRequest constructor.
     *
     * @param int $id
     */
    public function __construct(
        int $id,
        string $name,
        string $description,
        string $firstType,
        string $secondType,
        ?int $evolutionId = null
    ) {
        $this->id = $id;
        parent::__construct(
            $name,
            $description,
            $firstType,
            $secondType,
            $evolutionId
        );
    }

    /**
     * @return int
     */
    public function id(): int
    {
        return $this->id;
    }

    /**
     * @param array $data
     */
    public static function fromArray(array $data)
    {
        return new static (
            isset($data['id']) ? (int) $data['id'] : 0,
            isset($data['name']) ? $data['name'] : '',
            isset($data['description']) ? $data['description'] : '',
            isset($data['firstType']) ? $data['firstType'] : '',
            isset($data['secondType']) ? $data['secondType'] : '',
            isset($data['evolutionId']) ? (int) $data['evolutionId'] : 0
        );
    }
}
